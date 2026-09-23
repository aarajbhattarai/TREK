/**
 * TripMembersRepository.rosterUserIds (Plan 3c Task 0b): the legacy
 * `DatabaseService.rosterUserIds` statement in intent — `SELECT user_id FROM
 * trip_members WHERE trip_id = ? UNION SELECT user_id FROM trips WHERE id =
 * ?` — as two reads merged through a `Set`. Real rows, on the real test DB,
 * through the same `TestOrm` harness `Trips.repository.test.ts` uses.
 */
import { afterAll, beforeAll, beforeEach, describe, expect, it } from 'vitest';
import { createSnapshotTestDb } from '../../../helpers/db-mock';
import { resetTestDb } from '../../../helpers/test-db';
import { createTestOrm, type TestOrm } from '../../../helpers/test-orm';
import { addTripMember, createTrip, createUser } from '../../../helpers/factories';
import { TripMembers } from '../../../../src/db/entities/TripMembers.entity';
import type { TripMembersRepository } from '../../../../src/db/repositories/TripMembers.repository';

const testDb = createSnapshotTestDb();
let t: TestOrm;
let tripMembers: TripMembersRepository;

beforeAll(async () => {
  t = await createTestOrm(testDb);
  tripMembers = t.repo(TripMembers);
});
beforeEach(() => { resetTestDb(testDb); t.clear(); });
afterAll(async () => { await t.close(); testDb.close(); });

const legacyRoster = (tripId: number): Set<number> => {
  const rows = testDb
    .prepare('SELECT user_id FROM trip_members WHERE trip_id = ? UNION SELECT user_id FROM trips WHERE id = ?')
    .all(tripId, tripId) as { user_id: number }[];
  return new Set(rows.map((r) => r.user_id));
};

describe('TripMembersRepository.rosterUserIds — parity with the legacy UNION statement', () => {
  it('TMEMREPO-001: an owner-only trip (no members row) still yields the owner', async () => {
    const { user: owner } = createUser(testDb);
    const trip = createTrip(testDb, owner.id);
    expect(await tripMembers.rosterUserIds(trip.id)).toEqual(new Set([owner.id]));
    expect(await tripMembers.rosterUserIds(trip.id)).toEqual(legacyRoster(trip.id));
  });

  it('TMEMREPO-002: owner + members are deduped into one set, in either read order', async () => {
    const { user: owner } = createUser(testDb);
    const { user: memberA } = createUser(testDb);
    const { user: memberB } = createUser(testDb);
    const trip = createTrip(testDb, owner.id);
    addTripMember(testDb, trip.id, memberA.id);
    addTripMember(testDb, trip.id, memberB.id);

    const roster = await tripMembers.rosterUserIds(trip.id);
    expect(roster).toEqual(new Set([owner.id, memberA.id, memberB.id]));
    expect(roster).toEqual(legacyRoster(trip.id));
  });

  it('TMEMREPO-003: a member row for the owner (edge case) still dedupes to one id, not a Set of size 2', async () => {
    const { user: owner } = createUser(testDb);
    const trip = createTrip(testDb, owner.id);
    addTripMember(testDb, trip.id, owner.id);
    const roster = await tripMembers.rosterUserIds(trip.id);
    expect(roster).toEqual(new Set([owner.id]));
    expect(roster.size).toBe(1);
  });

  it('TMEMREPO-004: a trip belonging to someone else never leaks its roster into another trip\'s read', async () => {
    const { user: ownerA } = createUser(testDb);
    const { user: ownerB } = createUser(testDb);
    const { user: memberOfA } = createUser(testDb);
    const tripA = createTrip(testDb, ownerA.id);
    const tripB = createTrip(testDb, ownerB.id);
    addTripMember(testDb, tripA.id, memberOfA.id);

    expect(await tripMembers.rosterUserIds(tripB.id)).toEqual(new Set([ownerB.id]));
  });

  it('TMEMREPO-005: a missing trip id yields an empty set, not a throw', async () => {
    const missingId = 999999;
    expect(await tripMembers.rosterUserIds(missingId)).toEqual(new Set());
    expect(legacyRoster(missingId)).toEqual(new Set());
  });

  it('TMEMREPO-006: a non-numeric-looking id finds nothing, the same raw-bind seam TripsRepository documents', async () => {
    expect(await tripMembers.rosterUserIds('abc')).toEqual(new Set());
  });
});

// Plan 3c Task 1 (TB2/TB5/TB6): TripMembershipService.listMemberUserIds/
// joinTripAsMember's own check-then-act sequence.
describe('TripMembersRepository — listUserIdsByTrip / exists / addMember (Plan 3c Task 1)', () => {
  it('TMEMREPO-007: listUserIdsByTrip excludes the owner and orders by added_at ASC', async () => {
    const { user: owner } = createUser(testDb);
    const { user: first } = createUser(testDb);
    const { user: second } = createUser(testDb);
    const trip = createTrip(testDb, owner.id);
    addTripMember(testDb, trip.id, first.id);
    testDb.prepare('UPDATE trip_members SET added_at = ? WHERE trip_id = ? AND user_id = ?').run('2026-01-01 00:00:00', trip.id, first.id);
    addTripMember(testDb, trip.id, second.id);
    testDb.prepare('UPDATE trip_members SET added_at = ? WHERE trip_id = ? AND user_id = ?').run('2026-02-01 00:00:00', trip.id, second.id);

    expect(await tripMembers.listUserIdsByTrip(trip.id)).toEqual([first.id, second.id]);
  });

  it('TMEMREPO-008: listUserIdsByTrip returns an empty array for an owner-only trip', async () => {
    const { user: owner } = createUser(testDb);
    const trip = createTrip(testDb, owner.id);
    expect(await tripMembers.listUserIdsByTrip(trip.id)).toEqual([]);
  });

  it('TMEMREPO-009: exists is true only for an actual (trip, user) membership row', async () => {
    const { user: owner } = createUser(testDb);
    const { user: member } = createUser(testDb);
    const { user: stranger } = createUser(testDb);
    const trip = createTrip(testDb, owner.id);
    addTripMember(testDb, trip.id, member.id);

    expect(await tripMembers.exists(trip.id, member.id)).toBe(true);
    expect(await tripMembers.exists(trip.id, stranger.id)).toBe(false);
    // The owner has no trip_members row unless one was explicitly added.
    expect(await tripMembers.exists(trip.id, owner.id)).toBe(false);
  });

  it('TMEMREPO-010: addMember inserts a row with the given invited_by, nullable', async () => {
    const { user: owner } = createUser(testDb);
    const { user: inviter } = createUser(testDb);
    const { user: joiner } = createUser(testDb);
    const trip = createTrip(testDb, owner.id);

    await tripMembers.addMember(trip.id, joiner.id, inviter.id);
    const row = testDb.prepare('SELECT trip_id, user_id, invited_by FROM trip_members WHERE trip_id = ? AND user_id = ?').get(trip.id, joiner.id);
    expect(row).toEqual({ trip_id: trip.id, user_id: joiner.id, invited_by: inviter.id });

    const { user: joiner2 } = createUser(testDb);
    await tripMembers.addMember(trip.id, joiner2.id, null);
    const row2 = testDb.prepare('SELECT invited_by FROM trip_members WHERE trip_id = ? AND user_id = ?').get(trip.id, joiner2.id);
    expect(row2).toEqual({ invited_by: null });
  });
});
