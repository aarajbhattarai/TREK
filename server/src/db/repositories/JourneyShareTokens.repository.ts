import type { JourneyEntry } from '../../types';
import type { JourneyShareTokens } from '../entities/JourneyShareTokens.entity';
import { TrekRepository } from './_shared/trek-repository';

/** JS1's narrow projection — `createOrUpdateJourneyShareLink`'s existing-link read. */
export interface JourneyShareLinkFlagsRow {
  token: string;
  share_timeline: number | null;
  share_gallery: number | null;
  share_map: number | null;
  newest_first: number;
}

/** JS4/JS11's full-row shape (`getJourneyShareLink`, `getPublicJourney`'s entrypoint read). */
export interface JourneyShareTokenRow {
  id: number;
  journey_id: number;
  token: string;
  created_by: number;
  share_timeline: number | null;
  share_gallery: number | null;
  share_map: number | null;
  created_at: string | null;
  newest_first: number;
}

/** JS6/JS9's narrow token-lookup projection — the anonymous photo/asset validators. */
export interface JourneyShareTokenAccessRow {
  journey_id: number;
  share_gallery: number | null;
}

/** JS7 — the photo-validation join's row (`journey_photos` + `trek_photos`). */
export interface JourneyPublicPhotoValidationRow {
  photo_id: number;
  owner_id: number | null;
  journey_id: number;
}

/** JS10 — the asset-validation join's row (`journey_photos` + `trek_photos` + `journeys`). */
export interface JourneyPublicAssetValidationRow {
  owner_id: number | null;
  journey_owner_id: number;
}

/** JS14 — the public per-entry photo read. Column-for-column identical to `journey-domain.service.ts`'s `JP_SELECT` (only the `trek_photos` join alias differs, `tkp` vs `tp`) — see task-3-report.md for the reuse decision. */
export interface JourneyPublicEntryPhotoRow {
  id: number;
  entry_id: number;
  photo_id: number;
  caption: string | null;
  sort_order: number | null;
  shared: number;
  created_at: number;
  provider: string;
  asset_id: string | null;
  owner_id: number | null;
  file_path: string | null;
  thumbnail_path: string | null;
  width: number | null;
  height: number | null;
  media_type: string | null;
  duration_ms: number | null;
  taken_at: string | null;
  lat: number | null;
  lng: number | null;
}

/** JS15 — the public gallery read (`GALLERY_SELECT` shape, `GALLERY_CHRONOLOGICAL_ORDER` applied). */
export interface JourneyPublicGalleryRow {
  id: number;
  journey_id: number;
  photo_id: number;
  caption: string | null;
  shared: number;
  sort_order: number | null;
  created_at: number;
  provider: string;
  asset_id: string | null;
  owner_id: number | null;
  file_path: string | null;
  thumbnail_path: string | null;
  width: number | null;
  height: number | null;
  media_type: string | null;
  duration_ms: number | null;
  taken_at: string | null;
  lat: number | null;
  lng: number | null;
}

/**
 * The narrow Kysely shape the public-surface methods below need. `journeys`,
 * `journey_photos`, `journey_entry_photos`, `journey_entries` and
 * `trek_photos` are NOT this repository's own tables — Task 2's
 * `JourneyPhotosRepository`/`JourneyEntryPhotosRepository`/
 * `JourneyEntriesRepository` own them, but Task 2 was still mid-flight
 * (uncommitted) when this task ran, so per the brief's own fallback
 * instruction these six public/anonymous statements (JS7/JS10/JS13/JS14/
 * JS15, plus JS8/JS12 which reuse Task 1's already-stable
 * `JourneysRepository.findById` instead) get a typed Kysely read here
 * rather than depending on an in-flight repository. Flagged in
 * task-3-report.md for a possible later relocation once Task 2 lands.
 */
interface JourneyPublicKyselyDB {
  journey_entries: {
    id: number;
    journey_id: number;
    source_trip_id: number | null;
    source_place_id: number | null;
    source_assignment_id: number | null;
    author_id: number;
    type: string;
    title: string | null;
    story: string | null;
    entry_date: string;
    entry_time: string | null;
    location_name: string | null;
    location_lat: number | null;
    location_lng: number | null;
    mood: string | null;
    weather: string | null;
    tags: string | null;
    pros_cons: string | null;
    visibility: string | null;
    sort_order: number | null;
    created_at: number;
    updated_at: number;
    stats_excluded: number;
    dismissed: number;
    country_code: string | null;
  };
  journey_photos: {
    id: number;
    journey_id: number;
    photo_id: number;
    caption: string | null;
    shared: number;
    sort_order: number | null;
    created_at: number;
  };
  journey_entry_photos: {
    entry_id: number;
    journey_photo_id: number;
    sort_order: number | null;
  };
  journeys: {
    id: number;
    user_id: number;
  };
  trek_photos: {
    id: number;
    provider: string;
    asset_id: string | null;
    owner_id: number | null;
    file_path: string | null;
    thumbnail_path: string | null;
    width: number | null;
    height: number | null;
    media_type: string | null;
    duration_ms: number | null;
    taken_at: string | null;
    lat: number | null;
    lng: number | null;
  };
}

