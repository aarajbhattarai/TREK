/**
 * `DayAssignmentsRepository` (Plan 3c Task 2) — the DY1/DY3/AS1/AS3
 * assignment-with-place projection contract (built here, Task 3 consumes it
 * unchanged for AS1/AS3) plus DY24's `reanchorToDay` (a correlated scalar
 * subquery in an UPDATE SET clause, via Kysely).
 */
import { afterAll, beforeAll, beforeEach, describe, expect, it, vi } from 'vitest';
import { createSnapshotTestDb } from '../../../helpers/db-mock';
import { resetTestDb } from '../../../helpers/test-db';
import { createTestOrm, type TestOrm } from '../../../helpers/test-orm';
import { createCategory, createDay, createDayAccommodation, createDayAssignment, createPlace, createTrip, createUser } from '../../../helpers/factories';
import { DayAssignments } from '../../../../src/db/entities/DayAssignments.entity';
import type { DayAssignmentsRepository } from '../../../../src/db/repositories/DayAssignments.repository';
import { UnitOfWork } from '../../../../src/nest/database/unit-of-work';
import { withRequestContext } from '../../../../src/nest/database/request-context';

const testDb = createSnapshotTestDb();
let t: TestOrm;
let assignments: DayAssignmentsRepository;
let uow: UnitOfWork;

beforeAll(async () => {
  t = await createTestOrm(testDb);
  assignments = t.repo(DayAssignments);
  uow = new UnitOfWork(t.em);
});
beforeEach(() => { resetTestDb(testDb); t.clear(); });
afterAll(async () => { await t.close(); testDb.close(); });

/** The DY1/DY3/AS1/AS3 statement, run raw — the parity oracle every assertion below is checked against. */
function legacyProjectionRow(id: number): unknown {
  return testDb.prepare(`
    SELECT da.*, p.id as place_id, p.name as place_name, p.description as place_description,
      p.lat, p.lng, p.address, p.category_id, p.price, p.currency as place_currency,
      COALESCE(da.assignment_time, p.place_time) as place_time,
      COALESCE(da.assignment_end_time, p.end_time) as end_time,
      p.duration_minutes, p.notes as place_notes,
      p.image_url, p.transport_mode, p.google_place_id, p.google_ftid, p.osm_id, p.amap_poi_id, p.website, p.phone, p.stop_type, p.fill_percent,
      c.name as category_name, c.color as category_color, c.icon as category_icon
    FROM day_assignments da
    JOIN places p ON da.place_id = p.id
    LEFT JOIN categories c ON p.category_id = c.id
    WHERE da.id = ?
  `).get(id);
}

async function withQueryCount<T>(fn: () => Promise<T>): Promise<{ value: T; queries: number }> {
  const connection = t.orm.em.getConnection();
  const spy = vi.spyOn(connection, 'execute');
  try {
    const value = await fn();
    return { value, queries: spy.mock.calls.length };
  } finally {
    spy.mockRestore();
  }
}

