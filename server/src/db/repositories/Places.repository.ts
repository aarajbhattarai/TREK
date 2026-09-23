import type { Places } from '../entities/Places.entity';
import type { Tags } from '../entities/Tags.entity';
import { columnRef } from '../dialect/sql-functions';
import { type AssertRowKeys } from './_shared/rows';
import { TrekRepository } from './_shared/trek-repository';

/** A `places` row as the API emits it — every scalar column of the entity. */
export interface PlaceRow {
  id: number;
  trip_id: number;
  name: string;
  description: string | null;
  lat: number | null;
  lng: number | null;
  address: string | null;
  category_id: number | null;
  price: number | null;
  currency: string | null;
  reservation_status: string | null;
  reservation_notes: string | null;
  reservation_datetime: string | null;
  place_time: string | null;
  end_time: string | null;
  duration_minutes: number | null;
  notes: string | null;
  image_url: string | null;
  google_place_id: string | null;
  google_ftid: string | null;
  website: string | null;
  phone: string | null;
  transport_mode: string | null;
  created_at: string | null;
  updated_at: string | null;
  osm_id: string | null;
  route_geometry: string | null;
  route_color: string | null;
  stop_type: string | null;
  fill_percent: number | null;
  amap_poi_id: string | null;
  source: string | null;
}

const _placeRowKeys: AssertRowKeys<PlaceRow, Places> = true;

/** A `tags` row, byte-identical to the legacy `SELECT t.* FROM tags t ...` shape. */
export interface TagRow {
  id: number;
  user_id: number;
  name: string;
  color: string | null;
  created_at: string | null;
}

const _tagRowKeys: AssertRowKeys<TagRow, Tags> = true;

interface PlaceWithCategoryRow extends PlaceRow {
  category_name: string | null;
  category_color: string | null;
  category_icon: string | null;
}

interface PlaceRatingRow {
  user_id: number;
  username: string;
  avatar: string | null;
  rating: number;
}

/**
 * `getPlaceWithTags` (`db/database.ts:146-197`, 0b's Concern for Task 4):
 * the 11 `PlacesService` call sites move in Task 4, so `DatabaseService
 * .getPlaceWithTags` keeps its own name/shape and delegates to this method
 * NOW — no caller beyond `DatabaseService` changes in this task.
 */
export interface PlaceWithTagsRow extends PlaceRow {
  category: { id: number; name: string; color: string; icon: string } | null;
  tags: TagRow[];
  ratings: PlaceRatingRow[];
  rating_avg: number | null;
  rating_count: number;
}

