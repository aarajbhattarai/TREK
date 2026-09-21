import type { DayNotes } from '../entities/DayNotes.entity';
import { toRow } from './_shared/rows';
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

export class DayNotesRepository extends EntityRepository<DayNotes> {
  /**
   * `INSERT INTO day_notes (day_id, trip_id, text, time, icon, sort_order, color)`
   * — `created_at` is left to `DEFAULT CURRENT_TIMESTAMP`, then the row is
   * re-read so the returned row is the stored one.
   *
   * `created_at` alone would not need the re-read: a `defaultRaw` column the
   * insert does not name is in its `returning` clause, so it is already the
   * stored text by the time `flush()` resolves. The re-read is there for the
   * columns that are not — a nullable column this insert never named would
   * otherwise be `undefined` on the entity and missing from the row.
   */
  async createNote(input: {
    day_id: number;
    trip_id: number;
    text: string;
    time?: string | null;
    icon?: string | null;
    sort_order?: number | null;
    color?: string | null;
  }): Promise<DayNoteRow> {
    const note = this.create({
      day: input.day_id,
      day_id: input.day_id,
      trip: input.trip_id,
      trip_id: input.trip_id,
      text: input.text,
      time: input.time ?? null,
      icon: input.icon ?? '📝',
      sort_order: input.sort_order ?? 0,
      color: input.color ?? null,
    });
    await this.getEntityManager().persist(note).flush();
    await this.getEntityManager().refresh(note);
    return toRow(note) as DayNoteRow;
  }
}
