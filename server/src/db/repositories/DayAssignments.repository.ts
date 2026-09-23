import type { Platform } from '@mikro-orm/core';
import type { DayAssignments } from '../entities/DayAssignments.entity';
import { coalesce, columnRef } from '../dialect/sql-functions';
import { TrekRepository } from './_shared/trek-repository';

/**
 * The DY1/DY3/AS1/AS3 assignment-with-place projection row (Plan 3c Task 2's
 * report is the contract for Task 3, which consumes this unchanged):
 *
 * ```sql
 * SELECT da.*, p.id as place_id, p.name as place_name, p.description as place_description,
 *   p.lat, p.lng, p.address, p.category_id, p.price, p.currency as place_currency,
 *   COALESCE(da.assignment_time, p.place_time) as place_time,
 *   COALESCE(da.assignment_end_time, p.end_time) as end_time,
 *   p.duration_minutes, p.notes as place_notes,
 *   p.image_url, p.transport_mode, p.google_place_id, p.google_ftid, p.osm_id, p.amap_poi_id,
 *   p.website, p.phone, p.stop_type, p.fill_percent,
 *   c.name as category_name, c.color as category_color, c.icon as category_icon
 * FROM day_assignments da
 * JOIN places p ON da.place_id = p.id
 * LEFT JOIN categories c ON p.category_id = c.id
 * WHERE <da.id = ? | da.day_id = ? | da.day_id IN (...)>
 * [ORDER BY da.order_index ASC, da.created_at ASC]
 * ```
 *
 * `da.*` selects every scalar column of `DayAssignments` (`place_id` among
 * them, the physical FK column) and then `p.id as place_id` selects it again
 * under the same output key — the legacy statement did this too, and
 * better-sqlite3's row object keeps the LAST column with a given name, so
 * `place_id` on the wire is always `p.id`, not `da.place_id` (they agree by
 * the JOIN condition regardless). Nullability here is the physical column's,
 * not `AssignmentRow`'s (types.ts) narrower claims (rule 16) — a place with
 * no category genuinely nulls `category_name`/`category_color`/
 * `category_icon` through the LEFT JOIN even though `Categories.name` itself
 * is NOT NULL.
 */
export interface AssignmentWithPlaceRow {
  id: number;
  day_id: number;
  place_id: number;
  order_index: number | null;
  notes: string | null;
  reservation_status: string | null;
  reservation_notes: string | null;
  reservation_datetime: string | null;
  assignment_time: string | null;
  assignment_end_time: string | null;
  end_day: number;
  leg_transport_mode: string | null;
  incoming_leg_transport_mode: string | null;
  accommodation_id: number | null;
  created_at: string | null;
  place_name: string;
  place_description: string | null;
  lat: number | null;
  lng: number | null;
  address: string | null;
  category_id: number | null;
  price: number | null;
  place_currency: string | null;
  place_time: string | null;
  end_time: string | null;
  duration_minutes: number | null;
  place_notes: string | null;
  image_url: string | null;
  transport_mode: string | null;
  google_place_id: string | null;
  google_ftid: string | null;
  osm_id: string | null;
  amap_poi_id: string | null;
  website: string | null;
  phone: string | null;
  stop_type: string | null;
  fill_percent: number | null;
  category_name: string | null;
  category_color: string | null;
  category_icon: string | null;
}

/**
 * `day_assignments`'s shape as DY24's `em.getKysely()` call needs it (an
 * explicit `TDB` type argument, per `WebauthnChallengesRepository
 * .claimChallenge`'s docstring — entity-metadata inference is not what a
 * hand-written statement wants), narrowed to the columns `reanchorToDay`
 * reads or writes.
 */
interface DayAssignmentsKyselyDB {
  day_assignments: {
    id: number;
    day_id: number;
    order_index: number | null;
    accommodation_id: number | null;
  };
}

export class DayAssignmentsRepository extends TrekRepository<DayAssignments> {
  /** The DY1/DY3/AS1/AS3 projection's SELECT list, shared by all three query shapes below. */
  private assignmentWithPlaceSelect(platform: Platform) {
    return [
      'da.*',
      'p.id as place_id',
      'p.name as place_name',
      'p.description as place_description',
      'p.lat',
      'p.lng',
      'p.address',
      // `category_id` is `persist(false)` on `Places` — a bare `'p.category_id'`
      // string selects nothing (not a real property name), and `'p.category'`
      // (the owning relation) is ALSO the joined alias here (`c`), so MikroORM
      // absorbs the select into the join and returns `c__id`, not `category_id`
      // (`McpTokensRepository.listAllWithUsername`'s `t.user`/`user_id`
      // docstring is the same trap, one join away from this one). `columnRef`
      // selects the literal physical column, keyed `category_id`.
      columnRef(platform, 'p.category_id'),
      'p.price',
      'p.currency as place_currency',
      coalesce(platform, 'da.assignment_time', 'p.place_time').as('place_time'),
      coalesce(platform, 'da.assignment_end_time', 'p.end_time').as('end_time'),
      'p.duration_minutes',
      'p.notes as place_notes',
      'p.image_url',
      'p.transport_mode',
      'p.google_place_id',
      'p.google_ftid',
      'p.osm_id',
      'p.amap_poi_id',
      'p.website',
      'p.phone',
      'p.stop_type',
      'p.fill_percent',
      'c.name as category_name',
      'c.color as category_color',
      'c.icon as category_icon',
    ] as const;
  }

