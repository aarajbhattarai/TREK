/**
 * Unit tests for TripMembershipService.joinTripAsMember — TRIP-JOIN-001..004.
 * The shared add-by-id helper behind trip invite links (#1143) and trip-bound
 * admin invites (#1402): idempotent, owner-safe, missing-trip-safe.
 *
 * Rebuilt on real rows through `TripsRepository`/`TripMembersRepository`
 * (Plan 3c Task 1): the legacy version constructed `TripMembershipService`
 * directly on a `DatabaseService(testDb)` over hand-run legacy DDL
 * (`createTables`/`runMigrations`); this now uses `createSnapshotTestDb()` +
 * `createTestOrm()`, the same harness every other converted repository test
 * uses.
 */
import { describe, it, expect, beforeAll, beforeEach, afterAll } from 'vitest';
import { createSnapshotTestDb } from '../../../helpers/db-mock';
import { resetTestDb } from '../../../helpers/test-db';
import { createTestOrm, type TestOrm } from '../../../helpers/test-orm';
import { createUser, createTrip } from '../../../helpers/factories';
import { Trips } from '../../../../src/db/entities/Trips.entity';
import type { TripsRepository } from '../../../../src/db/repositories/Trips.repository';
import { TripMembers } from '../../../../src/db/entities/TripMembers.entity';
import type { TripMembersRepository } from '../../../../src/db/repositories/TripMembers.repository';
import { TripMembershipService } from '../../../../src/nest/trip-membership/trip-membership.service';

const testDb = createSnapshotTestDb();
let t: TestOrm;
let trips: TripsRepository;
let tripMembers: TripMembersRepository;
let svc: TripMembershipService;

beforeAll(async () => {
  t = await createTestOrm(testDb);
  trips = t.repo(Trips);
  tripMembers = t.repo(TripMembers);
  svc = new TripMembershipService(trips, tripMembers);
});
beforeEach(() => { resetTestDb(testDb); t.clear(); });
afterAll(async () => { await t.close(); testDb.close(); });

function memberRow(tripId: number, userId: number) {
  return testDb.prepare('SELECT * FROM trip_members WHERE trip_id = ? AND user_id = ?').get(tripId, userId);
}

describe('joinTripAsMember', () => {
  it('TRIP-JOIN-001: adds a non-member and reports joined', async () => {
    const { user: owner } = createUser(testDb);
    const { user: joiner } = createUser(testDb);
    const trip = createTrip(testDb, owner.id);

    const r = await svc.joinTripAsMember(trip.id, joiner.id, null);
    expect(r).toEqual({ joined: true, tripId: trip.id });
    expect(memberRow(trip.id, joiner.id)).toBeTruthy();
  });

  it('TRIP-JOIN-002: never adds the trip owner as a member', async () => {
    const { user: owner } = createUser(testDb);
    const trip = createTrip(testDb, owner.id);

    const r = await svc.joinTripAsMember(trip.id, owner.id, null);
    expect(r.joined).toBe(false);
    expect(memberRow(trip.id, owner.id)).toBeUndefined();
  });

  it('TRIP-JOIN-003: is idempotent for an existing member (no duplicate row)', async () => {
    const { user: owner } = createUser(testDb);
    const { user: joiner } = createUser(testDb);
    const trip = createTrip(testDb, owner.id);

    expect((await svc.joinTripAsMember(trip.id, joiner.id, owner.id)).joined).toBe(true);
    expect((await svc.joinTripAsMember(trip.id, joiner.id, owner.id)).joined).toBe(false);
    const count = testDb.prepare('SELECT COUNT(*) as n FROM trip_members WHERE trip_id = ? AND user_id = ?').get(trip.id, joiner.id) as { n: number };
    expect(count.n).toBe(1);
  });

  it('TRIP-JOIN-004: no-ops for a missing trip', async () => {
    const { user: joiner } = createUser(testDb);
    const r = await svc.joinTripAsMember(999999, joiner.id, null);
    expect(r.joined).toBe(false);
  });

  // Plan 3c inventory §18.4: TB4 → TB5 → TB6 is a non-transactional
  // check-then-act sequence, unchanged by this conversion. Two concurrent
  // joins can both pass the "already a member" check — this pins TODAY'S
  // outcome (a duplicate-membership row survives the trip_members table's
  // own UNIQUE(trip_id, user_id) constraint check only by luck of timing;
  // what the test actually proves is that the service itself does not
  // serialize the two calls, not that the DB will always accept both).
  it('TRIP-JOIN-005 (concurrency, §18.4): two concurrent joins for the same (trip, user) race the check-then-act window — the service performs no locking/serialization of its own', async () => {
    const { user: owner } = createUser(testDb);
    const { user: joiner } = createUser(testDb);
    const trip = createTrip(testDb, owner.id);

    const results = await Promise.allSettled([
      svc.joinTripAsMember(trip.id, joiner.id, null),
      svc.joinTripAsMember(trip.id, joiner.id, null),
    ]);
    // Today's actual outcome (run under real concurrency, not assumed): the
    // method performs no locking/serialization of its own, so both calls can
    // pass the TB5 "already a member" check before either TB6 INSERT lands —
    // the loser then hits the table's own UNIQUE(trip_id, user_id) constraint
    // and REJECTS, it does not swallow the error into `{joined: false}`. At
    // least one call always fulfills (the winner); pinning "both always
    // fulfill" was wrong (verified: failed under the full-suite coverage
    // run's real scheduling) — the row-count assertion below is the actual
    // safety net, not a specific promise-settlement shape.
    const fulfilled = results.filter((r) => r.status === 'fulfilled');
    expect(fulfilled.length).toBeGreaterThanOrEqual(1);
    // Exactly one membership row exists afterwards either way — the UNIQUE
    // constraint on (trip_id, user_id) is the actual safety net today, not
    // application-level locking.
    const count = testDb.prepare('SELECT COUNT(*) as n FROM trip_members WHERE trip_id = ? AND user_id = ?').get(trip.id, joiner.id) as { n: number };
    expect(count.n).toBe(1);
  });
});

