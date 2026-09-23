import type { PlaceRegions } from '../entities/PlaceRegions.entity';
import { TrekRepository } from './_shared/trek-repository';

/** `place_regions` — the columns `AT28`'s `SELECT *` needs. */
export interface PlaceRegionRow {
  place_id: number;
  country_code: string;
  region_code: string;
  region_name: string;
}

interface PlaceRegionsKyselyDB {
  place_regions: { place_id: number; country_code: string; region_code: string; region_name: string };
  places: { id: number; trip_id: number };
  trips: { id: number; user_id: number; start_date: string | null; end_date: string | null };
  trip_members: { trip_id: number; user_id: number };
}

/**
 * `place_regions` — the geocoded-country/region cache for a place (Plan 3f
 * Task 1). The table sits under `places`'/3c's ownership (`place_id`'s FK),
 * but atlas is its only writer and its only reader beyond that FK — the
 * inventory's own "effectively an atlas-owned repository" note — so every
 * statement that reads or writes it, including the ones that join out to
 * `places`/`trips`/`trip_members` for `getTravelStats`'s country lists
 * (AT40/AT44), lives here rather than split across those tables' own
 * repositories.
 */
export class PlaceRegionsRepository extends TrekRepository<PlaceRegions> {
  private db() {
    return this.kysely<PlaceRegionsKyselyDB>();
  }

  /** AT3 (`resolvePlaceCountries`'s batch cache probe) — `SELECT place_id, country_code FROM place_regions WHERE place_id IN (...)`. Empty-array short-circuit (matches the legacy's own dynamic-`IN` guard). */
  async listCountryCodesForPlaceIds(placeIds: number[]): Promise<{ place_id: number; country_code: string }[]> {
    if (placeIds.length === 0) return [];
    return await this.db().selectFrom('place_regions').select(['place_id', 'country_code']).where('place_id', 'in', placeIds).execute();
  }

  /** AT28 (`visitedRegions`'s cache probe) — `SELECT * FROM place_regions WHERE place_id IN (...)`. */
  async listForPlaceIds(placeIds: number[]): Promise<PlaceRegionRow[]> {
    if (placeIds.length === 0) return [];
    return await this.db().selectFrom('place_regions').selectAll().where('place_id', 'in', placeIds).execute();
  }

  /**
   * AT4/AT29 (`resolvePlaceCountries`'s and `visitedRegions`'s background
   * geocoding write — identical text, two call sites) — `INSERT OR REPLACE
   * INTO place_regions (place_id, country_code, region_code, region_name)
   * VALUES (?, ?, ?, ?)`. `place` is the table's own primary key
   * (`PlaceRegions.entity.ts`'s `[PrimaryKeyProp]?: 'place'`) —
   * `onConflictFields: ['place']`, and `onConflictAction: 'merge'` reproduces
   * `OR REPLACE`'s "overwrite every non-key column" on the SAME row (a `place_id`
   * this cache has already geocoded stays gone from `uncachedForGeocode`'s
   * candidate list on the next call anyway, so in practice this fires once
   * per place — `merge` matches the legacy statement's own semantics on a
   * genuine re-run regardless).
   */
  async upsertRegion(placeId: number, countryCode: string, regionCode: string, regionName: string): Promise<void> {
    await this.upsert(
      { place: placeId, country_code: countryCode, region_code: regionCode, region_name: regionName },
      { onConflictFields: ['place'], onConflictAction: 'merge' },
    );
  }

  /** AT23 (`hasVisibleRegionForCountry`) — `SELECT DISTINCT region_code FROM place_regions WHERE country_code = ? AND place_id IN (...)`. */
  async listDistinctRegionCodesForCountryAndPlaces(countryCode: string, placeIds: number[]): Promise<string[]> {
    if (placeIds.length === 0) return [];
    const rows = await this.db()
      .selectFrom('place_regions')
      .select('region_code')
      .distinct()
      .where('country_code', '=', countryCode)
      .where('place_id', 'in', placeIds)
      .execute();
    return rows.map((r) => r.region_code);
  }

  /**
   * AT40 (`lastTrip`) — `SELECT pr.country_code, COUNT(DISTINCT p.id) AS
   * places FROM place_regions pr JOIN places p ON p.id = pr.place_id WHERE
   * p.trip_id = ? AND pr.country_code IS NOT NULL GROUP BY pr.country_code
   * ORDER BY places DESC, pr.country_code ASC`.
   */
  async countPlacesByCountryForTrip(tripId: number): Promise<{ country_code: string; places: number }[]> {
    const rows = await this.db()
      .selectFrom('place_regions as pr')
      .innerJoin('places as p', 'p.id', 'pr.place_id')
      .select((eb) => ['pr.country_code', eb.fn.count<number>('p.id').distinct().as('places')])
      .where('p.trip_id', '=', tripId)
      .where('pr.country_code', 'is not', null)
      .groupBy('pr.country_code')
      .orderBy('places', 'desc')
      .orderBy('pr.country_code', 'asc')
      .execute();
    return rows.map((r) => ({ country_code: r.country_code, places: Number(r.places) }));
  }

  /**
   * AT44 (`getTravelStats`) — `SELECT DISTINCT pr.country_code FROM
   * place_regions pr JOIN places p ON p.id = pr.place_id JOIN trips t ON
   * p.trip_id = t.id LEFT JOIN trip_members tm ON t.id = tm.trip_id WHERE
   * (t.user_id = ? OR tm.user_id = ?) AND pr.country_code IS NOT NULL AND
   * COALESCE(t.start_date, t.end_date) IS NOT NULL AND COALESCE(t.start_date,
   * t.end_date) <= date('now')` — "only started trips count" (#1048).
   * `today` (`date('now')`, UTC) is resolved by the caller once
   * (`todayUtc()`, the same value `stats()`/`lastTrip` already compute) and
   * bound here, the `TripsRepository.activeTrip(user_id, today)` precedent
   * for a literal `date('now')` comparison.
   */
  async listVisitedCountryCodesForUser(userId: number, today: string): Promise<string[]> {
    const rows = await this.db()
      .selectFrom('place_regions as pr')
      .innerJoin('places as p', 'p.id', 'pr.place_id')
      .innerJoin('trips as t', 't.id', 'p.trip_id')
      .leftJoin('trip_members as tm', 'tm.trip_id', 't.id')
      .select('pr.country_code')
      .distinct()
      .where((eb) => eb.or([eb('t.user_id', '=', userId), eb('tm.user_id', '=', userId)]))
      .where('pr.country_code', 'is not', null)
      .where((eb) => eb(eb.fn.coalesce('t.start_date', 't.end_date'), 'is not', null))
      .where((eb) => eb(eb.fn.coalesce('t.start_date', 't.end_date'), '<=', today))
      .execute();
    return rows.map((r) => r.country_code);
  }
}
