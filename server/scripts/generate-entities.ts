/**
 * Re-runnable entity generator wrapper (ORM migration Plan 2, Task 2).
 *
 * `@mikro-orm/entity-generator` 7.2.1 already produces the Phase 0 shape
 * (`Days`/`DayNotes`/`Trips`, see `docs/superpowers/specs/2026-09-21-orm-repository-migration-design.md`
 * D1/D2) from the migrated schema once configured with a naming strategy whose
 * `columnNameToProperty` is the identity — every scalar and FK twin comes out
 * named exactly like its column. What it does NOT do on its own (verified by
 * reading `node_modules/@mikro-orm/entity-generator/*.js` and by running this
 * wrapper against the real schema, not by assumption):
 *
 *   - it leaves multi-word relation names snake_case and inverse-collection
 *     names camelCase (the opposite of what Phase 0 does for each);
 *   - it never marks a relation `.hidden()`;
 *   - it emits `p.datetime()` / `p.unknown().columnType('REAL')` instead of
 *     `p.type(DbTimestampType)` / `p.double()`;
 *   - it leaves `updateRule('no action')` / `deleteRule('no action')` noise
 *     (SQLite reports "NO ACTION" for every FK that never named a rule);
 *   - integer autoincrement primary keys come out `.primary().nullable()`
 *     (SQLite's `PRAGMA table_info` carries no AUTOINCREMENT flag);
 *   - it never binds a `repository:`;
 *   - the "collision class" (an FK column with no `_id` suffix, e.g.
 *     `country`, `created_by`) gets a relation named after the column AND a
 *     same-named scalar twin — colliding — and even once renamed, the
 *     generator's own override mechanism for a to-one relation only ever
 *     emits `.name(<column>)`, which Task 0/1 proved is inert for a relation
 *     (`.joinColumn(<column>)` is the only thing that actually pins the FK
 *     column; see `.superpowers/sdd/2026-09-22-orm-phase2-entity-rewrite/task-0-report.md`
 *     and `task-1-report.md`, fact (c)).
 *
 * Each gap above is closed by a single named rule function, applied either at
 * the metadata level (`onProcessedMetadata`, preferred — the MikroORM-
 * documented hook for this exact purpose) or, only where the metadata cannot
 * carry the fix into the rendered `defineEntity` call (traced against the
 * actual renderer in `SourceFile.js`/`DefineEntitySourceFile.js`, not
 * guessed), as a small text pass over the generated source. See
 * `task-2-report.md` for which rule lives at which level and why.
 *
 * This script never writes into `src/db/entities/` on its own — `--write` is
 * accepted (Task 3 uses it) but this task never passes it. It never opens
 * `data/travel.db` either: it migrates a throwaway temp file (via the same
 * `Migrator` extension `buildApp()` uses, configured directly rather than by
 * importing `src/db/orm.ts` — that module transitively imports
 * `src/db/database.ts`, which opens `resolveDbPath()` — i.e. the real
 * database file — as a side effect of being imported at all).
 *
 * Usage:
 *   node --import tsx scripts/generate-entities.ts --out <dir>
 *   node --import tsx scripts/generate-entities.ts --write   # Task 3 only
 */

import crypto from 'node:crypto';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

import {
  ReferenceKind,
  UnderscoreNamingStrategy,
  type EntityMetadata,
  type EntityProperty,
  type ImportsResolver,
  type Platform,
} from '@mikro-orm/core';
import { EntityGenerator } from '@mikro-orm/entity-generator';
import { Migrator } from '@mikro-orm/migrations';
import { MikroORM as SqliteMikroORM } from '@mikro-orm/sqlite';

// ---------------------------------------------------------------------------
// Paths
// ---------------------------------------------------------------------------

/** `server/` — every relative path below (migrations, repositories, entities) is anchored here. */
const SERVER_ROOT = path.join(__dirname, '..');
const ENTITIES_DIR = path.join(SERVER_ROOT, 'src/db/entities');
const REPOSITORIES_DIR = path.join(SERVER_ROOT, 'src/db/repositories');

// ---------------------------------------------------------------------------
// Naming strategy — D1: scalars and FK twins are named exactly like their
// column (`day_id`, `sort_order`), never camelCased. Only `columnNameToProperty`
// is overridden; table names and everything else (`classToTableName`,
// `joinKeyColumnName`, `inverseSideName`, `manyToManyPropertyName`, …) stay the
// stock `UnderscoreNamingStrategy` behaviour, which is what lets the renamed
// relations below still compute the *same* FK column the schema already has
// (see RULE5_renameOwningRelations).
// ---------------------------------------------------------------------------
export class SnakeProps extends UnderscoreNamingStrategy {
  override columnNameToProperty(column: string): string {
    return column;
  }
}