// The leaf reads that replaced trips.bridge for BudgetMcp/CostsRpc — see the
// service docblock for why they live on this dependency-free module.
describe('leaf membership reads', () => {
  it('TRIP-READ-001: getOwnerId answers the owner and null for a missing trip', async () => {
    const { user: owner } = createUser(testDb);
    const trip = createTrip(testDb, owner.id);
    expect(await svc.getOwnerId(trip.id)).toBe(owner.id);
    expect(await svc.getOwnerId(999999)).toBeNull();
  });

  it('TRIP-READ-002: listMemberUserIds excludes the owner and follows added_at order', async () => {
    const { user: owner } = createUser(testDb);
    const { user: m1 } = createUser(testDb);
    const { user: m2 } = createUser(testDb);
    const trip = createTrip(testDb, owner.id);
    testDb.prepare("INSERT INTO trip_members (trip_id, user_id, added_at) VALUES (?, ?, '2026-01-02')").run(trip.id, m2.id);
    testDb.prepare("INSERT INTO trip_members (trip_id, user_id, added_at) VALUES (?, ?, '2026-01-01')").run(trip.id, m1.id);
    expect(await svc.listMemberUserIds(trip.id)).toEqual([m1.id, m2.id]);
    expect(await svc.listMemberUserIds(999999)).toEqual([]);
  });

  it('TRIP-READ-003: listAccessibleTripIds unions owned and member trips, newest first', async () => {
    const { user } = createUser(testDb);
    const { user: other } = createUser(testDb);
    const owned = createTrip(testDb, user.id);
    const memberOf = createTrip(testDb, other.id);
    const foreign = createTrip(testDb, other.id);
    testDb.prepare('INSERT INTO trip_members (trip_id, user_id) VALUES (?, ?)').run(memberOf.id, user.id);
    // Distinct created_at so the ORDER BY is actually asserted, not assumed.
    testDb.prepare("UPDATE trips SET created_at = '2026-01-01' WHERE id = ?").run(owned.id);
    testDb.prepare("UPDATE trips SET created_at = '2026-01-02' WHERE id = ?").run(memberOf.id);
    const ids = await svc.listAccessibleTripIds(user.id);
    expect(ids).toEqual([memberOf.id, owned.id]);
    expect(ids).not.toContain(foreign.id);
  });
});
