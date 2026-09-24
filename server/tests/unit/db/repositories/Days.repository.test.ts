import { afterAll, beforeAll, beforeEach, describe, expect, it, vi } from 'vitest';
import { createSnapshotTestDb } from '../../../helpers/db-mock';
import { resetTestDb } from '../../../helpers/test-db';
import { createTestOrm, type TestOrm } from '../../../helpers/test-orm';
import { createDay, createDayAccommodation, createDayAssignment, createDayNote, createPlace, createTrip, createUser } from '../../../helpers/factories';
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

  // ── Plan 3c Task 7 (TripsService.generateDays: TP3, TP6, TP12) ─────────────

  describe('clearDate (TP3)', () => {
    it('DAYREPO-021: nullifies the date without deleting the row — assignments/notes/accommodations survive', async () => {
      const { user } = createUser(testDb);
      const trip = createTrip(testDb, user.id);
      const day = createDay(testDb, trip.id, { date: '2026-01-01' });
      const place = createPlace(testDb, trip.id);
      createDayAssignment(testDb, day.id, place.id);
      await days.clearDate(day.id);
      const row = testDb.prepare('SELECT date FROM days WHERE id = ?').get(day.id) as { date: string | null };
      expect(row.date).toBeNull();
      expect(testDb.prepare('SELECT id FROM day_assignments WHERE day_id = ?').get(day.id)).toBeDefined();
    });
  });

  describe('isEmptyDay (TP12) — three counts across day_assignments/day_notes/day_accommodations', () => {
    it('DAYREPO-022: true for a day with nothing on it; false once it holds an assignment, a note, or an accommodation (start OR end)', async () => {
      const { user } = createUser(testDb);
      const trip = createTrip(testDb, user.id);
      const empty = createDay(testDb, trip.id);
      const withAssignment = createDay(testDb, trip.id);
      const withNote = createDay(testDb, trip.id);
      const withAccomStart = createDay(testDb, trip.id);
      // Task 7 review M1: a check-out day (#1083) — this day is ONLY ever
      // `end_day_id` of the booking, never `start_day_id`. The original
      // version of this test set BOTH start and end to the same day, which
      // never actually exercised the `{ endDay: day_id }` half of the `$or`
      // — that half could be deleted from `isEmptyDay` and this test would
      // still pass, because the day would still match via `startDay`. A
      // genuinely two-day-spanning accommodation is required to pin it.
      const withAccomEnd = createDay(testDb, trip.id);
      const place = createPlace(testDb, trip.id);
      createDayAssignment(testDb, withAssignment.id, place.id);
      createDayNote(testDb, withNote.id, trip.id);
      createDayAccommodation(testDb, trip.id, place.id, withAccomStart.id, withAccomEnd.id);

      expect(await days.isEmptyDay(empty.id)).toBe(true);
      expect(await days.isEmptyDay(withAssignment.id)).toBe(false);
      expect(await days.isEmptyDay(withNote.id)).toBe(false);
      expect(await days.isEmptyDay(withAccomStart.id)).toBe(false);
      // Mutation-proof: this day is NEVER `start_day_id` for any accommodation
      // — it can only read `false` here via the `{ endDay: day_id }` clause.
      expect(await days.isEmptyDay(withAccomEnd.id)).toBe(false);
    });
  });

  describe('listTrailingEmptyIds (TP6) — ORDER BY day_number DESC, first `limit` empty days', () => {
    it('DAYREPO-023: a non-empty day in the middle is skipped, not a stopping point — matches the legacy WHERE-filter-then-LIMIT semantics', async () => {
      const { user } = createUser(testDb);
      const trip = createTrip(testDb, user.id);
      const d1 = createDay(testDb, trip.id, { day_number: 1 }); // empty
      const d2 = createDay(testDb, trip.id, { day_number: 2 }); // holds a note — excluded, not a stop
      const d3 = createDay(testDb, trip.id, { day_number: 3 }); // empty
      const d4 = createDay(testDb, trip.id, { day_number: 4 }); // empty
      createDayNote(testDb, d2.id, trip.id);

      // limit=2: stops as soon as 2 empty days are collected, in day_number
      // DESC order — d2 is never even reached.
      expect(await days.listTrailingEmptyIds(trip.id, 2)).toEqual([d4.id, d3.id]);

      // limit=3: d4, d3 collected; d2 examined and SKIPPED (not empty, and
      // not a stopping point either); d1 examined and collected — matching
      // the legacy `WHERE NOT EXISTS(...) ×3 ORDER BY day_number DESC LIMIT
      // 3` exactly (it filters every day up front, then takes the top 3 of
      // what's left — d2 was never a candidate to begin with).
      expect(await days.listTrailingEmptyIds(trip.id, 3)).toEqual([d4.id, d3.id, d1.id]);
    });

    it('DAYREPO-024: a limit of 0 returns nothing without querying', async () => {
      const { user } = createUser(testDb);
      const trip = createTrip(testDb, user.id);
      createDay(testDb, trip.id);
      expect(await days.listTrailingEmptyIds(trip.id, 0)).toEqual([]);
    });
  });
});

