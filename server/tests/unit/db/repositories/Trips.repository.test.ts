import { afterAll, beforeAll, beforeEach, describe, expect, it } from 'vitest';
import { createSnapshotTestDb } from '../../../helpers/db-mock';
import { CAN_ACCESS_TRIP_SQL, resetTestDb } from '../../../helpers/test-db';
import { createTestOrm, type TestOrm } from '../../../helpers/test-orm';
import { addTripMember, createTrip, createUser } from '../../../helpers/factories';
import { Trips } from '../../../../src/db/entities/Trips.entity';
import type { TripsRepository } from '../../../../src/db/repositories/Trips.repository';

const testDb = createSnapshotTestDb();
let t: TestOrm;
let trips: TripsRepository;

beforeAll(async () => {
  t = await createTestOrm(testDb);
  trips = t.repo(Trips);
});
beforeEach(() => { resetTestDb(testDb); t.clear(); });
afterAll(async () => { await t.close(); testDb.close(); });

const legacy = (tripId: number, userId: number) => testDb.prepare(CAN_ACCESS_TRIP_SQL).get(userId, tripId, userId);

describe('TripsRepository.findAccessible — parity with canAccessTrip', () => {
  it('TRIPREPO-001: the owner sees the trip, with the same three columns', async () => {
    const { user } = createUser(testDb);
    const trip = createTrip(testDb, user.id);
    expect(await trips.findAccessible(trip.id, user.id)).toEqual(legacy(trip.id, user.id));
    expect(await trips.findAccessible(trip.id, user.id)).toEqual({ id: trip.id, user_id: user.id, currency: 'EUR' });
  });

  it('TRIPREPO-002: a member sees it, a stranger does not', async () => {
    const { user: owner } = createUser(testDb);
    const { user: member } = createUser(testDb);
    const { user: stranger } = createUser(testDb);
    const trip = createTrip(testDb, owner.id);
    addTripMember(testDb, trip.id, member.id);
    expect(await trips.findAccessible(trip.id, member.id)).toEqual(legacy(trip.id, member.id));
    expect(await trips.findAccessible(trip.id, stranger.id)).toBeUndefined();
    expect(legacy(trip.id, stranger.id)).toBeUndefined();
  });

  it('TRIPREPO-003: a member of another trip is still a stranger here', async () => {
    const { user: owner } = createUser(testDb);
    const { user: member } = createUser(testDb);
    const a = createTrip(testDb, owner.id);
    const b = createTrip(testDb, owner.id);
    addTripMember(testDb, a.id, member.id);
    expect(await trips.findAccessible(b.id, member.id)).toBeUndefined();
  });

  it('TRIPREPO-004: a null currency comes back null, not undefined', async () => {
    const { user } = createUser(testDb);
    const trip = createTrip(testDb, user.id);
    testDb.prepare('UPDATE trips SET currency = NULL WHERE id = ?').run(trip.id);
    expect(await trips.findAccessible(trip.id, user.id)).toEqual({ id: trip.id, user_id: user.id, currency: null });
  });

  it('TRIPREPO-005: isOwner is true for the owner only', async () => {
    const { user: owner } = createUser(testDb);
    const { user: member } = createUser(testDb);
    const trip = createTrip(testDb, owner.id);
    addTripMember(testDb, trip.id, member.id);
    expect(await trips.isOwner(trip.id, owner.id)).toBe(true);
    expect(await trips.isOwner(trip.id, member.id)).toBe(false);

    // 0b security review F-B6: full parity against the legacy statement run
    // raw on the same rows, not just the boolean the method returns.
    const legacyIsOwner = (tripId: number, userId: number): boolean =>
      !!testDb.prepare('SELECT id FROM trips WHERE id = ? AND user_id = ?').get(tripId, userId);
    expect(await trips.isOwner(trip.id, owner.id)).toEqual(legacyIsOwner(trip.id, owner.id));
    expect(await trips.isOwner(trip.id, member.id)).toEqual(legacyIsOwner(trip.id, member.id));
  });

  it('TRIPREPO-007: a missing trip id resolves to undefined, not a throw, for both findAccessible and isOwner', async () => {
    const { user } = createUser(testDb);
    const missingId = 999999;
    expect(await trips.findAccessible(missingId, user.id)).toBeUndefined();
    expect(legacy(missingId, user.id)).toBeUndefined();
    expect(await trips.isOwner(missingId, user.id)).toBe(false);
  });

  it('TRIPREPO-006: toObject on a trip omits the hidden relation and every unloaded collection', async () => {
    const { user } = createUser(testDb);
    const trip = createTrip(testDb, user.id);
    const entity = await t.repo(Trips).findOneOrFail({ id: trip.id });
    const raw = testDb.prepare('SELECT * FROM trips WHERE id = ?').get(trip.id) as Record<string, unknown>;
    const { wrap } = await import('@mikro-orm/core');
    expect(wrap(entity).toObject()).toStrictEqual(raw);
  });
});

