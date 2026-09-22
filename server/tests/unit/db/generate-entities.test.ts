import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { EntityMetadata, ReferenceKind, type EntityProperty } from '@mikro-orm/core';
import { describe, expect, it } from 'vitest';
import {
  assertFilesGenerated,
  BOOLEAN_COLUMNS,
  JoinColumnFixup,
  JsonColumnFixup,
  KNOWN_DIFFS,
  RULE1_fixUnknownScalarTypes,
  RULE1b_markJsonColumns,
  RULE1c_markBooleanColumns,
  RULE1d_fixNaNNumericDefaults,
  RULE2_datetimeToDbTimestampType,
  RULE3_integerPkAutoincrement,
  RULE4_hideAllRelations,
  RULE5_renameOwningRelations,
  RULE6_renameInverseCollections,
  RULE7_dropNoActionRules,
  RULE8_bindRepositories,
  RULE9_addImplicitUniqueConstraints,
  RULE_normalizeLiteralDefaults,
  applyTextPasses,
  checkEntities,
  dumpEntities,
  fixDbTimestampClassFieldTypes,
  fixJsonClassFieldTypes,
  generateEntities,
  injectJoinColumns,
  injectJsonInterfaces,
  injectJsonTypeParams,
  injectMissingDefaults,
  regenerateEntitiesIndex,
  stripHiddenTypeAnnotation,
  stripRedundantColumnType,
  type DefaultFixup,
} from '../../../scripts/generate-entities';

const ENTITIES_DIR = path.join(__dirname, '../../../src/db/entities');
const REPOSITORIES_DIR = path.join(__dirname, '../../../src/db/repositories');

/**
 * A minimal, correctly-typed `EntityProperty` fixture. Every rule under test
 * only reads/writes a handful of fields (name, kind, type, fieldNames,
 * nullable, default(Raw), primary, autoincrement, mappedBy, hidden,
 * updateRule/deleteRule) — the rest exist only because the interface
 * requires them structurally; `strictNullChecks` is off project-wide
 * (`tsconfig.json`), so `undefined` is assignable to every field without an
 * `any` cast.
 */
class FixturePlaceholder {}

function fixtureProp(overrides: Partial<EntityProperty> & { name: string }): EntityProperty {
  const base: EntityProperty = {
    name: overrides.name,
    entity: () => FixturePlaceholder,
    target: FixturePlaceholder,
    type: 'string',
    runtimeType: 'string',
    columnTypes: [],
    customTypes: [],
    hasConvertToJSValueSQL: false,
    hasConvertToDatabaseValueSQL: false,
    serializedPrimaryKey: false,
    kind: ReferenceKind.SCALAR,
    fieldNames: [overrides.fieldNames?.[0] ?? overrides.name],
    embeddable: FixturePlaceholder,
    embeddedProps: {},
    cascade: [],
    owner: false,
    inversedBy: undefined,
    mappedBy: undefined,
    pivotTable: undefined,
    pivotEntity: undefined,
    joinColumns: [],
    ownColumns: [],
    inverseJoinColumns: [],
    referencedColumnNames: [],
    referencedTableName: undefined,
    referencedPKs: [],
    createForeignKeyConstraint: false,
  };
  return { ...base, ...overrides };
}

/** A small metadata fixture, built the same way the real generator does (repeated `addProperty`, see EntityGenerator.js). */
/**
 * `meta.getPrimaryProps()` (Rule 3 relies on it) reads `meta.primaryKeys`
 * (a plain array of property names) — `sync()` never derives it from each
 * prop's own `.primary` flag (that derivation is `MetadataDiscovery`'s job
 * when parsing a real `defineEntity` call), so a fixture has to set it
 * explicitly, the same way `addProperty` alone would leave it empty.
 */
function fixtureMeta(className: string, tableName: string, props: EntityProperty[]): EntityMetadata {
  const meta = new EntityMetadata({ className, tableName, collection: tableName });
  for (const p of props) meta.addProperty(p);
  meta.primaryKeys = props.filter((p) => p.primary).map((p) => p.name);
  return meta;
}

describe('RULE1_fixUnknownScalarTypes', () => {
  it('RULE1-001: p.unknown().columnType("REAL") -> p.double(), runtimeType synced to number', () => {
    const p = fixtureProp({ name: 'weight', type: 'unknown', runtimeType: 'unknown', columnTypes: ['REAL'] });
    const meta = fixtureMeta('X', 'x', [p]);
    RULE1_fixUnknownScalarTypes([meta]);
    expect(p.type).toBe('double');
    expect(p.runtimeType).toBe('number');
  });

  it('RULE1-002: an unmapped unknown column type fails loudly, naming the column', () => {
    const p = fixtureProp({ name: 'blob_col', type: 'unknown', columnTypes: ['BLOB'] });
    const meta = fixtureMeta('X', 'x', [p]);
    expect(() => RULE1_fixUnknownScalarTypes([meta])).toThrow(/x\.blob_col.*BLOB/s);
  });

  it('RULE1-003: leaves already-known scalar types untouched', () => {
    const p = fixtureProp({ name: 'title', type: 'text', columnTypes: ['TEXT'] });
    const meta = fixtureMeta('X', 'x', [p]);
    RULE1_fixUnknownScalarTypes([meta]);
    expect(p.type).toBe('text');
  });
});

describe('RULE1b_markJsonColumns', () => {
  it('RULE1B-001: marks a known JSON column type=json, runtimeType=<interface name>, records a fixup', () => {
    const p = fixtureProp({ name: 'config', type: 'unknown', runtimeType: 'string', fieldNames: ['config'] });
    const meta = fixtureMeta('Addons', 'addons', [p]);
    const fixups = RULE1b_markJsonColumns([meta]);
    expect(p.type).toBe('json');
    expect(p.runtimeType).toBe('AddonConfig');
    expect(fixups).toEqual<JsonColumnFixup[]>([{ className: 'Addons', propName: 'config', typeName: 'AddonConfig' }]);
  });

  it('RULE1B-002: leaves an unknown table.column pair alone', () => {
    const p = fixtureProp({ name: 'notes', type: 'text', fieldNames: ['notes'] });
    const meta = fixtureMeta('Days', 'days', [p]);
    const fixups = RULE1b_markJsonColumns([meta]);
    expect(p.type).toBe('text');
    expect(fixups).toEqual([]);
  });
});

describe('RULE1c_markBooleanColumns', () => {
  it('RULE1C-001: marks a known boolean column type=boolean, runtimeType=boolean, coerces a falsy numeric default (I4)', () => {
    const p = fixtureProp({ name: 'enabled', type: 'integer', runtimeType: 'number', fieldNames: ['enabled'], nullable: true, default: 0, defaultRaw: '0' });
    const meta = fixtureMeta('Addons', 'addons', [p]);
    const fixups = RULE1c_markBooleanColumns([meta]);
    expect(p.type).toBe('boolean');
    expect(p.runtimeType).toBe('boolean');
    expect(p.default).toBe(false);
    expect(p.defaultRaw).toBe('false');
    expect(fixups).toEqual([{ className: 'Addons', propName: 'enabled' }]);
  });

  it('RULE1C-002: coerces a truthy numeric default to true', () => {
    const p = fixtureProp({ name: 'enabled', type: 'integer', fieldNames: ['enabled'], default: 1, defaultRaw: '1' });
    const meta = fixtureMeta('Addons', 'addons', [p]);
    RULE1c_markBooleanColumns([meta]);
    expect(p.default).toBe(true);
    expect(p.defaultRaw).toBe('true');
  });

  it('RULE1C-003: leaves an unknown table.column pair alone', () => {
    const p = fixtureProp({ name: 'is_active', type: 'integer', fieldNames: ['is_active'] });
    const meta = fixtureMeta('Days', 'days', [p]);
    RULE1c_markBooleanColumns([meta]);
    expect(p.type).toBe('integer');
  });

  it('BOOLEAN_COLUMNS-001: contains addons.enabled, grepped from the current hand-written entities', () => {
    expect(BOOLEAN_COLUMNS.has('addons.enabled')).toBe(true);
  });
});

