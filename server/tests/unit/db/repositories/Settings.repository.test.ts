import { afterAll, beforeAll, beforeEach, describe, expect, it } from 'vitest';
import { createSnapshotTestDb } from '../../../helpers/db-mock';
import { resetTestDb } from '../../../helpers/test-db';
import { createTestOrm, type TestOrm } from '../../../helpers/test-orm';
import { createUser, type TestUser } from '../../../helpers/factories';
import { Settings } from '../../../../src/db/entities/Settings.entity';
import type { SettingsRepository } from '../../../../src/db/repositories/Settings.repository';

const testDb = createSnapshotTestDb();
let t: TestOrm;
let settings: SettingsRepository;
let user: TestUser;
let otherUser: TestUser;

beforeAll(async () => {
  t = await createTestOrm(testDb);
  settings = t.repo(Settings) as SettingsRepository;
});
beforeEach(() => {
  resetTestDb(testDb);
  t.clear();
  user = createUser(testDb).user;
  otherUser = createUser(testDb).user;
});
afterAll(async () => {
  await t.close();
  testDb.close();
});

function rawRow(userId: number, key: string): unknown {
  return testDb.prepare('SELECT * FROM settings WHERE user_id = ? AND key = ?').get(userId, key);
}

function insertRaw(userId: number, key: string, value: string | null): void {
  testDb.prepare('INSERT INTO settings (user_id, key, value) VALUES (?, ?, ?)').run(userId, key, value);
}

describe('settings table — the (user_id, key) unique index the ON CONFLICT target relies on', () => {
  it(
    "UNIQUE-SCHEMA-001: PRAGMA index_list('settings') reports a unique index over exactly (user_id, key), the migrated schema's inline UNIQUE(user_id, key)",
    () => {
      const indexes = testDb.prepare("PRAGMA index_list('settings')").all() as { name: string; unique: number }[];
      const uniqueIndexes = indexes.filter((idx) => idx.unique);
      expect(uniqueIndexes.length).toBeGreaterThan(0);
      const columnSets = uniqueIndexes.map((idx) => {
        const cols = testDb.prepare(`PRAGMA index_info('${idx.name}')`).all() as { seqno: number; name: string }[];
        return [...cols].sort((a, b) => a.seqno - b.seqno).map((c) => c.name);
      });
      expect(columnSets).toContainEqual(['user_id', 'key']);
    },
  );

  it('UNIQUE-SCHEMA-002: the Settings entity metadata declares the same (user, key) unique constraint (fix(db): generator captures inline UNIQUE constraints)', () => {
    const meta = t.orm.getMetadata(Settings);
    expect(meta.uniques).toContainEqual({ properties: ['user_id', 'key'] });
  });
});