describe('DayAssignmentsRepository — the DY1/DY3/AS1/AS3 projection', () => {
  it('ASSIGNPLACEREPO-001: listForDay returns [] for a day with no assignments', async () => {
    const { user } = createUser(testDb);
    const trip = createTrip(testDb, user.id);
    const day = createDay(testDb, trip.id);
    expect(await assignments.listForDay(day.id)).toEqual([]);
  });

  it('ASSIGNPLACEREPO-002: listForDay is byte-identical to the legacy statement, column for column', async () => {
    const { user } = createUser(testDb);
    const trip = createTrip(testDb, user.id);
    const day = createDay(testDb, trip.id);
    const category = createCategory(testDb, { name: 'Museum', color: '#111111', icon: '🏛️' });
    const place = createPlace(testDb, trip.id, { name: 'Louvre', category_id: category.id });
    const assignment = createDayAssignment(testDb, day.id, place.id);

    const rows = await assignments.listForDay(day.id);
    expect(rows).toHaveLength(1);
    expect(rows[0]).toStrictEqual(legacyProjectionRow(assignment.id));
    // Named spot-checks so a future field rename fails loudly here, not just via toStrictEqual.
    expect(rows[0]).toMatchObject({
      id: assignment.id, day_id: day.id, place_id: place.id,
      place_name: 'Louvre', category_id: category.id,
      category_name: 'Museum', category_color: '#111111', category_icon: '🏛️',
    });
  });

  it('ASSIGNPLACEREPO-003: findWithPlaceAndCategory(id) is the same row, and null for a missing id', async () => {
    const { user } = createUser(testDb);
    const trip = createTrip(testDb, user.id);
    const day = createDay(testDb, trip.id);
    const place = createPlace(testDb, trip.id, { name: 'Eiffel Tower' });
    const assignment = createDayAssignment(testDb, day.id, place.id);

    expect(await assignments.findWithPlaceAndCategory(assignment.id)).toStrictEqual(legacyProjectionRow(assignment.id));
    expect(await assignments.findWithPlaceAndCategory(999999)).toBeNull();
  });

  it('ASSIGNPLACEREPO-004: place_time/end_time COALESCE — the assignment\'s own time wins, the place\'s time is the fallback', async () => {
    const { user } = createUser(testDb);
    const trip = createTrip(testDb, user.id);
    const day = createDay(testDb, trip.id);
    const place = createPlace(testDb, trip.id);
    testDb.prepare('UPDATE places SET place_time = ?, end_time = ? WHERE id = ?').run('09:00', '10:00', place.id);
    const withOwnTime = createDayAssignment(testDb, day.id, place.id);
    testDb.prepare('UPDATE day_assignments SET assignment_time = ?, assignment_end_time = ? WHERE id = ?').run('14:00', '15:00', withOwnTime.id);
    const withoutOwnTime = createDayAssignment(testDb, day.id, place.id);

    const rows = await assignments.listForDay(day.id);
    const own = rows.find((r) => r.id === withOwnTime.id)!;
    const fallback = rows.find((r) => r.id === withoutOwnTime.id)!;
    expect(own.place_time).toBe('14:00');
    expect(own.end_time).toBe('15:00');
    expect(fallback.place_time).toBe('09:00');
    expect(fallback.end_time).toBe('10:00');
  });

  it('ASSIGNPLACEREPO-005: category is null for an uncategorised place (LEFT JOIN, not INNER)', async () => {
    const { user } = createUser(testDb);
    const trip = createTrip(testDb, user.id);
    const day = createDay(testDb, trip.id);
    const place = createPlace(testDb, trip.id);
    testDb.prepare('UPDATE places SET category_id = NULL WHERE id = ?').run(place.id);
    const assignment = createDayAssignment(testDb, day.id, place.id);

    const [row] = await assignments.listForDay(day.id);
    expect(row.category_id).toBeNull();
    expect(row.category_name).toBeNull();
    expect(row.category_color).toBeNull();
    expect(row.category_icon).toBeNull();
    expect(row.id).toBe(assignment.id);
  });

  it('ASSIGNPLACEREPO-006: ORDER BY order_index ASC, created_at ASC', async () => {
    const { user } = createUser(testDb);
    const trip = createTrip(testDb, user.id);
    const day = createDay(testDb, trip.id);
    const placeA = createPlace(testDb, trip.id, { name: 'Second' });
    const placeB = createPlace(testDb, trip.id, { name: 'First' });
    createDayAssignment(testDb, day.id, placeA.id, { order_index: 2 });
    createDayAssignment(testDb, day.id, placeB.id, { order_index: 1 });

    const rows = await assignments.listForDay(day.id);
    expect(rows.map((r) => r.place_name)).toEqual(['First', 'Second']);
  });

  it('ASSIGNPLACEREPO-007: listWithPlaceAndCategory spans several days, in the same order; an empty array short-circuits with 0 queries', async () => {
    const { user } = createUser(testDb);
    const trip = createTrip(testDb, user.id);
    const dayA = createDay(testDb, trip.id, { day_number: 1 });
    const dayB = createDay(testDb, trip.id, { day_number: 2 });
    const placeA = createPlace(testDb, trip.id, { name: 'A' });
    const placeB = createPlace(testDb, trip.id, { name: 'B' });
    const a = createDayAssignment(testDb, dayA.id, placeA.id);
    const b = createDayAssignment(testDb, dayB.id, placeB.id);

    const rows = await assignments.listWithPlaceAndCategory([dayA.id, dayB.id]);
    expect(rows.map((r) => r.id).sort()).toEqual([a.id, b.id].sort());

    const { value, queries } = await withQueryCount(() => assignments.listWithPlaceAndCategory([]));
    expect(value).toEqual([]);
    expect(queries).toBe(0);
  });

  // D-shape: every method here is a `qb().execute(..., false)` projection, which
  // never hydrates an entity into the identity map by construction — proven
  // anyway, the "not required, proven regardless" shape (AssignmentParticipants
  // precedent).
  //
  // Task 2 review (task-2-review.md, L1): the setup read now passes `{
  // disableIdentityMap: false }` so it genuinely caches a managed
  // `DayAssignments` entity first (the base's own default previously made
  // this a no-op read, same class of vacuousness as `DAYREPO-018`) — even
  // so, `listForDay` is `qb().execute('all', false)`, never `find`/
  // `findOne`, so it cannot return that cached entity regardless; this test
  // proves the projection's OWN freshness, not the identity-map guard.
  it('ASSIGNPLACEREPO-008 (fresh after a raw UPDATE, not D-shape): a place rename after an unrelated identity-map read is visible in the FIRST wider projection', async () => {
    const { user } = createUser(testDb);
    const trip = createTrip(testDb, user.id);
    const day = createDay(testDb, trip.id);
    const place = createPlace(testDb, trip.id, { name: 'Old Name' });
    const assignment = createDayAssignment(testDb, day.id, place.id);
    await t.repo(DayAssignments).find({}, { disableIdentityMap: false }); // populate the identity map with the managed assignment entity
    testDb.prepare('UPDATE places SET name = ? WHERE id = ?').run('Renamed', place.id);

    const [row] = await assignments.listForDay(day.id);
    expect(row.place_name).toBe('Renamed');
    expect(row.id).toBe(assignment.id);
  });
});

describe('DayAssignmentsRepository.reanchorToDay (DY24, Kysely)', () => {
  function setAccommodation(assignmentId: number, accId: number): void {
    testDb.prepare('UPDATE day_assignments SET accommodation_id = ? WHERE id = ?').run(accId, assignmentId);
  }

  it('REANCHORDAY-001: moves the stop to the target day, re-indexed past the target day\'s existing max order_index', async () => {
    const { user } = createUser(testDb);
    const trip = createTrip(testDb, user.id);
    const fromDay = createDay(testDb, trip.id, { day_number: 1 });
    const toDay = createDay(testDb, trip.id, { day_number: 2 });
    const stopPlace = createPlace(testDb, trip.id, { name: 'Hotel stop' });
    const otherPlace = createPlace(testDb, trip.id, { name: 'Existing stop' });
    createDayAssignment(testDb, toDay.id, otherPlace.id, { order_index: 5 });
    const stop = createDayAssignment(testDb, fromDay.id, stopPlace.id, { order_index: 0 });
    setAccommodation(stop.id, 4242);

    await withRequestContext(t.orm, async () => {
      await assignments.reanchorToDay(4242, toDay.id);
    });

    const row = testDb.prepare('SELECT day_id, order_index FROM day_assignments WHERE id = ?').get(stop.id) as { day_id: number; order_index: number };
    expect(row.day_id).toBe(toDay.id);
    expect(row.order_index).toBe(6);
  });

  it('REANCHORDAY-002: the target day starting empty yields order_index 0 (COALESCE(NULL, -1) + 1)', async () => {
    const { user } = createUser(testDb);
    const trip = createTrip(testDb, user.id);
    const fromDay = createDay(testDb, trip.id, { day_number: 1 });
    const toDay = createDay(testDb, trip.id, { day_number: 2 });
    const place = createPlace(testDb, trip.id);
    const stop = createDayAssignment(testDb, fromDay.id, place.id, { order_index: 0 });
    setAccommodation(stop.id, 7);

    await withRequestContext(t.orm, async () => {
      await assignments.reanchorToDay(7, toDay.id);
    });

    const row = testDb.prepare('SELECT day_id, order_index FROM day_assignments WHERE id = ?').get(stop.id) as { day_id: number; order_index: number };
    expect(row.day_id).toBe(toDay.id);
    expect(row.order_index).toBe(0);
  });

  it('REANCHORDAY-003: inside a uow.transactional that then ROLLS BACK, the row is left un-moved (joins the ambient transaction, proven by rollback)', async () => {
    const { user } = createUser(testDb);
    const trip = createTrip(testDb, user.id);
    const fromDay = createDay(testDb, trip.id, { day_number: 1 });
    const toDay = createDay(testDb, trip.id, { day_number: 2 });
    const place = createPlace(testDb, trip.id);
    const stop = createDayAssignment(testDb, fromDay.id, place.id, { order_index: 0 });
    setAccommodation(stop.id, 99);

    let caught: unknown;
    try {
      await withRequestContext(t.orm, async () => {
        await uow.transactional(async () => {
          await assignments.reanchorToDay(99, toDay.id);
          throw new Error('force rollback');
        });
      });
    } catch (e) { caught = e; }
    expect((caught as Error).message).toBe('force rollback');

    const row = testDb.prepare('SELECT day_id FROM day_assignments WHERE id = ?').get(stop.id) as { day_id: number };
    expect(row.day_id).toBe(fromDay.id);
  });

  it('REANCHORDAY-004: the same sequence, committed, actually moves the row', async () => {
    const { user } = createUser(testDb);
    const trip = createTrip(testDb, user.id);
    const fromDay = createDay(testDb, trip.id, { day_number: 1 });
    const toDay = createDay(testDb, trip.id, { day_number: 2 });
    const place = createPlace(testDb, trip.id);
    const stop = createDayAssignment(testDb, fromDay.id, place.id, { order_index: 0 });
    setAccommodation(stop.id, 100);

    await withRequestContext(t.orm, async () => {
      await uow.transactional(async () => {
        await assignments.reanchorToDay(100, toDay.id);
      });
    });

    const row = testDb.prepare('SELECT day_id FROM day_assignments WHERE id = ?').get(stop.id) as { day_id: number };
    expect(row.day_id).toBe(toDay.id);
  });
});