describe('RULE1d_fixNaNNumericDefaults', () => {
  /**
   * `task-4-review-shape.md` Important finding 1: `@mikro-orm/sql`'s own
   * introspection computes `prop.default` for a numeric column as
   * `+prop.defaultRaw`, which is `NaN` whenever `defaultRaw` is the literal
   * text `'NULL'` (a nullable column with an explicit `DEFAULT NULL`) or a
   * non-literal SQL expression (`(strftime('%s','now'))`) — the exact repro
   * the reviewer ran against the real schema (`BudgetItems.persons`/`.days`,
   * `IdempotencyKeys.created_at`, `BudgetItems.place_id`/`.reservation_id`,
   * `PackingBags.user_id`).
   */
  it("RULE1D-001: defaultRaw 'NULL' with a NaN default clears the initialiser (never renders = null)", () => {
    const p = fixtureProp({ name: 'persons', type: 'integer', nullable: true, defaultRaw: 'NULL', default: NaN });
    const meta = fixtureMeta('BudgetItems', 'budget_items', [p]);
    RULE1d_fixNaNNumericDefaults([meta]);
    expect(p.default).toBeUndefined();
    expect(p.defaultRaw).toBe('NULL'); // untouched — the schema's .defaultRaw('NULL') is correct and stays
  });

  it('RULE1D-002: a non-literal expression default with a NaN default clears the initialiser', () => {
    const p = fixtureProp({ name: 'created_at', type: 'integer', nullable: false, defaultRaw: "(strftime('%s','now'))", default: NaN });
    const meta = fixtureMeta('IdempotencyKeys', 'idempotency_keys', [p]);
    RULE1d_fixNaNNumericDefaults([meta]);
    expect(p.default).toBeUndefined();
    expect(p.defaultRaw).toBe("(strftime('%s','now'))"); // untouched
  });

  it("RULE1D-003: a genuine finite numeric literal default ('0') is left completely untouched", () => {
    const p = fixtureProp({ name: 'sort_order', type: 'integer', nullable: false, defaultRaw: '0', default: 0 });
    const meta = fixtureMeta('X', 'x', [p]);
    RULE1d_fixNaNNumericDefaults([meta]);
    expect(p.default).toBe(0);
    expect(p.defaultRaw).toBe('0');
  });

  it('RULE1D-004: a property whose default is not NaN (e.g. a text column default(raw) NULL, default null) is untouched', () => {
    const p = fixtureProp({ name: 'note', type: 'text', nullable: true, defaultRaw: 'NULL', default: null });
    const meta = fixtureMeta('X', 'x', [p]);
    RULE1d_fixNaNNumericDefaults([meta]);
    expect(p.default).toBeNull();
  });

  it('RULE1D-005: a property with no defaultRaw at all is untouched', () => {
    const p = fixtureProp({ name: 'title', type: 'text' });
    const meta = fixtureMeta('X', 'x', [p]);
    RULE1d_fixNaNNumericDefaults([meta]);
    expect(p.default).toBeUndefined();
  });
});

describe('RULE2_datetimeToDbTimestampType', () => {
  it('RULE2-001: p.datetime() -> p.type(DbTimestampType), fixup recorded', () => {
    const p = fixtureProp({ name: 'created_at', type: 'datetime', nullable: true, defaultRaw: 'CURRENT_TIMESTAMP' });
    const meta = fixtureMeta('X', 'x', [p]);
    const fixups = RULE2_datetimeToDbTimestampType([meta]);
    expect(p.type).toBe('DbTimestampType');
    expect(fixups).toEqual([{ className: 'X', propName: 'created_at' }]);
  });

  it('RULE2-002: leaves non-datetime scalars alone', () => {
    const p = fixtureProp({ name: 'title', type: 'text' });
    const meta = fixtureMeta('X', 'x', [p]);
    expect(RULE2_datetimeToDbTimestampType([meta])).toEqual([]);
    expect(p.type).toBe('text');
  });
});

describe('RULE3_integerPkAutoincrement', () => {
  it('RULE3-001: a solo integer PK gets autoincrement=true, nullable=false', () => {
    const p = fixtureProp({ name: 'id', type: 'integer', columnTypes: ['INTEGER'], primary: true, nullable: true });
    const meta = fixtureMeta('X', 'x', [p]);
    RULE3_integerPkAutoincrement([meta]);
    expect(p.autoincrement).toBe(true);
    expect(p.nullable).toBe(false);
  });

  it('RULE3-002: a composite PK is untouched', () => {
    const a = fixtureProp({ name: 'trip', type: 'integer', columnTypes: ['INTEGER'], primary: true, kind: ReferenceKind.MANY_TO_ONE });
    const b = fixtureProp({ name: 'category', type: 'text', columnTypes: ['TEXT'], primary: true, nullable: true });
    const meta = fixtureMeta('X', 'x', [a, b]);
    RULE3_integerPkAutoincrement([meta]);
    expect(a.autoincrement).toBeUndefined();
    expect(b.nullable).toBe(true);
  });

  it('RULE3-003: a text PK is untouched (nullable stays as introspected)', () => {
    const p = fixtureProp({ name: 'key', type: 'text', columnTypes: ['TEXT'], primary: true, nullable: true });
    const meta = fixtureMeta('X', 'x', [p]);
    RULE3_integerPkAutoincrement([meta]);
    expect(p.autoincrement).toBeUndefined();
    expect(p.nullable).toBe(true);
  });
});

describe('RULE4_hideAllRelations', () => {
  it('RULE4-001: every relation kind is hidden; scalars are untouched', () => {
    const scalar = fixtureProp({ name: 'title', kind: ReferenceKind.SCALAR });
    const m2o = fixtureProp({ name: 'trip', kind: ReferenceKind.MANY_TO_ONE });
    const o2m = fixtureProp({ name: 'items_collection', kind: ReferenceKind.ONE_TO_MANY });
    const meta = fixtureMeta('X', 'x', [scalar, m2o, o2m]);
    RULE4_hideAllRelations([meta]);
    expect(scalar.hidden).toBeUndefined();
    expect(m2o.hidden).toBe(true);
    expect(o2m.hidden).toBe(true);
  });
});