// ---------------------------------------------------------------------------
// KNOWN_DIFFS — the only allowed differences between this wrapper's output
// (into a scratch dir) and the five hand-written reference entities
// (`Days`, `DayNotes`, `Trips`, `BudgetCategoryOrder`, `VacayUserSettings`).
// Anything else in the diff is a rule bug, not an entry to add here.
// ---------------------------------------------------------------------------
export const KNOWN_DIFFS = `
1. Index duplicated onto the FK twin. The generator carries a relation's named
   index (".index('idx_days_trip_id')") onto BOTH the owning relation AND its
   persist(false) scalar twin; the hand-written files only ever declare it on
   the relation. Harmless (SQLite would just create the same index once) —
   verified against the actual generated output, not assumed.
2. Class-field TS annotation on an integer autoincrement primary key. The
   hand-written files declare it "id?: number | null;" as an ergonomic hint
   (you can build the entity before an id is assigned); the generator's own
   renderer ties both the "?" and the "| null" suffix to metadata property
   "nullable" (see SourceFile.js#getPropertyDefinition), and rule 3 below sets
   nullable=false on this exact property so the metadata BUILDER CHAIN has no
   stray ".nullable()" (matching the reference's *metadata*, which is what the
   parity tests and the ORM itself read) — at the cost of the class field
   rendering "id!: number & Opt;" instead (and the resulting "type Opt" import).
   Purely a TypeScript-side annotation; it does not change runtime behaviour,
   hydration, or the metadata the schema parity test compares. Confirmed by
   generating the real schema, not assumed.
3. Method-call order within a builder chain (e.g. ".deleteRule('cascade').hidden().index(...)"
   vs the hand-written files' ".hidden().deleteRule('cascade').index(...)").
   The renderer assembles each property's options in its OWN fixed sequence
   (kind-specific options — fieldName/deleteRule/updateRule/primary/generated —
   then common flags — nullable/hidden/etc. — then index/unique), which the
   hand-written files, authored before this generator produced this shape, did
   not follow. Cosmetic only: every option present is the same, only the
   textual order of independent chained calls differs.
4. "defaultRaw" renders as a backtick template literal ("\`CURRENT_TIMESTAMP\`")
   rather than a single-quoted string ("'CURRENT_TIMESTAMP'"). SourceFile.js's
   own renderer always uses a template literal for defaultRaw specifically (so
   raw SQL containing "\${" is escaped rather than interpolated) — the
   hand-written files predate this generator and used a plain string.
   Semantically identical TypeScript.
5. A nullable column's DB-level default. Phase 0's own hand-written files are
   not internally consistent about restating a NULLABLE column's default in
   metadata at all: "DayNotes.sort_order" (nullable, "REAL DEFAULT 0") has
   ".default(0)"; "DayNotes.icon" (nullable, "TEXT DEFAULT '📝'") has none
   at all, relying only on the class-field initialiser. The wrapper's default
   rule (RULE_normalizeLiteralDefaults) deliberately scopes itself to NOT
   NULL columns only — see that rule's doc comment — and leaves whatever the
   generator's own (occasionally "defaultRaw" instead of "default", or
   entirely absent) rendering produces for a nullable column. This is exactly
   Task 0's skipped PARITY-005 (column defaults) territory, not this task's.
6. The twin scalar of a hidden PRIMARY relation may carry ".nullable()"
   reflecting genuine PK-column nullability from introspection (SQLite
   reports "notnull=0" for a non-AUTOINCREMENT primary key, same as the text
   PKs inputs.md already documents as parity-correct). "VacayUserSettings.user_id"
   is the one instance among the five reference entities: the hand-written
   file declares it "user_id!: number" (non-nullable) as an editorial choice
   ("since the PK column can never actually be null once a row exists", per
   task-1-report.md) rather than a schema requirement — PARITY-004 explicitly
   excludes PK columns from its nullability check, so this is a judgment
   call Task 3 may revisit per entity, not a drift this wrapper should paper
   over with a guess.
7. Trailing blank line / whitespace at end of file, if any — a generator
   formatting convention, immaterial to the parsed module.
`.trim();

// ---------------------------------------------------------------------------
// JSON columns — SQLite has no JSON storage class, so PRAGMA table_info can
// never tell the generator "this TEXT column is JSON-shaped"; that's always a
// judgement call an entity author made (today: exactly one column in the
// whole schema, `addons.config`, declared `p.json<AddonConfig>()`, grepped
// from src/db/entities). Decision (see task-2-report.md's "JSON-interface
// decision"): the wrapper marks known JSON columns from this table and always
// emits `p.json<unknown>()` — safe, no `any`, no per-column interface
// guessing. A hand-maintained interface (like `AddonConfig`) is not
// reconstructable from the schema; carrying one forward is Task 3's job when
// it reviews that specific entity's diff, not this generic wrapper's.
// ---------------------------------------------------------------------------
export const JSON_COLUMNS: ReadonlySet<string> = new Set(['addons.config']);

// ---------------------------------------------------------------------------
// Rule 1 (metadata level): scalar type mapping.
//
// The naming strategy already makes every scalar/twin property name equal its
// column (no rule needed for that half of D1). What's left is the TYPE: the
// generator leaves a column it can't map cleanly as `p.unknown().columnType(<T>)`.
// On the current schema the only such family is SQLite's REAL affinity
// (MikroORM's SQLite platform never overrides `getDoubleDeclarationSQL`, so it
// stays abstract — confirmed in task-0-report.md while building the parity
// test's own normaliser). Anything else is unexpected: fail loudly, naming the
// column, rather than silently emitting a wrong or lossy type.
// ---------------------------------------------------------------------------
const UNKNOWN_COLUMN_TYPE_MAP: Readonly<Record<string, { type: string; runtimeType: string }>> = {
  real: { type: 'double', runtimeType: 'number' },
};

/**
 * `prop.runtimeType` must move with `prop.type` here, not just the type name.
 * Left stale (introspection sets it to `'unknown'` alongside `type: 'unknown'`),
 * `SourceFile.js#breakdownOfIType` sees `prop.runtimeType !== rawType` (the
 * freshly-retyped `'double'`'s own runtime, `'number'`) and treats that
 * mismatch as genuine type ambiguity — it wraps the class field in
 * `IType<unknown, number>` and, separately, `needsExplicitColumnType()` also
 * disagrees with itself and adds a redundant `.columnType('REAL')`. Both
 * disappear once `runtimeType` is corrected. Confirmed by generating the real
 * schema (`DayNotes.sort_order`) before and after this fix, not assumed.
 */
/** A scalar this run retyped (Rule 1's `p.unknown()` fix or Rule 2's `DbTimestampType`) — its metadata line may carry a redundant `.columnType()` (see below). */
export interface RetypedScalarFixup {
  className: string;
  propName: string;
}