// ---------------------------------------------------------------------------
// Plan 3c Task 3 (`AssignmentsService`) — appended after Task 2's own
// methods/tests above, per this task's file-ownership rule.
// ---------------------------------------------------------------------------

describe('DayAssignmentsRepository — AS4/AS9/AS12 existence + trip-scoped read', () => {
  it('ASSIGNREPO-001 (AS9, existsInDay): true only for the matching assignment/day/trip triple', async () => {
    const { user } = createUser(testDb);
    const trip = createTrip(testDb, user.id);
    const day = createDay(testDb, trip.id);
    const otherDay = createDay(testDb, trip.id);
    const place = createPlace(testDb, trip.id);
    const a = createDayAssignment(testDb, day.id, place.id);
    expect(await assignments.existsInDay(a.id, day.id, trip.id)).toBe(true);
    expect(await assignments.existsInDay(a.id, otherDay.id, trip.id)).toBe(false);
    expect(await assignments.existsInDay(a.id, day.id, trip.id + 1)).toBe(false);
  });

  it('ASSIGNREPO-002 (AS9): raw-bind on day_id/trip_id — a string binds unconverted, same as a real number; `id` itself is `number`-only now (Task 3 review H1, absorbed in Task 4: the method\'s only caller `toRowId`s `id` before calling, so the type narrowed to match)', async () => {
    const { user } = createUser(testDb);
    const trip = createTrip(testDb, user.id);
    const day = createDay(testDb, trip.id);
    const place = createPlace(testDb, trip.id);
    const a = createDayAssignment(testDb, day.id, place.id);
    expect(await assignments.existsInDay(a.id, String(day.id), String(trip.id))).toBe(true);
  });

  it('ASSIGNREPO-003 (AS12, findInTrip): the raw `da.*` row, scoped to the trip via a two-hop join; undefined cross-trip', async () => {
    const { user } = createUser(testDb);
    const trip = createTrip(testDb, user.id);
    const day = createDay(testDb, trip.id);
    const place = createPlace(testDb, trip.id);
    const a = createDayAssignment(testDb, day.id, place.id, { order_index: 3 });
    testDb.prepare('UPDATE day_assignments SET assignment_time = ?, notes = ? WHERE id = ?').run('09:00', 'a note', a.id);

    const row = await assignments.findInTrip(a.id, trip.id);
    const legacy = testDb.prepare(`SELECT da.* FROM day_assignments da JOIN days d ON da.day_id = d.id WHERE da.id = ? AND d.trip_id = ?`).get(a.id, trip.id);
    expect(row).toStrictEqual(legacy);
    expect(row).toMatchObject({ id: a.id, day_id: day.id, order_index: 3, assignment_time: '09:00', notes: 'a note' });
    expect(await assignments.findInTrip(a.id, trip.id + 1)).toBeUndefined();
  });
});