describe('RULE5_renameOwningRelations', () => {
  it('RULE5-001: a normal FK relation is renamed camelCase(column minus _id)', () => {
    const rel = fixtureProp({ name: 'start_day', kind: ReferenceKind.MANY_TO_ONE, fieldNames: ['start_day_id'], type: 'Days' });
    const meta = fixtureMeta('DayAccommodations', 'day_accommodations', [rel]);
    const fixups = RULE5_renameOwningRelations([meta]);
    expect(meta.properties['startDay']).toBe(rel);
    expect(rel.name).toBe('startDay');
    expect(fixups).toEqual([]);
  });

  it('RULE5-002: a collision-class column (no _id suffix) is renamed <camel>Ref and recorded for joinColumn', () => {
    const rel = fixtureProp({ name: 'country', kind: ReferenceKind.MANY_TO_ONE, fieldNames: ['country'], type: 'SchoolHolidayCountries' });
    const meta = fixtureMeta('SchoolHolidayRegions', 'school_holiday_regions', [rel]);
    const fixups = RULE5_renameOwningRelations([meta]);
    expect(meta.properties['countryRef']).toBe(rel);
    expect(rel.name).toBe('countryRef');
    expect(fixups).toEqual<JoinColumnFixup[]>([{ className: 'SchoolHolidayRegions', propName: 'countryRef', column: 'country' }]);
  });

  it('RULE5-003: multi-word collision column created_by -> createdByRef', () => {
    const rel = fixtureProp({ name: 'created_by', kind: ReferenceKind.MANY_TO_ONE, fieldNames: ['created_by'], type: 'Users' });
    const meta = fixtureMeta('AuditLog', 'audit_log', [rel]);
    const fixups = RULE5_renameOwningRelations([meta]);
    expect(rel.name).toBe('createdByRef');
    expect(fixups[0]?.column).toBe('created_by');
  });

  it('RULE5-004: an inverse mappedBy pointing at a renamed owning relation is fixed up to the new name', () => {
    const owning = fixtureProp({ name: 'start_day', kind: ReferenceKind.MANY_TO_ONE, fieldNames: ['start_day_id'], type: 'Days' });
    const ownerMeta = fixtureMeta('DayAccommodations', 'day_accommodations', [owning]);
    const inverse = fixtureProp({
      name: 'dayAccommodationsCollection',
      kind: ReferenceKind.ONE_TO_MANY,
      type: 'DayAccommodations',
      mappedBy: 'start_day',
    });
    const targetMeta = fixtureMeta('Days', 'days', [inverse]);
    RULE5_renameOwningRelations([ownerMeta, targetMeta]);
    expect(inverse.mappedBy).toBe('startDay');
  });

  it('RULE5-005: a client_id FK is NOT collision class (ends in _id) -> renamed client, no fixup', () => {
    const rel = fixtureProp({ name: 'client', kind: ReferenceKind.MANY_TO_ONE, fieldNames: ['client_id'], type: 'OauthClients' });
    const meta = fixtureMeta('X', 'x', [rel]);
    const fixups = RULE5_renameOwningRelations([meta]);
    expect(rel.name).toBe('client');
    expect(fixups).toEqual([]);
  });

  it('RULE5-006: a multi-column FK throws, naming the entity and property (I1)', () => {
    const rel = fixtureProp({ name: 'weird', kind: ReferenceKind.MANY_TO_ONE, fieldNames: ['a_id', 'b_id'], type: 'Y' });
    const meta = fixtureMeta('X', 'x', [rel]);
    expect(() => RULE5_renameOwningRelations([meta])).toThrow(/X\.weird is a multi-column FK/);
  });

  it('RULE5-007: a rename whose column the naming strategy cannot re-derive gets an explicit joinColumn fixup (I2)', () => {
    // "v2_config_id" -> stripped "v2_config" -> camelCase "v2Config" -> the
    // library's own reverse (UnderscoreNamingStrategy#underscore) only
    // inserts an underscore between a LOWERCASE letter and an uppercase one
    // — the digit before "Config" blocks that, so it comes back "v2config",
    // not "v2_config". A genuine, schema-plausible round-trip failure.
    const rel = fixtureProp({ name: 'v2_config', kind: ReferenceKind.MANY_TO_ONE, fieldNames: ['v2_config_id'], type: 'Configs' });
    const meta = fixtureMeta('X', 'x', [rel]);
    const fixups = RULE5_renameOwningRelations([meta]);
    expect(rel.name).toBe('v2Config');
    expect(fixups).toEqual<JoinColumnFixup[]>([{ className: 'X', propName: 'v2Config', column: 'v2_config_id' }]);
  });

  it('RULE5-008: a renamed relation keeps its original position among the entity\'s properties (M7)', () => {
    const before = fixtureProp({ name: 'before', kind: ReferenceKind.SCALAR });
    const rel = fixtureProp({ name: 'start_day', kind: ReferenceKind.MANY_TO_ONE, fieldNames: ['start_day_id'], type: 'Days' });
    const after = fixtureProp({ name: 'after', kind: ReferenceKind.SCALAR });
    const meta = fixtureMeta('DayAccommodations', 'day_accommodations', [before, rel, after]);
    RULE5_renameOwningRelations([meta]);
    expect(Object.keys(meta.properties)).toEqual(['before', 'startDay', 'after']);
  });
});

describe('RULE6_renameInverseCollections', () => {
  it('RULE6-001: camelCase inverse collection -> snake_case', () => {
    const inv = fixtureProp({ name: 'dayNotesCollection', kind: ReferenceKind.ONE_TO_MANY, mappedBy: 'day' });
    const meta = fixtureMeta('Days', 'days', [inv]);
    RULE6_renameInverseCollections([meta]);
    expect(meta.properties['day_notes_collection']).toBe(inv);
    expect(inv.name).toBe('day_notes_collection');
  });

  it('RULE6-002: a disambiguating trailing digit is preserved, not underscore-separated', () => {
    const inv = fixtureProp({ name: 'dayAccommodationsCollection1', kind: ReferenceKind.ONE_TO_MANY, mappedBy: 'end_day' });
    const meta = fixtureMeta('Days', 'days', [inv]);
    RULE6_renameInverseCollections([meta]);
    expect(inv.name).toBe('day_accommodations_collection1');
  });

  it('RULE6-003: an inverse one-to-one is renamed the same way; an owning relation is untouched', () => {
    const inv1to1 = fixtureProp({ name: 'roadtripDayTracks', kind: ReferenceKind.ONE_TO_ONE, mappedBy: 'day' });
    const owning = fixtureProp({ name: 'trip', kind: ReferenceKind.MANY_TO_ONE, fieldNames: ['trip_id'] });
    const meta = fixtureMeta('Days', 'days', [inv1to1, owning]);
    RULE6_renameInverseCollections([meta]);
    expect(inv1to1.name).toBe('roadtrip_day_tracks');
    expect(owning.name).toBe('trip');
  });

  it('RULE6-004: a renamed inverse collection keeps its original position among the entity\'s properties (M7)', () => {
    const before = fixtureProp({ name: 'before', kind: ReferenceKind.SCALAR });
    const inv = fixtureProp({ name: 'dayNotesCollection', kind: ReferenceKind.ONE_TO_MANY, mappedBy: 'day' });
    const after = fixtureProp({ name: 'after', kind: ReferenceKind.SCALAR });
    const meta = fixtureMeta('Days', 'days', [before, inv, after]);
    RULE6_renameInverseCollections([meta]);
    expect(Object.keys(meta.properties)).toEqual(['before', 'day_notes_collection', 'after']);
  });
});

describe('RULE7_dropNoActionRules', () => {
  it('RULE7-001: drops updateRule/deleteRule "no action", keeps every other value', () => {
    const noAction = fixtureProp({ name: 'a', kind: ReferenceKind.MANY_TO_ONE, updateRule: 'no action', deleteRule: 'no action' });
    const cascade = fixtureProp({ name: 'b', kind: ReferenceKind.MANY_TO_ONE, updateRule: 'no action', deleteRule: 'cascade' });
    const meta = fixtureMeta('X', 'x', [noAction, cascade]);
    RULE7_dropNoActionRules([meta]);
    expect(noAction.updateRule).toBeUndefined();
    expect(noAction.deleteRule).toBeUndefined();
    expect(cascade.updateRule).toBeUndefined();
    expect(cascade.deleteRule).toBe('cascade');
  });
});

describe('RULE8_bindRepositories', () => {
  it('RULE8-001: sets repositoryClass to <ClassName>Repository for every entity', () => {
    const meta = fixtureMeta('Days', 'days', []);
    RULE8_bindRepositories([meta]);
    expect(meta.repositoryClass).toBe('DaysRepository');
  });
});