export function RULE1_fixUnknownScalarTypes(metadata: EntityMetadata[]): RetypedScalarFixup[] {
  const fixups: RetypedScalarFixup[] = [];
  for (const meta of metadata) {
    for (const prop of Object.values(meta.properties)) {
      if (prop.kind !== undefined && prop.kind !== ReferenceKind.SCALAR) continue;
      if (prop.type !== 'unknown') continue;
      const columnType = (prop.columnTypes?.[0] ?? '').toLowerCase();
      const mapped = UNKNOWN_COLUMN_TYPE_MAP[columnType];
      if (!mapped) {
        throw new Error(
          `generate-entities: ${meta.tableName}.${prop.fieldNames.join(',')} has an unmapped column type ` +
            `"${prop.columnTypes?.[0]}" (property "${meta.className}.${prop.name}"). Add it to ` +
            'UNKNOWN_COLUMN_TYPE_MAP once you know what it should render as — never guess.',
        );
      }
      prop.type = mapped.type;
      prop.runtimeType = mapped.runtimeType;
      fixups.push({ className: meta.className, propName: prop.name });
    }
  }
  return fixups;
}

/** Rule 1b (metadata level): mark known JSON columns so they render `p.json()` (see JSON_COLUMNS above). */
export function RULE1b_markJsonColumns(metadata: EntityMetadata[]): void {
  for (const meta of metadata) {
    for (const prop of Object.values(meta.properties)) {
      if (prop.kind !== undefined && prop.kind !== ReferenceKind.SCALAR) continue;
      if (!JSON_COLUMNS.has(`${meta.tableName}.${prop.fieldNames[0]}`)) continue;
      prop.type = 'json';
    }
  }
}

// ---------------------------------------------------------------------------
// Rule 2 (metadata level): p.datetime() -> p.type(DbTimestampType).
//
// `prop.type = 'DbTimestampType'` (a plain string that is NOT a key in
// @mikro-orm/core's `types` registry) makes the renderer emit `p.type(DbTimestampType)`
// verbatim (DefineEntitySourceFile#getPropertyBuilder: `!(options.type in types)`
// -> `p.type(${options.type})`), and it auto-adds 'DbTimestampType' to the
// file's entityImports (SourceFile#getScalarPropertyDecoratorOptions,
// isTypeStringMissingFromMap branch) — the IMPORT PATH for that identifier
// (`../types`) is resolved by the onImport hook below, also metadata/config
// level, not a text pass. `.nullable()`/`.defaultRaw(...)` come from the
// already-introspected `prop.nullable`/`prop.defaultRaw` and need no rule;
// introspection never invents an `onCreate` hook (there is nothing in a
// PRAGMA to discover one from), so "never onCreate" needs no enforcement here.
// ---------------------------------------------------------------------------
/** A scalar this run retyped to `DbTimestampType` — the class field's type still needs a text fix (see below). */
export type TimestampFixup = RetypedScalarFixup;

export function RULE2_datetimeToDbTimestampType(metadata: EntityMetadata[]): TimestampFixup[] {
  const fixups: TimestampFixup[] = [];
  for (const meta of metadata) {
    for (const prop of Object.values(meta.properties)) {
      if (prop.kind !== undefined && prop.kind !== ReferenceKind.SCALAR) continue;
      if (prop.type !== 'datetime') continue;
      prop.type = 'DbTimestampType';
      fixups.push({ className: meta.className, propName: prop.name });
    }
  }
  return fixups;
}

// ---------------------------------------------------------------------------
// Rule 3 (metadata level): integer `id` PK -> p.integer().primary().autoincrement().
//
// All 122 integer PKs in the migrations are AUTOINCREMENT (inputs.md), but
// SQLite's PRAGMA table_info carries no such flag, so the generator always
// emits `.primary().nullable()` for one. `nullable = false` is what removes
// the stray `.nullable()` from the metadata BUILDER CHAIN (SourceFile's
// getCommonDecoratorOptions emits `.nullable()` whenever `prop.nullable` is
// true, unconditionally) — the one place this creates a *textual*, not
// semantic, difference from the hand-written files is documented as
// KNOWN_DIFFS #2 above. Composite and text PKs are untouched, per the plan
// ("`.nullable()` on text PKs is parity-correct — keep").
// ---------------------------------------------------------------------------
export function RULE3_integerPkAutoincrement(metadata: EntityMetadata[]): void {
  for (const meta of metadata) {
    if (meta.getPrimaryProps().length !== 1) continue; // composite PK — untouched
    const [pk] = meta.getPrimaryProps();
    if (pk.kind !== undefined && pk.kind !== ReferenceKind.SCALAR) continue; // a relation PK — untouched
    const columnType = (pk.columnTypes?.[0] ?? '').toLowerCase();
    if (columnType !== 'integer') continue; // a text PK — untouched
    pk.autoincrement = true;
    pk.nullable = false;
  }
}

// ---------------------------------------------------------------------------
// Rule 4 (metadata level): every relation, owning and inverse, any kind, hidden().
// ---------------------------------------------------------------------------
export function RULE4_hideAllRelations(metadata: EntityMetadata[]): void {
  for (const meta of metadata) {
    for (const prop of meta.relations) {
      prop.hidden = true;
    }
  }
}

function isOwningToOne(prop: EntityProperty): boolean {
  if (prop.kind === ReferenceKind.MANY_TO_ONE) return true;
  return prop.kind === ReferenceKind.ONE_TO_ONE && !prop.mappedBy;
}

function isInverseSide(prop: EntityProperty): boolean {
  if (prop.kind === ReferenceKind.ONE_TO_MANY) return true;
  if (prop.kind === ReferenceKind.ONE_TO_ONE && !!prop.mappedBy) return true;
  if (prop.kind === ReferenceKind.MANY_TO_MANY && !!prop.mappedBy) return true;
  return false;
}

