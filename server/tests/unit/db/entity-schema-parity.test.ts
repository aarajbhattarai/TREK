import { ReferenceKind, type EntityMetadata, type EntityProperty } from '@mikro-orm/core';
import type Database from 'better-sqlite3';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { ALL_ENTITIES } from '../../../src/db/entities';
import { createSnapshotTestDb } from '../../helpers/db-mock';
import { createTestOrm, type TestOrm } from '../../helpers/test-orm';

/**
 * The blocking entry gate for Plan 2 (the entity rewrite, see
 * docs/superpowers/plans/2026-09-22-orm-phase2-entity-rewrite.md, Task 0):
 * every entity's MikroORM metadata must describe exactly the schema the
 * migrations built, column for column. `orm.schema.getUpdateSchemaSQL()` was
 * tried first and rejected — on SQLite it produces 883 statements of pure
 * naming-convention noise (index names, `__temp_alter` table rebuilds), which
 * the MikroORM docs (7.2, schema comparator) say not to use as a test. This
 * compares `PRAGMA table_info(<table>)` against `getMetadata().getAll()`
 * column by column instead, which is precise: on today's entities it reports
 * exactly 24 tables with issues, of which only 4 are real drifts (fixed
 * alongside this test) and the rest is type-name spelling MikroORM's SQLite
 * platform leaves abstract (`double`, `json` — see `normaliseColumnType`
 * below) plus 5 tables Plan 2 Task 3 still has to add entities for.
 */

const testDb = createSnapshotTestDb();
let t: TestOrm;

beforeAll(async () => {
  t = await createTestOrm(testDb);
});

afterAll(async () => {
  await t.close();
  testDb.close();
});

/**
 * Tables with no entity yet. Plan 2 Task 0 named the 5 document-sync tables
 * here; Task 3 added their entities (`DocumentProviders`,
 * `DocumentProviderFields`, `DocumentConnections`, `TripDocumentLinks`,
 * `DocumentSyncItems`), so the set is empty. PARITY-007's "every db table
 * has an entity" assertion reports anything listed here as expected missing
 * instead of failing on it; PARITY-008 fails the moment a listed table
 * actually gains an entity, so a future author has to empty this set again
 * rather than silently leaving a stale entry behind.
 */
const ENTITIES_STILL_MISSING: string[] = [];

interface DbColumn {
  cid: number;
  name: string;
  type: string;
  notnull: number;
  dflt_value: string | null;
  pk: number;
}

/** Tables SQLite itself creates (`sqlite_sequence` for AUTOINCREMENT bookkeeping) — never a domain table, never an entity. */
function dbTables(db: Database.Database): Set<string> {
  const rows = db
    .prepare(`SELECT name FROM sqlite_master WHERE type = 'table' AND name NOT LIKE 'sqlite_%'`)
    .all() as { name: string }[];
  return new Set(rows.map((r) => r.name));
}

function tableInfo(db: Database.Database, table: string): DbColumn[] {
  return db.prepare(`PRAGMA table_info("${table}")`).all() as DbColumn[];
}

/**
 * Spells a column type the way both sides can agree on. MikroORM's SQLite
 * platform normalises most abstract type names to their real SQLite storage
 * class (`boolean` -> `integer`, `string` -> `text`) but leaves a few as the
 * ORM's own abstract name because it never overrides the base `Platform`
 * declaration for them (`getDoubleDeclarationSQL`, `getJsonDeclarationSQL` —
 * verified against `node_modules/@mikro-orm/sql/dialects/sqlite/SqlitePlatform.js`
 * and `node_modules/@mikro-orm/core/platforms/Platform.js`), so those need an
 * explicit map. `varchar` only ever appears on the db side (the hand-written
 * migration SQL for `migrations.name`); the entity's `p.string()` already
 * reports `text` on SQLite.
 */
function normaliseColumnType(type: string): string {
  const stripped = type.trim().toLowerCase().replace(/\(\d+(,\s*\d+)?\)/, '');
  if (stripped === 'double') return 'real';
  if (stripped === 'varchar' || stripped === 'json') return 'text';
  return stripped;
}

