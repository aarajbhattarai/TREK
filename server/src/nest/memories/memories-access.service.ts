import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@mikro-orm/nestjs';
import { decrypt_api_key } from '../common/crypto/apiKeyCrypto';
import { DatabaseService } from '../database/database.service';
import { fail, success, type ServiceResult } from './memories.helpers';
import { toRowId } from '../common/row-id';
import { TripPhotos } from '../../db/entities/TripPhotos.entity';
import type { TripPhotosRepository } from '../../db/repositories/TripPhotos.repository';
import { TrekPhotos } from '../../db/entities/TrekPhotos.entity';
import type { TrekPhotosRepository } from '../../db/repositories/TrekPhotos.repository';
import { TripAlbumLinks } from '../../db/entities/TripAlbumLinks.entity';
import type { TripAlbumLinksRepository } from '../../db/repositories/TripAlbumLinks.repository';
import { Trips } from '../../db/entities/Trips.entity';
import type { TripsRepository } from '../../db/repositories/Trips.repository';

/**
 * Who may see which photo, and the album-link lookups the provider syncs need.
 *
 * Split from the pure helpers because these are the only DB-backed ones. Both
 * access checks answer for photos that live under a trip *or* a journey — a
 * provider asset is reachable through either, which is why neither check can
 * live in the trips or journey domain alone.
 *
 * Stays a service, not a single-table repository (Plan 3e): it composes
 * access logic across `trip_photos`/`trek_photos`/`trip_album_links`
 * (this plan's own tables) and `journeys`/`journey_contributors`/
 * `journey_photos` (Plan 3g's, not yet converted — every read against them
 * below stays raw, marked `// <SITE> — Plan 3g`). `DatabaseService` stays
 * injected for exactly those raw reads and for the `canAccessTrip` primitive
 * (a cross-cutting primitive, not a per-domain SQL statement this plan
 * converts).
 */
@Injectable()
export class MemoriesAccessService {
  constructor(
    private readonly db: DatabaseService,
    @InjectRepository(TripPhotos) private readonly tripPhotos: TripPhotosRepository,
    @InjectRepository(TrekPhotos) private readonly trekPhotos: TrekPhotosRepository,
    @InjectRepository(TripAlbumLinks) private readonly tripAlbumLinks: TripAlbumLinksRepository,
    @InjectRepository(Trips) private readonly trips: TripsRepository,
  ) {}

  async canAccessUserPhoto(requestingUserId: number, ownerUserId: number, tripId: string, assetId: string, provider: string): Promise<boolean> {
    if (requestingUserId === ownerUserId) {
      return true;
    }

    // Journey photos use tripId=0 — check journey_photos + journey_contributors
    if (tripId === '0') {
      // MA1 — Plan 3g (journey_photos is not yet an owned repository table).
      const journeyPhoto = this.db.get<{ journey_id: number }>(`
            SELECT gp.journey_id
            FROM journey_photos gp
            JOIN trek_photos tkp ON tkp.id = gp.photo_id
            WHERE tkp.asset_id = ?
              AND tkp.provider = ?
              AND tkp.owner_id = ?
            LIMIT 1
        `, assetId, provider, ownerUserId);
      if (!journeyPhoto) return false;

      // MA2 — Plan 3g (journeys/journey_contributors are not yet owned repository tables).
      const access = this.db.get(`
            SELECT 1 FROM journeys WHERE id = ? AND user_id = ?
            UNION ALL
            SELECT 1 FROM journey_contributors WHERE journey_id = ? AND user_id = ?
            LIMIT 1
        `, journeyPhoto.journey_id, requestingUserId, journeyPhoto.journey_id, requestingUserId);
      return !!access;
    }

    // Regular trip photos — join through trek_photos (MA3).
    const tripIdNum = toRowId(tripId);
    const sharedAsset = tripIdNum != null
      ? await this.tripPhotos.existsSharedForUser(tripIdNum, ownerUserId, assetId, provider)
      : false;

    if (!sharedAsset) {
      return false;
    }
    return !!(await this.db.canAccessTrip(tripId, requestingUserId));
  }

  // ── Unified photo access check (trek_photos based) ──────────────────────

