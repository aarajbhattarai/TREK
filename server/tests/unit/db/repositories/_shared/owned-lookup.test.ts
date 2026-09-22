import { afterAll, beforeAll, beforeEach, describe, expect, it } from 'vitest';
import { createSnapshotTestDb } from '../../../../helpers/db-mock';
import { resetTestDb } from '../../../../helpers/test-db';
import { createTestOrm, type TestOrm } from '../../../../helpers/test-orm';
import { createCategory, createTag, createUser } from '../../../../helpers/factories';
import { Categories } from '../../../../../src/db/entities/Categories.entity';
import { Tags } from '../../../../../src/db/entities/Tags.entity';
import type { CategoriesRepository } from '../../../../../src/db/repositories/Categories.repository';
import type { TagsRepository } from '../../../../../src/db/repositories/Tags.repository';
import { findOwnedByUser, findOwnedOrGlobal, listForOwner } from '../../../../../src/db/repositories/_shared/owned-lookup';

const testDb = createSnapshotTestDb();
let t: TestOrm;
let categories: CategoriesRepository;
let tags: TagsRepository;

beforeAll(async () => {
  t = await createTestOrm(testDb);
  categories = t.repo(Categories) as CategoriesRepository;
  tags = t.repo(Tags) as TagsRepository;
});
beforeEach(() => { resetTestDb(testDb); t.clear(); });
afterAll(async () => { await t.close(); testDb.close(); });

describe('listForOwner', () => {
  it('OWNEDLOOKUP-001: lists only the owner’s rows, ordered by the given field ascending — Tags (a strictly-owned entity, user_id NOT NULL)', async () => {
    const { user: owner } = createUser(testDb);
    const { user: other } = createUser(testDb);
    createTag(testDb, owner.id, { name: 'Zebra' });
    createTag(testDb, owner.id, { name: 'Apple' });
    createTag(testDb, other.id, { name: 'Middle' });

    // Type arguments are always explicit: inference from the `tags` argument alone
    // resolves T to the `{ id: unknown }` constraint (TS2345), never to the entity.
    const rows = await listForOwner<Tags, 'user', 'name'>(tags, 'user', owner.id, 'name');
    expect(rows.map((r) => r.name)).toEqual(['Apple', 'Zebra']);
    expect(rows.every((r) => r.user_id === owner.id)).toBe(true);
  });

  it('OWNEDLOOKUP-002: an owner with no rows gets an empty list', async () => {
    const { user: owner } = createUser(testDb);
    expect(await listForOwner<Tags, 'user', 'name'>(tags, 'user', owner.id, 'name')).toEqual([]);
  });
});

describe('findOwnedByUser', () => {
  it('OWNEDLOOKUP-003: finds a row the given user owns', async () => {
    const { user: owner } = createUser(testDb);
    const tag = createTag(testDb, owner.id, { name: 'Mine' });
    const found = await findOwnedByUser<Tags, 'user'>(tags, tag.id, 'user', owner.id);
    expect(found?.id).toBe(tag.id);
    expect(found?.name).toBe('Mine');
  });

  it('OWNEDLOOKUP-004: refuses a row owned by somebody else', async () => {
    const { user: owner } = createUser(testDb);
    const { user: stranger } = createUser(testDb);
    const tag = createTag(testDb, owner.id, { name: 'Mine' });
    expect(await findOwnedByUser<Tags, 'user'>(tags, tag.id, 'user', stranger.id)).toBeNull();
  });

  it('OWNEDLOOKUP-005: returns null for an id that does not exist', async () => {
    const { user: owner } = createUser(testDb);
    expect(await findOwnedByUser<Tags, 'user'>(tags, 999999, 'user', owner.id)).toBeNull();
  });
});