  /**
   * AS1 (`assignments.service.ts::getAssignmentWithPlace`, Task 3): the
   * projection filtered to one assignment, no ORDER BY (a single row).
   */
  async findWithPlaceAndCategory(id: number): Promise<AssignmentWithPlaceRow | null> {
    const platform = this.getEntityManager().getPlatform();
    const row = await this.qb('da')
      .join('da.place', 'p')
      .leftJoin('p.category', 'c')
      .select(this.assignmentWithPlaceSelect(platform))
      .where({ 'da.id': id })
      .execute<AssignmentWithPlaceRow | undefined>('get', false);
    return row ?? null;
  }

  /**
   * DY1 (`days.service.ts::getAssignmentsForDay`) and AS3
   * (`assignments.service.ts::listDayAssignments`, Task 3): the projection
   * for one day, `ORDER BY da.order_index ASC, da.created_at ASC`.
   */
  async listForDay(day_id: number): Promise<AssignmentWithPlaceRow[]> {
    const platform = this.getEntityManager().getPlatform();
    return await this.qb('da')
      .join('da.place', 'p')
      .leftJoin('p.category', 'c')
      .select(this.assignmentWithPlaceSelect(platform))
      .where({ 'da.day': day_id })
      .orderBy({ 'da.order_index': 'asc', 'da.created_at': 'asc' })
      .execute<AssignmentWithPlaceRow[]>('all', false);
  }

  /**
   * DY3 (`days.service.ts::list`): the same projection for several days at
   * once (`WHERE da.day_id IN (...)`), same ORDER BY. Empty-array
   * short-circuit before any query, as the legacy dynamic-`IN` builder did.
   */
  async listWithPlaceAndCategory(day_ids: number[]): Promise<AssignmentWithPlaceRow[]> {
    if (day_ids.length === 0) return [];
    const platform = this.getEntityManager().getPlatform();
    return await this.qb('da')
      .join('da.place', 'p')
      .leftJoin('p.category', 'c')
      .select(this.assignmentWithPlaceSelect(platform))
      .where({ 'da.day': { $in: day_ids } })
      .orderBy({ 'da.order_index': 'asc', 'da.created_at': 'asc' })
      .execute<AssignmentWithPlaceRow[]>('all', false);
  }

  /**
   * DY24 (`days.service.ts::resyncAccommodationDays`'s `moveStayStop`,
   * inventory §18.2) — a correlated scalar subquery in an UPDATE SET clause
   * the QueryBuilder cannot express:
   *
   * ```sql
   * UPDATE day_assignments
   * SET day_id = :dayId,
   *     order_index = COALESCE((SELECT MAX(order_index) FROM day_assignments WHERE day_id = :dayId), -1) + 1
   * WHERE accommodation_id = :accId
   * ```
   *
   * `this.kysely()` (`_shared/trek-repository.ts`), not
   * `this.getEntityManager().getKysely()` directly — see
   * `WebauthnChallengesRepository.claimChallenge`'s docstring for why.
   * Proven to join the caller's ambient `uow.transactional` block by
   * rollback, not by doc comment (ROLLBACK proof in the repository test and
   * the task report): a call inside a transaction that then throws leaves
   * the row un-moved; inside one that commits, the row is moved.
   */
  async reanchorToDay(accommodation_id: number, day_id: number): Promise<void> {
    await this.kysely<DayAssignmentsKyselyDB>()
      .updateTable('day_assignments')
      .set((eb) => ({
        day_id,
        order_index: eb(
          eb.fn.coalesce(
            eb
              .selectFrom('day_assignments as da2')
              .select((eb2) => eb2.fn.max('da2.order_index').as('m'))
              .where('da2.day_id', '=', day_id),
            eb.val(-1),
          ),
          '+',
          eb.val(1),
        ),
      }))
      .where('accommodation_id', '=', accommodation_id)
      .execute();
  }
}