/**
 * `datetime` and `text` are accepted as equal in either direction: a
 * `DbTimestampType` column reports `datetime` (SQLite's
 * `getDateTimeTypeDeclarationSQL`), and every migration that created a
 * timestamp column also declared it `DATETIME`, so in practice both sides
 * already say `datetime` — but a future entity or migration is free to spell
 * a timestamp column `TEXT` (SQLite gives it the same storage class either
 * way), and that must not be a drift.
 */
function columnTypesEqual(entityType: string, dbType: string): boolean {
  const a = normaliseColumnType(entityType);
  const b = normaliseColumnType(dbType);
  if (a === b) return true;
  const datetimeTextPair = new Set([a, b]);
  return datetimeTextPair.has('datetime') && datetimeTextPair.has('text');
}

/** A property this test holds against the migrated schema: it owns a real, persisted column. */
function isPersistedColumnProperty(prop: EntityProperty): boolean {
  if (prop.persist === false) return false;
  if (prop.kind === ReferenceKind.ONE_TO_MANY || prop.kind === ReferenceKind.MANY_TO_MANY) return false;
  if (prop.kind === ReferenceKind.EMBEDDED) return false;
  if (prop.kind === ReferenceKind.ONE_TO_ONE && !prop.owner) return false;
  return true;
}

/**
 * MikroORM flags a declared `pivotEntity` (`PackingItemContributors`, which
 * carries `status`/`created_at` payload columns) with `pivotTable: true` just
 * like the synthetic pivots it invents for a bare `manyToMany`. Only the
 * synthetic ones have no class of their own — a declared pivot entity is a
 * real table-backed entity and is held to the schema like any other.
 */
const DECLARED_ENTITY_CLASSES = new Set(ALL_ENTITIES.map((schema) => schema.meta.className));

function isSyntheticPivot(meta: EntityMetadata): boolean {
  return Boolean(meta.pivotTable) && !DECLARED_ENTITY_CLASSES.has(meta.className);
}

/** Entity metadata this test holds against a table: skips MikroORM's own synthetic/non-table entries. */
function isTableBackedMeta(meta: EntityMetadata): boolean {
  return !isSyntheticPivot(meta) && !meta.embeddable && !meta.virtual && !meta.abstract;
}

function tableBackedMetas(): EntityMetadata[] {
  return [...t.orm.getMetadata().getAll().values()].filter(isTableBackedMeta);
}

/** Table names of the SYNTHETIC pivots MikroORM registers for a bare `manyToMany` + `pivotTable` — covered by the owning relation, never their own entity. */
function pivotTableNames(): Set<string> {
  const names = new Set<string>();
  for (const meta of t.orm.getMetadata().getAll().values()) {
    if (isSyntheticPivot(meta)) names.add(meta.tableName);
  }
  return names;
}