describe('SettingsRepository', () => {
  it('SETTINGSREPO-001: getForUser reads every row for that user', async () => {
    insertRaw(user.id, 'dark_mode', 'true');
    insertRaw(user.id, 'temperature_unit', 'celsius');
    insertRaw(otherUser.id, 'dark_mode', 'false'); // a different user's row — must not leak in
    const rows = await settings.getForUser(user.id);
    expect(rows.map((r) => r.key).sort()).toEqual(['dark_mode', 'temperature_unit']);
    expect(rows.every((r) => r.user_id === user.id)).toBe(true);
  });

  it('SETTINGSREPO-002: getForUser for a user with no rows returns an empty array', async () => {
    expect(await settings.getForUser(user.id)).toEqual([]);
  });

  it('SETTINGSREPO-003: getOne reads a single (user, key) row', async () => {
    insertRaw(user.id, 'dark_mode', 'true');
    const row = await settings.getOne(user.id, 'dark_mode');
    expect(row).not.toBeNull();
    expect(row?.value).toBe('true');
    expect(row?.user_id).toBe(user.id);
  });

  it('SETTINGSREPO-004: getOne returns null when unset', async () => {
    expect(await settings.getOne(user.id, 'does_not_exist')).toBeNull();
  });

  it("SETTINGSREPO-005: getOne scopes strictly by user — another user's row for the same key never leaks", async () => {
    insertRaw(otherUser.id, 'dark_mode', 'true');
    expect(await settings.getOne(user.id, 'dark_mode')).toBeNull();
  });

  it('SETTINGSREPO-006: upsertForUser inserts a new row exactly as the legacy INSERT would', async () => {
    await settings.upsertForUser(user.id, 'dark_mode', 'true');
    expect(rawRow(user.id, 'dark_mode')).toMatchObject({ user_id: user.id, key: 'dark_mode', value: 'true' });
  });

  it('SETTINGSREPO-007: upsertForUser on an existing (user, key) replaces the value only — no duplicate row, matching ON CONFLICT(user_id, key) DO UPDATE SET value = excluded.value', async () => {
    insertRaw(user.id, 'dark_mode', 'false');
    await settings.upsertForUser(user.id, 'dark_mode', 'true');
    expect(rawRow(user.id, 'dark_mode')).toMatchObject({ user_id: user.id, key: 'dark_mode', value: 'true' });
    expect(
      testDb.prepare('SELECT COUNT(*) as c FROM settings WHERE user_id = ? AND key = ?').get(user.id, 'dark_mode'),
    ).toEqual({ c: 1 });
  });

  it("SETTINGSREPO-008: upsertForUser scopes by user — the same key for two different users stores two separate rows, not a collision (the conflict target is (user, key), not key alone)", async () => {
    await settings.upsertForUser(user.id, 'dark_mode', 'true');
    await settings.upsertForUser(otherUser.id, 'dark_mode', 'false');
    expect(rawRow(user.id, 'dark_mode')).toMatchObject({ value: 'true' });
    expect(rawRow(otherUser.id, 'dark_mode')).toMatchObject({ value: 'false' });
  });

  it('SETTINGSREPO-009: deleteForUser with a key deletes only that (user, key) row and reports the legacy DELETE-affected-row count', async () => {
    insertRaw(user.id, 'dark_mode', 'true');
    insertRaw(user.id, 'temperature_unit', 'celsius');
    expect(await settings.deleteForUser(user.id, 'dark_mode')).toBe(1);
    expect(rawRow(user.id, 'dark_mode')).toBeUndefined();
    expect(rawRow(user.id, 'temperature_unit')).toBeDefined();
  });

  it('SETTINGSREPO-010: deleteForUser without a key deletes every row for that user only', async () => {
    insertRaw(user.id, 'dark_mode', 'true');
    insertRaw(user.id, 'temperature_unit', 'celsius');
    insertRaw(otherUser.id, 'dark_mode', 'false');
    expect(await settings.deleteForUser(user.id)).toBe(2);
    expect(await settings.getForUser(user.id)).toEqual([]);
    expect(rawRow(otherUser.id, 'dark_mode')).toBeDefined();
  });

  it('SETTINGSREPO-011: deleteForUser on a missing key is a no-op that reports 0 rows', async () => {
    expect(await settings.deleteForUser(user.id, 'does_not_exist')).toBe(0);
  });

  // Identity-map regression: the short-circuit (Task 0 review, I1; corrected
  // by the Task 3 review) only fires for a PRIMARY-KEY-ONLY findOne
  // (`findOne({ id })`/`findOne(pk)`) — `getOne`'s filter is `(user, key)`,
  // never the surrogate `id` PK, so it is not PK-only and always re-queries,
  // needing no `refresh: true`. These pin that directly rather than assume it.
  it('SETTINGSREPO-012: getOne sees a raw UPDATE on the same (user, key) in the same request', async () => {
    insertRaw(user.id, 'dark_mode', 'old');
    expect((await settings.getOne(user.id, 'dark_mode'))?.value).toBe('old'); // populate the identity map
    testDb.prepare('UPDATE settings SET value = ? WHERE user_id = ? AND key = ?').run('new', user.id, 'dark_mode');
    expect((await settings.getOne(user.id, 'dark_mode'))?.value).toBe('new');
  });

  it('SETTINGSREPO-013: getOne sees a raw DELETE on the same (user, key) in the same request', async () => {
    insertRaw(user.id, 'dark_mode', 'old');
    expect((await settings.getOne(user.id, 'dark_mode'))?.value).toBe('old'); // populate the identity map
    testDb.prepare('DELETE FROM settings WHERE user_id = ? AND key = ?').run(user.id, 'dark_mode');
    expect(await settings.getOne(user.id, 'dark_mode')).toBeNull();
  });
});