// L2 — `galleryChronologicalOrderExpr`/`listGalleryForPublicJourney` (JS15)
// used to be a byte-identical duplicate of `JourneyPhotosRepository`'s own
// `galleryChronologicalOrderExpr`/`galleryRead` (same `GALLERY_COLUMNS`
// select list, same ORDER BY, differing only in which local `DB` interface
// the builder is typed against). `JourneyShareService.getPublicJourney` now
// calls `JourneyPhotosRepository.galleryRead` directly instead — one gallery
// ORDER BY builder, one gallery query, per the whole-plan review (M5/L2).
// `JourneyPublicGalleryRow` stays exported: it is still the accurate shape
// of what that query returns (`GalleryPhoto`, the type `galleryRead` is
// declared against, is a narrower public-API type missing `taken_at`/`lat`/
// `lng`/`media_type`/`duration_ms`), and tests keep using it to type the
// public gallery response.

/**
 * `journey_share_tokens` — public share links (Plan 3g Task 3, R4). Six of
 * its methods (`findAccessByToken`, `findByToken` and the five cross-table
 * public reads below) are reachable from `JourneyPublicController` with NO
 * authentication at all, gated purely by the unguessable token. Every token
 * lookup here is a plain `.where({token})`/`.where('token', '=', token)`
 * equality — no `LIKE`, no `COLLATE NOCASE`, no case-folding of any kind
 * (R4) — and every one of these returns `undefined` on a miss, never throws,
 * so a missing/revoked/wrong-case/NUL token 404s through the controller
 * instead of 500ing.
 */
export class JourneyShareTokensRepository extends TrekRepository<JourneyShareTokens> {
  /** JS1 — `createOrUpdateJourneyShareLink`'s existing-link read: `SELECT token, share_timeline, share_gallery, share_map, newest_first FROM journey_share_tokens WHERE journey_id = ?`. */
  async findFlagsByJourneyId(journeyId: number): Promise<JourneyShareLinkFlagsRow | undefined> {
    return await this.qb('jst')
      .select(['jst.token', 'jst.share_timeline', 'jst.share_gallery', 'jst.share_map', 'jst.newest_first'])
      .where({ journey: journeyId })
      .execute<JourneyShareLinkFlagsRow | undefined>('get', false);
  }

  /**
   * JS2 — the update branch: `UPDATE journey_share_tokens SET
   * share_timeline=?, share_gallery=?, share_map=?, newest_first=? WHERE
   * journey_id=?`. A plain 4-column write, NOT a `presenceSet` call — the
   * service resolves every flag's final value (the `permissions.X ?? !!
   * existing.X` fallback merge) before calling this, so every call writes
   * all four columns, present or not.
   */
  async updateFlags(
    journeyId: number,
    flags: { share_timeline: number; share_gallery: number; share_map: number; newest_first: number },
  ): Promise<void> {
    await this.nativeUpdate({ journey: journeyId }, flags);
  }

  /** JS3 — the create branch: `INSERT INTO journey_share_tokens (journey_id, token, created_by, share_timeline, share_gallery, share_map, newest_first) VALUES (?,?,?,?,?,?,?)`. */
  async insertLink(
    journeyId: number,
    token: string,
    createdBy: number,
    flags: { share_timeline: number; share_gallery: number; share_map: number; newest_first: number },
  ): Promise<void> {
    await this.insert({ journey: journeyId, token, createdByRef: createdBy, ...flags });
  }

  /** JS4 — `getJourneyShareLink`: `SELECT * FROM journey_share_tokens WHERE journey_id = ?`. */
  async findByJourneyId(journeyId: number): Promise<JourneyShareTokenRow | undefined> {
    return await this.qb('jst').select(['jst.*']).where({ journey: journeyId }).execute<JourneyShareTokenRow | undefined>('get', false);
  }

  /** JS5 — `deleteJourneyShareLink`: `DELETE FROM journey_share_tokens WHERE journey_id = ?`. */
  async deleteByJourneyId(journeyId: number): Promise<void> {
    await this.nativeDelete({ journey: journeyId });
  }

  /**
   * UC7 (Plan 3g Task 4 survivor, `UserCleanupService.cleanupUserReferences`)
   * — `DELETE FROM journey_share_tokens WHERE created_by = ?`: erasure of
   * public share links this user created (on any journey, owned or not).
   */
  async deleteByCreatedBy(userId: number): Promise<void> {
    await this.nativeDelete({ createdByRef: userId });
  }

  /**
   * JS6/JS9 — the public photo/asset validators' token lookup: `SELECT
   * journey_id, share_gallery FROM journey_share_tokens WHERE token = ?`.
   * Exact-match only (R4) — a differently-cased or NUL-truncated token binds
   * as a distinct value and simply misses.
   */
  async findAccessByToken(token: string): Promise<JourneyShareTokenAccessRow | undefined> {
    return await this.qb('jst')
      .select(['jst.journey', 'jst.share_gallery'])
      .where({ token })
      .execute<JourneyShareTokenAccessRow | undefined>('get', false);
  }