function toCamelCase(snake: string): string {
  return snake.replace(/_([a-z0-9])/g, (_m, c: string) => c.toUpperCase());
}

function toSnakeCase(camel: string): string {
  return camel.replace(/([a-z0-9])([A-Z])/g, '$1_$2').toLowerCase();
}

/** A collision-class relation this run renamed: needs an explicit `.joinColumn()` text fix. */
export interface JoinColumnFixup {
  className: string;
  propName: string;
  column: string;
}

/**
 * Rule 5 (metadata level for the rename; text level for the join column — see
 * task-2-report.md "rule 5"): owning relation property name = camelCase of
 * (column minus a trailing `_id`). A "collision class" column (no `_id`
 * suffix: `created_by`, `country`, … — the FK twin would otherwise be named
 * identically to the relation) gets `<camel>Ref` instead, and — because the
 * renderer for a to-one relation only ever knows how to emit `.name(<column>)`
 * as an override, which Task 0/1 proved does not actually pin the FK column —
 * this function also records the (className, newPropName, column) triple for
 * `injectJoinColumns` to turn into an explicit `.joinColumn(<column>)` in the
 * generated text afterwards.
 *
 * Every inverse `mappedBy` across the whole metadata array that pointed at
 * the OLD owning name is fixed up to the new one in the same pass (mappedBy
 * is a plain string on the inverse side; nothing else references an owning
 * relation by name).
 */
export function RULE5_renameOwningRelations(metadata: EntityMetadata[]): JoinColumnFixup[] {
  const fixups: JoinColumnFixup[] = [];
  const renames = new Map<EntityMetadata, Map<string, string>>(); // meta -> oldName -> newName

  for (const meta of metadata) {
    const renameMap = new Map<string, string>();
    for (const prop of [...meta.relations]) {
      if (!isOwningToOne(prop)) continue;
      if (prop.fieldNames.length !== 1) continue; // composite FK — out of scope, left untouched (see report)
      const column = prop.fieldNames[0];
      const isCollisionClass = !column.endsWith('_id');
      const stripped = isCollisionClass ? column : column.slice(0, -'_id'.length);
      const newName = isCollisionClass ? `${toCamelCase(stripped)}Ref` : toCamelCase(stripped);
      if (newName === prop.name) continue;
      if (meta.properties[newName]) {
        throw new Error(
          `generate-entities: renaming ${meta.className}.${prop.name} to "${newName}" would collide with an ` +
            `existing property of that name. Column: ${column}.`,
        );
      }
      const oldName = prop.name;
      meta.removeProperty(oldName, false);
      prop.name = newName;
      meta.addProperty(prop);
      renameMap.set(oldName, newName);
      if (isCollisionClass) {
        fixups.push({ className: meta.className, propName: newName, column });
      }
    }
    if (renameMap.size > 0) renames.set(meta, renameMap);
  }

  // Fix up every inverse `mappedBy` that pointed at a renamed owning property.
  for (const meta of metadata) {
    for (const prop of meta.relations) {
      if (!prop.mappedBy) continue;
      const targetMeta = metadata.find((m) => m.className === prop.type);
      if (!targetMeta) continue;
      const renameMap = renames.get(targetMeta);
      const renamed = renameMap?.get(prop.mappedBy);
      if (renamed) prop.mappedBy = renamed;
    }
  }

  return fixups;
}

/**
 * Rule 6 (metadata level): inverse collections and inverse one-to-ones are
 * named snake_case of whatever `bidirectionalRelations` generated (always
 * camelCase, from `namingStrategy.inverseSideName`, a naming-strategy method
 * our `SnakeProps` override does not touch) — matches Phase 0
 * (`day_notes_collection`). Pure case conversion: `dayAccommodationsCollection1`
 * -> `day_accommodations_collection1` (the disambiguating digit the generator
 * itself appends on a naming collision, e.g. two FKs from the same table,
 * survives untouched — the regex only inserts an underscore before an
 * uppercase letter, never before a digit).
 */
export function RULE6_renameInverseCollections(metadata: EntityMetadata[]): void {
  for (const meta of metadata) {
    for (const prop of [...meta.relations]) {
      if (!isInverseSide(prop)) continue;
      const newName = toSnakeCase(prop.name);
      if (newName === prop.name) continue;
      if (meta.properties[newName]) {
        throw new Error(
          `generate-entities: renaming ${meta.className}.${prop.name} to "${newName}" would collide with an ` +
            'existing property of that name.',
        );
      }
      const oldName = prop.name;
      meta.removeProperty(oldName, false);
      prop.name = newName;
      meta.addProperty(prop);
    }
  }
}

/**
 * Rule 7 (metadata level): drop `updateRule('no action')` / `deleteRule('no action')`
 * noise. SQLite's `PRAGMA foreign_key_list` reports "NO ACTION" for every FK
 * that never named an ON UPDATE/ON DELETE clause — that's "no information",
 * not a real rule the migration stated, so the generator's raw introspection
 * carries it as noise on nearly every relation. Every other value (cascade,
 * set null, restrict) is real and kept.
 */
export function RULE7_dropNoActionRules(metadata: EntityMetadata[]): void {
  for (const meta of metadata) {
    for (const prop of meta.relations) {
      if (prop.updateRule?.toLowerCase() === 'no action') delete prop.updateRule;
      if (prop.deleteRule?.toLowerCase() === 'no action') delete prop.deleteRule;
    }
  }
}

/**
 * Rule 8 (metadata level): `repository: () => XRepository` + its import.
 * Setting `meta.repositoryClass` is the whole rule — SourceFile's
 * getEntityDeclOptions() (shared by defineEntity/entitySchema output) turns a
 * truthy `repositoryClass` into both the `repository: () => X` option AND an
 * auto-added import for that identifier; the onImport hook below resolves it
 * to `../repositories/X.repository`. Whether the *file* on disk actually gets
 * written (only when missing, never overwritten) is write-mode's job in
 * `writeRepositoriesIfMissing`, not this metadata rule.
 */
