import { afterAll, beforeAll, beforeEach, describe, expect, it, vi } from 'vitest';
import { createSnapshotTestDb } from '../../../helpers/db-mock';
import { resetTestDb } from '../../../helpers/test-db';
import { createTestOrm, type TestOrm } from '../../../helpers/test-orm';
import { createDay, createTrip, createUser } from '../../../helpers/factories';
import { Days } from '../../../../src/db/entities/Days.entity';
import type { DaysRepository } from '../../../../src/db/repositories/Days.repository';

const testDb = createSnapshotTestDb();
let t: TestOrm;
let days: DaysRepository;

beforeAll(async () => {
  t = await createTestOrm(testDb);
  days = t.repo(Days);
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

  it('DAYREPO-006b: throws when the read-back after insert finds no row (coverage: the guard branch)', async () => {
    const { user } = createUser(testDb);
    const trip = createTrip(testDb, user.id);
    const spy = vi.spyOn(days, 'findOne').mockResolvedValueOnce(null);
    await expect(days.createDay({ trip_id: trip.id, day_number: 1, date: null, notes: null }))
      .rejects.toThrow('createDay: read-back after insert found no row');
    spy.mockRestore();
  });
});

// ---------------------------------------------------------------------------
// Plan 3c Task 2 — the DaysService conversion's remaining methods (DY7/DY9/
// DY11/DY13/DY21/DY26–DY36).
// ---------------------------------------------------------------------------

