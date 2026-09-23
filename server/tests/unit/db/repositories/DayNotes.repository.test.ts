import { afterAll, beforeAll, beforeEach, describe, expect, it, vi } from 'vitest';
import { createSnapshotTestDb } from '../../../helpers/db-mock';
import { resetTestDb } from '../../../helpers/test-db';
import { createTestOrm, type TestOrm } from '../../../helpers/test-orm';
import { createDay, createDayNote, createTrip, createUser } from '../../../helpers/factories';
import { DayNotes } from '../../../../src/db/entities/DayNotes.entity';
import type { DayNotesRepository } from '../../../../src/db/repositories/DayNotes.repository';
import { DB_TIMESTAMP_RE } from '../../../../src/db/types';

const testDb = createSnapshotTestDb();
let t: TestOrm;
let notes: DayNotesRepository;

beforeAll(async () => {
  t = await createTestOrm(testDb);
  notes = t.repo(DayNotes);
});
beforeEach(() => { resetTestDb(testDb); t.clear(); });
afterAll(async () => { await t.close(); testDb.close(); });

describe('DayNotesRepository timestamps', () => {
  it('NOTEREPO-001: an ORM insert leaves created_at to the column default, as text', async () => {
    const { user } = createUser(testDb);
    const trip = createTrip(testDb, user.id);
    const day = createDay(testDb, trip.id);
    const row = await notes.createNote({ day_id: day.id, trip_id: trip.id, text: 'Lunch', time: null, icon: '📝', sort_order: 0, color: null });
    const stored = testDb.prepare('SELECT created_at, typeof(created_at) AS kind FROM day_notes WHERE id = ?').get(row.id) as { created_at: string; kind: string };
    expect(stored.kind).toBe('text');
    expect(stored.created_at).toMatch(DB_TIMESTAMP_RE);
    expect(row.created_at).toBe(stored.created_at);
  });

  it('NOTEREPO-002: the returned row is the SELECT * row, with the values the caller passed written verbatim', async () => {
    const { user } = createUser(testDb);
    const trip = createTrip(testDb, user.id);
    const day = createDay(testDb, trip.id);
    const row = await notes.createNote({ day_id: day.id, trip_id: trip.id, text: 'Lunch', time: null, icon: '📝', sort_order: 0, color: null });
    expect(row).toStrictEqual(testDb.prepare('SELECT * FROM day_notes WHERE id = ?').get(row.id));
    expect(row.icon).toBe('📝');
    expect(row.sort_order).toBe(0);
  });

  it('NOTEREPO-003: date() still works on a row the ORM wrote', async () => {
    const { user } = createUser(testDb);
    const trip = createTrip(testDb, user.id);
    const day = createDay(testDb, trip.id);
    const row = await notes.createNote({ day_id: day.id, trip_id: trip.id, text: 'Lunch', time: null, icon: '📝', sort_order: 0, color: null });
    const d = testDb.prepare('SELECT date(created_at) AS d FROM day_notes WHERE id = ?').get(row.id) as { d: string };
    expect(d.d).toMatch(/^\d{4}-\d{2}-\d{2}$/);
  });

  it('NOTEREPO-004: throws when the read-back after insert finds no row (coverage: the guard branch)', async () => {
    const { user } = createUser(testDb);
    const trip = createTrip(testDb, user.id);
    const day = createDay(testDb, trip.id);
    const spy = vi.spyOn(notes, 'findOne').mockResolvedValueOnce(null);
    await expect(notes.createNote({ day_id: day.id, trip_id: trip.id, text: 'Ghost', time: null, icon: null, sort_order: 0, color: null }))
      .rejects.toThrow('createNote: read-back after insert found no row');
    spy.mockRestore();
  });
});

// ---------------------------------------------------------------------------
// Plan 3c Task 2 (DY4) — DaysService.list's day_notes batch load.
// ---------------------------------------------------------------------------

describe('DayNotesRepository.listByDayIds (DY4)', () => {
  it('NOTEREPO-005: an empty day_ids array short-circuits to [] without querying', async () => {
    const connection = t.orm.em.getConnection();
    const spy = vi.spyOn(connection, 'execute');
    expect(await notes.listByDayIds([])).toEqual([]);
    expect(spy).not.toHaveBeenCalled();
    spy.mockRestore();
  });

  it('NOTEREPO-006: spans several days, ordered by sort_order ASC then created_at ASC', async () => {
    const { user } = createUser(testDb);
    const trip = createTrip(testDb, user.id);
    const dayA = createDay(testDb, trip.id, { day_number: 1 });
    const dayB = createDay(testDb, trip.id, { day_number: 2 });
    createDayNote(testDb, dayA.id, trip.id, { text: 'Second', sort_order: 2 });
    createDayNote(testDb, dayA.id, trip.id, { text: 'First', sort_order: 1 });
    createDayNote(testDb, dayB.id, trip.id, { text: 'Only' });

    const rows = await notes.listByDayIds([dayA.id, dayB.id]);
    expect(rows.map((r) => r.text)).toEqual(['First', 'Second', 'Only']);
    expect(rows.map((r) => r.day_id)).toEqual([dayA.id, dayA.id, dayB.id]);
  });

  it('NOTEREPO-007: a day with no notes contributes no rows', async () => {
    const { user } = createUser(testDb);
    const trip = createTrip(testDb, user.id);
    const day = createDay(testDb, trip.id);
    expect(await notes.listByDayIds([day.id])).toEqual([]);
  });
});