describe('findOwnedOrGlobal', () => {
  it('OWNEDLOOKUP-006: finds a row the given user owns — Categories (a permissively-owned entity, user_id nullable)', async () => {
    const { user: owner } = createUser(testDb);
    const category = createCategory(testDb, { name: 'Mine', user_id: owner.id });
    const found = await findOwnedOrGlobal<Categories, 'user'>(categories, category.id, 'user', owner.id);
    expect(found?.id).toBe(category.id);
  });

  it('OWNEDLOOKUP-007: finds a row with no owner at all (a globally-shared row)', async () => {
    const { user: someone } = createUser(testDb);
    const global = createCategory(testDb, { name: 'Global', user_id: null });
    const found = await findOwnedOrGlobal<Categories, 'user'>(categories, global.id, 'user', someone.id);
    expect(found?.id).toBe(global.id);
  });

  it('OWNEDLOOKUP-008: refuses a row owned by somebody else — a non-null owner that is not the caller is not global', async () => {
    const { user: owner } = createUser(testDb);
    const { user: stranger } = createUser(testDb);
    const category = createCategory(testDb, { name: 'Theirs', user_id: owner.id });
    expect(await findOwnedOrGlobal<Categories, 'user'>(categories, category.id, 'user', stranger.id)).toBeNull();
  });

  it('OWNEDLOOKUP-009: returns null for an id that does not exist', async () => {
    const { user: someone } = createUser(testDb);
    expect(await findOwnedOrGlobal<Categories, 'user'>(categories, 999999, 'user', someone.id)).toBeNull();
  });
});

/**
 * Type-only probes (Task 0 review, I2): each of these would have compiled
 * clean under the old `id: unknown` / `ownerId: unknown` / `T extends
 * object` signatures — that was the finding. They must fail `tsc` now, and
 * `typecheck:tests` (which runs over this file) is the gate that proves it;
 * nothing here executes at runtime. `@ts-expect-error` itself fails the
 * build if the line stops erroring (a silent regression back to `unknown`),
 * so this function doubles as the regression test.
 */
function typeProbes(): void {
  // AppSettings has no `id` column — `T extends { id: unknown }` rejects it
  // as a type argument before `ownerField`/`ownerId` are even considered.
  // @ts-expect-error AppSettings has no `id` property
  void findOwnedByUser<AppSettings, 'value'>(appSettingsRepoForProbe, 1, 'value', 'whatever');

  // `id` must be a Tags id (number), not an arbitrary string.
  // @ts-expect-error id must be Tags['id'] (number), not a string
  void findOwnedByUser<Tags, 'user'>(tags, 'not-a-number', 'user', 1);

  // `ownerId` must be a value `FilterValue<Tags['user']>` accepts (the FK id
  // or the related entity) — an unrelated object literal is not one.
  // @ts-expect-error ownerId is not a value `Tags['user']` can be filtered by
  void findOwnedByUser<Tags, 'user'>(tags, 1, 'user', { nonsense: true });

  // Same two shapes for listForOwner's ownerField/ownerId pair.
  // @ts-expect-error ownerId must be Tags['user']-filterable, not a string
  void listForOwner<Tags, 'user', 'name'>(tags, 'user', 'a string owner id', 'name');

  // orderField must be a real property of Tags.
  // @ts-expect-error 'not_a_column' is not a key of Tags
  void listForOwner<Tags, 'user', 'not_a_column'>(tags, 'user', 1, 'not_a_column');

  // Same two shapes for findOwnedOrGlobal.
  // @ts-expect-error AppSettings has no `id` property
  void findOwnedOrGlobal<AppSettings, 'value'>(appSettingsRepoForProbe, 1, 'value', 'whatever');
  // @ts-expect-error ownerId is not a value `Categories['user']` can be filtered by
  void findOwnedOrGlobal<Categories, 'user'>(categories, 1, 'user', { nonsense: true });
}
void typeProbes;
declare const appSettingsRepoForProbe: import('../../../../../src/db/repositories/AppSettings.repository').AppSettingsRepository;
type AppSettings = import('../../../../../src/db/entities/AppSettings.entity').AppSettings;