describe('DaysRepository — Task 2 additions', () => {
  it('DAYREPO-010: findById is the SELECT * row, undefined for a missing id', async () => {
    const { user } = createUser(testDb);
    const trip = createTrip(testDb, user.id);
    const day = createDay(testDb, trip.id, { title: 'Arrival' });
    expect(await days.findById(day.id)).toStrictEqual(rawDay(day.id));
    expect(await days.findById(999999)).toBeUndefined();
  });

  it('DAYREPO-011: updateNotesAndTitle writes both columns verbatim (the presence-sentinel decision itself lives in the service)', async () => {
    const { user } = createUser(testDb);
    const trip = createTrip(testDb, user.id);
    const day = createDay(testDb, trip.id);
    await days.updateNotesAndTitle(day.id, 'Walking day', 'Arrival');
    expect(await days.findById(day.id)).toMatchObject({ notes: 'Walking day', title: 'Arrival' });
    await days.updateNotesAndTitle(day.id, null, null);
    expect(await days.findById(day.id)).toMatchObject({ notes: null, title: null });
  });

  it('DAYREPO-012: setDefaultTransportMode sets and clears the column', async () => {
    const { user } = createUser(testDb);
    const trip = createTrip(testDb, user.id);
    const day = createDay(testDb, trip.id);
    await days.setDefaultTransportMode(day.id, 'walk');
    expect(await days.findById(day.id)).toMatchObject({ default_transport_mode: 'walk' });
    await days.setDefaultTransportMode(day.id, null);
    expect(await days.findById(day.id)).toMatchObject({ default_transport_mode: null });
  });

  it('DAYREPO-013: deleteById is unscoped by trip', async () => {
    const { user } = createUser(testDb);
    const trip = createTrip(testDb, user.id);
    const day = createDay(testDb, trip.id);
    await days.deleteById(day.id);
    expect(await days.findById(day.id)).toBeUndefined();
  });

  it('DAYREPO-014: listOrderedForReorder returns {id, day_number, date}, ordered by day_number', async () => {
    const { user } = createUser(testDb);
    const trip = createTrip(testDb, user.id);
    const d2 = createDay(testDb, trip.id, { day_number: 2, date: '2026-01-02' });
    const d1 = createDay(testDb, trip.id, { day_number: 1, date: '2026-01-01' });
    const rows = await days.listOrderedForReorder(trip.id);
    expect(rows).toEqual([
      { id: d1.id, day_number: 1, date: '2026-01-01' },
      { id: d2.id, day_number: 2, date: '2026-01-02' },
    ]);
  });

  it('DAYREPO-015: setDayNumber and setDayNumberAndDate write their columns; the two-phase (negative then positive) sequence a caller drives here never collides', async () => {
    const { user } = createUser(testDb);
    const trip = createTrip(testDb, user.id);
    const a = createDay(testDb, trip.id, { day_number: 1 });
    const b = createDay(testDb, trip.id, { day_number: 2 });
    // Phase 1: negative, to dodge UNIQUE(trip_id, day_number) while swapping.
    await days.setDayNumber(a.id, -2);
    await days.setDayNumber(b.id, -1);
    // Phase 2: positive (the swap).
    await days.setDayNumberAndDate(a.id, 2, '2026-02-02');
    await days.setDayNumberAndDate(b.id, 1, '2026-02-01');
    expect(await days.findById(a.id)).toMatchObject({ day_number: 2, date: '2026-02-02' });
    expect(await days.findById(b.id)).toMatchObject({ day_number: 1, date: '2026-02-01' });
  });

  it('DAYREPO-016: insertDay writes trip_id/day_number/date only (no notes column named) and returns the inserted id', async () => {
    const { user } = createUser(testDb);
    const trip = createTrip(testDb, user.id);
    const id = await days.insertDay({ trip_id: trip.id, day_number: 1, date: '2026-03-01' });
    expect(typeof id).toBe('number');
    const row = rawDay(id) as { notes: string | null; date: string | null; day_number: number; trip_id: number };
    expect(row).toMatchObject({ trip_id: trip.id, day_number: 1, date: '2026-03-01', notes: null });
  });

  it('DAYREPO-017: findByTripAndDate finds the day at that date, undefined otherwise, scoped to the trip', async () => {
    const { user } = createUser(testDb);
    const tripA = createTrip(testDb, user.id);
    const tripB = createTrip(testDb, user.id);
    const day = createDay(testDb, tripA.id, { date: '2026-04-01' });
    createDay(testDb, tripB.id, { date: '2026-04-01' });
    expect(await days.findByTripAndDate(tripA.id, '2026-04-01')).toEqual({ id: day.id, day_number: day.day_number });
    expect(await days.findByTripAndDate(tripA.id, '2026-04-02')).toBeUndefined();
  });

  // D-shape: `findById` (findOne-based, `disableIdentityMap: true` by the base
  // class default) must see a column written after an unrelated identity-map
  // read populated the same entity type — written column (`notes`) is outside
  // the narrower read's own projection scope, so a stale write-back would
  // revert it if the base class's guarantee ever regressed.
  //
  // Task 2 review (task-2-review.md, L1): the original setup read
  // (`find({})` with no options) went through `TrekRepository`'s OWN
  // `disableIdentityMap: true` default too, so it never actually populated
  // the identity map with the managed `day` entity — the test passed
  // trivially, with nothing stale for `findById` to ever return. `{
  // disableIdentityMap: false }` on THIS read is what makes the setup real:
  // the managed entity (pre-write `notes`) is cached first, and `findById`'s
  // own default must still bypass it. Mutation-proved (Task 3 session): with
  // `TrekRepository.findOne`'s `disableIdentityMap` default temporarily
  // flipped to `false`, this test fails (`findById` returns the stale
  // pre-write `notes`); reverted immediately after.
  it('DAYREPO-018 (D-shape): a notes write after an unrelated identity-map read is visible in findById', async () => {
    const { user } = createUser(testDb);
    const trip = createTrip(testDb, user.id);
    const day = createDay(testDb, trip.id);
    await t.repo(Days).find({}, { disableIdentityMap: false }); // populate the identity map with the managed `day` entity
    await days.updateNotesAndTitle(day.id, 'Fresh notes', null);
    expect(await days.findById(day.id)).toMatchObject({ notes: 'Fresh notes' });
  });

  // ---------------------------------------------------------------------------
  // Plan 3c Task 3 (`AssignmentsService.dayExists`, AS4) — appended per the
  // task's own file-ownership rule.
  // ---------------------------------------------------------------------------

  describe('existsInTrip (AS4)', () => {
    it('DAYREPO-019: true only for the matching day AND trip', async () => {
      const { user } = createUser(testDb);
      const trip = createTrip(testDb, user.id);
      const { user: other } = createUser(testDb);
      const otherTrip = createTrip(testDb, other.id);
      const day = createDay(testDb, trip.id);
      expect(await days.existsInTrip(day.id, trip.id)).toBe(true);
      expect(await days.existsInTrip(day.id, otherTrip.id)).toBe(false);
      expect(await days.existsInTrip(999999, trip.id)).toBe(false);
    });

    it('DAYREPO-020: raw-bind — a string id/trip_id binds unconverted, same as a real number', async () => {
      const { user } = createUser(testDb);
      const trip = createTrip(testDb, user.id);
      const day = createDay(testDb, trip.id);
      expect(await days.existsInTrip(String(day.id), String(trip.id))).toBe(true);
      expect(await days.existsInTrip('not-a-number', trip.id)).toBe(false);
    });
  });
});
