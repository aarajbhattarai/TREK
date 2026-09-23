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

/** The DY26/DY29 reorder/insert projection: `SELECT id, day_number, date FROM days WHERE trip_id = ? ORDER BY day_number`. */
export interface DayOrderRow {
  id: number;
  day_number: number;
  date: string | null;
}

/** The DY21 re-anchor lookup: `SELECT id, day_number FROM days WHERE trip_id = ? AND date = ? LIMIT 1`. */
export interface DayIdAndNumberRow {
  id: number;
  day_number: number;
}

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

  /**
   * `SELECT * FROM days WHERE id = ?` — DY7/DY10/DY12/DY32/DY36's shared
   * re-select, one method for all five sites (DY32/DY36 read after their
   * transaction resolves, so this is a fresh statement against committed
   * rows, no `refresh` needed).
   */
  async findById(id: number): Promise<DayRow | undefined> {
    const day = await this.findOne({ id });
    return day ? (toRow(day) as DayRow) : undefined;
  }

  /**
   * DY9 — `UPDATE days SET notes = ?, title = ? WHERE id = ?`. The presence
   * sentinel that decides `notes`/`title` (the legacy's asymmetric `||`
   * vs. `??` coercion) stays in `DaysService.update`; this takes the final,
   * already-decided values and writes them verbatim.
   */
  async updateNotesAndTitle(id: number, notes: string | null, title: string | null): Promise<void> {
    await this.nativeUpdate({ id }, { notes, title });
  }

  /** DY11 — `UPDATE days SET default_transport_mode = ? WHERE id = ?` (#1281). */
  async setDefaultTransportMode(id: number, mode: string | null): Promise<void> {
    await this.nativeUpdate({ id }, { default_transport_mode: mode });
  }

  /** DY13 — `DELETE FROM days WHERE id = ?`, unscoped: the caller proved trip access. */
  async deleteById(id: number): Promise<void> {
    await this.nativeDelete({ id });
  }

  /**
   * DY26/DY29 — `SELECT id, day_number, date FROM days WHERE trip_id = ?
   * ORDER BY day_number`, the read `reorder`/`insert` both take before
   * opening their `uow.transactional` block (same text, two legacy methods,
   * one repository method here).
   */
  async listOrderedForReorder(trip_id: number): Promise<DayOrderRow[]> {
    return await this.qb('d')
      .select(['d.id', 'd.day_number', 'd.date'])
      .where({ trip: trip_id })
      .orderBy({ day_number: 'asc' })
      .execute<DayOrderRow[]>('all', false);
  }

  /** DY27/DY30 — `UPDATE days SET day_number = ? WHERE id = ?` (the two-phase renumber's per-row write). */
  async setDayNumber(id: number, day_number: number): Promise<void> {
    await this.nativeUpdate({ id }, { day_number });
  }

  /** DY28/DY33 — `UPDATE days SET day_number = ?, date = ? WHERE id = ?`. */
  async setDayNumberAndDate(id: number, day_number: number, date: string | null): Promise<void> {
    await this.nativeUpdate({ id }, { day_number, date });
  }

  /**
   * DY31/DY34 — `INSERT INTO days (trip_id, day_number, date) VALUES (?, ?,
   * ?)` (no `notes` column named, unlike `createDay`'s DY6 — the row's
   * `notes` is left to the column's own NULL default). Returns the inserted
   * id (`em.insert()`'s returned PK, R6's `lastInsertRowid` replacement);
   * the caller re-selects separately (DY32/DY36), after its transaction
   * resolves, so no read-back happens here.
   */
  async insertDay(input: { trip_id: number; day_number: number; date: string | null }): Promise<number> {
    return await this.insert({
      trip: input.trip_id,
      day_number: input.day_number,
      date: input.date,
    });
  }

  /** DY21 — `SELECT id, day_number FROM days WHERE trip_id = ? AND date = ? LIMIT 1`. */
  async findByTripAndDate(trip_id: number, date: string): Promise<DayIdAndNumberRow | undefined> {
    const row = await this.qb('d')
      .select(['d.id', 'd.day_number'])
      .where({ trip: trip_id, date })
      .limit(1)
      .execute<DayIdAndNumberRow | undefined>('get', false);
    return row ?? undefined;
  }

  // ---------------------------------------------------------------------------
  // Plan 3c Task 3 (`AssignmentsService`) — appended per the task's own
  // file-ownership rule ("additive methods on Days/Places repositories if
  // needed").
  // ---------------------------------------------------------------------------

  /**
   * AS4 (`AssignmentsService.dayExists`) — `SELECT id FROM days WHERE id = ?
   * AND trip_id = ?`. Raw-bind (`number | string`, D4's T5 escape hatch,
   * `TripsRepository.findAccessible`'s precedent): the legacy guard binds
   * the route's raw params with no `Number()`/`toRowId` conversion of its
   * own, so this must accept and bind exactly what it's handed.
   */
  async existsInTrip(id: number | string, trip_id: number | string): Promise<boolean> {
    const row = await this.qb('d')
      .select(['d.id'])
      .where('d.id = ? AND d.trip_id = ?', [id, trip_id])
      .execute<{ id: number } | undefined>('get', false);
    return !!row;
  }
}