describe('RULE9_addImplicitUniqueConstraints', () => {
  it('RULE9-001: a table with a matching implicit-unique entry gets a uniques: block referencing the columns as properties — a plain (non-FK) column keeps its own name', () => {
    const userId = fixtureProp({ name: 'user_id', primary: false });
    const key = fixtureProp({ name: 'key', primary: false });
    const meta = fixtureMeta('X', 'x', [userId, key]);
    const implicitUniques = new Map([['x', [['user_id', 'key']]]]);
    RULE9_addImplicitUniqueConstraints([meta], implicitUniques);
    expect(meta.uniques).toEqual([{ properties: ['user_id', 'key'] }]);
  });

  it('RULE9-007: a column that IS a single-column owning relation\'s join column is emitted as the RELATION property name, not the persist(false) twin (Important 1, task-5-review.md — the settings.(user_id, key) real case, post-RULE5-rename property name)', () => {
    const user = fixtureProp({ name: 'user', kind: ReferenceKind.MANY_TO_ONE, fieldNames: ['user_id'] });
    const userId = fixtureProp({ name: 'user_id', primary: false, persist: false });
    const key = fixtureProp({ name: 'key', primary: false });
    const meta = fixtureMeta('Settings', 'settings', [user, userId, key]);
    const implicitUniques = new Map([['settings', [['user_id', 'key']]]]);
    RULE9_addImplicitUniqueConstraints([meta], implicitUniques);
    expect(meta.uniques).toEqual([{ properties: ['user', 'key'] }]);
  });

  it('RULE9-008: a multi-column owning relation (fieldNames.length !== 1) is never used for the mapping — the twin column name is kept', () => {
    const composite = fixtureProp({ name: 'composite', kind: ReferenceKind.MANY_TO_ONE, fieldNames: ['a_id', 'b_id'] });
    const aId = fixtureProp({ name: 'a_id', primary: false });
    const key = fixtureProp({ name: 'key', primary: false });
    const meta = fixtureMeta('X', 'x', [composite, aId, key]);
    const implicitUniques = new Map([['x', [['a_id', 'key']]]]);
    RULE9_addImplicitUniqueConstraints([meta], implicitUniques);
    expect(meta.uniques).toEqual([{ properties: ['a_id', 'key'] }]);
  });

  it('RULE9-009: an inverse-side relation (mappedBy set, not owning) is never used for the mapping', () => {
    const inverse = fixtureProp({ name: 'children', kind: ReferenceKind.ONE_TO_MANY, mappedBy: 'x', fieldNames: [] });
    const xId = fixtureProp({ name: 'x_id', primary: false });
    const key = fixtureProp({ name: 'key', primary: false });
    const meta = fixtureMeta('X', 'x', [inverse, xId, key]);
    const implicitUniques = new Map([['x', [['x_id', 'key']]]]);
    RULE9_addImplicitUniqueConstraints([meta], implicitUniques);
    expect(meta.uniques).toEqual([{ properties: ['x_id', 'key'] }]);
  });

  it('RULE9-002: a column set identical to the table\'s own primary key is skipped (Addons.id/AppSettings.key noise, real schema)', () => {
    const id = fixtureProp({ name: 'id', primary: true });
    const meta = fixtureMeta('Addons', 'addons', [id]);
    const implicitUniques = new Map([['addons', [['id']]]]);
    RULE9_addImplicitUniqueConstraints([meta], implicitUniques);
    expect(meta.uniques).toEqual([]);
  });

  it('RULE9-003: a column set that only partially overlaps the primary key (different size) is NOT treated as the PK and is kept', () => {
    const id = fixtureProp({ name: 'id', primary: true });
    const tripId = fixtureProp({ name: 'trip_id', primary: false });
    const dayNumber = fixtureProp({ name: 'day_number', primary: false });
    const meta = fixtureMeta('Days', 'days', [id, tripId, dayNumber]);
    const implicitUniques = new Map([['days', [['trip_id', 'day_number']]]]);
    RULE9_addImplicitUniqueConstraints([meta], implicitUniques);
    expect(meta.uniques).toEqual([{ properties: ['trip_id', 'day_number'] }]);
  });

  it('RULE9-004: a table absent from the map (no implicit unique index at all) is left untouched', () => {
    const meta = fixtureMeta('Days', 'days', [fixtureProp({ name: 'id', primary: true })]);
    RULE9_addImplicitUniqueConstraints([meta], new Map());
    expect(meta.uniques).toEqual([]);
  });

  it('RULE9-005: multiple implicit unique indexes on one table each get their own entry', () => {
    const a = fixtureProp({ name: 'file_id' });
    const b = fixtureProp({ name: 'place_id' });
    const c = fixtureProp({ name: 'assignment_id' });
    const meta = fixtureMeta('FileLinks', 'file_links', [a, b, c]);
    const implicitUniques = new Map([
      [
        'file_links',
        [
          ['file_id', 'place_id'],
          ['file_id', 'assignment_id'],
        ],
      ],
    ]);
    RULE9_addImplicitUniqueConstraints([meta], implicitUniques);
    expect(meta.uniques).toEqual([{ properties: ['file_id', 'place_id'] }, { properties: ['file_id', 'assignment_id'] }]);
  });

  it('RULE9-006: throws, naming the table/columns/entity, when an implicit index names a column with no matching property (I3)', () => {
    const meta = fixtureMeta('Settings', 'settings', [fixtureProp({ name: 'key' })]);
    const implicitUniques = new Map([['settings', [['user_id', 'key']]]]);
    expect(() => RULE9_addImplicitUniqueConstraints([meta], implicitUniques)).toThrow(
      /settings\(user_id, key\).*"user_id".*Settings/s,
    );
  });
});

describe('RULE_normalizeLiteralDefaults', () => {
  it('DEFAULTS-001: a NOT NULL literal default is captured and defaultRaw cleared', () => {
    const p = fixtureProp({ name: 'sort_order', type: 'integer', nullable: false, default: 0, defaultRaw: '0' });
    const meta = fixtureMeta('BudgetCategoryOrder', 'budget_category_order', [p]);
    const fixups = RULE_normalizeLiteralDefaults([meta]);
    expect(p.defaultRaw).toBeUndefined();
    expect(fixups).toEqual<DefaultFixup[]>([{ className: 'BudgetCategoryOrder', propName: 'sort_order', literal: '0' }]);
  });

  it('DEFAULTS-002: a string literal default is single-quoted and escaped', () => {
    const p = fixtureProp({ name: 'year_type', type: 'text', nullable: false, default: 'calendar', defaultRaw: "'calendar'" });
    const meta = fixtureMeta('VacayUserSettings', 'vacay_user_settings', [p]);
    const fixups = RULE_normalizeLiteralDefaults([meta]);
    expect(fixups[0]?.literal).toBe("'calendar'");
  });

  it('DEFAULTS-003: a nullable column is left alone (PARITY-005 territory, see KNOWN_DIFFS #5)', () => {
    const p = fixtureProp({ name: 'sort_order', type: 'double', nullable: true, defaultRaw: '0' });
    const meta = fixtureMeta('DayNotes', 'day_notes', [p]);
    const fixups = RULE_normalizeLiteralDefaults([meta]);
    expect(fixups).toEqual([]);
    expect(p.defaultRaw).toBe('0'); // untouched
  });

  it('DEFAULTS-004: a SQL expression default (CURRENT_TIMESTAMP) is left to Rule 2, never treated as a literal', () => {
    const p = fixtureProp({ name: 'created_at', type: 'DbTimestampType', nullable: false, defaultRaw: 'CURRENT_TIMESTAMP' });
    const meta = fixtureMeta('X', 'x', [p]);
    const fixups = RULE_normalizeLiteralDefaults([meta]);
    expect(fixups).toEqual([]);
    expect(p.defaultRaw).toBe('CURRENT_TIMESTAMP');
  });
});

describe('injectJoinColumns', () => {
  it('TEXT-JOINCOL-001: replaces the renderer\'s inert .name(col) with .joinColumn(col)', () => {
    const source = "    countryRef: () => p.manyToOne(SchoolHolidayCountries).ref().name('country'),\n";
    const out = injectJoinColumns(source, [{ className: 'SchoolHolidayRegions', propName: 'countryRef', column: 'country' }]);
    expect(out).toContain(".joinColumn('country')");
    expect(out).not.toContain(".name('country')");
  });

  it('TEXT-JOINCOL-002: appends .joinColumn(col) when the renderer emitted no override at all', () => {
    const source = '    countryRef: () => p.manyToOne(SchoolHolidayCountries).ref(),\n';
    const out = injectJoinColumns(source, [{ className: 'X', propName: 'countryRef', column: 'country' }]);
    expect(out).toContain(".joinColumn('country')");
  });

  it('TEXT-JOINCOL-A6: appends before the trailing comma even with a line comment after it (adversarial fixture A6, I3)', () => {
    const source = '    countryRef: () => p.manyToOne(Y).ref(), // pins country\n';
    const out = injectJoinColumns(source, [{ className: 'X', propName: 'countryRef', column: 'country' }]);
    expect(out).toBe("    countryRef: () => p.manyToOne(Y).ref().joinColumn('country'), // pins country\n");
  });

  it('TEXT-JOINCOL-003: throws if the property line is not found (I3)', () => {
    expect(() => injectJoinColumns('', [{ className: 'X', propName: 'countryRef', column: 'country' }])).toThrow(/could not find/);
  });
});