export function RULE8_bindRepositories(metadata: EntityMetadata[]): void {
  for (const meta of metadata) {
    meta.repositoryClass = `${meta.className}Repository`;
  }
}

/** A scalar property whose literal default the renderer's own heuristic drops or mis-renders — see below. */
export interface DefaultFixup {
  className: string;
  propName: string;
  /** Valid TS source for the literal, e.g. `0`, `'calendar'`. */
  literal: string;
}

/** A raw SQL default that is a plain literal (number or single-quoted string) rather than an expression like `CURRENT_TIMESTAMP`. */
const PLAIN_LITERAL_DEFAULT_RE = /^-?\d+(\.\d+)?$|^'.*'$/;

/**
 * Rule (metadata level for detection + clearing `defaultRaw`; text level for
 * the render itself — see task-2-report.md "the defaults rule"): a scalar
 * column with a literal `DEFAULT` (`sort_order INTEGER NOT NULL DEFAULT 0`,
 * `year_type TEXT NOT NULL DEFAULT 'calendar'`) is exactly what
 * `DayNotes`/`BudgetCategoryOrder`/`VacayUserSettings` render as
 * `.default(0)`/`.default('calendar')` — plain JS defaults, never
 * `.defaultRaw()`. The stock renderer instead either (a) renders
 * `.defaultRaw('0')` whenever introspection only populated `defaultRaw` and
 * left `prop.default` unset (observed for columns whose declared type the
 * generator leaves `unknown`, e.g. REAL, before Rule 1 retypes them), or (b)
 * for a column where BOTH are populated and consistent, renders *neither*:
 * traced to `SourceFile.js#getCommonDecoratorOptions`'s `.default()` branch,
 * which additionally requires `breakdownOfIType(prop) !== undefined` — true
 * only when the property's type is "ambiguous" in some way, which a boring,
 * unambiguous `INTEGER NOT NULL DEFAULT 0` column never is. Confirmed by
 * generating the real schema and inspecting the metadata mid-hook, not
 * assumed. Since nothing in `GenerateOptions` can force that branch to fire,
 * this is unavoidably a two-part rule: clear the raw default here (so the
 * renderer's OTHER branch, `.defaultRaw()`, never fires either) and record
 * a (className, propName, literal) triple for `injectMissingDefaults` to
 * append `.default(<literal>)` in the rendered text whenever the property's
 * line ends up with neither call. A genuine SQL expression default
 * (`CURRENT_TIMESTAMP`, `datetime('now')`) never matches
 * `PLAIN_LITERAL_DEFAULT_RE` and is left completely alone — that path
 * already renders correctly today (Rule 2's `DbTimestampType` columns).
 */
export function RULE_normalizeLiteralDefaults(metadata: EntityMetadata[]): DefaultFixup[] {
  const fixups: DefaultFixup[] = [];
  for (const meta of metadata) {
    for (const prop of Object.values(meta.properties)) {
      if (prop.kind !== undefined && prop.kind !== ReferenceKind.SCALAR) continue;
      // Nullable columns are Task 3's PARITY-005 territory (still `it.skip`d,
      // see task-0-report.md): Phase 0's own hand-written files are not
      // internally consistent about restating a nullable column's DB default
      // in metadata at all (`DayNotes.icon` — nullable, `TEXT DEFAULT '📝'` —
      // has none; `DayNotes.sort_order` — nullable, `REAL DEFAULT 0` — has
      // `.default(0)`). Guessing a rule to match that inconsistency would be
      // exactly the kind of drift Task 0 deferred; only a NOT NULL column
      // is unambiguous — there, the default is not cosmetic, it is the only
      // thing that makes the property optional at all (see this rule's doc
      // comment above).
      if (prop.nullable) continue;
      if (typeof prop.defaultRaw !== 'string') continue;
      if (!PLAIN_LITERAL_DEFAULT_RE.test(prop.defaultRaw)) continue; // an expression — leave to Rule 2's defaultRaw path
      if (prop.default === undefined || prop.default === null) continue; // introspection gave us no typed value — nothing safe to render
      const literal =
        typeof prop.default === 'string' ? `'${prop.default.replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'` : String(prop.default);
      delete prop.defaultRaw;
      fixups.push({ className: meta.className, propName: prop.name, literal });
    }
  }
  return fixups;
}

export interface RuleFixups {
  joinColumns: JoinColumnFixup[];
  defaults: DefaultFixup[];
  timestamps: TimestampFixup[];
  /** Rule 1's + Rule 2's retyped scalars together — both need the same `.columnType()` strip (see `stripRedundantColumnType`). */
  retypedScalars: RetypedScalarFixup[];
}

/** Every rule above, composed into the single hook MikroORM calls. Order matters (see comments). */
export function applyRules(metadata: EntityMetadata[], _platform: Platform): RuleFixups {
  const retypedByRule1 = RULE1_fixUnknownScalarTypes(metadata);
  RULE1b_markJsonColumns(metadata);
  const timestamps = RULE2_datetimeToDbTimestampType(metadata);
  RULE3_integerPkAutoincrement(metadata);
  RULE4_hideAllRelations(metadata);
  const joinColumns = RULE5_renameOwningRelations(metadata);
  RULE6_renameInverseCollections(metadata);
  RULE7_dropNoActionRules(metadata);
  RULE8_bindRepositories(metadata);
  const defaults = RULE_normalizeLiteralDefaults(metadata);
  return { joinColumns, defaults, timestamps, retypedScalars: [...retypedByRule1, ...timestamps] };
}

