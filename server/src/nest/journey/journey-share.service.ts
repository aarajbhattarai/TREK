import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@mikro-orm/nestjs';
import crypto from 'crypto';
import { JourneyDomainService } from './journey-domain.service';
import { decodeEntryRow } from './journey-entry-row';
import { SettingsService } from '../settings/settings.service';
import { Journeys } from '../../db/entities/Journeys.entity';
import type { JourneysRepository } from '../../db/repositories/Journeys.repository';
import { JourneyShareTokens } from '../../db/entities/JourneyShareTokens.entity';
import type {
  JourneyPublicEntryPhotoRow,
  JourneyShareTokensRepository,
} from '../../db/repositories/JourneyShareTokens.repository';

interface JourneySharePermissions {
  share_timeline?: boolean;
  share_gallery?: boolean;
  share_map?: boolean;
  /** Read the journey newest-first, like a blog, rather than in trip order. */
  newest_first?: boolean;
}

interface JourneyShareTokenInfo {
  token: string;
  created_at: string | null;
  share_timeline: boolean;
  share_gallery: boolean;
  share_map: boolean;
  newest_first: boolean;
}

/**
 * Public share links for a journey: minting the token, validating it for a
 * photo or a provider asset, and the read-only public view.
 *
 * Folded 1:1 from services/journeyShareService.ts. It injects
 * JourneyDomainService for the owner check — the two files could never be split
 * because that check lives there.
 */
@Injectable()
export class JourneyShareService {
  constructor(
    private readonly journey: JourneyDomainService,
    private readonly settings: SettingsService,
    @InjectRepository(JourneyShareTokens) private readonly shareTokensRepo: JourneyShareTokensRepository,
    // JS8/JS12's unscoped `SELECT * FROM journeys WHERE id = ?` reuses Task 1's
    // already-stable `JourneysRepository.findById` (the JG5 dup group) rather
    // than a second, hand-kept copy of the same statement.
    @InjectRepository(Journeys) private readonly journeysRepo: JourneysRepository,
  ) {}

  async createOrUpdateJourneyShareLink(
    journeyId: number,
    createdBy: number,
    permissions: JourneySharePermissions
  ): Promise<{ token: string; created: boolean } | null> {
    // Public sharing is an owner-only action — editors/viewers must not be
    // able to publish the journey or change which screens are shared.
    if (!(await this.journey.isOwner(journeyId, createdBy))) return null;

    // JS1 — `JourneyShareTokensRepository.findFlagsByJourneyId`.
    const existing = await this.shareTokensRepo.findFlagsByJourneyId(journeyId);

    if (existing) {
      // An update only changes the flags it was actually given. Falling back to
      // the create-time defaults here would silently re-publish a gallery or map
      // the owner had switched off, at the unchanged token.
      const share_timeline = permissions.share_timeline ?? !!existing.share_timeline;
      const share_gallery = permissions.share_gallery ?? !!existing.share_gallery;
      const share_map = permissions.share_map ?? !!existing.share_map;
      const newest_first = permissions.newest_first ?? !!existing.newest_first;
      // JS2 — the SERVICE resolves the final value of every flag (above); the
      // repository writes exactly those four already-resolved booleans, a
      // plain 4-column UPDATE, not a presence-sentinel one.
      await this.shareTokensRepo.updateFlags(journeyId, {
        share_timeline: share_timeline ? 1 : 0,
        share_gallery: share_gallery ? 1 : 0,
        share_map: share_map ? 1 : 0,
        newest_first: newest_first ? 1 : 0,
      });
      return { token: existing.token, created: false };
    }

    const {
      share_timeline = true,
      share_gallery = true,
      share_map = true,
      newest_first = false,
    } = permissions;

    const token = crypto.randomBytes(24).toString('base64url');
    // JS3.
    await this.shareTokensRepo.insertLink(journeyId, token, createdBy, {
      share_timeline: share_timeline ? 1 : 0,
      share_gallery: share_gallery ? 1 : 0,
      share_map: share_map ? 1 : 0,
      newest_first: newest_first ? 1 : 0,
    });
    return { token, created: true };
  }