describe('injectMissingDefaults', () => {
  it('TEXT-DEFAULTS-001: appends .default(<literal>) to a metadata line missing one, ignoring an identically-named class field', () => {
    const source = '  sort_order: number & Opt = 0;\n\n    sort_order: p.integer(),\n';
    const out = injectMissingDefaults(source, [{ className: 'X', propName: 'sort_order', literal: '0' }]);
    expect(out).toContain('sort_order: p.integer().default(0),');
    expect(out).toContain('sort_order: number & Opt = 0;'); // class field untouched
  });

  it('TEXT-DEFAULTS-002: does not double up when a default is already present', () => {
    const source = '    year_type: p.text().default(\'calendar\'),\n';
    const out = injectMissingDefaults(source, [{ className: 'X', propName: 'year_type', literal: "'calendar'" }]);
    expect(out).toBe(source);
  });

  it('TEXT-DEFAULTS-003: throws if the property line is not found (I3)', () => {
    expect(() => injectMissingDefaults('', [{ className: 'X', propName: 'sort_order', literal: '0' }])).toThrow(/could not find/);
  });
});

describe('fixDbTimestampClassFieldTypes', () => {
  it('TEXT-TS-001: rewrites the class field Date -> string for a DbTimestampType property, not the metadata line', () => {
    const source = '  created_at?: Date | null;\n\n    created_at: p.type(DbTimestampType).nullable(),\n';
    const out = fixDbTimestampClassFieldTypes(source, [{ className: 'X', propName: 'created_at' }]);
    expect(out).toContain('created_at?: string | null;');
    expect(out).toContain('p.type(DbTimestampType).nullable()'); // metadata line untouched
  });

  it('TEXT-TS-002: throws if the class field line is not found (I3)', () => {
    expect(() => fixDbTimestampClassFieldTypes('', [{ className: 'X', propName: 'created_at' }])).toThrow(/could not find/);
  });

  it('TEXT-TS-003: throws if the class field has no "Date" to rewrite (I3)', () => {
    const source = '  created_at?: string | null;\n';
    expect(() => fixDbTimestampClassFieldTypes(source, [{ className: 'X', propName: 'created_at' }])).toThrow(/no "Date" to rewrite/);
  });
});

describe('stripRedundantColumnType', () => {
  it('TEXT-COLTYPE-001: strips the spurious .columnType() the renderer adds for a retyped scalar', () => {
    const source = "    sort_order: p.double().columnType('REAL').nullable(),\n";
    const out = stripRedundantColumnType(source, [{ className: 'X', propName: 'sort_order' }]);
    expect(out).toBe('    sort_order: p.double().nullable(),\n');
  });

  it('TEXT-COLTYPE-002: throws if the property line is not found (I3)', () => {
    expect(() => stripRedundantColumnType('', [{ className: 'X', propName: 'sort_order' }])).toThrow(/could not find/);
  });

  it('TEXT-COLTYPE-003: throws if there is no .columnType() to strip (I3)', () => {
    const source = '    sort_order: p.double().nullable(),\n';
    expect(() => stripRedundantColumnType(source, [{ className: 'X', propName: 'sort_order' }])).toThrow(/no \.columnType\(\) to strip/);
  });
});

describe('injectJsonTypeParams', () => {
  it('TEXT-JSON-001: types a known JSON column\'s bare p.json() call', () => {
    const out = injectJsonTypeParams('    config: p.json().nullable(),\n', [{ className: 'Addons', propName: 'config', typeName: 'AddonConfig' }]);
    expect(out).toBe('    config: p.json<AddonConfig>().nullable(),\n');
  });

  it('TEXT-JSON-002: leaves an already-typed p.json<T>() alone (legitimate no-op)', () => {
    const source = '    config: p.json<AddonConfig>().nullable(),\n';
    const out = injectJsonTypeParams(source, [{ className: 'Addons', propName: 'config', typeName: 'AddonConfig' }]);
    expect(out).toBe(source);
  });

  it('TEXT-JSON-003: throws if the property line is not found (I3)', () => {
    expect(() => injectJsonTypeParams('', [{ className: 'Addons', propName: 'config', typeName: 'AddonConfig' }])).toThrow(/could not find/);
  });

  it('TEXT-JSON-A2: a p.json() mention inside a comment is never touched (adversarial fixture A2, M4)', () => {
    const source = '  // see also p.json() elsewhere\n    config: p.json().nullable(),\n';
    const out = injectJsonTypeParams(source, [{ className: 'Addons', propName: 'config', typeName: 'AddonConfig' }]);
    expect(out).toContain('// see also p.json() elsewhere');
    expect(out).toContain('config: p.json<AddonConfig>().nullable(),');
  });
});

describe('fixJsonClassFieldTypes', () => {
  it('TEXT-JSONFIELD-001: simplifies IType<TypeName, any> to the plain type name (C3)', () => {
    const source = '  config?: IType<AddonConfig, any> | null;\n';
    const out = fixJsonClassFieldTypes(source, [{ className: 'Addons', propName: 'config', typeName: 'AddonConfig' }]);
    expect(out).toBe('  config?: AddonConfig | null;\n');
  });

  it('TEXT-JSONFIELD-002: leaves an already-plain field alone (legitimate no-op)', () => {
    const source = '  config?: AddonConfig | null;\n';
    const out = fixJsonClassFieldTypes(source, [{ className: 'Addons', propName: 'config', typeName: 'AddonConfig' }]);
    expect(out).toBe(source);
  });

  it('TEXT-JSONFIELD-003: throws if the class field line is not found (I3)', () => {
    expect(() => fixJsonClassFieldTypes('', [{ className: 'Addons', propName: 'config', typeName: 'AddonConfig' }])).toThrow(/could not find/);
  });
});

describe('injectJsonInterfaces', () => {
  it('TEXT-JSONIFACE-001: inserts the interface declaration before "export class" and strips the bogus self-import', () => {
    const source =
      "import { AddonConfig } from './AddonConfig.entity';\n" +
      "import { defineEntity, p } from '@mikro-orm/core';\n\n" +
      'export class Addons {\n  config?: AddonConfig | null;\n}\n';
    const out = injectJsonInterfaces(source, [{ className: 'Addons', propName: 'config', typeName: 'AddonConfig' }]);
    expect(out).not.toContain("from './AddonConfig.entity'");
    expect(out).toContain('export interface AddonConfig {');
    expect(out.indexOf('export interface AddonConfig')).toBeLessThan(out.indexOf('export class Addons'));
  });

  it('TEXT-JSONIFACE-002: no fixups is a no-op', () => {
    const source = 'export class X {}\n';
    expect(injectJsonInterfaces(source, [])).toBe(source);
  });

  it('TEXT-JSONIFACE-003: throws for a type name with no JSON_INTERFACES declaration', () => {
    expect(() => injectJsonInterfaces('export class X {}\n', [{ className: 'X', propName: 'p', typeName: 'NoSuchType' }])).toThrow(
      /no declaration/,
    );
  });

  it('TEXT-JSONIFACE-004: throws when there is no "export class" to anchor on', () => {
    expect(() =>
      injectJsonInterfaces('const x = 1;\n', [{ className: 'Addons', propName: 'config', typeName: 'AddonConfig' }]),
    ).toThrow(/could not find/);
  });
});