describe('DayAssignmentsRepository — AS6/AS7/AS8 (createAssignment)', () => {
  it('ASSIGNREPO-004 (AS6, maxOrderIndex): null for a day with no assignments, otherwise the highest order_index — a stored 0 is not confused with "no rows"', async () => {
    const { user } = createUser(testDb);
    const trip = createTrip(testDb, user.id);
    const day = createDay(testDb, trip.id);
    const place = createPlace(testDb, trip.id);
    expect(await assignments.maxOrderIndex(day.id)).toBeNull();
    createDayAssignment(testDb, day.id, place.id, { order_index: 0 });
    expect(await assignments.maxOrderIndex(day.id)).toBe(0);
    createDayAssignment(testDb, day.id, place.id, { order_index: 5 });
    expect(await assignments.maxOrderIndex(day.id)).toBe(5);
  });

  it('ASSIGNREPO-005 (AS7, shiftOrderFrom): shifts order_index for rows at/after the threshold, on that day only', async () => {
    const { user } = createUser(testDb);
    const trip = createTrip(testDb, user.id);
    const day = createDay(testDb, trip.id);
    const otherDay = createDay(testDb, trip.id);
    const place = createPlace(testDb, trip.id);
    const before = createDayAssignment(testDb, day.id, place.id, { order_index: 0 });
    const at = createDayAssignment(testDb, day.id, place.id, { order_index: 1 });
    const after = createDayAssignment(testDb, day.id, place.id, { order_index: 2 });
    const foreign = createDayAssignment(testDb, otherDay.id, place.id, { order_index: 1 });

    await withRequestContext(t.orm, async () => { await assignments.shiftOrderFrom(day.id, 1); });

    const order = (id: number) => (testDb.prepare('SELECT order_index FROM day_assignments WHERE id = ?').get(id) as { order_index: number }).order_index;
    expect(order(before.id)).toBe(0);
    expect(order(at.id)).toBe(2);
    expect(order(after.id)).toBe(3);
    expect(order(foreign.id)).toBe(1);
  });

  it('ASSIGNREPO-006 (AS8, insertAssignment): writes every column and returns the inserted id, notes/accommodation_id nullable', async () => {
    const { user } = createUser(testDb);
    const trip = createTrip(testDb, user.id);
    const day = createDay(testDb, trip.id);
    const place = createPlace(testDb, trip.id);

    const id = await withRequestContext(t.orm, () => assignments.insertAssignment({
      day_id: day.id, place_id: place.id, order_index: 2, notes: null, accommodation_id: null,
    }));
    expect(typeof id).toBe('number');
    const row = testDb.prepare('SELECT day_id, place_id, order_index, notes, accommodation_id FROM day_assignments WHERE id = ?').get(id);
    expect(row).toEqual({ day_id: day.id, place_id: place.id, order_index: 2, notes: null, accommodation_id: null });

    const id2 = await withRequestContext(t.orm, () => assignments.insertAssignment({
      day_id: day.id, place_id: place.id, order_index: 0, notes: 'skip the line', accommodation_id: 42,
    }));
    const row2 = testDb.prepare('SELECT notes, accommodation_id FROM day_assignments WHERE id = ?').get(id2);
    expect(row2).toEqual({ notes: 'skip the line', accommodation_id: 42 });
  });
});

describe('DayAssignmentsRepository — AS10/AS11/AS13/AS14/AS19 (delete / order / move)', () => {
  it('ASSIGNREPO-007 (AS10, deleteById): removes the row', async () => {
    const { user } = createUser(testDb);
    const trip = createTrip(testDb, user.id);
    const day = createDay(testDb, trip.id);
    const place = createPlace(testDb, trip.id);
    const a = createDayAssignment(testDb, day.id, place.id);
    await withRequestContext(t.orm, () => assignments.deleteById(a.id));
    expect(testDb.prepare('SELECT id FROM day_assignments WHERE id = ?').get(a.id)).toBeUndefined();
  });

  it('ASSIGNREPO-008 (AS11, setOrderIndex day-scoped): writes only the row matching BOTH id and day_id', async () => {
    const { user } = createUser(testDb);
    const trip = createTrip(testDb, user.id);
    const day = createDay(testDb, trip.id);
    const otherDay = createDay(testDb, trip.id);
    const place = createPlace(testDb, trip.id);
    const a = createDayAssignment(testDb, day.id, place.id, { order_index: 0 });
    const foreign = createDayAssignment(testDb, otherDay.id, place.id, { order_index: 0 });

    await withRequestContext(t.orm, () => assignments.setOrderIndex(a.id, day.id, 7));
    // A day_id mismatch (this id does not sit on otherDay) writes nothing.
    await withRequestContext(t.orm, () => assignments.setOrderIndex(foreign.id, day.id, 9));

    const order = (id: number) => (testDb.prepare('SELECT order_index FROM day_assignments WHERE id = ?').get(id) as { order_index: number }).order_index;
    expect(order(a.id)).toBe(7);
    expect(order(foreign.id)).toBe(0);
  });

  it('ASSIGNREPO-009 (AS19, setOrderIndex unscoped): day_id undefined writes by id alone', async () => {
    const { user } = createUser(testDb);
    const trip = createTrip(testDb, user.id);
    const day = createDay(testDb, trip.id);
    const place = createPlace(testDb, trip.id);
    const a = createDayAssignment(testDb, day.id, place.id, { order_index: 0 });
    await withRequestContext(t.orm, () => assignments.setOrderIndex(a.id, undefined, 3));
    expect((testDb.prepare('SELECT order_index FROM day_assignments WHERE id = ?').get(a.id) as { order_index: number }).order_index).toBe(3);
  });

  it('ASSIGNREPO-010 (AS13, getDayId): the assignment\'s day_id, undefined for a missing id', async () => {
    const { user } = createUser(testDb);
    const trip = createTrip(testDb, user.id);
    const day = createDay(testDb, trip.id);
    const place = createPlace(testDb, trip.id);
    const a = createDayAssignment(testDb, day.id, place.id);
    expect(await assignments.getDayId(a.id)).toBe(day.id);
    expect(await assignments.getDayId(999999)).toBeUndefined();
  });

  it('ASSIGNREPO-011 (AS14, moveToDay): writes day_id and order_index together', async () => {
    const { user } = createUser(testDb);
    const trip = createTrip(testDb, user.id);
    const day = createDay(testDb, trip.id);
    const target = createDay(testDb, trip.id);
    const place = createPlace(testDb, trip.id);
    const a = createDayAssignment(testDb, day.id, place.id, { order_index: 0 });
    await withRequestContext(t.orm, () => assignments.moveToDay(a.id, target.id, 4));
    const row = testDb.prepare('SELECT day_id, order_index FROM day_assignments WHERE id = ?').get(a.id);
    expect(row).toEqual({ day_id: target.id, order_index: 4 });
  });

  // Task 9 fix wave (B-M5, the OAUTHTOKREPO-012/REANCHORDAY-003 rollback
  // shape): `moveToDay` writes inside a `uow.transactional` body that then
  // throws — the write must roll back with it. MUTATION-PROVED (see the
  // report): removing the `throw` makes the post-rollback assertion below
  // fail (the row WOULD have moved).
  it('ASSIGNREPO-031: inside a uow.transactional that then ROLLS BACK, moveToDay is left un-moved', async () => {
    const { user } = createUser(testDb);
    const trip = createTrip(testDb, user.id);
    const day = createDay(testDb, trip.id);
    const target = createDay(testDb, trip.id);
    const place = createPlace(testDb, trip.id);
    const a = createDayAssignment(testDb, day.id, place.id, { order_index: 0 });

    let caught: unknown;
    try {
      await withRequestContext(t.orm, async () => {
        await uow.transactional(async () => {
          await assignments.moveToDay(a.id, target.id, 4);
          throw new Error('force rollback');
        });
      });
    } catch (e) { caught = e; }
    expect((caught as Error).message).toBe('force rollback');

    const row = testDb.prepare('SELECT day_id, order_index FROM day_assignments WHERE id = ?').get(a.id);
    expect(row).toEqual({ day_id: day.id, order_index: 0 });
  });
});

