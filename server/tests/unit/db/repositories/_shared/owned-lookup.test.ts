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

    const rows = await listForOwner<Tags>(tags, 'user', owner.id, 'name');
    expect(rows.map((r) => r.name)).toEqual(['Apple', 'Zebra']);
    expect(rows.every((r) => r.user_id === owner.id)).toBe(true);
  });

  it('OWNEDLOOKUP-002: an owner with no rows gets an empty list', async () => {
    const { user: owner } = createUser(testDb);
    expect(await listForOwner<Tags>(tags, 'user', owner.id, 'name')).toEqual([]);
  });
});

describe('findOwnedByUser', () => {
  it('OWNEDLOOKUP-003: finds a row the given user owns', async () => {
    const { user: owner } = createUser(testDb);
    const tag = createTag(testDb, owner.id, { name: 'Mine' });
    const found = await findOwnedByUser<Tags>(tags, tag.id, 'user', owner.id);
    expect(found?.id).toBe(tag.id);
    expect(found?.name).toBe('Mine');
  });

  it('OWNEDLOOKUP-004: refuses a row owned by somebody else', async () => {
    const { user: owner } = createUser(testDb);
    const { user: stranger } = createUser(testDb);
    const tag = createTag(testDb, owner.id, { name: 'Mine' });
    expect(await findOwnedByUser<Tags>(tags, tag.id, 'user', stranger.id)).toBeNull();
  });

  it('OWNEDLOOKUP-005: returns null for an id that does not exist', async () => {
    const { user: owner } = createUser(testDb);
    expect(await findOwnedByUser<Tags>(tags, 999999, 'user', owner.id)).toBeNull();
  });
});

describe('findOwnedOrGlobal', () => {
  it('OWNEDLOOKUP-006: finds a row the given user owns — Categories (a permissively-owned entity, user_id nullable)', async () => {
    const { user: owner } = createUser(testDb);
    const category = createCategory(testDb, { name: 'Mine', user_id: owner.id });
    const found = await findOwnedOrGlobal<Categories>(categories, category.id, 'user', owner.id);
    expect(found?.id).toBe(category.id);
  });

  it('OWNEDLOOKUP-007: finds a row with no owner at all (a globally-shared row)', async () => {
    const { user: someone } = createUser(testDb);
    const global = createCategory(testDb, { name: 'Global', user_id: null });
    const found = await findOwnedOrGlobal<Categories>(categories, global.id, 'user', someone.id);
    expect(found?.id).toBe(global.id);
  });

  it('OWNEDLOOKUP-008: refuses a row owned by somebody else — a non-null owner that is not the caller is not global', async () => {
    const { user: owner } = createUser(testDb);
    const { user: stranger } = createUser(testDb);
    const category = createCategory(testDb, { name: 'Theirs', user_id: owner.id });
    expect(await findOwnedOrGlobal<Categories>(categories, category.id, 'user', stranger.id)).toBeNull();
  });

  it('OWNEDLOOKUP-009: returns null for an id that does not exist', async () => {
    const { user: someone } = createUser(testDb);
    expect(await findOwnedOrGlobal<Categories>(categories, 999999, 'user', someone.id)).toBeNull();
  });
});
