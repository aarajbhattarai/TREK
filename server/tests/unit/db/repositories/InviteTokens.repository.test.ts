import { afterAll, beforeAll, beforeEach, describe, expect, it } from 'vitest';
import { createSnapshotTestDb } from '../../../helpers/db-mock';
import { resetTestDb } from '../../../helpers/test-db';
import { createTestOrm, type TestOrm } from '../../../helpers/test-orm';
import { createInviteToken, createTrip, createUser } from '../../../helpers/factories';
import { InviteTokens } from '../../../../src/db/entities/InviteTokens.entity';
import type { InviteTokensRepository } from '../../../../src/db/repositories/InviteTokens.repository';

const testDb = createSnapshotTestDb();
let t: TestOrm;
let invites: InviteTokensRepository;

beforeAll(async () => {
  t = await createTestOrm(testDb);
  invites = t.repo(InviteTokens);
});
beforeEach(() => { resetTestDb(testDb); t.clear(); });
afterAll(async () => { await t.close(); testDb.close(); });

function rawInvite(id: number): unknown {
  return testDb.prepare('SELECT * FROM invite_tokens WHERE id = ?').get(id);
}

describe('InviteTokensRepository', () => {
  describe('findByToken', () => {
    it('INVREPO-001: a row read through findByToken is the SELECT * row, key for key', async () => {
      const created = createInviteToken(testDb, { token: 'find-me' });
      const row = await invites.findByToken('find-me');
      expect(row).toStrictEqual(rawInvite(created.id));
    });

    it('INVREPO-002: an unknown token is null', async () => {
      expect(await invites.findByToken('does-not-exist')).toBeNull();
    });
  });

  describe('insertInvite', () => {
    it('INVREPO-003: inserts and returns exactly the row the legacy re-select would return', async () => {
      const { user } = createUser(testDb);
      const row = await invites.insertInvite({
        token: 'insert-me',
        max_uses: 3,
        expires_at: null,
        created_by: user.id,
      });
      expect(row).toStrictEqual(rawInvite(row.id));
      expect(row.token).toBe('insert-me');
      expect(row.max_uses).toBe(3);
      expect(row.used_count).toBe(0);
      expect(row.created_by).toBe(user.id);
      expect(row.trip_id).toBeNull();
      expect(typeof row.created_at).toBe('string');
    });

    it('INVREPO-004: trip_id is written when given (per-trip invite)', async () => {
      const { user } = createUser(testDb);
      const trip = createTrip(testDb, user.id);
      const row = await invites.insertInvite({
        token: 'trip-bound',
        max_uses: 1,
        expires_at: null,
        created_by: user.id,
        trip_id: trip.id,
      });
      expect(row.trip_id).toBe(trip.id);
    });
  });

  describe('incrementUsedCount', () => {
    it('INVREPO-005: under capacity — increments and returns the updated row', async () => {
      const created = createInviteToken(testDb, { token: 'under-cap', max_uses: 3 });
      const row = await invites.incrementUsedCount('under-cap');
      expect(row).not.toBeNull();
      expect(row?.used_count).toBe(1);
      expect(row).toStrictEqual(rawInvite(created.id));
    });

    it('INVREPO-006: at capacity — no row matches, returns null, used_count unchanged', async () => {
      const created = createInviteToken(testDb, { token: 'at-cap', max_uses: 1 });
      testDb.prepare('UPDATE invite_tokens SET used_count = 1 WHERE id = ?').run(created.id);
      const row = await invites.incrementUsedCount('at-cap');
      expect(row).toBeNull();
      expect((rawInvite(created.id) as { used_count: number }).used_count).toBe(1);
    });

    it('INVREPO-007: max_uses = 0 means unlimited — always increments', async () => {
      createInviteToken(testDb, { token: 'unlimited', max_uses: 0 });
      testDb.prepare("UPDATE invite_tokens SET used_count = 500 WHERE token = 'unlimited'").run();
      const row = await invites.incrementUsedCount('unlimited');
      expect(row?.used_count).toBe(501);
    });

    it('INVREPO-008: an unknown token returns null', async () => {
      expect(await invites.incrementUsedCount('nonexistent-token')).toBeNull();
    });

    it('INVREPO-009: two concurrent increments on a one-use invite — exactly one wins (D6 single-connection race safety)', async () => {
      const created = createInviteToken(testDb, { token: 'race-me', max_uses: 1 });
      const [a, b] = await Promise.all([
        invites.incrementUsedCount('race-me'),
        invites.incrementUsedCount('race-me'),
      ]);
      const results = [a, b];
      const winners = results.filter((r) => r !== null);
      const losers = results.filter((r) => r === null);
      expect(winners).toHaveLength(1);
      expect(losers).toHaveLength(1);
      expect(winners[0]?.used_count).toBe(1);
      expect((rawInvite(created.id) as { used_count: number }).used_count).toBe(1);
    });
  });
});