describe('DayAssignmentsRepository.effectiveStart (AS16, Kysely)', () => {
  it('ASSIGNREPO-012: byte-identical to the legacy three-way COALESCE, own time wins over the place\'s', async () => {
    const { user } = createUser(testDb);
    const trip = createTrip(testDb, user.id);
    const day = createDay(testDb, trip.id);
    const place = createPlace(testDb, trip.id);
    testDb.prepare('UPDATE places SET place_time = ? WHERE id = ?').run('08:00', place.id);
    const a = createDayAssignment(testDb, day.id, place.id);
    testDb.prepare('UPDATE day_assignments SET assignment_time = ? WHERE id = ?').run('14:00', a.id);

    const row = await withRequestContext(t.orm, () => assignments.effectiveStart(a.id));
    const legacy = testDb.prepare(`
      SELECT da.day_id, COALESCE(da.assignment_time, p.place_time, acc.check_in) AS start
      FROM day_assignments da JOIN places p ON da.place_id = p.id
      LEFT JOIN day_accommodations acc ON acc.id = da.accommodation_id
      WHERE da.id = ?
    `).get(a.id);
    expect(row).toEqual(legacy);
    expect(row).toEqual({ day_id: day.id, start: '14:00' });
  });

  it('ASSIGNREPO-013: falls back to the place\'s own time when the assignment has none', async () => {
    const { user } = createUser(testDb);
    const trip = createTrip(testDb, user.id);
    const day = createDay(testDb, trip.id);
    const place = createPlace(testDb, trip.id);
    testDb.prepare('UPDATE places SET place_time = ? WHERE id = ?').run('08:00', place.id);
    const a = createDayAssignment(testDb, day.id, place.id);
    expect(await withRequestContext(t.orm, () => assignments.effectiveStart(a.id))).toEqual({ day_id: day.id, start: '08:00' });
  });

  it('ASSIGNREPO-014: a booked night falls back further, to the accommodation\'s check_in (a LEFT JOIN through the plain accommodation_id column, no ORM relation)', async () => {
    const { user } = createUser(testDb);
    const trip = createTrip(testDb, user.id);
    const day = createDay(testDb, trip.id);
    const hotel = createPlace(testDb, trip.id);
    const night = createDayAssignment(testDb, day.id, hotel.id);
    const stay = testDb.prepare(
      "INSERT INTO day_accommodations (trip_id, place_id, start_day_id, end_day_id, check_in) VALUES (?, ?, ?, ?, '17:00')",
    ).run(trip.id, hotel.id, day.id, day.id);
    testDb.prepare('UPDATE day_assignments SET accommodation_id = ? WHERE id = ?').run(Number(stay.lastInsertRowid), night.id);

    expect(await withRequestContext(t.orm, () => assignments.effectiveStart(night.id))).toEqual({ day_id: day.id, start: '17:00' });
  });

  it('ASSIGNREPO-015: null start when nothing sets a time anywhere in the chain', async () => {
    const { user } = createUser(testDb);
    const trip = createTrip(testDb, user.id);
    const day = createDay(testDb, trip.id);
    const place = createPlace(testDb, trip.id);
    const a = createDayAssignment(testDb, day.id, place.id);
    expect(await withRequestContext(t.orm, () => assignments.effectiveStart(a.id))).toEqual({ day_id: day.id, start: null });
  });

  it('ASSIGNREPO-016: undefined for a missing id', async () => {
    expect(await withRequestContext(t.orm, () => assignments.effectiveStart(999999))).toBeUndefined();
  });
});

describe('DayAssignmentsRepository.listForTimeSort (AS18, Kysely)', () => {
  it('ASSIGNREPO-017: byte-identical to the legacy statement, including the computed `located` boolean (0/1) and the three-key ORDER BY', async () => {
    const { user } = createUser(testDb);
    const trip = createTrip(testDb, user.id);
    const day = createDay(testDb, trip.id);
    const located = createPlace(testDb, trip.id, { name: 'Has coords' });
    const unlocated = createPlace(testDb, trip.id, { name: 'No coords' });
    testDb.prepare('UPDATE places SET lat = NULL, lng = NULL WHERE id = ?').run(unlocated.id);
    const a1 = createDayAssignment(testDb, day.id, located.id, { order_index: 1 });
    const a2 = createDayAssignment(testDb, day.id, unlocated.id, { order_index: 0 });
    testDb.prepare('UPDATE day_assignments SET assignment_time = ? WHERE id = ?').run('09:00', a1.id);

    const rows = await withRequestContext(t.orm, () => assignments.listForTimeSort(day.id));
    const legacy = testDb.prepare(`
      SELECT da.id, da.order_index, COALESCE(da.assignment_time, p.place_time, acc.check_in) as effective_time,
        (p.lat IS NOT NULL AND p.lng IS NOT NULL) as located
      FROM day_assignments da JOIN places p ON da.place_id = p.id
      LEFT JOIN day_accommodations acc ON acc.id = da.accommodation_id
      WHERE da.day_id = ?
      ORDER BY da.order_index ASC, da.created_at ASC, da.id ASC
    `).all(day.id);
    expect(rows).toEqual(legacy);
    expect(rows.map((r) => r.id)).toEqual([a2.id, a1.id]);
    expect(rows.find((r) => r.id === a1.id)?.located).toBe(1);
    expect(rows.find((r) => r.id === a2.id)?.located).toBe(0);
  });

  it('ASSIGNREPO-018: [] for a day with no assignments', async () => {
    const { user } = createUser(testDb);
    const trip = createTrip(testDb, user.id);
    const day = createDay(testDb, trip.id);
    expect(await withRequestContext(t.orm, () => assignments.listForTimeSort(day.id))).toEqual([]);
  });
});