describe('entity ↔ migrated-schema parity', () => {
  it('PARITY-001: every entity maps to a table that exists', () => {
    const tables = dbTables(testDb);
    const failures: string[] = [];
    for (const meta of tableBackedMetas()) {
      if (!tables.has(meta.tableName)) {
        failures.push(`${meta.className}: entity table "${meta.tableName}" does not exist in the migrated schema`);
      }
    }
    expect(failures).toEqual([]);
  });

  it('PARITY-002: every persisted property has a matching column', () => {
    const failures: string[] = [];
    for (const meta of tableBackedMetas()) {
      const table = meta.tableName;
      if (!dbTables(testDb).has(table)) continue; // reported by PARITY-001
      const columns = new Map(tableInfo(testDb, table).map((c) => [c.name, c]));
      for (const prop of meta.props) {
        if (!isPersistedColumnProperty(prop)) continue;
        for (const fieldName of prop.fieldNames) {
          if (!columns.has(fieldName)) {
            failures.push(`${table}.${fieldName}: entity property "${meta.className}.${prop.name}" has no db column`);
          }
        }
      }
    }
    expect(failures).toEqual([]);
  });

  it('PARITY-003: column types agree after normalisation', () => {
    const failures: string[] = [];
    for (const meta of tableBackedMetas()) {
      const table = meta.tableName;
      const columns = new Map(tableInfo(testDb, table).map((c) => [c.name, c]));
      for (const prop of meta.props) {
        if (!isPersistedColumnProperty(prop)) continue;
        for (const [i, fieldName] of prop.fieldNames.entries()) {
          const column = columns.get(fieldName);
          if (!column) continue; // reported by PARITY-002
          const entityType = prop.columnTypes[i];
          if (!entityType) {
            failures.push(`${table}.${fieldName}: entity property "${meta.className}.${prop.name}" declares no column type`);
            continue;
          }
          if (!columnTypesEqual(entityType, column.type)) {
            failures.push(`${table}.${fieldName}: entity ${normaliseColumnType(entityType)} vs db ${normaliseColumnType(column.type)}`);
          }
        }
      }
    }
    expect(failures).toEqual([]);
  });

  it('PARITY-004: nullability agrees on every non-primary-key column', () => {
    const failures: string[] = [];
    for (const meta of tableBackedMetas()) {
      const table = meta.tableName;
      const columns = new Map(tableInfo(testDb, table).map((c) => [c.name, c]));
      for (const prop of meta.props) {
        if (!isPersistedColumnProperty(prop)) continue;
        for (const fieldName of prop.fieldNames) {
          const column = columns.get(fieldName);
          if (!column) continue; // reported by PARITY-002
          if (column.pk) continue; // SQLite's INTEGER PRIMARY KEY reports notnull=0 regardless; text PKs are legitimately nullable (no `NOT NULL` in the migration) — confirmed in inputs.md.
          const entityNullable = Boolean(prop.nullable);
          const dbNullable = column.notnull === 0;
          if (entityNullable !== dbNullable) {
            failures.push(`${table}.${fieldName}: nullable entity=${entityNullable} vs db=${dbNullable}`);
          }
        }
      }
    }
    expect(failures).toEqual([]);
  });

  /**
   * Column defaults, now a real gate: Task 2/3's generator rewrite removed
   * every `onCreate(() => new Date())` hook in favour of `DbTimestampType` +
   * `defaultRaw('CURRENT_TIMESTAMP')` (Plan 2's D2), which is what unblocked
   * this test — Task 0 left it `it.skip`'d and report-only with 93 of 994
   * columns "mismatching," all of them that same onCreate-vs-CURRENT_TIMESTAMP
   * gap or a quoting spelling difference carrying no schema information.
   * `normaliseDefault` below folds those spellings together (quote style, a
   * wrapping paren SQLite adds around a non-literal `DEFAULT (expr)` that
   * `PRAGMA table_info` sometimes strips and the generator's own
   * `prop.defaultRaw` sometimes doesn't, `datetime('now')`/`CURRENT_TIMESTAMP`,
   * and `p.boolean()`'s literal `true`/`false` class-field default against
   * SQLite's `0`/`1` — the only boolean column in the schema today,
   * `addons.enabled`). Only real schema drift survives that.
   */
  it('PARITY-005: column defaults agree after normalisation', () => {
    const failures: string[] = [];
    for (const meta of tableBackedMetas()) {
      const table = meta.tableName;
      const columns = new Map(tableInfo(testDb, table).map((c) => [c.name, c]));
      for (const prop of meta.props) {
        if (!isPersistedColumnProperty(prop)) continue;
        for (const fieldName of prop.fieldNames) {
          const column = columns.get(fieldName);
          if (!column) continue;
          const entityDefault = normaliseDefault(prop.defaultRaw ?? (prop.default != null ? String(prop.default) : null));
          const dbDefault = normaliseDefault(column.dflt_value);
          if (entityDefault !== dbDefault) {
            failures.push(`${table}.${fieldName}: default entity=${entityDefault ?? 'null'} vs db=${dbDefault ?? 'null'}`);
          }
        }
      }
    }
    expect(failures).toEqual([]);
  });

  it('PARITY-006: every db column is covered by a persisted property', () => {
    const failures: string[] = [];
    for (const meta of tableBackedMetas()) {
      const table = meta.tableName;
      if (!dbTables(testDb).has(table)) continue; // reported by PARITY-001
      const covered = new Set<string>();
      for (const prop of meta.props) {
        if (!isPersistedColumnProperty(prop)) continue;
        for (const fieldName of prop.fieldNames) covered.add(fieldName);
      }
      for (const column of tableInfo(testDb, table)) {
        if (!covered.has(column.name)) {
          failures.push(`${table}.${column.name}: db column has no entity property (${meta.className})`);
        }
      }
    }
    expect(failures).toEqual([]);
  });

  it('PARITY-007: every db table has an entity, except mikro_orm_migrations, declared pivots and ENTITIES_STILL_MISSING', () => {
    const tables = dbTables(testDb);
    const entityTables = new Set(tableBackedMetas().map((m) => m.tableName));
    const pivots = pivotTableNames();
    const stillMissing = new Set(ENTITIES_STILL_MISSING);
    const failures: string[] = [];
    for (const table of tables) {
      if (table === 'mikro_orm_migrations') continue;
      if (entityTables.has(table)) continue;
      if (pivots.has(table)) continue;
      if (stillMissing.has(table)) continue; // reported separately below
      failures.push(`${table}: db table has no entity and is not in ENTITIES_STILL_MISSING`);
    }
    expect(failures).toEqual([]);
  });

  it('PARITY-008: ENTITIES_STILL_MISSING stays accurate — none of them may already have an entity', () => {
    const entityTables = new Set(tableBackedMetas().map((m) => m.tableName));
    const failures: string[] = [];
    const tables = dbTables(testDb);
    for (const table of ENTITIES_STILL_MISSING) {
      if (!tables.has(table)) failures.push(`${table}: listed in ENTITIES_STILL_MISSING but is not a db table`);
      if (entityTables.has(table)) {
        failures.push(`${table}: has an entity now — remove it from ENTITIES_STILL_MISSING`);
      }
    }
    expect(failures).toEqual([]);
  });

  /**
   * FK targets, against `PRAGMA foreign_key_list` — the plan's second,
   * allow-listed check (Task 0, Step 3), the REFERENCED-COLUMN half. Task 0
   * left the whole check (referenced column + deleteRule + index names)
   * `it.skip`'d and report-only. This half is un-skipped as of Plan 3b
   * interlude A: `RULE11_referencedColumns` (`scripts/generate-entities.ts`)
   * closed the one gap that made it fail — `OauthTokens.client`/
   * `OauthConsents.client` targeted `oauth_clients.id` (the generator's
   * default assumption for an owning to-one relation) instead of the schema's
   * real FK target, the UNIQUE natural key `oauth_clients.client_id`
   * (`Migration20200101012500_oauth_2.ts`). Every other owning relation in
   * the schema already agreed with `PRAGMA foreign_key_list`'s `to` column,
   * `school_holiday_regions.country -> school_holiday_countries.code`
   * included (`code` IS that table's primary key, so the generator's default
   * assumption was already correct there — unchanged by Rule 11, confirmed
   * by this same test). The deleteRule half stays skipped — see
   * `PARITY-009b` immediately below for why and by how many rows.
   */
  it('PARITY-009: FK referenced columns agree with PRAGMA foreign_key_list', () => {
    const failures: string[] = [];
    for (const meta of tableBackedMetas()) {
      const table = meta.tableName;
      const fkRows = testDb.prepare(`PRAGMA foreign_key_list("${table}")`).all() as {
        from: string;
        table: string;
        to: string;
      }[];
      const fkByColumn = new Map(fkRows.map((row) => [row.from, row]));
      for (const prop of meta.props) {
        const isOwningToOne =
          prop.kind === ReferenceKind.MANY_TO_ONE || (prop.kind === ReferenceKind.ONE_TO_ONE && prop.owner);
        if (!isOwningToOne) continue;
        const fieldName = prop.fieldNames[0];
        const fk = fkByColumn.get(fieldName);
        if (!fk) {
          failures.push(`${table}.${fieldName}: entity relation has no matching db foreign key`);
          continue;
        }
        const entityReferencedColumn = prop.referencedColumnNames?.[0];
        if (entityReferencedColumn !== fk.to) {
          failures.push(`${table}.${fieldName}: referencedColumn entity=${String(entityReferencedColumn)} vs db=${fk.to}`);
        }
      }
    }
    expect(failures).toEqual([]);
  });

  /**
   * The deleteRule half of the same check (Task 0, Step 3). Task 0 found
   * deleteRule disagreeing on 11 of 180 owning relations; Task 3's rewrite
   * fixed one of those eleven as a side effect (`school_holiday_regions.
   * country` now has a real, explicit `joinColumn`, so it reports a genuine
   * FK row) and re-ran this check against the other 124 rewritten/added
   * entities, composite-PK relations included (`packing_item_contributors`,
   * `vacay_user_settings`, `document_connections`, `trip_document_links` —
   * their `.entity.ts` source never spells `.deleteRule(...)` on those
   * relations, but MikroORM discovery still resolves the correct rule at
   * runtime, confirmed by running this check, so they are not drift): the
   * count was 10. Plan 3b interlude A's `RULE11_referencedColumns` only
   * touches the referenced COLUMN, never `deleteRule` (`OauthTokens.client`/
   * `OauthConsents.client` already agreed on `deleteRule('cascade')` —
   * unaffected either way), so re-running this exact query still finds
   * **10** disagreements, unchanged: `trip_members.invited_by` entity=set
   * null vs db=no action, `roadtrip_day_tracks.day_id` entity=set null vs
   * db=cascade, `reservation_travelers.reservation_id`/`.user_id` and
   * `assignment_participants.assignment_id`/`.user_id` entity=no action vs
   * db=cascade, `oauth_tokens.parent_token_id` entity=set null vs db=no
   * action, `journey_contributors.user_id` entity=cascade vs db=no action,
   * `budget_settlements.created_by_user_id`/`budget_items.paid_by_user_id`
   * entity=set null vs db=no action. None of these are in this task's scope
   * (or Task 0's/Task 3's); an allow-list would need 10 one-line entries for
   * drift no task so far was asked to fix. Index-name parity looked clean on
   * inspection but was not exhaustively checked either, and stays out of
   * scope here too. Left skipped, with the count pinned above (Plan 4 owns
   * turning this into either fixes or a real allow-list — the number to
   * reconcile against is exactly 10, not "some").
   */
  it.skip('PARITY-009b (report-only, deferred to Plan 4): FK deleteRule agrees — 10 known disagreements, see doc comment', () => {
    const failures: string[] = [];
    for (const meta of tableBackedMetas()) {
      const table = meta.tableName;
      const fkRows = testDb.prepare(`PRAGMA foreign_key_list("${table}")`).all() as {
        from: string;
        table: string;
        on_delete: string;
      }[];
      const fkByColumn = new Map(fkRows.map((row) => [row.from, row]));
      for (const prop of meta.props) {
        const isOwningToOne =
          prop.kind === ReferenceKind.MANY_TO_ONE || (prop.kind === ReferenceKind.ONE_TO_ONE && prop.owner);
        if (!isOwningToOne) continue;
        const fieldName = prop.fieldNames[0];
        const fk = fkByColumn.get(fieldName);
        if (!fk) {
          failures.push(`${table}.${fieldName}: entity relation has no matching db foreign key`);
          continue;
        }
        const entityRule = (prop.deleteRule ?? 'no action').toLowerCase();
        const dbRule = fk.on_delete.toLowerCase();
        if (entityRule !== dbRule) {
          failures.push(`${table}.${fieldName}: deleteRule entity=${entityRule} vs db=${dbRule}`);
        }
      }
    }
    expect(failures).toEqual([]);
  });

  /**
   * D1's own rule (the naming strategy derives the same column from a
   * camelCase or a snake_case property, so a column-level check can never
   * see the difference): every persisted scalar property's name must equal
   * its single column name. Relations are exempt by kind (an owning
   * relation legitimately renames itself away from its column, e.g.
   * `SchoolHolidayRegions.countryRef` + `.joinColumn('country')` — Task 2's
   * rule 5); their FK twin scalars are `kind === SCALAR` and stay covered
   * here. The same test asserts every single-column integer primary key is
   * `autoincrement` in the discovered metadata — Task 2's Rule 3 doesn't
   * spell `.autoincrement()` in the builder chain for every case (relying on
   * `MetadataDiscovery#initAutoincrement`'s own `??= true` default for an
   * integer PK with no explicit value), so nothing until now pinned that the
   * default actually fires. Composite and text primary keys are untouched by
   * design (Task 0/1) and excluded here by construction (more than one
   * primary prop, or a non-integer type).
   */
  it('PARITY-010: persisted scalar property names equal their single column name; integer id PKs are autoincrement', () => {
    const failures: string[] = [];
    for (const meta of tableBackedMetas()) {
      for (const prop of meta.props) {
        const isRelation = prop.kind !== undefined && prop.kind !== ReferenceKind.SCALAR;
        if (isRelation) continue;
        if (prop.persist === false && prop.fieldNames.length === 0) continue; // an embeddable/virtual scalar with no column at all
        if (prop.fieldNames.length !== 1 || prop.name !== prop.fieldNames[0]) {
          failures.push(
            `${meta.className}.${prop.name}: property name does not equal its single column name (fieldNames=${JSON.stringify(prop.fieldNames)})`,
          );
        }
      }
      // A genuinely single-column primary key only — a composite PK (e.g.
      // RoadtripDayBoundaries' PRIMARY KEY (trip_id, day_number)) can have an
      // all-integer shape without ever being SQLite's single-column
      // `INTEGER PRIMARY KEY` rowid alias, so it must never autoincrement;
      // `getPrimaryProps()` must report exactly one prop, unfiltered, before
      // this check applies at all.
      const primaryProps = meta.getPrimaryProps();
      if (primaryProps.length === 1) {
        const pk = primaryProps[0];
        const isIntegerScalarPk =
          (pk.kind === undefined || pk.kind === ReferenceKind.SCALAR) && normaliseColumnType(pk.columnTypes[0] ?? '') === 'integer';
        if (isIntegerScalarPk && pk.autoincrement !== true) {
          failures.push(`${meta.className}.${pk.name}: integer primary key is not autoincrement`);
        }
      }
    }
    expect(failures).toEqual([]);
  });
});