  /**
   * Read the link on behalf of a user. Owner only, the same check create and
   * delete take: the token is the whole credential and it keeps working after a
   * contributor is removed, so handing it out is handing out the journey.
   *
   * The refusal is its own answer rather than a null link, because those two
   * mean opposite things to the caller — a published journey that reads as
   * unpublished puts a "create link" button in front of somebody it will then
   * refuse. Both the REST route and the MCP tool read the link through here.
   */
  async readJourneyShareLink(
    journeyId: number,
    userId: number,
  ): Promise<{ allowed: false } | { allowed: true; link: JourneyShareTokenInfo | null }> {
    if (!(await this.journey.isOwner(journeyId, userId))) return { allowed: false };
    return { allowed: true, link: await this.getJourneyShareLink(journeyId) };
  }

  async getJourneyShareLink(journeyId: number): Promise<JourneyShareTokenInfo | null> {
    // JS4.
    const row = await this.shareTokensRepo.findByJourneyId(journeyId);
    if (!row) return null;
    return {
      token: row.token,
      created_at: row.created_at,
      share_timeline: !!row.share_timeline,
      share_gallery: !!row.share_gallery,
      share_map: !!row.share_map,
      newest_first: !!row.newest_first,
    };
  }

  async deleteJourneyShareLink(journeyId: number, userId: number): Promise<boolean> {
    if (!(await this.journey.isOwner(journeyId, userId))) return false;
    // JS5.
    await this.shareTokensRepo.deleteByJourneyId(journeyId);
    return true;
  }

  async validateShareTokenForPhoto(token: string, photoId: number): Promise<{ journeyId: number; ownerId: number } | null> {
    // JS6 — exact-match token lookup, no LIKE/COLLATE (R4).
    const row = await this.shareTokensRepo.findAccessByToken(token);
    if (!row) return null;
    // Photos only ever surface (inline or in the gallery) when share_gallery is on,
    // so the byte proxy must honour the flag server-side too — the JSON payload
    // already strips photos when it is off. Enumerable photo ids otherwise stay
    // fetchable after the owner disables the gallery.
    if (!row.share_gallery) return null;
    // JS7.
    const photo = await this.shareTokensRepo.findGalleryPhotoForValidation(photoId, row.journey_id);
    if (!photo) return null;
    // JS8 — reuses `JourneysRepository.findById` (JG5's dup group), no
    // `canAccessJourney` involved: public means public.
    const journey = await this.journeysRepo.findById(row.journey_id);
    return journey ? { journeyId: row.journey_id, ownerId: photo.owner_id || journey.user_id } : null;
  }

  async validateShareTokenForAsset(token: string, assetId: string): Promise<{ ownerId: number } | null> {
    // JS9 — exact-match token lookup, no LIKE/COLLATE (R4).
    const row = await this.shareTokensRepo.findAccessByToken(token);
    if (!row) return null;
    // Same as the unified photo proxy: no asset bytes leave the host unless the
    // owner shared the gallery.
    if (!row.share_gallery) return null;
    // JS10 — security-critical: whose provider credentials get tried must
    // never come from a number an anonymous caller put in the URL. Only this
    // join resolves `ownerId`; a caller-supplied value never reaches it.
    const photo = await this.shareTokensRepo.findAssetForValidation(assetId, row.journey_id);
    // Only resolve assets that actually belong to this shared journey.
    if (!photo) return null;
    // trek_photos.owner_id can be NULL. The journey's owner is the fallback, the
    // same one the photo proxy uses.
    return { ownerId: photo.owner_id || photo.journey_owner_id };
  }

