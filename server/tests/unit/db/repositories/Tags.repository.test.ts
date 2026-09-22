import { afterAll, beforeAll, beforeEach, describe, expect, it, vi } from 'vitest';
import { createSnapshotTestDb } from '../../../helpers/db-mock';
import { resetTestDb } from '../../../helpers/test-db';
import { createTestOrm, type TestOrm } from '../../../helpers/test-orm';
import { createTag, createUser } from '../../../helpers/factories';
import { Tags } from '../../../../src/db/entities/Tags.entity';
import type { TagsRepository } from '../../../../src/db/repositories/Tags.repository';

const testDb = createSnapshotTestDb();
let t: TestOrm;
let tags: TagsRepository;

beforeAll(async () => {
  t = await createTestOrm(testDb);
  tags = t.repo(Tags) as TagsRepository;
});
beforeEach(() => { resetTestDb(testDb); t.clear(); });
afterAll(async () => { await t.close(); testDb.close(); });

function rawTag(id: number): unknown {
  return testDb.prepare('SELECT * FROM tags WHERE id = ?').get(id);
}

async function withQueryCount<T>(fn: () => Promise<T>): Promise<{ value: T; queries: number }> {
  const connection = t.orm.em.getConnection();
  const spy = vi.spyOn(connection, 'execute');
  try {
    const value = await fn();
    return { value, queries: spy.mock.calls.length };
  } finally {
    spy.mockRestore();
  }
}

