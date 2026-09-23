import type { TripPhotos } from '../entities/TripPhotos.entity';
import { TrekRepository } from './_shared/trek-repository';

export class TripPhotosRepository extends TrekRepository<TripPhotos> {
  /**
   * PH10's non-journey half — `SELECT 1 FROM trip_photos WHERE photo_id = ?
   * LIMIT 1`, used by `TrekPhotoRegistrationService.deleteIfOrphan` alongside
   * the still-raw `journey_photos` existence check (`// PH10 — Plan 3g`).
   */
  async existsForPhoto(photo_id: number): Promise<boolean> {
    const row = await this.findOne({ photo: photo_id }, { fields: ['id'] });
    return !!row;
  }

  /**
   * MA3 — the regular-trip branch of `MemoriesAccessService.canAccessUserPhoto`:
   * is this provider asset shared by this exact user into this exact trip?
   * `SELECT 1 FROM trip_photos tp JOIN trek_photos tkp ON tkp.id = tp.photo_id
   * WHERE tp.user_id = ? AND tkp.asset_id = ? AND tkp.provider = ? AND
   * tp.trip_id = ? AND tp.shared = 1 LIMIT 1`.
   */
  async existsSharedForUser(trip_id: number, user_id: number, asset_id: string, provider: string): Promise<boolean> {
    const row = await this.qb('tp')
      .select(['tp.id'])
      .join('tp.photo', 'tkp')
      .where({ 'tp.user': user_id, 'tp.trip': trip_id, 'tp.shared': 1, 'tkp.asset_id': asset_id, 'tkp.provider': provider })
      .execute<{ id: number } | undefined>('get', false);
    return !!row;
  }

  /**
   * MA5's source data — every trip a photo is shared into (`shared = 1`),
   * for `MemoriesAccessService.canAccessTrekPhoto` to check each one against
   * `TripsRepository.findAccessible` (R4: reuse the existing accessibility
   * builder rather than hand-translating the legacy `EXISTS(...UNION
   * ALL...)` predicate into a second, independent form). Legacy statement:
   * `SELECT 1 FROM trip_photos tp WHERE tp.photo_id = ? AND tp.shared = 1
   * AND EXISTS(...trip_members/trips...) LIMIT 1` — the `EXISTS` half is
   * exactly `findAccessible`'s own predicate, so this method hands back the
   * candidate trip ids and the caller does the short-circuiting `OR` over
   * `findAccessible`'s results instead.
   *
   * Full-row `find()`, not a `fields: ['trip_id']` projection: `trip_id` is a
   * `persist(false)` scalar twin of the `trip` relation, and a narrowed
   * `fields` selection silently drops it from the hydrated result (the same
   * bare-`persist(false)`-select trap `RoadtripDayBoundariesRepository`
   * documents — verified empirically here too, not assumed) — only an
   * unrestricted `find()` (or `columnRef` through a `qb()`) hydrates it.
   */
  async listTripIdsSharedForPhoto(photo_id: number): Promise<number[]> {
    const rows = await this.find({ photo: photo_id, shared: 1 });
    return rows.map((row) => row.trip_id);
  }
}