describe('DayAssignmentsRepository — AS17/AS24/AS25/AS26/AS27 (single-column writes)', () => {
  it('ASSIGNREPO-019 (AS17, setTimes): writes both columns, null-clearable', async () => {
    const { user } = createUser(testDb);
    const trip = createTrip(testDb, user.id);
    const day = createDay(testDb, trip.id);
    const place = createPlace(testDb, trip.id);
    const a = createDayAssignment(testDb, day.id, place.id);
    await withRequestContext(t.orm, () => assignments.setTimes(a.id, '09:00', '10:30'));
    expect(testDb.prepare('SELECT assignment_time, assignment_end_time FROM day_assignments WHERE id = ?').get(a.id))
      .toEqual({ assignment_time: '09:00', assignment_end_time: '10:30' });
    await withRequestContext(t.orm, () => assignments.setTimes(a.id, null, null));
    expect(testDb.prepare('SELECT assignment_time, assignment_end_time FROM day_assignments WHERE id = ?').get(a.id))
      .toEqual({ assignment_time: null, assignment_end_time: null });
  });

  // Task 9 fix wave (B-M5, the OAUTHTOKREPO-012/REANCHORDAY-003 rollback
  // shape): `setTimes` writes inside a `uow.transactional` body that then
  // throws — the write must roll back with it.
  it('ASSIGNREPO-032: inside a uow.transactional that then ROLLS BACK, setTimes is left unwritten', async () => {
    const { user } = createUser(testDb);
    const trip = createTrip(testDb, user.id);
    const day = createDay(testDb, trip.id);
    const place = createPlace(testDb, trip.id);
    const a = createDayAssignment(testDb, day.id, place.id);

    let caught: unknown;
    try {
      await withRequestContext(t.orm, async () => {
        await uow.transactional(async () => {
          await assignments.setTimes(a.id, '09:00', '10:30');
          throw new Error('force rollback');
        });
      });
    } catch (e) { caught = e; }
    expect((caught as Error).message).toBe('force rollback');

    expect(testDb.prepare('SELECT assignment_time, assignment_end_time FROM day_assignments WHERE id = ?').get(a.id))
      .toEqual({ assignment_time: null, assignment_end_time: null });
  });

  it('ASSIGNREPO-020 (AS24, setEndDay): writes the 0/1 flag', async () => {
    const { user } = createUser(testDb);
    const trip = createTrip(testDb, user.id);
    const day = createDay(testDb, trip.id);
    const place = createPlace(testDb, trip.id);
    const a = createDayAssignment(testDb, day.id, place.id);
    await withRequestContext(t.orm, () => assignments.setEndDay(a.id, 1));
    expect((testDb.prepare('SELECT end_day FROM day_assignments WHERE id = ?').get(a.id) as { end_day: number }).end_day).toBe(1);
  });

  it('ASSIGNREPO-021 (AS25, setNotes): null-clearable', async () => {
    const { user } = createUser(testDb);
    const trip = createTrip(testDb, user.id);
    const day = createDay(testDb, trip.id);
    const place = createPlace(testDb, trip.id);
    const a = createDayAssignment(testDb, day.id, place.id);
    await withRequestContext(t.orm, () => assignments.setNotes(a.id, 'a note'));
    expect((testDb.prepare('SELECT notes FROM day_assignments WHERE id = ?').get(a.id) as { notes: string | null }).notes).toBe('a note');
    await withRequestContext(t.orm, () => assignments.setNotes(a.id, null));
    expect((testDb.prepare('SELECT notes FROM day_assignments WHERE id = ?').get(a.id) as { notes: string | null }).notes).toBeNull();
  });

  it('ASSIGNREPO-022 (AS26/AS27, setLegMode/setIncomingLegMode): each writes its own column', async () => {
    const { user } = createUser(testDb);
    const trip = createTrip(testDb, user.id);
    const day = createDay(testDb, trip.id);
    const place = createPlace(testDb, trip.id);
    const a = createDayAssignment(testDb, day.id, place.id);
    await withRequestContext(t.orm, () => assignments.setLegMode(a.id, 'cycling'));
    await withRequestContext(t.orm, () => assignments.setIncomingLegMode(a.id, 'walking'));
    expect(testDb.prepare('SELECT leg_transport_mode, incoming_leg_transport_mode FROM day_assignments WHERE id = ?').get(a.id))
      .toEqual({ leg_transport_mode: 'cycling', incoming_leg_transport_mode: 'walking' });
    await withRequestContext(t.orm, () => assignments.setLegMode(a.id, null));
    expect((testDb.prepare('SELECT leg_transport_mode FROM day_assignments WHERE id = ?').get(a.id) as { leg_transport_mode: string | null }).leg_transport_mode).toBeNull();
  });
});

// D-shape: a `qb().execute(..., false)` projection or a Kysely read, neither
// of which hydrates an entity into the identity map by construction (the
// ASSIGNPLACEREPO-008 precedent above) — proven anyway for the new reads.
// Task 2 review (task-2-review.md, L1, program note): the setup read passes
// `{ disableIdentityMap: false }` so it genuinely caches the managed
// assignment entity first (a bare `find({})` would be a no-op read under
// the base's own default, the same vacuousness `DAYREPO-018` had).
it('ASSIGNREPO-023 (fresh after a raw UPDATE, not D-shape): a notes write after an unrelated identity-map read is visible in findInTrip', async () => {
  const { user } = createUser(testDb);
  const trip = createTrip(testDb, user.id);
  const day = createDay(testDb, trip.id);
  const place = createPlace(testDb, trip.id);
  const a = createDayAssignment(testDb, day.id, place.id);
  await t.repo(DayAssignments).find({}, { disableIdentityMap: false }); // populate the identity map with the managed assignment entity
  await withRequestContext(t.orm, () => assignments.setNotes(a.id, 'fresh note'));
  expect(await assignments.findInTrip(a.id, trip.id)).toMatchObject({ notes: 'fresh note' });
});

// ---------------------------------------------------------------------------
// Plan 3c Task 4 (`PlacesService.exportGpx`) — the PL30 itinerary read.
// ---------------------------------------------------------------------------