export class PlacesRepository extends TrekRepository<Places> {
  /**
   * The legacy `getPlaceWithTags`'s three statements, byte-for-byte in intent
   * (`mapResults: false` on every read, matching `TripsRepository
   * .findAccessible`/`InviteTokensRepository.listWithCreatorAndTrip`):
   *
   * ```sql
   * SELECT p.*, c.name as category_name, c.color as category_color, c.icon as category_icon
   * FROM places p LEFT JOIN categories c ON p.category_id = c.id WHERE p.id = ?
   *
   * SELECT t.* FROM tags t JOIN place_tags pt ON t.id = pt.tag_id WHERE pt.place_id = ?
   *
   * SELECT pr.user_id, u.username, u.avatar, pr.rating FROM place_ratings pr
   * JOIN users u ON pr.user_id = u.id WHERE pr.place_id = ? ORDER BY pr.created_at
   * ```
   *
   * `p.category`/`p.place_tags`/`p.place_ratings_collection` are the entity's
   * own relation properties for these three joins (`Places.entity.ts`), so no
   * hand-spelled join condition is needed; `pr.user` resolves to the
   * `place_ratings.user_id` FK column the same way `TripsRepository
   * .findAccessible`'s `t.user` resolves to `trips.user_id`.
   */
  async findWithTagsAndRatings(place_id: number | string): Promise<PlaceWithTagsRow | null> {
    // Raw conditions (D4's T5 escape hatch), not `.where({ 'p.id': place_id })`:
    // MikroORM's typed filter rejects a `string` against `p.id`'s branded
    // `number` type — matching `TripsRepository.findAccessible`'s own
    // raw-bind seam (`legacy getPlaceWithTags(placeId: number | string)`
    // bound the raw value with no `Number()` conversion). `p.id` is the
    // physical column name.
    const place = await this.qb('p')
      .leftJoin('p.category', 'c')
      .select(['p.*', 'c.name as category_name', 'c.color as category_color', 'c.icon as category_icon'])
      .where('p.id = ?', [place_id])
      .execute<PlaceWithCategoryRow | undefined>('get', false);
    if (!place) return null;

    const tags = await this.qb('p')
      .join('p.place_tags', 't')
      .select(['t.*'])
      .where('p.id = ?', [place_id])
      .execute<TagRow[]>('all', false);

    // Task 0b review B1 (HIGH, live regression): `.select(['pr.user', ...])`
    // makes MikroORM resolve `pr.user` through the ACTIVE `join('pr.user',
    // 'u')` and emit the joined entity's own PK under its join alias
    // (`u__id`), not the FK scalar (`user_id`) — `ratings[].user_id` never
    // existed at runtime, silently breaking the client's
    // `ratings.find(r => r.user_id === currentUserId)` own-rating lookup.
    // `columnRef(...).as('user_id')` routes the FK column through the
    // dialect layer and aliases it back explicitly; `'pr.user_id'` (the
    // `persist(false)` scalar mirror) was tried and silently drops the
    // column, `'pr.user as user_id'` was tried and is still `u__id` — both
    // verified directly, not assumed (same finding independently reproduced
    // in `PlaceRatingsRepository.listForPlaces`'s docstring, Plan 3c Task 1).
    const platform = this.getEntityManager().getPlatform();
    const ratings = await this.qb('p')
      .join('p.place_ratings_collection', 'pr')
      .join('pr.user', 'u')
      .select([columnRef(platform, 'pr.user_id').as('user_id'), 'u.username', 'u.avatar', 'pr.rating'])
      .where('p.id = ?', [place_id])
      .orderBy({ 'pr.created_at': 'asc' })
      .execute<PlaceRatingRow[]>('all', false);

    // Task 0b review B2 (HIGH, live regression): the legacy `getPlaceWithTags`
    // returned `{ ...place, category: ... }` over the raw driver row of
    // `SELECT p.*, c.name as category_name, c.color as category_color, c.icon
    // as category_icon` — the three alias columns ride along on the wire
    // body (map popups, dashboard, shared-trip page all read them flat, per
    // the review's blast-radius list). Read them, don't strip them: spread
    // `place` whole, not `placeRest`.
    const { category_name, category_color, category_icon } = place;
    return {
      ...place,
      category: place.category_id
        ? { id: place.category_id, name: category_name!, color: category_color!, icon: category_icon! }
        : null,
      tags,
      ratings,
      rating_avg: ratings.length > 0 ? ratings.reduce((s, r) => s + r.rating, 0) / ratings.length : null,
      rating_count: ratings.length,
    };
  }

  /**
   * `SELECT 1 FROM places WHERE google_place_id = ? OR image_url = ? LIMIT 1`
   * — the `places`-owned half of `PlacePhotoCacheService.isReferenced`
   * (`place-photo-cache.service.ts:205-211`, PP6), split per the Plan 3c
   * Task 1 PP6 ruling (option 2): the legacy single `UNION ALL … LIMIT 1`
   * statement spans this table AND `collection_places` (Plan 3h's), so the
   * service evaluates this half first and only runs the `collection_places`
   * half when this one is `false` — reproducing the legacy `UNION ALL …
   * LIMIT 1`'s short-circuit by evaluation order rather than by SQL.
   */
  async existsByGoogleIdOrImageUrl(googlePlaceId: string, imageUrl: string): Promise<boolean> {
    const row = await this.qb('p')
      .select(['p.id'])
      .where({ $or: [{ google_place_id: googlePlaceId }, { image_url: imageUrl }] })
      .limit(1)
      .execute<{ id: number } | undefined>('get', false);
    return !!row;
  }
}