// ---------------------------------------------------------------------------
// onImport — resolves the two identifiers the rules above add to a file's
// entityImports that are NOT sibling `*.entity.ts` classes: `DbTimestampType`
// (rule 2) and any `<X>Repository` (rule 8). Everything else (another entity
// class) falls through to the generator's own default resolution.
// ---------------------------------------------------------------------------
export const onImport: ImportsResolver = (alias) => {
  if (alias === 'DbTimestampType') return { path: '../types', name: 'DbTimestampType' };
  if (alias.endsWith('Repository')) {
    const entityName = alias.slice(0, -'Repository'.length);
    return { path: `../repositories/${entityName}.repository`, name: alias };
  }
  return undefined;
};

// ---------------------------------------------------------------------------
// Text-level passes — only for what the metadata cannot carry into the
// rendered `defineEntity` call (see the doc comment at the top of this file
// and task-2-report.md for why each of these specifically cannot be a rule
// on the metadata).
// ---------------------------------------------------------------------------

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * The property's line inside `properties: {...}` — i.e. the metadata builder
 * call (`propName: p.integer()...` or `propName: () => p.manyToOne(...)...`),
 * never the class-field declaration above it. The two can share an identical
 * `propName:` prefix (an `& Opt`-style field like `sort_order: number & Opt = 0;`
 * has no `!`/`?`/parens between the name and the colon, same as the metadata
 * line `sort_order: p.integer(),` — anchoring on `propName:.*` alone matches
 * whichever comes first in the file, which is always the class field).
 */
function findPropertyBuilderLine(source: string, propName: string): RegExpExecArray | null {
  const lineRe = new RegExp(`^(\\s*${escapeRegExp(propName)}: (?:\\(\\) => )?p\\..*)$`, 'm');
  return lineRe.exec(source);
}

/** The class-field declaration line for a scalar property — the mirror image of `findPropertyBuilderLine`. */
function findClassFieldLine(source: string, propName: string): RegExpExecArray | null {
  const lineRe = new RegExp(`^(\\s*${escapeRegExp(propName)}[?!]?: (?!\\(\\) => p\\.|p\\.).*)$`, 'm');
  return lineRe.exec(source);
}

/**
 * `DbTimestampType.runtimeType` is `'string'` (it stores the SQLite wire text
 * verbatim, never a JS `Date` — see `src/db/types/db-timestamp.type.ts`), but
 * the generator has no way to know that: `prop.type` is just the plain string
 * `'DbTimestampType'` (Rule 2), unrecognised by `@mikro-orm/core`'s `types`
 * registry, and `SourceFile.js#breakdownOfIType`'s fallback for an
 * unrecognised declared type re-derives the class field's TS type from the
 * COLUMN's own mapped type instead (`DATETIME` -> `DateTimeType` -> `'Date'`)
 * — a fallback that, unlike the metadata builder's `p.type(DbTimestampType)`
 * output, never consults `prop.runtimeType` at all. Confirmed by generating
 * the real schema (`DayNotes.created_at`, `Trips.created_at`/`updated_at`)
 * and inspecting the rendered class field, not assumed; there is no metadata
 * option that changes this fallback's source. Rewriting `Date` to `string` on
 * exactly the class-field line for each Rule-2-retyped property is therefore
 * a text pass, not a rule.
 */
export function fixDbTimestampClassFieldTypes(source: string, fixups: readonly TimestampFixup[]): string {
  let result = source;
  for (const { propName } of fixups) {
    const match = findClassFieldLine(result, propName);
    if (!match) continue;
    const line = match[1];
    const newLine = line.replace(/\bDate\b/g, 'string');
    if (newLine === line) continue;
    result = result.slice(0, match.index) + newLine + result.slice(match.index + line.length);
  }
  return result;
}

/**
 * Every property Rule 1 or Rule 2 retyped (`p.unknown()` -> `p.double()`,
 * `p.datetime()` -> `p.type(DbTimestampType)`) picks up a spurious explicit
 * `.columnType(<raw SQL type>)` from `SourceFile.js#needsExplicitColumnType()`:
 * that check compares the introspected raw column spelling (`'REAL'`,
 * `'DATETIME'`, verbatim from the migration) against the abstract type's OWN
 * declaration string (`DoubleType`/base `Platform#getDoubleDeclarationSQL()`
 * literally returns `'double'`; `DbTimestampType` has no declaration of its
 * own so the comparison falls back the same way) — they can never textually
 * match, so the "is this ambiguous" check is always true for exactly these
 * two retyped families, even though `double`/`DbTimestampType` already
 * correctly mean `REAL`/`DATETIME` on SQLite. Confirmed by generating the
 * real schema (`DayNotes.sort_order`/`.created_at`) and reading
 * `getColumnType()`, not assumed. No `GenerateOptions` flag skips this check,
 * so the explicit call is stripped here rather than never emitted.
 */
