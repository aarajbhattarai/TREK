import type { DayNotes } from '../entities/DayNotes.entity';
import { toRow, type AssertRowKeys } from './_shared/rows';
import { EntityRepository } from '@mikro-orm/sql';

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

export class DayNotesRepository extends EntityRepository<DayNotes> {
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
   * clause, so it is already the stored text by the time `flush()` resolves.
   * The re-read is there for the columns that are not: one this insert never
   * names would otherwise be `undefined` on the entity and missing from the row.
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
    const note = this.create({
      day: input.day_id,
      trip: input.trip_id,
      text: input.text,
      time: input.time,
      icon: input.icon,
      sort_order: input.sort_order,
      color: input.color,
    });
    await this.getEntityManager().persist(note).flush();
    await this.getEntityManager().refresh(note);
    return toRow(note) as DayNoteRow;
  }
}