/**
 * Strips SQL string-literal quoting and a single wrapping paren pair (SQLite
 * requires `DEFAULT (expr)` for a non-literal expression in the migration's
 * own DDL; `PRAGMA table_info` and the generator's introspected
 * `prop.defaultRaw` don't always agree on keeping that outer pair), folds
 * SQLite's `CURRENT_TIMESTAMP`/`datetime('now')` spellings together, and
 * folds a `p.boolean()` property's literal `true`/`false` default onto
 * SQLite's `1`/`0` (SQLite has no boolean storage class — see
 * `BOOLEAN_COLUMNS` in `scripts/generate-entities.ts`). Used by PARITY-005.
 *
 * M1 (task-4-review-gates.md): only the SQL keywords/functions above are
 * folded case-insensitively — a quoted string literal's PAYLOAD is data, not
 * a keyword, and is compared verbatim, case included. A blanket
 * `s.toLowerCase()` on the whole string (the previous shape) silently
 * equated `'#10b981'` and `'#10B981'`, proved by the gate reviewer's mutation
 * (d2): flipping `Tags.color`'s class-field default's case left every test
 * green. The entity side and the db side aren't even symmetric about
 * quoting to begin with (`prop.default` arrives as a bare JS string, e.g.
 * `#10b981`; `column.dflt_value` arrives SQL-quoted, `'#10b981'`) — quotes
 * are stripped from whichever side has them, then BOTH sides are compared
 * verbatim, never lowercased, unless they match a known keyword.
 */