describe('TagsRepository', () => {
  describe('listByUser', () => {
    it('TAGREPO-001: a row read through listByUser is the SELECT * row, key for key', async () => {
      const { user } = createUser(testDb);
      const created = createTag(testDb, user.id, { name: 'RepoListRow' });
      const [row] = await tags.listByUser(user.id);
      expect(row).toStrictEqual(rawTag(created.id));
    });

    it('TAGREPO-002: ordered by name ascending', async () => {
      const { user } = createUser(testDb);
      createTag(testDb, user.id, { name: 'Zebra' });
      createTag(testDb, user.id, { name: 'Apple' });
      createTag(testDb, user.id, { name: 'Mango' });
      expect((await tags.listByUser(user.id)).map((r) => r.name)).toEqual(['Apple', 'Mango', 'Zebra']);
    });

    it('TAGREPO-003: owner visibility — excludes another user\'s tags entirely (tags has no globally-shared row, unlike categories)', async () => {
      const { user: a } = createUser(testDb);
      const { user: b } = createUser(testDb);
      createTag(testDb, a.id, { name: 'MineA' });
      createTag(testDb, b.id, { name: 'MineB' });
      const rows = await tags.listByUser(a.id);
      expect(rows).toHaveLength(1);
      expect(rows[0].name).toBe('MineA');
    });

    it('TAGREPO-004: an owner with no tags gets an empty list', async () => {
      const { user } = createUser(testDb);
      expect(await tags.listByUser(user.id)).toEqual([]);
    });
  });

  describe('findByIdAndUser', () => {
    it('TAGREPO-005: finds a row the given user owns', async () => {
      const { user } = createUser(testDb);
      const created = createTag(testDb, user.id, { name: 'FindMe' });
      expect(await tags.findByIdAndUser(created.id, user.id)).toStrictEqual(rawTag(created.id));
    });

    it('TAGREPO-006: owner visibility — refuses a tag owned by a different user', async () => {
      const { user: owner } = createUser(testDb);
      const { user: stranger } = createUser(testDb);
      const created = createTag(testDb, owner.id, { name: 'Private' });
      expect(await tags.findByIdAndUser(created.id, stranger.id)).toBeNull();
    });

    it('TAGREPO-007: returns null for a non-existent id', async () => {
      const { user } = createUser(testDb);
      expect(await tags.findByIdAndUser(99999999, user.id)).toBeNull();
    });

    it('TAGREPO-008: the scalar user_id twin hydrates without loading the user relation', async () => {
      const { user } = createUser(testDb);
      const created = createTag(testDb, user.id, { name: 'Twin' });
      const entity = await t.repo(Tags).findOne({ id: created.id, user: user.id });
      expect(entity?.user_id).toBe(user.id);
      expect(entity?.user.isInitialized()).toBe(false);
    });

    // I1 (Task 0 review): findByIdAndUser carries `{ refresh: true }` (via
    // the shared findOwnedByUser helper), the ruling every Plan 3 PK read
    // follows. This call's filter is `{ id, user }`, not PK-only, so it
    // always re-queries and merges fresh data regardless of `refresh` (Task
    // 3 review, Important 2's correction: the identity-map short-circuit
    // fires only for an exactly-PK filter, not for a `fields` restriction)
    // — this proves the (still correct) outcome in one query rather than a
    // refresh-vs-no-refresh contrast.
    it('TAGREPO-009: a raw UPDATE on the same row then findByIdAndUser reads the new value, in one query', async () => {
      const { user } = createUser(testDb);
      const created = createTag(testDb, user.id, { name: 'Stale', color: '#111111' });
      expect((await tags.findByIdAndUser(created.id, user.id))?.color).toBe('#111111'); // populate the identity map
      testDb.prepare('UPDATE tags SET color = ? WHERE id = ?').run('#222222', created.id);
      const { value, queries } = await withQueryCount(() => tags.findByIdAndUser(created.id, user.id));
      expect(value?.color).toBe('#222222');
      expect(queries).toBe(1);
    });
  });

  describe('createTag', () => {
    it('TAGREPO-010: inserts and returns exactly the row the legacy re-select returned', async () => {
      const { user } = createUser(testDb);
      const row = await tags.createTag({ user_id: user.id, name: 'Beach', color: '#ff0000' });
      expect(row).toStrictEqual(rawTag(row.id));
      expect(row.name).toBe('Beach');
      expect(row.color).toBe('#ff0000');
      expect(row.user_id).toBe(user.id);
      expect(typeof row.created_at).toBe('string');
    });

    it('TAGREPO-011: writes exactly what it is given — no defaulting inside the repository', async () => {
      const { user } = createUser(testDb);
      const row = await tags.createTag({ user_id: user.id, name: 'NoDefault', color: 'literal-color' });
      expect(row.color).toBe('literal-color');
    });
  });

  describe('patch', () => {
    it('TAGREPO-012: updates both name and color when both are given', async () => {
      const { user } = createUser(testDb);
      const created = createTag(testDb, user.id, { name: 'Old', color: '#aaaaaa' });
      const updated = await tags.patch(created.id, { name: 'New', color: '#bbbbbb' });
      expect(updated).toStrictEqual(rawTag(created.id));
      expect(updated?.name).toBe('New');
      expect(updated?.color).toBe('#bbbbbb');
    });

    it('TAGREPO-013: an omitted key is left untouched — does not touch other columns', async () => {
      const { user } = createUser(testDb);
      const created = createTag(testDb, user.id, { name: 'KeepName', color: '#cccccc' });
      const updated = await tags.patch(created.id, { color: '#dddddd' });
      expect(updated?.name).toBe('KeepName');
      expect(updated?.color).toBe('#dddddd');
    });

    it('TAGREPO-014: not scoped by user_id, matching the legacy statement exactly — patches a row regardless of which user owns it', async () => {
      const { user: owner } = createUser(testDb);
      const created = createTag(testDb, owner.id, { name: 'AnyonesToPatch' });
      const updated = await tags.patch(created.id, { name: 'Patched' });
      expect(updated?.name).toBe('Patched');
    });

    it('TAGREPO-015: returns null for a non-existent id', async () => {
      expect(await tags.patch(99999999, { name: 'Nope' })).toBeNull();
    });

    // Task 3 review, Important 1, consequence (a) — and Minor 1: the
    // identity map is populated through `listByUser()` here, not
    // `findByIdAndUser`, so this doubles as the "list → raw UPDATE →
    // patch" case the review asked for. Without `refresh: true` in
    // `patch`'s lookup, `name` would still read the pre-UPDATE 'OLD'
    // (verified: fails without the fix).
    it('TAGREPO-019: an untouched column reflects a raw UPDATE made after the identity map was populated by listByUser()', async () => {
      const { user } = createUser(testDb);
      const created = createTag(testDb, user.id, { name: 'OLD', color: '#aaaaaa' });
      await tags.listByUser(user.id); // populate the identity map with name: 'OLD'
      testDb.prepare('UPDATE tags SET name = ? WHERE id = ?').run('NEW', created.id);
      const updated = await tags.patch(created.id, { color: '#bbbbbb' });
      expect(updated?.name).toBe('NEW');
    });

    // Task 3 review, Important 1, consequence (b): without `refresh: true`,
    // MikroORM diffs the patch against the stale in-memory snapshot; when
    // the concurrent raw write and the patch happen to agree on the value,
    // no changeset is produced and the UPDATE is silently dropped even
    // though the method reports success. The raw-row assertion is what
    // catches it — `updated?.color` alone would still read '#111111'
    // either way (verified: fails without the fix).
    it('TAGREPO-020: a patch matching a concurrent raw write is not silently dropped', async () => {
      const { user } = createUser(testDb);
      const created = createTag(testDb, user.id, { name: 'RaceColor', color: '#111111' });
      await tags.findByIdAndUser(created.id, user.id); // populate the identity map with '#111111'
      testDb.prepare('UPDATE tags SET color = ? WHERE id = ?').run('#333333', created.id);
      const updated = await tags.patch(created.id, { color: '#111111' });
      expect(updated?.color).toBe('#111111');
      expect(rawTag(created.id)).toMatchObject({ color: '#111111' });
    });

    // Task 3 review, Important 1, consequence (c): `remove` uses
    // `nativeDelete`, which does not clear the identity map, so a stale
    // patch afterwards could fabricate a row for an id that no longer
    // exists instead of returning `null` (verified: fails without the fix).
    it('TAGREPO-021: patch after remove in the same request returns null, not a fabricated row', async () => {
      const { user } = createUser(testDb);
      const created = createTag(testDb, user.id, { name: 'RaceDelete', color: '#444444' });
      await tags.findByIdAndUser(created.id, user.id); // populate the identity map
      await tags.remove(created.id);
      expect(await tags.patch(created.id, { color: '#555555' })).toBeNull();
    });
  });

  describe('remove', () => {
    it('TAGREPO-016: deletes the row and returns the affected count', async () => {
      const { user } = createUser(testDb);
      const created = createTag(testDb, user.id, { name: 'ToDelete' });
      expect(await tags.remove(created.id)).toBe(1);
      expect(await tags.findByIdAndUser(created.id, user.id)).toBeNull();
    });

    it('TAGREPO-017: removing a non-existent id returns 0 and does not throw', async () => {
      await expect(tags.remove(99999999)).resolves.toBe(0);
    });

    it('TAGREPO-018: removing one tag does not affect others', async () => {
      const { user } = createUser(testDb);
      const keep = createTag(testDb, user.id, { name: 'Keep' });
      const gone = createTag(testDb, user.id, { name: 'Gone' });
      await tags.remove(gone.id);
      const remaining = await tags.listByUser(user.id);
      expect(remaining).toHaveLength(1);
      expect(remaining[0].id).toBe(keep.id);
    });
  });
});