export function stripRedundantColumnType(source: string, fixups: readonly RetypedScalarFixup[]): string {
  let result = source;
  for (const { propName } of fixups) {
    const match = findPropertyBuilderLine(result, propName);
    if (!match) continue;
    const line = match[1];
    const newLine = line.replace(/\.columnType\('[^']*'\)/, '');
    if (newLine === line) continue;
    result = result.slice(0, match.index) + newLine + result.slice(match.index + line.length);
  }
  return result;
}

/**
 * For every collision-class relation Rule 5 renamed, turns the renderer's own
 * (inert, for a relation) `.name('<column>')` override into the
 * `.joinColumn('<column>')` that actually pins the FK column — or appends
 * `.joinColumn(...)` if the renderer decided no override was needed at all
 * (belt and braces; not observed in practice, but the rule must not silently
 * do nothing if the renderer's heuristic ever changes).
 */
export function injectJoinColumns(source: string, fixups: readonly JoinColumnFixup[]): string {
  let result = source;
  for (const { propName, column } of fixups) {
    const quotedColumn = `'${column}'`;
    const match = findPropertyBuilderLine(result, propName);
    if (!match) continue; // property not in this file
    const line = match[1];
    const nameCallRe = new RegExp(`\\.name\\(${escapeRegExp(quotedColumn)}\\)`);
    let newLine: string;
    if (nameCallRe.test(line)) {
      newLine = line.replace(nameCallRe, `.joinColumn(${quotedColumn})`);
    } else if (line.includes('.joinColumn(')) {
      newLine = line; // already explicit
    } else {
      newLine = line.replace(/,\s*$/, `.joinColumn(${quotedColumn}),`);
    }
    result = result.slice(0, match.index) + newLine + result.slice(match.index + line.length);
  }
  return result;
}

/**
 * The text half of `RULE_normalizeLiteralDefaults`: appends `.default(<literal>)`
 * to a property's line when it has neither `.default(` nor `.defaultRaw(` —
 * the exact gap that rule's doc comment traces.
 */
export function injectMissingDefaults(source: string, fixups: readonly DefaultFixup[]): string {
  let result = source;
  for (const { propName, literal } of fixups) {
    const match = findPropertyBuilderLine(result, propName);
    if (!match) continue; // property not in this file
    const line = match[1];
    if (line.includes('.default(') || line.includes('.defaultRaw(')) continue; // already renders one
    const newLine = line.replace(/,\s*$/, `.default(${literal}),`);
    result = result.slice(0, match.index) + newLine + result.slice(match.index + line.length);
  }
  return result;
}

/**
 * `p.json()` has no metadata-level channel for a TypeScript generic type
 * parameter (see the JSON-interface decision above this file's rules) — this
 * inserts `<unknown>` after every bare `p.json(` call.
 */
export function injectJsonTypeParams(source: string): string {
  return source.replace(/\bp\.json\(\)/g, 'p.json<unknown>()');
}

/**
 * Strips the class-field `& Hidden` TypeScript annotation the renderer adds,
 * unconditionally, to every field whose property is `.hidden()`
 * (`SourceFile.js#getPropertyDefinition`: `if (prop.hidden) { hiddenType += ' & Hidden'; }`
 * — there is no metadata option that suppresses it; it does not read a
 * config flag, it reads `prop.hidden` directly). Phase 0's hand-written files
 * never use this marker on any of their many hidden relations/collections —
 * the runtime source of truth is `defineEntity`'s own `.hidden()` call kept
 * on the property builder (rule 4), which this text pass never touches; the
 * class field is compile-time-only TypeScript, so dropping the redundant
 * annotation changes nothing observable.
 *
 * A `Collection<T>` field only gets an explicit `: Collection<T>` type
 * annotation in the first place *because* of `& Hidden` (the same ternary);
 * once the marker is gone the whole annotation is dropped too, reverting to
 * plain `field = new Collection<T>(this);` — Phase 0's actual style.
 */
export function stripHiddenTypeAnnotation(source: string): string {
  let result = source
    // Collection<T> & Hidden = new Collection<T>(this); -> = new Collection<T>(this);
    .replace(/: Collection<[^=]*> & Hidden = /g, ' = ')
    // (Ref<X> | null) & Hidden -> Ref<X> | null  (parenthesised nullable ref)
    .replace(/\(([^()]*)\) & Hidden/g, '$1')
    // trip!: Ref<Trips> & Hidden; -> trip!: Ref<Trips>;  (everything else)
    .replace(/ & Hidden/g, '');
  // Drop the now-possibly-unused `type Hidden` import from the @mikro-orm/core line.
  const importLineRe = /^import \{[^}]*\} from '@mikro-orm\/core';$/m;
  const coreImportLine = importLineRe.exec(result)?.[0];
  if (coreImportLine) {
    const bodyAfterImports = result.slice(result.indexOf(coreImportLine) + coreImportLine.length);
    const stillUsed = /\bHidden\b/.test(bodyAfterImports);
    if (!stillUsed) {
      const cleaned = coreImportLine.replace(/type Hidden, /, '').replace(/, type Hidden/, '');
      result = result.replace(coreImportLine, cleaned);
    }
  }
  return result;
}

/** Every text pass, applied in order. */
export function applyTextPasses(source: string, fixups: RuleFixups): string {
  let result = injectJoinColumns(source, fixups.joinColumns);
  result = injectMissingDefaults(result, fixups.defaults);
  result = fixDbTimestampClassFieldTypes(result, fixups.timestamps);
  result = stripRedundantColumnType(result, fixups.retypedScalars);
  result = injectJsonTypeParams(result);
  result = stripHiddenTypeAnnotation(result);
  return result;
}

// ---------------------------------------------------------------------------
// Temp database — a throwaway file, migrated the same way buildApp() does
// (same Migrator extension, same migrations path/pathTs), never data/travel.db.
//
// This deliberately does NOT import src/db/orm.ts / src/db/database.ts /
// src/mikro-orm.config.ts: database.ts opens resolveDbPath() (real
// data/travel.db, absent an env override) as a side effect of being imported
// at all, and orm.ts/mikro-orm.config.ts both pull that in transitively. A
// self-contained MikroORM.init() against our own temp path has no such
// side effect and needs nothing from those modules.
// ---------------------------------------------------------------------------

function tempDbPath(): string {
  return path.join(os.tmpdir(), `trek-gen-entities-${crypto.randomUUID()}.db`);
}

async function migrateTempDb(dbPath: string): Promise<void> {
  const orm = await SqliteMikroORM.init({
    entities: [],
    discovery: { warnWhenNoEntities: false },
    dbName: dbPath,
    extensions: [Migrator],
    migrations: { path: 'dist/db/migrations', pathTs: 'src/db/migrations', snapshot: false },
  });
  try {
    const migrator = orm.config.getExtension<Migrator>('@mikro-orm/migrator');
    await migrator.up();
  } finally {
    await orm.close(true);
  }
}

