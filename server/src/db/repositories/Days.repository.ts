import type { Days } from '../entities/Days.entity';
import { toRow, type AssertRowKeys } from './_shared/rows';
import { TrekRepository } from './_shared/trek-repository';

/** A `days` row as the API emits it. */
export interface DayRow {
  id: number;
  trip_id: number;
  day_number: number;
  date: string | null;
  notes: string | null;
  title: string | null;
  default_transport_mode: string | null;
}

const _dayRowKeys: AssertRowKeys<DayRow, Days> = true;

export class DaysRepository extends TrekRepository<Days> {
  /** `SELECT * FROM days WHERE trip_id = ? ORDER BY day_number ASC` */
  async listByTrip(trip_id: number): Promise<DayRow[]> {
    const days = await this.find({ trip: trip_id }, { orderBy: { day_number: 'asc' } });
    return days.map((d) => toRow(d) as DayRow);
  }

  /** `SELECT * FROM days WHERE id = ? AND trip_id = ?` */
  async findInTrip(id: number, trip_id: number): Promise<DayRow | undefined> {
    const day = await this.findOne({ id, trip: trip_id });
    return day ? (toRow(day) as DayRow) : undefined;
  }

  /**
   * The trip's highest `day_number`, 0 when it has no days.
   *
   * The legacy statement was `SELECT MAX(day_number) ... WHERE trip_id = ?`;
   * this reads the same value as the first row of a descending order, which
   * needs no SQL function spelled outside `db/dialect/sql-functions.ts` and no
   * entity hydrated into the identity map.
   */
  async maxDayNumber(trip_id: number): Promise<number> {
    const row = await this.qb('d')
      .select('d.day_number')
      .where({ trip: trip_id })
      .orderBy({ day_number: 'desc' })
      .limit(1)
      .execute<{ day_number: number | null } | undefined>('get', false);
    return row?.day_number ?? 0;
  }

  /**
   * The column set of the legacy INSERT:
   * `INSERT INTO days (trip_id, day_number, date, notes) VALUES (?, ?, ?, ?)`.
   *
   * The caller passes already-coerced values — every field is required and is
   * written verbatim, because a default or a coercion belongs to the service
   * that owns the rule, not to the statement that stores it.
   *
   * `this.insert` (Plan 3b interlude B, finishing F2's sweep — Task 1 fix
   * round's re-review flagged this method as a leftover whole-request-
   * UnitOfWork `flush()`), never `create()` + `persist().flush()`: `flush()`
   * commits the *whole* unit of work of the request's `EntityManager`, not
   * just this row. The insert is followed by a read-back
   * (`disableIdentityMap: true` by the base class's default), so the caller
   * gets the stored row rather than what it asked to store — not optional:
   * the insert's `returning` clause carries only the generated and
   * `defaultRaw` columns, so a column this insert never names (`title`,
   * `default_transport_mode`) would otherwise simply be missing from the
   * row.
   */
  async createDay(input: {
    trip_id: number;
    day_number: number;
    date: string | null;
    notes: string | null;
  }): Promise<DayRow> {
    const id = await this.insert({
      trip: input.trip_id,
      day_number: input.day_number,
      date: input.date,
      notes: input.notes,
    });
    const inserted = await this.findOne({ id });
    if (!inserted) {
      throw new Error('createDay: read-back after insert found no row');
    }
    return toRow(inserted) as DayRow;
  }
}