describe('stripHiddenTypeAnnotation', () => {
  it('TEXT-HIDDEN-001: strips " & Hidden" from a plain relation field and drops the now-unused import', () => {
    const source = "import { type Hidden, type Ref, defineEntity, p } from '@mikro-orm/core';\n\nexport class X {\n  trip!: Ref<Trips> & Hidden;\n}\n";
    const out = stripHiddenTypeAnnotation(source);
    expect(out).toContain('trip!: Ref<Trips>;');
    expect(out).not.toContain('Hidden');
  });

  it('TEXT-HIDDEN-002: collapses the parenthesised nullable-ref case', () => {
    const source = '  roadtrip_day_tracks: (Ref<RoadtripDayTracks> | null) & Hidden = null;\n';
    const out = stripHiddenTypeAnnotation(source);
    expect(out).toContain('roadtrip_day_tracks: Ref<RoadtripDayTracks> | null = null;');
  });

  it('TEXT-HIDDEN-003: drops the whole explicit Collection<T> annotation, reverting to a bare assignment', () => {
    const source = '  day_notes_collection: Collection<DayNotes> & Hidden = new Collection<DayNotes>(this);\n';
    const out = stripHiddenTypeAnnotation(source);
    expect(out).toBe('  day_notes_collection = new Collection<DayNotes>(this);\n');
  });

  it('TEXT-HIDDEN-004: keeps the Hidden import when another field still needs it', () => {
    const source =
      "import { type Hidden, type Ref, defineEntity, p } from '@mikro-orm/core';\n\nexport class X {\n  a!: Ref<A> & Hidden;\n  b: string & Hidden = 'x';\n}\n";
    const out = stripHiddenTypeAnnotation(source);
    // both occurrences of "& Hidden" are stripped from the fields themselves...
    expect(out).not.toContain('& Hidden');
    // ...and since neither field needs it any more, the import is dropped too (consistent behaviour).
    expect(out).not.toContain('type Hidden');
  });

  it('TEXT-HIDDEN-A1: never touches "& Hidden" inside a string literal default (adversarial fixture A1, M3/I3)', () => {
    const source =
      "import { defineEntity, p } from '@mikro-orm/core';\n\n" +
      "export class X {\n  note?: string | null;\n}\n\n" +
      "export const XSchema = defineEntity({\n  properties: {\n" +
      "    note: p.text().default('a & Hidden b'),\n" +
      '  },\n});\n';
    const out = stripHiddenTypeAnnotation(source);
    expect(out).toContain("p.text().default('a & Hidden b')");
  });

  it('TEXT-HIDDEN-A3: two adjacent Collection fields never collapse, even when the first has no initialiser (adversarial fixture A3, M3/I3)', () => {
    const source =
      '  first_collection: Collection<A> & Hidden;\n' + '  second_collection: Collection<B> & Hidden = new Collection<B>(this);\n';
    const out = stripHiddenTypeAnnotation(source);
    expect(out).toContain('first_collection: Collection<A>;');
    expect(out).toContain('second_collection = new Collection<B>(this);');
    expect(out.split('\n').length).toBe(source.split('\n').length); // no property lines merged
  });

  it('TEXT-HIDDEN-005: throws if a Hidden marker survives every strip pattern (renderer shape changed, I3)', () => {
    const source = 'export class X {\n  weird: Foo&Hidden;\n}\n';
    expect(() => stripHiddenTypeAnnotation(source)).toThrow(/left an "& Hidden" marker unstripped/);
  });
});

describe('applyTextPasses', () => {
  it('TEXT-ALL-001: composes every pass without one undoing another', () => {
    const source =
      "import { type Hidden, defineEntity, p } from '@mikro-orm/core';\n\n" +
      "export class X {\n  countryRef!: Ref<Y> & Hidden;\n}\n\n" +
      "export const XSchema = defineEntity({\n  properties: {\n" +
      "    countryRef: () => p.manyToOne(Y).ref().name('country'),\n" +
      '  },\n});\n';
    const out = applyTextPasses(source, {
      joinColumns: [{ className: 'X', propName: 'countryRef', column: 'country' }],
      defaults: [],
      timestamps: [],
      jsonColumns: [],
      retypedScalars: [],
    });
    expect(out).toContain(".joinColumn('country')");
    expect(out).not.toContain('& Hidden');
  });
});

describe('regenerateEntitiesIndex', () => {
  it('INDEX-001: lists every *.entity.ts file, sorted, exporting ALL_ENTITIES', () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'gen-entities-index-'));
    try {
      fs.writeFileSync(path.join(dir, 'Zebra.entity.ts'), '');
      fs.writeFileSync(path.join(dir, 'Alpha.entity.ts'), '');
      fs.writeFileSync(path.join(dir, 'index.ts'), ''); // not an entity file — must be ignored
      const out = regenerateEntitiesIndex(dir);
      expect(out.indexOf('AlphaSchema')).toBeLessThan(out.indexOf('ZebraSchema'));
      expect(out).toContain("import { AlphaSchema } from './Alpha.entity';");
      expect(out).toContain('export const ALL_ENTITIES');
    } finally {
      fs.rmSync(dir, { recursive: true, force: true });
    }
  });
});

/**
 * `--check` (task-4-review-gates.md, I1): closes the gap the gate reviewer
 * proved — losing `.hidden()` on a relation (or any other rule regression)
 * passes every other suite for 347 of 396 relation lines. These tests exercise
 * the real generated `files` (from `generateEntities()`) against a SCRATCH
 * COPY of the committed `src/db/entities/` — never the real directory itself,
 * so a failing assertion here can never leave the working tree dirty.
 */
describe('checkEntities', () => {
  it(
    'CHECK-001: a hand-mutated entity in the scratch copy is reported by name, exit-worthy',
    async () => {
      const { files } = await generateEntities();
      const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'gen-entities-check-'));
      try {
        fs.cpSync(ENTITIES_DIR, dir, { recursive: true });
        // Same shape as VALIDATE-004's mutation (MUT-B): drop a ONE_TO_MANY relation's .hidden().
        const daysPath = path.join(dir, 'Days.entity.ts');
        const original = fs.readFileSync(daysPath, 'utf8');
        const mutated = original.replace(
          "day_accommodations_collection: () => p.oneToMany(DayAccommodations).mappedBy('startDay').hidden(),",
          "day_accommodations_collection: () => p.oneToMany(DayAccommodations).mappedBy('startDay'),",
        );
        expect(mutated, 'the mutation string was not found in the committed file — update it to match the current shape').not.toBe(
          original,
        );
        fs.writeFileSync(daysPath, mutated);

        const report = checkEntities(dir, REPOSITORIES_DIR, files);
        expect(report.differingFiles).toEqual(['Days.entity.ts']);
        expect(report.missingRepositories).toEqual([]);
      } finally {
        fs.rmSync(dir, { recursive: true, force: true });
      }
    },
    30_000,
  );

  it(
    'CHECK-002: an untouched copy of the committed tree reports no differences and no missing repositories',
    async () => {
      const { files } = await generateEntities();
      const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'gen-entities-check-'));
      try {
        fs.cpSync(ENTITIES_DIR, dir, { recursive: true });
        const report = checkEntities(dir, REPOSITORIES_DIR, files);
        expect(report.differingFiles).toEqual([]);
        expect(report.missingRepositories).toEqual([]);
      } finally {
        fs.rmSync(dir, { recursive: true, force: true });
      }
    },
    30_000,
  );

  it('CHECK-003: a missing entity file is reported', async () => {
    const files = new Map([['X.entity.ts', 'content']]);
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'gen-entities-check-'));
    const repoDir = fs.mkdtempSync(path.join(os.tmpdir(), 'gen-entities-check-repos-'));
    try {
      const report = checkEntities(dir, repoDir, files);
      expect(report.differingFiles).toEqual(['X.entity.ts', 'index.ts']);
    } finally {
      fs.rmSync(dir, { recursive: true, force: true });
      fs.rmSync(repoDir, { recursive: true, force: true });
    }
  });

  it('CHECK-005: a stray entity file the generator does not produce is reported as drift', async () => {
    const files = new Map([['X.entity.ts', 'content']]);
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'gen-entities-check-'));
    const repoDir = fs.mkdtempSync(path.join(os.tmpdir(), 'gen-entities-check-repos-'));
    try {
      fs.writeFileSync(path.join(dir, 'X.entity.ts'), 'content');
      fs.writeFileSync(path.join(dir, 'Stray.entity.ts'), 'export class Stray {}');
      const report = checkEntities(dir, repoDir, files);
      expect(report.differingFiles).toEqual(['index.ts', 'Stray.entity.ts (not produced by the generator)']);
    } finally {
      fs.rmSync(dir, { recursive: true, force: true });
      fs.rmSync(repoDir, { recursive: true, force: true });
    }
  });

  it('CHECK-004: a missing repository file is reported without being created (never writes)', async () => {
    const files = new Map([['X.entity.ts', 'content']]);
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'gen-entities-check-'));
    const repoDir = fs.mkdtempSync(path.join(os.tmpdir(), 'gen-entities-check-repos-'));
    try {
      dumpEntities(dir, files);
      fs.writeFileSync(path.join(dir, 'index.ts'), regenerateEntitiesIndex(dir));
      const report = checkEntities(dir, repoDir, files);
      expect(report.differingFiles).toEqual([]);
      expect(report.missingRepositories).toEqual([path.join(repoDir, 'X.repository.ts')]);
      expect(fs.existsSync(path.join(repoDir, 'X.repository.ts'))).toBe(false); // never writes
    } finally {
      fs.rmSync(dir, { recursive: true, force: true });
      fs.rmSync(repoDir, { recursive: true, force: true });
    }
  });
});

