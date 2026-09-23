import type { DayNotes } from '../entities/DayNotes.entity';
import { toRow, type AssertRowKeys } from './_shared/rows';
import { TrekRepository } from './_shared/trek-repository';

export interface DayNoteRow {
  id: number;
  day_id: number;
  trip_id: number;
  text: string;
  time: string | null;
  icon: string | null;
  sort_order: number | null;
  created_at: string | null;
  color: string | null;
}

const _dayNoteRowKeys: AssertRowKeys<DayNoteRow, DayNotes> = true;

export class DayNotesRepository extends TrekRepository<DayNotes> {
  /**
   * The column set of the legacy INSERT:
   * `INSERT INTO day_notes (day_id, trip_id, text, time, icon, sort_order, color)`.
   *
   * The caller passes already-coerced values — every field is required and is
   * written verbatim. The legacy defaults (`icon || '📝'`, `sortOrder ?? 9999`,
   * the trimmed text, `normalizeNoteColor(color)`) stay in
   * `nest/day-notes/day-notes.service.ts`, which is where that rule lives.
   *
   * `created_at` is not in the column set: it is left to the column's
   * `DEFAULT CURRENT_TIMESTAMP`. It alone would not need the re-read either —
   * a `defaultRaw` column the insert does not name is in its `returning`
   * clause. The re-read is there for the columns that are not: one this
   * insert never names would otherwise be `undefined` on the entity and
   * missing from the row.
   *
   * `this.insert` (Plan 3b interlude B, finishing F2's sweep), never
   * `create()` + `persist().flush()`: `flush()` commits the *whole* unit of
   * work of the request's `EntityManager`, not just this row. The read-back
   * uses `disableIdentityMap: true` by the base class's default.
   */
  async createNote(input: {
    day_id: number;
    trip_id: number;
    text: string;
    time: string | null;
    icon: string | null;
    sort_order: number | null;
    color: string | null;
  }): Promise<DayNoteRow> {
    const id = await this.insert({
      day: input.day_id,
      trip: input.trip_id,
      text: input.text,
      time: input.time,
      icon: input.icon,
      sort_order: input.sort_order,
      color: input.color,
    });
    const inserted = await this.findOne({ id });
    if (!inserted) {
      throw new Error('createNote: read-back after insert found no row');
    }
    return toRow(inserted) as DayNoteRow;
  }

  /**
   * DY4 (`days.service.ts::list`) — `` SELECT * FROM day_notes WHERE day_id
   * IN (${dayPlaceholders}) ORDER BY sort_order ASC, created_at ASC ``.
   * Empty-array short-circuit before any query, as the legacy dynamic-`IN`
   * builder did.
   */
  async listByDayIds(day_ids: number[]): Promise<DayNoteRow[]> {
    if (day_ids.length === 0) return [];
    const notes = await this.find({ day: { $in: day_ids } }, { orderBy: { sort_order: 'asc', created_at: 'asc' } });
    return notes.map((n) => toRow(n) as DayNoteRow);
  }
}