// Plan 3c Task 1 (TB1/TB3/TB4): the trip-membership primitives, added onto
// the same repository so `TripMembershipService` never touches raw SQL.
describe('TripsRepository — getOwnerId / findIdAndOwner / listAccessibleIds (Plan 3c Task 1)', () => {
  it('TRIPREPO-008: getOwnerId returns the owner id, null for a missing trip', async () => {
    const { user } = createUser(testDb);
    const trip = createTrip(testDb, user.id);
    expect(await trips.getOwnerId(trip.id)).toBe(user.id);
    expect(await trips.getOwnerId(999999)).toBeNull();
  });

  it('TRIPREPO-009: getOwnerId binds a string id raw, matching the `0x10`/`007`-shaped id parity seam', async () => {
    const { user } = createUser(testDb);
    const trip = createTrip(testDb, user.id);
    // A numeric-looking string binds fine under SQLite's affinity comparison.
    expect(await trips.getOwnerId(String(trip.id))).toBe(user.id);
    // A non-numeric string never matches any row — no throw, no coercion.
    expect(await trips.getOwnerId('not-a-number')).toBeNull();
  });

  it('TRIPREPO-010: findIdAndOwner returns {id, user_id} for a real trip, undefined for a missing one', async () => {
    const { user } = createUser(testDb);
    const trip = createTrip(testDb, user.id);
    expect(await trips.findIdAndOwner(trip.id)).toEqual({ id: trip.id, user_id: user.id });
    expect(await trips.findIdAndOwner(999999)).toBeUndefined();
  });

  it('TRIPREPO-011: listAccessibleIds returns owned + member trips, newest first, excluding a stranger\'s trips', async () => {
    const { user: owner } = createUser(testDb);
    const { user: member } = createUser(testDb);
    const { user: stranger } = createUser(testDb);
    const a = createTrip(testDb, owner.id);
    testDb.prepare('UPDATE trips SET created_at = ? WHERE id = ?').run('2026-01-01 00:00:00', a.id);
    const b = createTrip(testDb, owner.id);
    testDb.prepare('UPDATE trips SET created_at = ? WHERE id = ?').run('2026-02-01 00:00:00', b.id);
    const c = createTrip(testDb, stranger.id);
    addTripMember(testDb, c.id, member.id);

    expect(await trips.listAccessibleIds(owner.id)).toEqual([b.id, a.id]);
    expect(await trips.listAccessibleIds(member.id)).toEqual([c.id]);
    expect(await trips.listAccessibleIds(stranger.id)).toEqual([c.id]);
  });

  it('TRIPREPO-012: listAccessibleIds never double-counts a trip where the caller is both owner and, somehow, member-listed', async () => {
    const { user: owner } = createUser(testDb);
    const trip = createTrip(testDb, owner.id);
    addTripMember(testDb, trip.id, owner.id);
    expect(await trips.listAccessibleIds(owner.id)).toEqual([trip.id]);
  });
});

// Plan 3c Task 2 (DY35): `days.service.ts::insert`'s dated path extends the
// trip by one day. Owned exclusively by Task 2 per the plan's file
// ownership (`Trips.repository.ts` ONLY for `setEndDate`) — appended here
// rather than interleaved with Task 1's blocks above.
describe('TripsRepository.setEndDate (Plan 3c Task 2, DY35)', () => {
  it('TRIPREPO-013: writes end_date verbatim, including clearing it to null', async () => {
    const { user } = createUser(testDb);
    const trip = createTrip(testDb, user.id);
    await trips.setEndDate(trip.id, '2026-09-30');
    expect((testDb.prepare('SELECT end_date FROM trips WHERE id = ?').get(trip.id) as { end_date: string | null }).end_date).toBe('2026-09-30');
    await trips.setEndDate(trip.id, null);
    expect((testDb.prepare('SELECT end_date FROM trips WHERE id = ?').get(trip.id) as { end_date: string | null }).end_date).toBeNull();
  });
});

// ---------------------------------------------------------------------------
// Plan 3c Task 6 — TripMembersService (TM7/TM9/TM13) and TripReadModelService
// (TR-A/TR-B). Appended per this task's file-ownership rule (additive
// methods only, this repository is shared across tasks).
// ---------------------------------------------------------------------------