  async canAccessTrekPhoto(requestingUserId: number, trekPhotoId: number): Promise<boolean> {
    const photo = await this.trekPhotos.findById(trekPhotoId);
    if (!photo) return false;

    // Owner always has access
    if (photo.owner_id === requestingUserId) return true;

    // Check trip_photos — is this photo shared in a trip the user has access to?
    // MA5: the legacy `EXISTS(...trip_members/trips UNION ALL...)` predicate
    // is exactly `TripsRepository.findAccessible`'s own — reuse that builder
    // (R4) instead of hand-translating it into a second, independent form.
    const sharedTripIds = await this.tripPhotos.listTripIdsSharedForPhoto(trekPhotoId);
    for (const tripId of sharedTripIds) {
      if (await this.trips.findAccessible(tripId, requestingUserId)) return true;
    }

    // Check journey_photos — is this photo in a journey the user can access?
    // MA6 — Plan 3g (journey_photos/journeys/journey_contributors are not yet owned repository tables).
    const journeyAccess = this.db.get(`
        SELECT 1 FROM journey_photos gp
        WHERE gp.photo_id = ?
          AND EXISTS (
            SELECT 1 FROM journeys j WHERE j.id = gp.journey_id AND j.user_id = ?
            UNION ALL
            SELECT 1 FROM journey_contributors jc WHERE jc.journey_id = gp.journey_id AND jc.user_id = ?
          )
        LIMIT 1
    `, trekPhotoId, requestingUserId, requestingUserId);
    if (journeyAccess) return true;

    // Local photos without owner (uploaded files) — check if user has journey access
    if (photo.provider === 'local' && !photo.owner_id) {
      return !!journeyAccess;
    }

    return false;
  }

  // ── Album link syncing ──────────────────────────────────────────────────

  async getAlbumIdFromLink(tripId: string, linkId: string, userId: number): Promise<ServiceResult<string>> {
    const access = await this.db.canAccessTrip(tripId, userId);
    if (!access) return fail('Trip not found or access denied', 404);

    try {
      // MA7: `toRowId` on `tripId`/`linkId` — both already validated as a
      // reachable trip by `canAccessTrip` above; a non-canonical spelling of
      // either (rule 15's accepted narrowing) answers the same "not found"
      // the legacy raw-bind affinity would have for a row it couldn't match.
      const id = toRowId(linkId);
      const tripIdNum = toRowId(tripId);
      const row = id != null && tripIdNum != null ? await this.tripAlbumLinks.findScoped(id, tripIdNum, userId) : null;

      return row ? success(row.album_id) : fail('Album link not found', 404);
    } catch {
      return fail('Failed to retrieve album link', 500);
    }
  }

  async getAlbumLinkForSync(tripId: string, linkId: string, userId: number): Promise<ServiceResult<{ albumId: string; passphrase?: string }>> {
    const access = await this.db.canAccessTrip(tripId, userId);
    if (!access) return fail('Trip not found or access denied', 404);

    try {
      // MA8 — same `toRowId` treatment as MA7 above.
      const id = toRowId(linkId);
      const tripIdNum = toRowId(tripId);
      const row = id != null && tripIdNum != null ? await this.tripAlbumLinks.findScoped(id, tripIdNum, userId) : null;

      if (!row) return fail('Album link not found', 404);

      const decrypted = row.passphrase ? decrypt_api_key(row.passphrase) ?? undefined : undefined;
      return success({ albumId: row.album_id, passphrase: decrypted || undefined });
    } catch {
      return fail('Failed to retrieve album link', 500);
    }
  }

  async updateSyncTimeForAlbumLink(linkId: string): Promise<void> {
    // MA9: unscoped by trip/user, matching the legacy statement — the caller
    // has already resolved `linkId` through `getAlbumIdFromLink`/
    // `getAlbumLinkForSync` (MA7/MA8) earlier in the same request. A
    // non-canonical id (rule 15) is a no-op here, same as a legacy UPDATE
    // that matched zero rows.
    const id = toRowId(linkId);
    if (id == null) return;
    await this.tripAlbumLinks.touchSyncTime(id);
  }
}
