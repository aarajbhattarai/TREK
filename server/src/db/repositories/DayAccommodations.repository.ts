import type { DayAccommodations } from '../entities/DayAccommodations.entity';
import { coalesceParam, columnRef } from '../dialect/sql-functions';
import { TrekRepository } from './_shared/trek-repository';

/**
 * Plan 3d Task 2 (`ReservationsService`'s `day_accommodations` writes — RS27,
 * RS29, RS30, RS37–RS40, RS42, RS43, RS46, RS47 — plus the RS21 dispatch
 * union's `'day_accommodations'` arm). This is the reservations-owned SUBSET
 * of the repository: `days.service.ts` DY19/DY20/DY22 and `places.service.ts`
 * PL16 (Plan 3d Task 3) add methods here too — the class is shared, per the
 * inventory's own note (§7) — Task 3 appends rather than replaces.
 *
 * `day_accommodations` has no MikroORM relation to `reservations`
 * (`reservations.accommodation_id` is a bare `p.text().nullable()` column,
 * no FK — Task 0's R10 finding) — every method here that only reaches this
 * table stays on the QueryBuilder/`nativeUpdate`/`insert`, never Kysely: the
 * TEXT-vs-INTEGER join lives in `ReservationsRepository`, not here.
 */
export class DayAccommodationsRepository extends TrekRepository<DayAccommodations> {
  /**
   * RS27/RS40 (`ReservationsService.createInTx`/`updateInTx`'s auto-create
   * branch) — `INSERT INTO day_accommodations (trip_id, place_id,
   * start_day_id, end_day_id, check_in, check_out, confirmation) VALUES
   * (?×7)`. Seven columns only — no `check_in_end`, no `notes` (unlike
   * `AccommodationsService`'s own AC30, a 9-column insert — a DIFFERENT
   * method, D4). The caller passes already-decided values (the `|| null`
   * coercions stay in the service); `em.insert()` returns the generated PK.
   */
  async insertBookingStay(input: {
    trip_id: number | string;
    place_id: number | null;
    start_day_id: number;
    end_day_id: number;
    check_in: string | null;
    check_out: string | null;
    confirmation: string | null;
  }): Promise<number> {
    return await this.insert({
      trip: input.trip_id,
      place: input.place_id,
      startDay: input.start_day_id,
      endDay: input.end_day_id,
      check_in: input.check_in,
      check_out: input.check_out,
      confirmation: input.confirmation,
    });
  }

  /**
   * RS29/RS42 — `UPDATE day_accommodations SET check_in = COALESCE(?,
   * check_in), check_in_end = COALESCE(?, check_in_end), check_out =
   * COALESCE(?, check_out) WHERE id = ?`. `coalesceParam` (value-side, a
   * bound `?`) through `qb().update()` — `nativeUpdate`'s `EntityData`
   * shape doesn't accept a raw fragment value (`DayAssignmentsRepository
   * .shiftOrderFrom`'s precedent).
   */
  async patchTimes(id: number, check_in: string | null, check_in_end: string | null, check_out: string | null): Promise<void> {
    const platform = this.getEntityManager().getPlatform();
    await this.qb()
      .update({
        check_in: coalesceParam(platform, 'check_in', check_in),
        check_in_end: coalesceParam(platform, 'check_in_end', check_in_end),
        check_out: coalesceParam(platform, 'check_out', check_out),
      })
      .where({ id })
      .execute('run');
  }

  /** RS30/RS43 — `UPDATE day_accommodations SET confirmation = COALESCE(?, confirmation) WHERE id = ?`. */
  async patchConfirmation(id: number, confirmation: string | null): Promise<void> {
    const platform = this.getEntityManager().getPlatform();
    await this.qb()
      .update({ confirmation: coalesceParam(platform, 'confirmation', confirmation) })
      .where({ id })
      .execute('run');
  }

  /**
   * RS37/RS46 — `SELECT id FROM day_accommodations WHERE id = ? AND trip_id
   * = ?`. `id`/`trip_id: number` (typed filter, program rule 23): both
   * callers (`updateInTx`'s re-link scoping check, `remove`'s own-stay
   * check) pass the SAME `toRowId`-parsed trip id the service method itself
   * resolved once at its gate.
   */
  async existsInTrip(id: number, trip_id: number): Promise<boolean> {
    const row = await this.qb('a')
      .select(['a.id'])
      .where({ id, trip: trip_id })
      .execute<{ id: number } | undefined>('get', false);
    return !!row;
  }

  /** RS38 — `SELECT check_in FROM day_accommodations WHERE id = ?`. */
  async getCheckIn(id: number): Promise<string | null | undefined> {
    const row = await this.qb('a')
      .select(['a.check_in'])
      .where({ id })
      .execute<{ check_in: string | null } | undefined>('get', false);
    return row?.check_in;
  }

  /**
   * RS39 — `UPDATE day_accommodations SET place_id = ?, start_day_id = ?,
   * end_day_id = ?, check_in = ?, check_out = ?, confirmation = ? WHERE id =
   * ?`. Six columns (no `check_in_end`/`notes`, unlike `AccommodationsService
   * .moveStay`'s own write) — the caller's already-decided values, written
   * verbatim (the `PlacesRepository.updatePlace`/PL11 precedent: no SQL-side
   * COALESCE here, the legacy statement itself has none for these columns).
   */
  async updateFromBooking(id: number, write: {
    place_id: number | null;
    start_day_id: number;
    end_day_id: number;
    check_in: string | null;
    check_out: string | null;
    confirmation: string | null;
  }): Promise<void> {
    await this.nativeUpdate({ id }, {
      place: write.place_id,
      startDay: write.start_day_id,
      endDay: write.end_day_id,
      check_in: write.check_in,
      check_out: write.check_out,
      confirmation: write.confirmation,
    });
  }

  /** RS47 — `DELETE FROM day_accommodations WHERE id = ? AND trip_id = ?`, run AFTER `accommodations.dropStayStops` (ordering load-bearing, kept in the service). `id`/`trip_id: number` (typed filter, program rule 23; rule 21 — the SAME `toRowId`-parsed trip id `existsInTrip`'s gate read used). */
  async deleteInTrip(id: number, trip_id: number): Promise<void> {
    await this.nativeDelete({ id, trip: trip_id });
  }

  /**
   * RS21's `'day_accommodations'` dispatch arm (`ReservationsService
   * .referencesOutsideTrip`'s `elsewhere('day_accommodations',
   * data.accommodation_id)` — `SELECT trip_id FROM day_accommodations WHERE
   * id = ?`). A missing row is not an offender (the caller's own `!!row &&
   * String(row.trip_id) !== String(tripId)` check, preserved in the
   * service) — this returns `undefined` on a miss, never throws.
   */
  async getTripId(id: number): Promise<number | undefined> {
    const platform = this.getEntityManager().getPlatform();
    const row = await this.qb('a')
      .select([columnRef(platform, 'a.trip_id').as('trip_id')])
      .where({ id })
      .execute<{ trip_id: number } | undefined>('get', false);
    return row?.trip_id;
  }
}