describe('DayAssignmentsRepository.listItineraryForGpx (PL30)', () => {
  it('ASSIGNREPO-024: joins day + place, only stops with coordinates, ordered by day_number then order_index', async () => {
    const { user } = createUser(testDb);
    const trip = createTrip(testDb, user.id);
    const day1 = createDay(testDb, trip.id, { day_number: 1, date: '2026-01-01', title: 'Day One' });
    const day2 = createDay(testDb, trip.id, { day_number: 2, date: '2026-01-02' });
    const geo = createPlace(testDb, trip.id, { name: 'Has Coords', lat: 1, lng: 2 });
    const noGeo = testDb.prepare('INSERT INTO places (trip_id, name, lat, lng) VALUES (?, ?, NULL, NULL)').run(trip.id, 'No Coords').lastInsertRowid as number;
    const secondStop = createPlace(testDb, trip.id, { name: 'Second Stop', lat: 3, lng: 4 });
    // day2's stop first (order_index 0), day1's stop second — proves the
    // ORDER BY is day_number then order_index, not insertion/id order.
    createDayAssignment(testDb, day2.id, secondStop.id, { order_index: 0 });
    createDayAssignment(testDb, day1.id, geo.id, { order_index: 0 });
    createDayAssignment(testDb, day1.id, noGeo, { order_index: 1 });

    const rows = await assignments.listItineraryForGpx(trip.id);
    expect(rows).toEqual([
      { day_number: 1, date: '2026-01-01', title: 'Day One', name: 'Has Coords', lat: 1, lng: 2 },
      { day_number: 2, date: '2026-01-02', title: null, name: 'Second Stop', lat: 3, lng: 4 },
    ]);
  });

  it('ASSIGNREPO-025: a trip with no coordinate-bearing stops returns []', async () => {
    const { user } = createUser(testDb);
    const trip = createTrip(testDb, user.id);
    const day = createDay(testDb, trip.id);
    const noGeo = testDb.prepare('INSERT INTO places (trip_id, name, lat, lng) VALUES (?, ?, NULL, NULL)').run(trip.id, 'No Coords').lastInsertRowid as number;
    createDayAssignment(testDb, day.id, noGeo);
    expect(await assignments.listItineraryForGpx(trip.id)).toEqual([]);
  });

  it('ASSIGNREPO-026: another trip\'s stops never leak in', async () => {
    const { user } = createUser(testDb);
    const trip = createTrip(testDb, user.id);
    const other = createTrip(testDb, user.id);
    const day = createDay(testDb, other.id);
    const place = createPlace(testDb, other.id, { lat: 5, lng: 6 });
    createDayAssignment(testDb, day.id, place.id);
    expect(await assignments.listItineraryForGpx(trip.id)).toEqual([]);
  });
});

// ── Plan 3c Task 8 (`TripsService.copy`, TP48/TP49/TP57) — additive ─────────