// ── Plan 3c Task 8 (`TripsService.copy`, TP39) — additive ───────────────────

describe('DaysRepository.insertDayCopy (TP39)', () => {
  it('DAYREPO-025: writes the 5-column copy set (trip_id, day_number, date, notes, title) verbatim, no read-back', async () => {
    const { user } = createUser(testDb);
    const src = createTrip(testDb, user.id);
    const dst = createTrip(testDb, user.id);
    const srcDay = createDay(testDb, src.id, { date: '2026-03-01', title: 'Arrival' });
    testDb.prepare('UPDATE days SET notes = ? WHERE id = ?').run('Bring passport', srcDay.id);

    const newId = await days.insertDayCopy({
      trip_id: dst.id, day_number: srcDay.day_number, date: srcDay.date, notes: 'Bring passport', title: srcDay.title,
    });

    const row = testDb.prepare('SELECT trip_id, day_number, date, notes, title FROM days WHERE id = ?').get(newId);
    expect(row).toEqual({ trip_id: dst.id, day_number: srcDay.day_number, date: '2026-03-01', notes: 'Bring passport', title: 'Arrival' });
  });

  it('DAYREPO-026: null date/notes/title are written as NULL, not coerced', async () => {
    const { user } = createUser(testDb);
    const trip = createTrip(testDb, user.id);
    const newId = await days.insertDayCopy({ trip_id: trip.id, day_number: 1, date: null, notes: null, title: null });
    const row = testDb.prepare('SELECT date, notes, title FROM days WHERE id = ?').get(newId);
    expect(row).toEqual({ date: null, notes: null, title: null });
  });
});

describe('DaysRepository.listForPublicApi (Plan 4 Task 1, public-api.service.ts::buildDays)', () => {
  it('DAYREPO-027: id/day_number/date/title/notes only, ordered by day_number, scoped to the trip', async () => {
    const { user } = createUser(testDb);
    const trip = createTrip(testDb, user.id);
    const other = createTrip(testDb, user.id);
    const day2 = createDay(testDb, trip.id, { day_number: 2, date: '2026-06-02' });
    const day1 = createDay(testDb, trip.id, { day_number: 1, date: '2026-06-01' });
    createDay(testDb, other.id, { day_number: 1 });

    const legacy = testDb.prepare('SELECT id, day_number, date, title, notes FROM days WHERE trip_id = ? ORDER BY day_number ASC').all(trip.id);
    const rows = await days.listForPublicApi(trip.id);
    expect(rows).toEqual(legacy);
    expect(rows.map((r) => r.id)).toEqual([day1.id, day2.id]);
  });

  it('DAYREPO-028: empty array for a trip with no days', async () => {
    const { user } = createUser(testDb);
    const trip = createTrip(testDb, user.id);
    expect(await days.listForPublicApi(trip.id)).toEqual([]);
  });
});