  /** JS11 — `getPublicJourney`'s entrypoint read: `SELECT * FROM journey_share_tokens WHERE token = ?`. Exact-match only (R4), same as {@link findAccessByToken}. */
  async findByToken(token: string): Promise<JourneyShareTokenRow | undefined> {
    return await this.qb('jst').select(['jst.*']).where({ token }).execute<JourneyShareTokenRow | undefined>('get', false);
  }

  /** JS7 — `validateShareTokenForPhoto`'s photo/journey resolution: `SELECT gp.photo_id, tkp.owner_id, gp.journey_id FROM journey_photos gp JOIN trek_photos tkp ON tkp.id=gp.photo_id WHERE gp.photo_id=? AND gp.journey_id=?`. */
  async findGalleryPhotoForValidation(photoId: number, journeyId: number): Promise<JourneyPublicPhotoValidationRow | undefined> {
    return await this.kysely<JourneyPublicKyselyDB>()
      .selectFrom('journey_photos as gp')
      .innerJoin('trek_photos as tkp', 'tkp.id', 'gp.photo_id')
      .select(['gp.photo_id', 'tkp.owner_id', 'gp.journey_id'])
      .where('gp.photo_id', '=', photoId)
      .where('gp.journey_id', '=', journeyId)
      .executeTakeFirst();
  }

  /**
   * JS10 — `validateShareTokenForAsset`'s owner resolution: `SELECT
   * tkp.owner_id, j.user_id AS journey_owner_id FROM journey_photos gp JOIN
   * trek_photos tkp ON tkp.id=gp.photo_id JOIN journeys j ON j.id=gp.journey_id
   * WHERE tkp.asset_id=? AND gp.journey_id=?`. Security-critical (the
   * service never trusts a caller-supplied owner id — this join is the only
   * source of the resolved `ownerId`).
   */
  async findAssetForValidation(assetId: string, journeyId: number): Promise<JourneyPublicAssetValidationRow | undefined> {
    return await this.kysely<JourneyPublicKyselyDB>()
      .selectFrom('journey_photos as gp')
      .innerJoin('trek_photos as tkp', 'tkp.id', 'gp.photo_id')
      .innerJoin('journeys as j', 'j.id', 'gp.journey_id')
      .select(['tkp.owner_id', 'j.user_id as journey_owner_id'])
      .where('tkp.asset_id', '=', assetId)
      .where('gp.journey_id', '=', journeyId)
      .executeTakeFirst();
  }

  /** JS13 — `getPublicJourney`'s entry list: `SELECT je.* FROM journey_entries je WHERE je.journey_id=? AND je.type != 'skeleton' AND je.dismissed=0 ORDER BY je.entry_date, je.sort_order`. Skeletons never appear publicly. */
  async listPublicEntries(journeyId: number): Promise<JourneyEntry[]> {
    const rows = await this.kysely<JourneyPublicKyselyDB>()
      .selectFrom('journey_entries as je')
      .selectAll('je')
      .where('je.journey_id', '=', journeyId)
      .where('je.type', '!=', 'skeleton')
      .where('je.dismissed', '=', 0)
      .orderBy('je.entry_date', 'asc')
      .orderBy('je.sort_order', 'asc')
      .execute();
    return rows as unknown as JourneyEntry[];
  }

  /**
   * JS14 — `getPublicJourney`'s per-entry photo read. The select list is
   * byte-for-byte the same columns, in the same order, as `JP_SELECT`
   * (`journey-domain.service.ts`) — only the `trek_photos` join alias
   * differs (`tkp` here, `tp` there). See task-3-report.md for why this
   * stays a separate, hand-kept query rather than reusing Task 2's
   * `JourneyEntryPhotosRepository` (not yet landed when this task ran).
   */
  async listEntryPhotosForPublicJourney(journeyId: number): Promise<JourneyPublicEntryPhotoRow[]> {
    return await this.kysely<JourneyPublicKyselyDB>()
      .selectFrom('journey_entry_photos as jep')
      .innerJoin('journey_photos as gp', 'gp.id', 'jep.journey_photo_id')
      .innerJoin('trek_photos as tkp', 'tkp.id', 'gp.photo_id')
      .select([
        'gp.id', 'jep.entry_id', 'gp.photo_id', 'gp.caption', 'jep.sort_order', 'gp.shared', 'gp.created_at',
        'tkp.provider', 'tkp.asset_id', 'tkp.owner_id', 'tkp.file_path', 'tkp.thumbnail_path', 'tkp.width', 'tkp.height',
        'tkp.media_type', 'tkp.duration_ms', 'tkp.taken_at', 'tkp.lat', 'tkp.lng',
      ])
      .where('gp.journey_id', '=', journeyId)
      .orderBy('jep.sort_order', 'asc')
      .execute();
  }

  // JS15 — `getPublicJourney`'s gallery read moved to
  // `JourneyPhotosRepository.galleryRead` (L2, above).
}
