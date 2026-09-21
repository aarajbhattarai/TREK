import { afterAll, beforeAll, beforeEach, describe, expect, it } from 'vitest';
import { createTestDb, resetTestDb } from '../../../helpers/test-db';
import { createTestOrm, type TestOrm } from '../../../helpers/test-orm';
import { createDay, createTrip, createUser } from '../../../helpers/factories';
import { Days } from '../../../../src/db/entities/Days.entity';
import type { DaysRepository } from '../../../../src/db/repositories/Days.repository';

const testDb = createTestDb();
let t: TestOrm;
let days: DaysRepository;

beforeAll(async () => {
  t = await createTestOrm(testDb);
  days = t.repo(Days) as DaysRepository;
});
beforeEach(() => { resetTestDb(testDb); t.clear(); });
afterAll(async () => { await t.close(); testDb.close(); });

function rawDay(id: number): unknown {
  return testDb.prepare('SELECT * FROM days WHERE id = ?').get(id);
}

describe('DaysRepository', () => {
  it('DAYREPO-001: a row read through the ORM is the SELECT * row, key for key', async () => {
    const { user } = createUser(testDb);
    const trip = createTrip(testDb, user.id);
    const day = createDay(testDb, trip.id, { date: '2026-07-01', title: 'Arrival' });
    const [row] = await days.listByTrip(trip.id);
    expect(row).toStrictEqual(rawDay(day.id));
  });

  it('DAYREPO-002: the scalar FK hydrates without loading the trip', async () => {
    const { user } = createUser(testDb);
    const trip = createTrip(testDb, user.id);
    createDay(testDb, trip.id);
    const entity = await t.repo(Days).findOne({ trip: trip.id });
    expect(entity?.trip_id).toBe(trip.id);
    expect(entity?.trip.isInitialized()).toBe(false);
  });

  it('DAYREPO-003: listByTrip orders by day_number', async () => {
    const { user } = createUser(testDb);
    const trip = createTrip(testDb, user.id);
    createDay(testDb, trip.id, { day_number: 2 });
    createDay(testDb, trip.id, { day_number: 1 });
    const rows = await days.listByTrip(trip.id);
    expect(rows.map((r) => r.day_number)).toEqual([1, 2]);
  });

  it('DAYREPO-004: findInTrip refuses a day from another trip', async () => {
    const { user } = createUser(testDb);
    const a = createTrip(testDb, user.id);
    const b = createTrip(testDb, user.id);
    const day = createDay(testDb, a.id);
    expect(await days.findInTrip(day.id, b.id)).toBeUndefined();
    expect((await days.findInTrip(day.id, a.id))?.id).toBe(day.id);
  });

  it('DAYREPO-005: maxDayNumber is 0 for an empty trip and the max otherwise', async () => {
    const { user } = createUser(testDb);
    const trip = createTrip(testDb, user.id);
    expect(await days.maxDayNumber(trip.id)).toBe(0);
    createDay(testDb, trip.id, { day_number: 1 });
    createDay(testDb, trip.id, { day_number: 10 });
    createDay(testDb, trip.id, { day_number: 2 });
    // 10, not '2': the descending order has to be numeric, not lexicographic.
    expect(await days.maxDayNumber(trip.id)).toBe(10);
  });

  it('DAYREPO-006: createDay writes the legacy column set and returns the re-read row', async () => {
    const { user } = createUser(testDb);
    const trip = createTrip(testDb, user.id);
    const row = await days.createDay({ trip_id: trip.id, day_number: 1, date: '2026-07-01', notes: null });
    expect(row).toStrictEqual(rawDay(row.id));
    expect(row.notes).toBeNull();
    expect(row.trip_id).toBe(trip.id);
  });
});