describe('TripsRepository — TripMembersService / TripReadModelService (Plan 3c Task 6)', () => {
  it('TRIPREPO-014: getTitle (TM7) reads the title, null for a missing trip', async () => {
    const { user } = createUser(testDb);
    const trip = createTrip(testDb, user.id, { title: 'Readable' });
    expect(await trips.getTitle(trip.id)).toBe('Readable');
    expect(await trips.getTitle(999999)).toBeNull();
  });

  it('TRIPREPO-015: getTitle binds a string id raw, the same `0x10`/`007`-shaped id parity seam TripsRepository documents', async () => {
    const { user } = createUser(testDb);
    const trip = createTrip(testDb, user.id, { title: 'Stringy' });
    expect(await trips.getTitle(String(trip.id))).toBe('Stringy');
    expect(await trips.getTitle('not-a-number')).toBeNull();
  });

  it('TRIPREPO-016: findIdTitleOwner (TM9) returns {id, title, user_id}, undefined for a missing trip', async () => {
    const { user } = createUser(testDb);
    const trip = createTrip(testDb, user.id, { title: 'Handover' });
    expect(await trips.findIdTitleOwner(trip.id)).toEqual({ id: trip.id, title: 'Handover', user_id: user.id });
    expect(await trips.findIdTitleOwner(999999)).toBeUndefined();
  });

  it('TRIPREPO-017: setOwner (TM13, security-sensitive) writes user_id verbatim', async () => {
    const { user: owner } = createUser(testDb);
    const { user: newOwner } = createUser(testDb);
    const trip = createTrip(testDb, owner.id);
    await trips.setOwner(trip.id, newOwner.id);
    expect((testDb.prepare('SELECT user_id FROM trips WHERE id = ?').get(trip.id) as { user_id: number }).user_id).toBe(newOwner.id);
  });

  it('TRIPREPO-018: setOwner binds a string trip id raw — the same seam its docstring documents', async () => {
    const { user: owner } = createUser(testDb);
    const { user: newOwner } = createUser(testDb);
    const trip = createTrip(testDb, owner.id);
    await trips.setOwner(String(trip.id), newOwner.id);
    expect((testDb.prepare('SELECT user_id FROM trips WHERE id = ?').get(trip.id) as { user_id: number }).user_id).toBe(newOwner.id);
  });

  describe('findRaw (TR-B, shared with TripsService.getRaw once Task 7 lands)', () => {
    it('TRIPREPO-019: every scalar column comes back, feed_token included (the JS strip is the caller\'s job)', async () => {
      const { user } = createUser(testDb);
      const trip = createTrip(testDb, user.id, { title: 'Full Row', description: 'desc', start_date: '2026-01-01', end_date: '2026-01-05' });
      testDb.prepare('UPDATE trips SET feed_token = ?, cover_image = ? WHERE id = ?').run('secret-token', 'cover.png', trip.id);
      const legacyRow = testDb.prepare('SELECT * FROM trips WHERE id = ?').get(trip.id);
      const row = await trips.findRaw(trip.id);
      expect(row).toEqual(legacyRow);
      expect(row?.feed_token).toBe('secret-token');
    });

    it('TRIPREPO-020: NULL-bearing nullable columns come back null, not undefined (rule 16); a missing trip is null', async () => {
      const { user } = createUser(testDb);
      const trip = createTrip(testDb, user.id);
      const row = await trips.findRaw(trip.id);
      expect(row).toMatchObject({ description: null, start_date: null, end_date: null, cover_image: null, feed_token: null });
      expect(await trips.findRaw(999999)).toBeNull();
    });

    it('TRIPREPO-021: binds a string trip id raw, the same seam every other method here preserves', async () => {
      const { user } = createUser(testDb);
      const trip = createTrip(testDb, user.id, { title: 'Stringy Raw' });
      expect((await trips.findRaw(String(trip.id)))?.title).toBe('Stringy Raw');
      expect(await trips.findRaw('not-a-number')).toBeNull();
    });

    // D-shape (rule 20): `findRaw` is a `qb().execute('get', false)`
    // projection with an explicit `t.*` select, never hydrating an entity
    // into the identity map by construction — proven anyway.
    it('TRIPREPO-022 (D-shape): a title written after an unrelated identity-map read is visible in the FIRST wider projection', async () => {
      const { user } = createUser(testDb);
      const trip = createTrip(testDb, user.id, { title: 'Before' });
      await t.repo(Trips).find({}, { disableIdentityMap: false }); // populate the identity map with an unrelated read
      testDb.prepare('UPDATE trips SET title = ? WHERE id = ?').run('After', trip.id);
      expect((await trips.findRaw(trip.id))?.title).toBe('After');
    });
  });
});
