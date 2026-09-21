import { afterAll, beforeAll, beforeEach, describe, expect, it } from 'vitest';
import { CAN_ACCESS_TRIP_SQL, createTestDb, resetTestDb } from '../../../helpers/test-db';
import { createTestOrm, type TestOrm } from '../../../helpers/test-orm';
import { addTripMember, createTrip, createUser } from '../../../helpers/factories';
import { Trips } from '../../../../src/db/entities/Trips.entity';
import type { TripsRepository } from '../../../../src/db/repositories/Trips.repository';

const testDb = createTestDb();
let t: TestOrm;
let trips: TripsRepository;

beforeAll(async () => {
  t = await createTestOrm(testDb);
  trips = t.repo(Trips) as TripsRepository;
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
  });

  it('TRIPREPO-006: toObject on a trip omits the hidden relation and every unloaded collection', async () => {
    const { user } = createUser(testDb);
    const trip = createTrip(testDb, user.id);
    const entity = await t.repo(Trips).findOneOrFail({ id: trip.id });
    const raw = testDb.prepare('SELECT * FROM trips WHERE id = ?').get(trip.id) as Record<string, unknown>;
    const { wrap } = await import('@mikro-orm/core');
    expect(wrap(entity).toObject()).toEqual(raw);
  });
});
