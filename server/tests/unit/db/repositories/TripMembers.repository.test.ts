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