// ---------------------------------------------------------------------------
// Generation
// ---------------------------------------------------------------------------

export interface GenerateResult {
  /** `X.entity.ts` -> final, post-text-pass file content. */
  files: Map<string, string>;
}

/**
 * Generates every entity from the migrated schema into memory (nothing is
 * written to disk by this function alone — see `writeEntities`/`main` below
 * for the on-disk half `--write` uses).
 */
export async function generateEntities(): Promise<GenerateResult> {
  const dbPath = tempDbPath();
  try {
    await migrateTempDb(dbPath);

    const orm = await SqliteMikroORM.init({
      entities: [],
      discovery: { warnWhenNoEntities: false },
      dbName: dbPath,
      namingStrategy: SnakeProps,
      extensions: [EntityGenerator],
    });
    try {
      const generator = orm.config.getExtension<EntityGenerator>('@mikro-orm/entity-generator');
      let fixups: RuleFixups = { joinColumns: [], defaults: [], timestamps: [], retypedScalars: [] };
      const rawFiles = await generator.generate({
        entityDefinition: 'defineEntity',
        scalarPropertiesForRelations: 'always',
        identifiedReferences: true,
        bidirectionalRelations: true,
        forceUndefined: false,
        undefinedDefaults: true,
        skipTables: ['mikro_orm_migrations'],
        fileName: (className: string) => `${className}.entity`,
        onImport,
        onProcessedMetadata: (metadata, platform) => {
          fixups = applyRules(metadata, platform);
        },
      });

      const files = new Map<string, string>();
      for (const raw of rawFiles) {
        const classMatch = /\nexport class (\w+) /.exec(raw) ?? /^export class (\w+) /.exec(raw);
        if (!classMatch) continue; // a routine/enum file, no class of its own — nothing to text-pass
        const className = classMatch[1];
        const relevantFixups: RuleFixups = {
          joinColumns: fixups.joinColumns.filter((f) => f.className === className),
          defaults: fixups.defaults.filter((f) => f.className === className),
          timestamps: fixups.timestamps.filter((f) => f.className === className),
          retypedScalars: fixups.retypedScalars.filter((f) => f.className === className),
        };
        files.set(`${className}.entity.ts`, applyTextPasses(raw, relevantFixups));
      }
      return { files };
    } finally {
      await orm.close(true);
    }
  } finally {
    fs.rmSync(dbPath, { force: true });
  }
}

/** Writes `files` into `dir` (creating it if needed). Used for the scratch dump and by `--write`. */
export function dumpEntities(dir: string, files: ReadonlyMap<string, string>): void {
  fs.mkdirSync(dir, { recursive: true });
  for (const [fileName, content] of files) {
    fs.writeFileSync(path.join(dir, fileName), content);
  }
}

/**
 * For every generated entity, writes `src/db/repositories/<X>.repository.ts`
 * if (and only if) it does not already exist — Rule 8's file-system half.
 * Returns the list of newly-created files.
 */
export function writeRepositoriesIfMissing(repositoriesDir: string, files: ReadonlyMap<string, string>): string[] {
  const created: string[] = [];
  fs.mkdirSync(repositoriesDir, { recursive: true });
  for (const fileName of files.keys()) {
    const className = fileName.replace(/\.entity\.ts$/, '');
    const repoFile = path.join(repositoriesDir, `${className}.repository.ts`);
    if (fs.existsSync(repoFile)) continue;
    const content =
      `import type { ${className} } from '../entities/${className}.entity';\n` +
      `import { EntityRepository } from '@mikro-orm/sql';\n\n` +
      `export class ${className}Repository extends EntityRepository<${className}> {}\n`;
    fs.writeFileSync(repoFile, content);
    created.push(repoFile);
  }
  return created;
}

/** Regenerates `src/db/entities/index.ts` from the directory, sorted, exporting `ALL_ENTITIES`. */
export function regenerateEntitiesIndex(entitiesDir: string): string {
  const files = fs
    .readdirSync(entitiesDir)
    .filter((f) => f.endsWith('.entity.ts'))
    .sort();
  const classNames = files.map((f) => f.replace(/\.entity\.ts$/, ''));
  const imports = classNames.map((name) => `import { ${name}Schema } from './${name}.entity';`).join('\n');
  const exportList = classNames.map((name) => `  ${name}Schema,`).join('\n');
  return (
    `import type { EntitySchema } from '@mikro-orm/core';\n${imports}\n\n` +
    `export const ALL_ENTITIES: readonly EntitySchema[] = [\n${exportList}\n];\n`
  );
}

// ---------------------------------------------------------------------------
// CLI
// ---------------------------------------------------------------------------

async function main(): Promise<void> {
  const args = process.argv.slice(2);
  const write = args.includes('--write');
  const outIndex = args.indexOf('--out');
  const outDir = outIndex >= 0 ? args[outIndex + 1] : undefined;

  const { files } = await generateEntities();

  if (write) {
    dumpEntities(ENTITIES_DIR, files);
    const created = writeRepositoriesIfMissing(REPOSITORIES_DIR, files);
    fs.writeFileSync(path.join(ENTITIES_DIR, 'index.ts'), regenerateEntitiesIndex(ENTITIES_DIR));
    console.log(`[generate-entities] wrote ${files.size} entities, ${created.length} new repositories, index.ts`);
    return;
  }

  const target = outDir ?? path.join(os.tmpdir(), `trek-generated-entities-${crypto.randomUUID()}`);
  dumpEntities(target, files);
  console.log(`[generate-entities] dumped ${files.size} files to ${target}`);
}

if (require.main === module) {
  main().catch((err: unknown) => {
    console.error('[generate-entities] failed:', err);
    process.exit(1);
  });
}