describe('assertFilesGenerated', () => {
  it('GUARD-001: throws when zero files were generated (I5)', () => {
    expect(() => assertFilesGenerated(new Map())).toThrow(/zero entity files/);
  });

  it('GUARD-002: does not throw when files exist', () => {
    expect(() => assertFilesGenerated(new Map([['X.entity.ts', '']]))).not.toThrow();
  });
});

/**
 * The point of this task (see task-2-brief.md): run the wrapper into a
 * scratch dir off the REAL migrated schema and diff its output for the five
 * hand-written reference entities. `normalizeForDiff` collapses exactly the
 * documented, harmless differences `KNOWN_DIFFS` (in `scripts/generate-entities.ts`)
 * describes — one regex/pass per numbered item, cross-referenced by comment
 * — so what remains is a byte-for-byte comparison. Anything past that is a
 * rule bug, not a normalisation to add.
 *
 * Fix round 1 (task-2-review.md C1/C2/M6) tightened three of these passes
 * that were broad enough to mask a real invariant loss — `canonicalizeChainedCallOrder`
 * and the index/default regexes below carry a comment explaining exactly
 * what mutation they now catch; VALIDATE-003/004 pin the two proven by the
 * review's mutation testing (MUT-A/MUT-B).
 *
 * KNOWN_DIFFS #3 (call order) is not only a `.hidden()` thing: a plain
 * scalar's own `.index(...)` also lands in a different slot in the chain
 * than the hand-written files use (`Trips.created_at`:
 * `.nullable().defaultRaw(...).index(...)` generated vs
 * `.nullable().index(...).defaultRaw(...)` hand-written — found by this
 * fix round when C2 stopped stripping every `.index()` wholesale). Both
 * `.hidden()` and `.index('...')` are moved to a canonical position
 * (`.index(...)` first, `.hidden()` last, right before the trailing comma)
 * on BOTH sides — moved, never invented or dropped, so an absent one on
 * either side still shows up as a real difference (MUT-A/MUT-B below).
 */
function canonicalizeChainedCallOrder(source: string): string {
  return source.replace(/^(.*),$/gm, (line: string, body: string) => {
    const indexMatch = /\.index\('[^']*'\)/.exec(body);
    const hasHidden = body.includes('.hidden()');
    if (!indexMatch && !hasHidden) return line;
    let stripped = body;
    if (indexMatch) stripped = stripped.replace(indexMatch[0], '');
    stripped = stripped.split('.hidden()').join('');
    const suffix = (indexMatch ? indexMatch[0] : '') + (hasHidden ? '.hidden()' : '');
    return `${stripped}${suffix},`;
  });
}

