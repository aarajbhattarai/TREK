import type { Days } from '../entities/Days.entity';
import { toRow, type AssertRowKeys } from './_shared/rows';
import { EntityRepository } from '@mikro-orm/sql';

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

export class DaysRepository extends EntityRepository<Days> {
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
   * The insert is followed by the legacy re-select, so the caller gets the
   * stored row rather than what it asked to store. That re-select is not
   * optional: the insert's `returning` clause carries only the generated and
   * `defaultRaw` columns, so a column this insert never names (`title`,
   * `default_transport_mode`) would still be `undefined` on the entity and
   * would simply be missing from the row.
   */
  async createDay(input: {
    trip_id: number;
    day_number: number;
    date: string | null;
    notes: string | null;
  }): Promise<DayRow> {
    const day = this.create({
      trip: input.trip_id,
      day_number: input.day_number,
      date: input.date,
      notes: input.notes,
    });
    await this.getEntityManager().persist(day).flush();
    await this.getEntityManager().refresh(day);
    return toRow(day) as DayRow;
  }
}