function normaliseDefault(value: string | null): string | null {
  if (value == null) return null;
  let s = value.trim();
  if (s.startsWith('(') && s.endsWith(')')) s = s.slice(1, -1).trim();
  if (s.startsWith("'") && s.endsWith("'")) s = s.slice(1, -1); // SQL quoting stripped; payload kept verbatim below
  const lower = s.toLowerCase();
  if (lower === "datetime('now')" || lower === 'current_timestamp') return '__now__';
  if (lower === 'true') return '1';
  if (lower === 'false') return '0';
  return s;
}

describe('normaliseColumnType', () => {
  it('TYPE-001: maps the abstract names MikroORM leaves untranslated on SQLite', () => {
    expect(normaliseColumnType('double')).toBe('real');
    expect(normaliseColumnType('json')).toBe('text');
    expect(normaliseColumnType('varchar')).toBe('text');
  });

  it('TYPE-002: strips a length/precision suffix and lowercases', () => {
    expect(normaliseColumnType('VARCHAR(255)')).toBe('text');
    expect(normaliseColumnType('DECIMAL(10,2)')).toBe('decimal');
    expect(normaliseColumnType('INTEGER')).toBe('integer');
  });

  it('TYPE-003: passes through types that already agree', () => {
    expect(normaliseColumnType('text')).toBe('text');
    expect(normaliseColumnType('real')).toBe('real');
    expect(normaliseColumnType('datetime')).toBe('datetime');
    expect(normaliseColumnType('bigint')).toBe('bigint');
  });
});