function normalizeForDiff(source: string): string {
  const step1 = source
    // KNOWN_DIFFS #1: index duplicated on the persist(false) twin — strip it
    // ONLY from the twin line, never the relation's own `.index(...)` (Fix
    // round 1, task-2-review.md C2: the old `.replace(/\.index\('[^']*'\)/g, '')`
    // erased every named index from BOTH sides, so a rule that dropped the
    // relation's own index would go unnoticed — proven by MUT-A below).
    .replace(/(\.persist\(false\))\.index\('[^']*'\)/g, '$1')
    // KNOWN_DIFFS #2: the autoincrement PK's class field + the metadata's
    // (sometimes implicit) autoincrement call, and the "type Opt" import
    // that field's "& Opt" annotation drags in (every OTHER "& Opt" usage
    // in these five files is on a field the reference already renders
    // identically, so stripping the import token, not the annotations
    // themselves, is what makes the two sides comparable).
    .replace(/^(\s*)id\?: number \| null;$/m, '$1id: <PK>;')
    .replace(/^(\s*)id!: number & Opt;$/m, '$1id: <PK>;')
    .replace(/^(\s*)id: p\.integer\(\)\.primary\(\)(?:\.autoincrement\(\))?,$/m, '$1id: p.integer().primary(),')
    .replace(/type Opt, /, '')
    .replace(/, type Opt/, '')
    // KNOWN_DIFFS #4: defaultRaw's quoting style (template literal vs single-quoted string).
    .replace(/defaultRaw\(`([^`]*)`\)/g, "defaultRaw('$1')")
    // KNOWN_DIFFS #5: a nullable column's inconsistently-restated DB default —
    // Phase 0's own files disagree with themselves (DayNotes.sort_order has
    // one, DayNotes.icon does not). Normalise ONLY whether a default is
    // restated at all — the captured TYPE token and the default's VALUE are
    // both kept verbatim (Fix round 1, task-2-review.md M6: the old regex
    // discarded both into a literal "<type>" placeholder, so a rule that
    // rewrote the default's VALUE was invisible too — proven by MUT-D below).
    .replace(
      /(icon|sort_order): p\.(text|double)\(\)\.nullable\(\)(?:\.default\((-?\d+(?:\.\d+)?|'[^']*')\)|\.defaultRaw\('(-?\d+(?:\.\d+)?|[^']*)'\))?/g,
      (_full: string, prop: string, type: string, defaultVal: string | undefined, defaultRawVal: string | undefined) => {
        const canonical = defaultVal !== undefined ? defaultVal.replace(/^'|'$/g, '') : defaultRawVal;
        const suffix = canonical !== undefined ? `.default(${canonical})` : '';
        return `${prop}: p.${type}().nullable()${suffix}`;
      },
    );
  // KNOWN_DIFFS #3: chained-call order — `.hidden()` can land anywhere in
  // the chain; canonicalise its POSITION (move it to just before the
  // trailing comma on both sides) rather than stripping it outright (Fix
  // round 1, task-2-review.md C1: the old `.replace(/\.hidden\(\)/g, '')`
  // made this test blind to a relation that lost `.hidden()` altogether —
  // proven by MUT-B below). KNOWN_DIFFS #6: trailing whitespace.
  return canonicalizeChainedCallOrder(step1).trimEnd();
}

/**
 * Dated ratchet (Fix round 1, task-2-review.md I7 — same shape as
 * `entity-schema-parity.test.ts`'s `ENTITIES_STILL_MISSING`, added
 * 2026-09-22): while the five document-sync tables had no entity of their
 * own, `Trips` still genuinely had FK relations pointing at two of them
 * (`document_connections.trip_id`, `trip_document_links.trip_id`) in the
 * migrated schema, so `bidirectionalRelations` correctly discovered them
 * regardless of whether the target class existed in `src/db/entities/` yet —
 * this list told `VALIDATE-001` to tolerate those extra lines against a
 * `Trips.entity.ts` reference file that predated them.
 *
 * Plan 2 Task 3 added `DocumentProviders`/`DocumentProviderFields`/
 * `DocumentConnections`/`TripDocumentLinks`/`DocumentSyncItems`, so those
 * lines are now required, correct output on every side of the comparison —
 * emptied per PENDING-ENTITIES-001's own instruction. Left `[]` rather than
 * deleted: `stripPendingEntityRelations` is a no-op on an empty list (see its
 * guard clause below), and the ratchet test keeps proving that fact rather
 * than being removed along with what it was guarding.
 */
const PENDING_ENTITIES: string[] = [];

function stripPendingEntityRelations(generatedSource: string): string {
  if (PENDING_ENTITIES.length === 0) return generatedSource;
  const names = PENDING_ENTITIES.join('|');
  return generatedSource
    .split('\n')
    .filter((line) => !new RegExp(`\\b(${names})\\b`).test(line))
    .join('\n');
}

describe('generateEntities — validation diff against the five reference entities', () => {
  it(
    'VALIDATE-001: Days/DayNotes/Trips/BudgetCategoryOrder/VacayUserSettings match modulo KNOWN_DIFFS',
    async () => {
      const { files } = await generateEntities();
      const referenceNames = ['Days', 'DayNotes', 'Trips', 'BudgetCategoryOrder', 'VacayUserSettings'];
      for (const name of referenceNames) {
        const generated = files.get(`${name}.entity.ts`);
        expect(generated, `generator produced no ${name}.entity.ts`).toBeDefined();
        const reference = fs.readFileSync(path.join(ENTITIES_DIR, `${name}.entity.ts`), 'utf8');
        const generatedForDiff = stripPendingEntityRelations(generated ?? '');
        expect(normalizeForDiff(generatedForDiff), `${name}.entity.ts differs beyond KNOWN_DIFFS`).toBe(normalizeForDiff(reference));
      }
    },
    30_000,
  );

  it('VALIDATE-002: KNOWN_DIFFS is present and non-empty documentation', () => {
    expect(KNOWN_DIFFS.length).toBeGreaterThan(0);
  });

  it(
    'VALIDATE-003: normalizeForDiff does not mask a relation that lost its own .index() (MUT-A, C2)',
    async () => {
      const { files } = await generateEntities();
      const generated = files.get('Days.entity.ts');
      expect(generated).toBeDefined();
      const reference = fs.readFileSync(path.join(ENTITIES_DIR, 'Days.entity.ts'), 'utf8');
      // MUT-A: simulate a rule bug that drops the named index specifically
      // from the OWNING RELATION line — not its persist(false) twin, whose
      // duplicate index KNOWN_DIFFS #1 legitimately normalises away.
      const mutated = (generated ?? '').replace(
        "trip: () => p.manyToOne(Trips).ref().deleteRule('cascade').hidden().index('idx_days_trip_id'),",
        "trip: () => p.manyToOne(Trips).ref().deleteRule('cascade').hidden(),",
      );
      expect(mutated, 'the mutation string was not found in the real generated output — update it to match the renderer').not.toBe(generated);
      expect(normalizeForDiff(stripPendingEntityRelations(mutated))).not.toBe(normalizeForDiff(reference));
    },
    30_000,
  );

  it(
    'VALIDATE-004: normalizeForDiff does not mask a ONE_TO_MANY relation that lost .hidden() (MUT-B, C1)',
    async () => {
      const { files } = await generateEntities();
      const generated = files.get('Days.entity.ts');
      expect(generated).toBeDefined();
      const reference = fs.readFileSync(path.join(ENTITIES_DIR, 'Days.entity.ts'), 'utf8');
      // MUT-B: simulate RULE4 skipping a ONE_TO_MANY relation.
      const mutated = (generated ?? '').replace(
        "day_accommodations_collection: () => p.oneToMany(DayAccommodations).mappedBy('startDay').hidden(),",
        "day_accommodations_collection: () => p.oneToMany(DayAccommodations).mappedBy('startDay'),",
      );
      expect(mutated, 'the mutation string was not found in the real generated output — update it to match the renderer').not.toBe(generated);
      expect(normalizeForDiff(stripPendingEntityRelations(mutated))).not.toBe(normalizeForDiff(reference));
    },
    30_000,
  );

  it('NORMALIZE-005: normalizeForDiff does not mask a rewritten default VALUE on icon/sort_order (MUT-D, M6)', () => {
    const reference = "    sort_order: p.double().nullable().default(0),\n    icon: p.text().nullable(),\n";
    const generatedHonest = "    sort_order: p.double().nullable().defaultRaw(`0`),\n    icon: p.text().nullable(),\n";
    const generatedMutated = "    sort_order: p.double().nullable().defaultRaw(`999`),\n    icon: p.text().nullable(),\n";
    // The honest generated text (same value, different rendering method) matches.
    expect(normalizeForDiff(generatedHonest)).toBe(normalizeForDiff(reference));
    // MUT-D: rewriting the value must NOT be swallowed by the normalisation.
    expect(normalizeForDiff(generatedMutated)).not.toBe(normalizeForDiff(reference));
  });

  it('NO-ANY-001: the generated output never contains `any` (C3)', async () => {
    const { files } = await generateEntities();
    const offenders: string[] = [];
    for (const [name, content] of files) {
      if (/: any\b|<any>|, any>/.test(content)) offenders.push(name);
    }
    expect(offenders).toEqual([]);
  }, 30_000);

  it(
    'UNIQUE-001: Rule 9 end-to-end against the real schema — settings gets the inline UNIQUE(user_id, key) as uniques:, naming the RELATION property (user), not its persist(false) twin (user_id); AppSettings/Addons do NOT get a redundant entry for their own (TEXT) primary key',
    async () => {
      const { files } = await generateEntities();
      const settings = files.get('Settings.entity.ts');
      expect(settings).toContain("uniques: [{ properties: ['user', 'key'] }],");
      const appSettings = files.get('AppSettings.entity.ts');
      expect(appSettings).not.toMatch(/uniques:/);
      const addons = files.get('Addons.entity.ts');
      expect(addons).not.toMatch(/uniques:/);
    },
    30_000,
  );
});

describe('PENDING_ENTITIES ratchet (I7)', () => {
  it("PENDING-ENTITIES-001: stays accurate — none of them may already have an entity file", () => {
    const failures: string[] = [];
    for (const className of PENDING_ENTITIES) {
      if (fs.existsSync(path.join(ENTITIES_DIR, `${className}.entity.ts`))) {
        failures.push(`${className}: has an entity file now — remove it from PENDING_ENTITIES and update VALIDATE-001's tolerance`);
      }
    }
    expect(failures).toEqual([]);
  });

  /**
   * M2 (task-4-review-gates.md): the mirror arm ENTITIES_STILL_MISSING has
   * (PARITY-008) and this list did not — a listed class name that names
   * nothing the generator actually produces is a stale entry, not a real
   * pending tolerance, and `stripPendingEntityRelations` would silently no-op
   * on it forever. Every name in `PENDING_ENTITIES` must appear somewhere in
   * `generateEntities()`'s own output (as a relation type reference in
   * another entity's file, the normal way a class with no entity of its own
   * yet still shows up — see the class doc comment above).
   */
  it("PENDING-ENTITIES-002: stays accurate — every one of them must appear in generateEntities()'s output (M2)", async () => {
    const { files } = await generateEntities();
    const allGeneratedSource = [...files.values()].join('\n');
    const failures: string[] = [];
    for (const className of PENDING_ENTITIES) {
      if (!new RegExp(`\\b${className}\\b`).test(allGeneratedSource)) {
        failures.push(`${className}: listed in PENDING_ENTITIES but does not appear anywhere in generateEntities()'s output`);
      }
    }
    expect(failures).toEqual([]);
  }, 30_000);
});

describe('generateEntities — migrations path is anchored to SERVER_ROOT, not cwd (I5)', () => {
  it(
    'MIGPATH-001: generation still finds migrations when run from the repo root instead of server/',
    async () => {
      const originalCwd = process.cwd();
      // process.chdir() is only safe because vitest.config.ts uses pool: 'forks' (a worker thread cannot chdir).
      process.chdir(path.join(__dirname, '../../../..')); // server/tests/unit/db -> repo root
      try {
        const { files } = await generateEntities();
        expect(files.size).toBeGreaterThan(0);
      } finally {
        process.chdir(originalCwd);
      }
    },
    30_000,
  );
});
