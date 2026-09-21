import { afterAll, beforeAll, beforeEach, describe, expect, it } from 'vitest';
import { createTestDb, resetTestDb } from '../../../helpers/test-db';
import { createTestOrm, type TestOrm } from '../../../helpers/test-orm';
import { createDay, createTrip, createUser } from '../../../helpers/factories';
import { DayNotes } from '../../../../src/db/entities/DayNotes.entity';
import type { DayNotesRepository } from '../../../../src/db/repositories/DayNotes.repository';
import { DB_TIMESTAMP_RE } from '../../../../src/db/types';

const testDb = createTestDb();
let t: TestOrm;
let notes: DayNotesRepository;

beforeAll(async () => {
  t = await createTestOrm(testDb);
  notes = t.repo(DayNotes) as DayNotesRepository;
});
beforeEach(() => { resetTestDb(testDb); t.clear(); });
afterAll(async () => { await t.close(); testDb.close(); });

describe('DayNotesRepository timestamps', () => {
  it('NOTEREPO-001: an ORM insert leaves created_at to the column default, as text', async () => {
    const { user } = createUser(testDb);
    const trip = createTrip(testDb, user.id);
    const day = createDay(testDb, trip.id);
    const row = await notes.createNote({ day_id: day.id, trip_id: trip.id, text: 'Lunch' });
    const stored = testDb.prepare('SELECT created_at, typeof(created_at) AS kind FROM day_notes WHERE id = ?').get(row.id) as { created_at: string; kind: string };
    expect(stored.kind).toBe('text');
    expect(stored.created_at).toMatch(DB_TIMESTAMP_RE);
    expect(row.created_at).toBe(stored.created_at);
  });

  it('NOTEREPO-002: the returned row is the SELECT * row and the defaults are the legacy ones', async () => {
    const { user } = createUser(testDb);
    const trip = createTrip(testDb, user.id);
    const day = createDay(testDb, trip.id);
    const row = await notes.createNote({ day_id: day.id, trip_id: trip.id, text: 'Lunch' });
    expect(row).toEqual(testDb.prepare('SELECT * FROM day_notes WHERE id = ?').get(row.id));
    expect(row.icon).toBe('📝');
    expect(row.sort_order).toBe(0);
  });

  it('NOTEREPO-003: date() still works on a row the ORM wrote', async () => {
    const { user } = createUser(testDb);
    const trip = createTrip(testDb, user.id);
    const day = createDay(testDb, trip.id);
    const row = await notes.createNote({ day_id: day.id, trip_id: trip.id, text: 'Lunch' });
    const d = testDb.prepare('SELECT date(created_at) AS d FROM day_notes WHERE id = ?').get(row.id) as { d: string };
    expect(d.d).toMatch(/^\d{4}-\d{2}-\d{2}$/);
  });
});