describe('DayAssignmentsRepository.listAllForTrip (TP48)', () => {
  // Task 9 fix wave (B-M4, rule 19): widened from an ids-only assertion to
  // full-row parity on a fully seeded fixture — every nullable column
  // non-null in one row, null in the other, plus a unicode string and a
  // '007'-style digit string — `toEqual(<the legacy da.*-joined-through-d
  // statement run raw>)`, so a renamed/dropped column or a changed row
  // order would fail this, not just the id list.
  it('ASSIGNREPO-027: every assignment of the trip, no ORDER BY guarantee, scoped by the day→trip join — toEqual(legacy) on a fully seeded fixture', async () => {
    const { user } = createUser(testDb);
    const trip = createTrip(testDb, user.id);
    const other = createTrip(testDb, user.id);
    const day = createDay(testDb, trip.id);
    const place = createPlace(testDb, trip.id, { name: 'Stop A' });
    const bare = createPlace(testDb, trip.id, { name: 'Stop B' });
    const accommodation = createDayAccommodation(testDb, trip.id, place.id, day.id, day.id);

    const insert = testDb.prepare(`
      INSERT INTO day_assignments (
        day_id, place_id, order_index, notes, reservation_status, reservation_notes,
        reservation_datetime, created_at, assignment_time, assignment_end_time,
        leg_transport_mode, incoming_leg_transport_mode, end_day, accommodation_id
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);

    // Row A: every nullable column non-null, a unicode string and a
    // '007'-style digit string among the values.
    const a1 = insert.run(
      day.id, place.id, 5, 'Notes — 日本 ☕️ 007', 'confirmed', 'resv notes 007',
      '2026-01-01T10:00:00Z', '2026-01-01 09:00:00', '10:00', '11:00',
      'walking', 'driving', 1, accommodation.id,
    ).lastInsertRowid as number;

    // Row B: every nullable column NULL (end_day is NOT NULL, given 0).
    const a2 = insert.run(
      day.id, bare.id, null, null, null, null,
      null, null, null, null,
      null, null, 0, null,
    ).lastInsertRowid as number;

    const otherDay = createDay(testDb, other.id);
    const otherPlace = createPlace(testDb, other.id);
    createDayAssignment(testDb, otherDay.id, otherPlace.id);

    const rows = await assignments.listAllForTrip(trip.id);
    const legacy = testDb.prepare('SELECT da.* FROM day_assignments da JOIN days d ON d.id = da.day_id WHERE d.trip_id = ?').all(trip.id);
    expect(rows).toEqual(legacy);
    expect(rows.map((r) => r.id)).toEqual([a1, a2]);
  });

  it('ASSIGNREPO-028: an empty trip returns []', async () => {
    const { user } = createUser(testDb);
    const trip = createTrip(testDb, user.id);
    expect(await assignments.listAllForTrip(trip.id)).toEqual([]);
  });
});

describe('DayAssignmentsRepository.insertAssignmentCopy (TP49)', () => {
  it('ASSIGNREPO-029: writes the 10-column copy set verbatim, no accommodation_id (stamped separately, TP57)', async () => {
    const { user } = createUser(testDb);
    const trip = createTrip(testDb, user.id);
    const day = createDay(testDb, trip.id);
    const place = createPlace(testDb, trip.id);

    const newId = await assignments.insertAssignmentCopy({
      day_id: day.id, place_id: place.id, order_index: 2, notes: 'n',
      reservation_status: 'booked', reservation_notes: 'rn', reservation_datetime: '2026-01-01T10:00',
      assignment_time: '10:00', assignment_end_time: '11:00', end_day: 0,
    });

    const row = testDb.prepare(`
      SELECT day_id, place_id, order_index, notes, reservation_status, reservation_notes,
        reservation_datetime, assignment_time, assignment_end_time, end_day, accommodation_id
      FROM day_assignments WHERE id = ?
    `).get(newId);
    expect(row).toEqual({
      day_id: day.id, place_id: place.id, order_index: 2, notes: 'n',
      reservation_status: 'booked', reservation_notes: 'rn', reservation_datetime: '2026-01-01T10:00',
      assignment_time: '10:00', assignment_end_time: '11:00', end_day: 0, accommodation_id: null,
    });
  });
});

describe('DayAssignmentsRepository.setAccommodation (TP57)', () => {
  it('ASSIGNREPO-030: stamps accommodation_id onto exactly the given assignment', async () => {
    const { user } = createUser(testDb);
    const trip = createTrip(testDb, user.id);
    const day = createDay(testDb, trip.id);
    const place = createPlace(testDb, trip.id);
    const assignment = createDayAssignment(testDb, day.id, place.id);
    const other = createDayAssignment(testDb, day.id, place.id);
    const accom = createDayAccommodation(testDb, trip.id, place.id, day.id, day.id);

    await assignments.setAccommodation(assignment.id, accom.id);

    expect((testDb.prepare('SELECT accommodation_id FROM day_assignments WHERE id = ?').get(assignment.id) as { accommodation_id: number }).accommodation_id).toBe(accom.id);
    expect((testDb.prepare('SELECT accommodation_id FROM day_assignments WHERE id = ?').get(other.id) as { accommodation_id: number | null }).accommodation_id).toBeNull();
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// Plan 4 Task 8b-2, item 1 (3d Task 7 review's "DayAssignments.listRoadtripVisits"
// carry): RPL2 (`roadtrip-plan.service.ts::context`'s `visits` read) had no
// repository-level toEqual(<legacy raw>) test — a correlated scalar subquery
// inside a LEFT JOIN ON clause, exercised here with every nullable column
// both null (no stay, no leg transport, coalesce falls back to the place)
// and set (a matching stay + its checkout day, explicit assignment overrides).
// ─────────────────────────────────────────────────────────────────────────────

const LEGACY_LIST_ROADTRIP_VISITS = `
  SELECT a.id, a.day_id, a.place_id, p.name, p.lat, p.lng,
    COALESCE(a.assignment_time, p.place_time) AS time,
    COALESCE(a.assignment_end_time, p.end_time) AS end_time,
    p.duration_minutes, a.end_day,
    a.leg_transport_mode, a.incoming_leg_transport_mode, p.stop_type, p.fill_percent,
    stay.id AS stay_id, stay.check_in, stay.check_out, checkout.day_number AS checkout_day
  FROM day_assignments a
  JOIN days d ON d.id = a.day_id
  JOIN places p ON p.id = a.place_id
  LEFT JOIN day_accommodations stay
    ON stay.id = (SELECT id FROM day_accommodations WHERE place_id = p.id AND start_day_id = d.id ORDER BY id LIMIT 1)
  LEFT JOIN days checkout ON checkout.id = stay.end_day_id
  WHERE d.trip_id = ?
  ORDER BY d.day_number, a.order_index, a.created_at
`;

describe('DayAssignmentsRepository.listRoadtripVisits (RPL2, roadtrip-plan.service.ts::context)', () => {
  it('ASSIGNREPO-031: matches the legacy statement — no stay, coalesce falls back to the place, leg transport NULL', async () => {
    const { user } = createUser(testDb);
    const trip = createTrip(testDb, user.id);
    const day = createDay(testDb, trip.id);
    const place = createPlace(testDb, trip.id, { name: 'Museum' });
    testDb.prepare('UPDATE places SET place_time = ?, end_time = ?, duration_minutes = ?, stop_type = ?, fill_percent = ? WHERE id = ?')
      .run('09:00', '11:00', 90, null, null, place.id);
    createDayAssignment(testDb, day.id, place.id);

    const legacy = testDb.prepare(LEGACY_LIST_ROADTRIP_VISITS).all(trip.id);
    const typed = await assignments.listRoadtripVisits(trip.id);
    expect(typed).toEqual(legacy);
    expect(typed[0]).toMatchObject({ time: '09:00', end_time: '11:00', stay_id: null, check_in: null, check_out: null, checkout_day: null, leg_transport_mode: null });
  });

  it('ASSIGNREPO-032: matches the legacy statement — a matching stay populates stay/checkout columns, explicit overrides win over coalesce', async () => {
    const { user } = createUser(testDb);
    const trip = createTrip(testDb, user.id);
    const day = createDay(testDb, trip.id, { day_number: 1 });
    const checkoutDay = createDay(testDb, trip.id, { day_number: 2 });
    const place = createPlace(testDb, trip.id, { name: 'Grand Hotel' });
    testDb.prepare('UPDATE places SET place_time = ?, end_time = ?, duration_minutes = ?, stop_type = ?, fill_percent = ? WHERE id = ?')
      .run('08:00', '10:00', 45, 'lodging', 80, place.id);
    const stay = createDayAccommodation(testDb, trip.id, place.id, day.id, checkoutDay.id, { check_in: '15:00', check_out: '11:00' });
    const assignment = createDayAssignment(testDb, day.id, place.id);
    testDb.prepare('UPDATE day_assignments SET assignment_time = ?, assignment_end_time = ?, leg_transport_mode = ?, incoming_leg_transport_mode = ?, end_day = ? WHERE id = ?')
      .run('14:00', '14:30', 'driving', 'walking', 1, assignment.id);

    const legacy = testDb.prepare(LEGACY_LIST_ROADTRIP_VISITS).all(trip.id);
    const typed = await assignments.listRoadtripVisits(trip.id);
    expect(typed).toEqual(legacy);
    expect(typed[0]).toMatchObject({
      time: '14:00', end_time: '14:30', stay_id: stay.id, check_in: '15:00', check_out: '11:00',
      checkout_day: 2, leg_transport_mode: 'driving', incoming_leg_transport_mode: 'walking', end_day: 1,
      stop_type: 'lodging', fill_percent: 80, duration_minutes: 45,
    });
  });

  it('ASSIGNREPO-033: empty array for a trip with no assignments', async () => {
    const { user } = createUser(testDb);
    const trip = createTrip(testDb, user.id);
    expect(await assignments.listRoadtripVisits(trip.id)).toEqual([]);
  });
});
