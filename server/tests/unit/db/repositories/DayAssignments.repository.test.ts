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
import { createCategory, createDay, createDayAssignment, createPlace, createTrip, createUser } from '../../../helpers/factories';
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
  it('ASSIGNPLACEREPO-008 (D-shape): a place rename after an unrelated identity-map read is visible in the FIRST wider projection', async () => {
    const { user } = createUser(testDb);
    const trip = createTrip(testDb, user.id);
    const day = createDay(testDb, trip.id);
    const place = createPlace(testDb, trip.id, { name: 'Old Name' });
    const assignment = createDayAssignment(testDb, day.id, place.id);
    await t.repo(DayAssignments).find({}); // populate the identity map with an unrelated read
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
