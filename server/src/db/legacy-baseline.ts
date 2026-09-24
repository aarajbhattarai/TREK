import type { Connection, MigrationInfo } from '@mikro-orm/core';
import type { Migrator } from '@mikro-orm/migrations';

import fs from 'node:fs';

/**
 * Upgrading an install the retired hand-written runner migrated.
 *
 * Before MikroORM owned the schema, `db/migrations.ts` applied a positional
 * array of steps and recorded how far it got as the single `schema_version`
 * row. Such a database has no `mikro_orm_migrations` rows, so on its first boot
 * here the migrator would see every migration as pending and replay the whole
 * history over a schema that already has it. Eight of those migrations are not
 * replay-safe and refuse the boot; the ones that are replay-safe are worse —
 * step 26 overwrites every user-set `day_assignments.assignment_time`. So the
 * replay must never happen.
 *
 * Instead, a legacy database is baselined once: every migration whose legacy
 * step the database already applied is recorded as executed, and the ordinary
 * migrator run then applies only the rest. The baseline itself (`createTables()`)
 * is deliberately NOT recorded: the legacy runner ran the running release's
 * `createTables()` on every boot before its pending steps, and about thirty
 * tables exist only there (no numbered step creates them), so an install older
 * than those tables gets them the same way — the baseline's `IF NOT EXISTS`
 * DDL runs first, then steps N+1 onwards.
 *
 * The rows are recorded inside the same transaction as the migrator run, so a
 * first boot that fails leaves nothing behind and the next boot baselines again.
 * Anything this cannot map exactly refuses the boot rather than guessing — a
 * refused boot leaves the file untouched, a wrong guess does not.
 */

/**
 * Each migration ported from the positional runner says which step it was in
 * its own docstring. That text is the single source of the mapping — there is
 * no second, hand-kept list to drift from it.
 */
const STEP_MARKER = /Legacy migration step (\d+)\b/g;

const REFUSAL = '[DB] Refusing to boot:';

export interface LegacyStepMap {
  /** The migrations standing for `createTables()`: everything that sorts ahead of step 1. */
  baseline: string[];
  /** Legacy step number → the migration that carries it. */
  steps: Map<number, string>;
  /** The last step the positional runner ever had. */
  finalStep: number;
}

type ReadSource = (path: string) => string;

const readFromDisk: ReadSource = (path) => fs.readFileSync(path, 'utf8');

function stepsNamedIn(migration: MigrationInfo, readSource: ReadSource): number[] {
  if (!migration.path) {
    throw new Error(`${REFUSAL} migration ${migration.name} has no source file to read its legacy step from`);
  }
  const found = new Set<number>();
  for (const match of readSource(migration.path).matchAll(STEP_MARKER)) found.add(Number(match[1]));
  return [...found];
}

/**
 * Derives the legacy step → migration map from the migrations the migrator
 * discovered, in its own application order.
 *
 * Throws unless the mapping is exact: one step per migration at most, no step
 * claimed twice, steps 1..N all present, and applied in step order — the order
 * the positional runner used, which is the only order that reproduces what an
 * install at step N already has.
 */
export function buildLegacyStepMap(
  migrations: readonly MigrationInfo[],
  readSource: ReadSource = readFromDisk,
): LegacyStepMap {
  const steps = new Map<number, string>();
  let previousStep = 0;
  let firstNumbered = -1;
  migrations.forEach((migration, index) => {
    const named = stepsNamedIn(migration, readSource);
    if (named.length === 0) return;
    if (named.length > 1) {
      throw new Error(`${REFUSAL} ${migration.name} names more than one legacy step (${named.join(', ')})`);
    }
    const [step] = named as [number];
    const owner = steps.get(step);
    if (owner) throw new Error(`${REFUSAL} legacy step ${step} is claimed by both ${owner} and ${migration.name}`);
    if (step < previousStep) {
      throw new Error(`${REFUSAL} ${migration.name} (legacy step ${step}) sorts after legacy step ${previousStep}`);
    }
    if (firstNumbered < 0) firstNumbered = index;
    previousStep = step;
    steps.set(step, migration.name);
  });

  const finalStep = steps.size;
  if (finalStep === 0) throw new Error(`${REFUSAL} no migration names a legacy step`);
  for (let step = 1; step <= finalStep; step++) {
    if (!steps.has(step)) throw new Error(`${REFUSAL} no migration carries legacy step ${step}`);
  }
  const baseline = migrations.slice(0, firstNumbered).map((migration) => migration.name);
  if (baseline.length === 0) throw new Error(`${REFUSAL} no baseline migration sorts ahead of legacy step 1`);
  return { baseline, steps, finalStep };
}

/**
 * The step a positional-runner database stopped at, or null when this is not
 * one: a fresh database has no `schema_version`, and one the migrator has
 * already recorded anything in is past the hand-over.
 */
async function legacyVersion(connection: Connection, migrator: Migrator): Promise<number | null> {
  if ((await migrator.getExecuted()).length > 0) return null;
  const table: unknown[] = await connection.execute(
    `SELECT name FROM sqlite_master WHERE type = 'table' AND name = 'schema_version'`,
  );
  if (table.length === 0) return null;

  const rows: Array<{ version: unknown }> = await connection.execute('SELECT version FROM schema_version');
  if (rows.length !== 1) {
    throw new Error(`${REFUSAL} schema_version holds ${rows.length} rows; the legacy runner always kept exactly one`);
  }
  const [{ version }] = rows as [{ version: unknown }];
  if (typeof version !== 'number' || !Number.isInteger(version) || version < 1) {
    throw new Error(`${REFUSAL} schema_version ${String(version)} is not a legacy step this release can map`);
  }
  return version;
}

/**
 * The migrations a positional-runner database already has — steps 1..N, never
 * the baseline (see the file header) — or `[]` for every database that is not
 * one. Writes nothing; {@link migrateToHead} records them.
 */
export async function planLegacyBaseline(
  connection: Connection,
  migrator: Migrator,
  readSource: ReadSource = readFromDisk,
): Promise<string[]> {
  const version = await legacyVersion(connection, migrator);
  if (version === null) return [];

  const map = buildLegacyStepMap(await migrator.getPending(), readSource);
  if (version > map.finalStep) {
    throw new Error(
      `${REFUSAL} schema_version ${version} is newer than the last legacy step this release knows (${map.finalStep})`,
    );
  }

  const executed: string[] = [];
  for (const [step, name] of map.steps) if (step <= version) executed.push(name);
  console.log(`[DB] Legacy install at schema_version ${version} — baselining ${executed.length} migration(s)`);
  return executed;
}

/**
 * Runs every pending migration. On a positional-runner database it first
 * records steps 1..N as executed, in the SAME transaction as the run, so the
 * two commit or roll back together.
 */
export async function migrateToHead(
  connection: Connection,
  migrator: Migrator,
  readSource: ReadSource = readFromDisk,
): Promise<void> {
  const baselined = await planLegacyBaseline(connection, migrator, readSource);
  const already = new Set(baselined);
  const pending = (await migrator.getPending()).filter((migration) => !already.has(migration.name));
  if (pending.length === 0 && baselined.length === 0) return;
  console.log(`[DB] Applying ${pending.length} pending migration(s)`);
  if (baselined.length === 0) {
    await migrator.up();
    return;
  }

  const storage = migrator.getStorage();
  await storage.ensureTable();
  await connection.transactional(async (trx) => {
    for (const name of baselined) await storage.logMigration({ name }, trx);
    await migrator.up({ transaction: trx });
  });
}