  async getPublicJourney(token: string) {
    // JS11 — exact-match token lookup, no LIKE/COLLATE (R4).
    const row = await this.shareTokensRepo.findByToken(token);
    if (!row) return null;

    // JS12 — reuses `JourneysRepository.findById`, same as JS8.
    const journey = await this.journeysRepo.findById(row.journey_id);
    if (!journey) return null;

    // Entries with photos — JS13.
    const entries = await this.shareTokensRepo.listPublicEntries(row.journey_id);

    // JS14.
    const photos = await this.shareTokensRepo.listEntryPhotosForPublicJourney(row.journey_id);

    const photosByEntry: Record<number, JourneyPublicEntryPhotoRow[]> = {};
    for (const p of photos) {
      (photosByEntry[p.entry_id] ||= []).push(p);
    }

    // JS15 (R1's second `GALLERY_CHRONOLOGICAL_ORDER` site).
    const gallery = await this.shareTokensRepo.listGalleryForPublicJourney(row.journey_id);

    const enrichedEntries = entries
      .map(e => ({
        ...decodeEntryRow(e),
        photos: photosByEntry[e.id] || [],
      }));

    // Stats are derived from the full data so the overview pills stay accurate
    // even when a section is hidden.
    const stats = {
      entries: entries.length,
      photos: gallery.length,
      places: new Set(entries.filter(e => e.location_name).map(e => e.location_name)).size,
    };

    const shareTimeline = !!row.share_timeline;
    const shareGallery = !!row.share_gallery;
    const shareMap = !!row.share_map;

    // Honour the share flags server-side so the API only returns the sections the
    // owner enabled (the client gates these too, but it must not rely on that).
    let publicEntries: Record<string, unknown>[] = [];
    if (shareTimeline) {
      // Include the full entry, but drop GPS unless the map is shared and inline
      // photos unless the gallery is shared.
      publicEntries = enrichedEntries.map(e => {
        const projected: Record<string, unknown> = { ...e };
        if (!shareMap) { projected.location_lat = null; projected.location_lng = null; }
        if (!shareGallery) projected.photos = [];
        else if (!shareMap) projected.photos = stripPhotoGps(e.photos);
        return projected;
      });
    } else if (shareMap) {
      // Map-only share: just enough to plot markers, no story/photos/mood.
      publicEntries = enrichedEntries.map(e => ({
        id: e.id,
        journey_id: e.journey_id,
        type: e.type,
        entry_date: e.entry_date,
        title: e.title,
        location_name: e.location_name,
        location_lat: e.location_lat,
        location_lng: e.location_lng,
        sort_order: e.sort_order,
      }));
    }

    // Same reason as the trip share payload: CARTO watermarks every tile fetched
    // without a key (#2054) and the public journey map has no logged-in user to
    // read one from, so the owner's key travels with it. Only a valid share token
    // gets this far. getUserSettings composes the owner's own value, the admin
    // instance default and the managed-instance key in that order; carto_api_key is
    // encrypted at rest but deliberately unmasked, since it is useless until it
    // reaches a browser.
    const ownerCartoKey = (await this.settings.getUserSettings(journey.user_id))['carto_api_key'];
    const cartoApiKey = typeof ownerCartoKey === 'string' ? ownerCartoKey.trim() : '';

    return {
      journey: {
        title: journey.title,
        subtitle: journey.subtitle,
        cover_image: journey.cover_image,
        status: journey.status,
        // The three "this journey does not use that field" switches. A public
        // reader was getting mood and weather chips on a journey that had them
        // turned off, because the phone card reads these and they were not here
        // to read: undefined never equals 0, so both always looked switched on.
        show_verdict: journey.show_verdict ? 1 : 0,
        show_mood: journey.show_mood ? 1 : 0,
        show_weather: journey.show_weather ? 1 : 0,
      },
      entries: publicEntries,
      // A photo now carries the coordinates it was taken at, which is a location the
      // owner never typed and may not expect to publish. It follows share_map, the
      // same switch the entry coordinates follow — otherwise a gallery-only share
      // would hand out places the map was deliberately turned off for.
      gallery: shareGallery ? (shareMap ? gallery : stripPhotoGps(gallery)) : [],
      stats,
      cartoApiKey,
      permissions: {
        share_timeline: shareTimeline,
        share_gallery: shareGallery,
        share_map: shareMap,
        newest_first: !!row.newest_first,
      },
    };
  }
}

/** Drop capture coordinates from a photo list, keeping everything else. */
function stripPhotoGps<T>(photos: T[] | undefined | null): T[] {
  return (photos ?? []).map(p => ({ ...(p as Record<string, unknown>), lat: null, lng: null })) as T[];
}