describe('normaliseDefault', () => {
  it('DEFAULT-NORM-001: a case-only difference in a quoted string literal payload is a real mismatch (M1)', () => {
    expect(normaliseDefault("'#10b981'")).not.toBe(normaliseDefault("'#10B981'"));
  });

  it('DEFAULT-NORM-002: an identical quoted string literal payload matches, case preserved', () => {
    expect(normaliseDefault("'#10b981'")).toBe(normaliseDefault("'#10b981'"));
    expect(normaliseDefault("'#10b981'")).toBe('#10b981');
  });

  it('DEFAULT-NORM-003: an unquoted default (as PARITY-005 passes the entity side, String(prop.default)) compares verbatim too', () => {
    expect(normaliseDefault('#10B981')).toBe('#10B981');
    expect(normaliseDefault('#10B981')).not.toBe(normaliseDefault("'#10b981'"));
  });

  it('DEFAULT-NORM-004: SQL keyword/function spellings still fold case-insensitively', () => {
    expect(normaliseDefault('CURRENT_TIMESTAMP')).toBe('__now__');
    expect(normaliseDefault('current_timestamp')).toBe('__now__');
    expect(normaliseDefault("datetime('now')")).toBe('__now__');
    expect(normaliseDefault("DATETIME('NOW')")).toBe('__now__');
    expect(normaliseDefault('TRUE')).toBe('1');
    expect(normaliseDefault('FALSE')).toBe('0');
  });

  it('DEFAULT-NORM-005: a wrapping paren pair around a non-literal expression is stripped once', () => {
    expect(normaliseDefault("(strftime('%s','now'))")).toBe("strftime('%s','now')");
  });

  it('DEFAULT-NORM-006: null passes through as null', () => {
    expect(normaliseDefault(null)).toBeNull();
  });
});

describe('columnTypesEqual', () => {
  it('TYPE-004: accepts datetime on one side and text on the other, either direction', () => {
    expect(columnTypesEqual('datetime', 'text')).toBe(true);
    expect(columnTypesEqual('text', 'datetime')).toBe(true);
    expect(columnTypesEqual('DATETIME', 'TEXT')).toBe(true);
  });

  it('TYPE-005: still rejects a genuine mismatch', () => {
    expect(columnTypesEqual('integer', 'text')).toBe(false);
    expect(columnTypesEqual('real', 'integer')).toBe(false);
  });
});
