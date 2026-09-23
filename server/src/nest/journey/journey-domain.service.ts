import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@mikro-orm/nestjs';
import { avatarUrl } from '../common/avatarUrl';
import type { Journey, JourneyEntry, JourneyPhoto, JourneyContributor } from '../../types';
import { decodeEntryRow, type JourneyEntryWire } from './journey-entry-row';
import { GALLERY_CHRONOLOGICAL_ORDER } from './journey-gallery-order';
import { DatabaseService } from '../database/database.service';
import { UnitOfWork } from '../database/unit-of-work';
import { RealtimeService } from '../realtime/realtime.service';
import type { JourneyStats, JourneyTrack, TrekWsUserEventName } from '@trek/shared';
import { TrekPhotoRegistrationService } from '../photos/trek-photos.repository';
import { getCountryFromCoords } from '../atlas/atlas-geo';
import { computeJourneyStats, type StatsInputPoint } from './journey-stats';
import { Journeys } from '../../db/entities/Journeys.entity';
import type { JourneysRepository } from '../../db/repositories/Journeys.repository';
import { JourneyContributors } from '../../db/entities/JourneyContributors.entity';
import type { JourneyContributorsRepository } from '../../db/repositories/JourneyContributors.repository';
import { JourneyTrips } from '../../db/entities/JourneyTrips.entity';
import type { JourneyTripsRepository } from '../../db/repositories/JourneyTrips.repository';
import { JourneyEntries } from '../../db/entities/JourneyEntries.entity';
import type { JourneyEntriesRepository } from '../../db/repositories/JourneyEntries.repository';
import { Trips } from '../../db/entities/Trips.entity';
import type { TripsRepository } from '../../db/repositories/Trips.repository';
import { presenceSet } from '../../db/repositories/_shared/presence-set';

/**
 * English country names for whatever codes a journey turned up.
 *
 * `Intl.DisplayNames` rather than a bundled table or the admin-0 properties:
 * Node has the CLDR data already, the names it gives are the ones every other
 * piece of software shows, and parsing 30MB of boundary GeoJSON to read a
 * `NAME` field would be an absurd way to learn that IS is Iceland.
 *
 * English on purpose — the client re-resolves these into the reader's language
 * when it places the element, and a book needs the country's name in the
 * language the book is written in, not the language of whoever's server it is.
 */
function regionNames(): Intl.DisplayNames | null {
  try {
    return new Intl.DisplayNames(['en'], { type: 'region' });
  } catch {
    // A Node built without full ICU has no region names. Codes are a poor
    // label but a working one, and a book page is not worth a 500 over.
    return null;
  }
}

/**
 * What makes a journal skeleton unique: the place *and* the day assignment it
 * stands on (#2329). Keyed on the place alone, a stop kept across two days — the
 * city you land in at dusk and walk through the next morning — got one entry, and
 * the second day's photographs had nowhere to go.
 *
 * The assignment rather than the day, because moving a stop updates
 * `day_assignments.day_id` in place: keyed this way an entry follows the move
 * instead of being read as one stop leaving the plan and another arriving.
 */
function skeletonKey(placeId: number, assignmentId: number | null | undefined): string {
  return `${placeId}:${assignmentId ?? ''}`;
}

function countryNamesFor(points: { country: string | null }[]): Record<string, string> {
  const out: Record<string, string> = {};
  const display = regionNames();
  for (const p of points) {
    if (!p.country) continue;
    const code = p.country.toUpperCase();
    if (out[code]) continue;
    out[code] = (display?.of(code) ?? code) || code;
  }
  return out;
}



// Per-journey gallery view: journey_photos → trek_photos (no entry context).
// Per-entry photo view: join journey_entry_photos → journey_photos (gallery) → trek_photos.
// id = gp.id (gallery photo id) — used by clients for linkPhoto/updatePhoto/unlink/delete.
const JP_SELECT = `
  gp.id, jep.entry_id, gp.photo_id, gp.caption, jep.sort_order, gp.shared, gp.created_at,
  tp.provider, tp.asset_id, tp.owner_id, tp.file_path, tp.thumbnail_path, tp.width, tp.height,
  tp.media_type, tp.duration_ms, tp.taken_at, tp.lat, tp.lng
`;

const JP_JOIN = `journey_entry_photos jep
  JOIN journey_photos gp ON gp.id  = jep.journey_photo_id
  JOIN trek_photos    tp ON tp.id  = gp.photo_id`;

const GALLERY_SELECT = `
  gp.id, gp.journey_id, gp.photo_id, gp.caption, gp.shared, gp.sort_order, gp.created_at,
  tp.provider, tp.asset_id, tp.owner_id, tp.file_path, tp.thumbnail_path, tp.width, tp.height,
  tp.media_type, tp.duration_ms, tp.taken_at, tp.lat, tp.lng
`;

const GALLERY_JOIN = 'journey_photos gp JOIN trek_photos tp ON tp.id = gp.photo_id';

/**
 * The journey (travel journal) domain: journeys, their trips, entries, the
 * photo gallery, contributors and the trip-skeleton reconciliation.
 *
 * Folded 1:1 from services/journeyService.ts - every SQL statement, error and
 * broadcast is the one that shipped.
 */
@Injectable()
export class JourneyDomainService {
  constructor(
    private readonly db: DatabaseService,
    private readonly realtime: RealtimeService,
    private readonly photos: TrekPhotoRegistrationService,
    private readonly uow: UnitOfWork,
    // Plan 3g Task 1 (Part A) — `db` above stays: Part B's methods (stats,
    // entries CRUD, the photos surface, contributors CRUD, suggestions —
    // Task 2's own) are UNTOUCHED by this task and still issue raw
    // `this.db.prepare(...)` calls. These five are additive.
    @InjectRepository(Journeys) private readonly journeysRepo: JourneysRepository,
    @InjectRepository(JourneyContributors) private readonly contributorsRepo: JourneyContributorsRepository,
    @InjectRepository(JourneyTrips) private readonly journeyTripsRepo: JourneyTripsRepository,
    @InjectRepository(JourneyEntries) private readonly entriesRepo: JourneyEntriesRepository,
    // R7 — AP1's `this.db.canAccessTrip(...)` becomes a direct call to the
    // same repository `DatabaseService.canAccessTrip` already delegates to
    // (Task 0's confirmation: `canAccessTrip` IS `findAccessible`, not
    // merely equivalent to it). Also reused by `getJourneyFull`'s per-entry
    // `source_trip_name` lookup (JG16, via the already-existing `getTitle`).
    @InjectRepository(Trips) private readonly tripsRepo: TripsRepository,
  ) {}

  private ts(): number {
    return Date.now();
  }



  /**
   * Tell everyone on a journey that something changed.
   *
   * Public because the book service needs the same audience — who can see a
   * journey is one question with one answer, and a second copy of this walk
   * over contributors and owner would be a second answer waiting to disagree.
   */
  async broadcastJourneyEvent(
    journeyId: number,
    // Typed against the shared WS registry rather than left as `string`: the
    // legacy broadcastToUser took anything, so a typo'd event name shipped as a
    // silent no-op in the client's remoteEventHandler.
    event: TrekWsUserEventName,
    data: Record<string, unknown>,
    excludeSocketId?: string | number,
  ): Promise<void> {
    // JG1/JG2 — one composed recipient-set read (`JourneysRepository
    // .listRecipientUserIds`), public because Task 2/3 reuse it for their
    // own `broadcastJourneyEvent` calls too.
    const userIds = await this.journeysRepo.listRecipientUserIds(journeyId);

    for (const uid of userIds) {
      this.realtime.broadcastToUser(uid, { type: event, journeyId, ...data }, excludeSocketId);
    }
  }

  // ── Access control ───────────────────────────────────────────────────────

  async canAccessJourney(journeyId: number, userId: number): Promise<Journey | null> {
    // `JourneyRow.status` is the raw TEXT column (`string`); `Journey.status`
    // (`src/types.ts`) narrows it to the app's own literal union — the same
    // narrowing the legacy `as Journey` cast performed silently on every
    // `SELECT *` read this repository now serves.
    const own = await this.journeysRepo.findOwnedByUser(journeyId, userId);
    if (own) return own as Journey;
    const isContributor = await this.contributorsRepo.existsForUser(journeyId, userId);
    if (isContributor) return ((await this.journeysRepo.findById(journeyId)) as Journey) || null;
    return null;
  }

  async isOwner(journeyId: number, userId: number): Promise<boolean> {
    return await this.journeysRepo.isOwnedByUser(journeyId, userId);
  }

  async canEdit(journeyId: number, userId: number): Promise<boolean> {
    if (await this.isOwner(journeyId, userId)) return true;
    const role = await this.contributorsRepo.findRole(journeyId, userId);
    return role === 'editor' || role === 'owner';
  }

  // ── Journey CRUD ─────────────────────────────────────────────────────────

  async listJourneys(userId: number) {
    return await this.journeysRepo.listForUser(userId);
  }

  async createJourney(
    userId: number,
    data: {
      title: string;
      subtitle?: string;
      trip_ids?: number[];
    },
  ): Promise<Journey> {
    const now = this.ts();
    const journeyId = await this.journeysRepo.insertJourney({
      user_id: userId,
      title: data.title,
      subtitle: data.subtitle || null,
      created_at: now,
      updated_at: now,
    });

    // add owner as contributor
    await this.contributorsRepo.insertOwner(journeyId, userId, now);

    // link trips and sync skeleton entries
    if (data.trip_ids?.length) {
      // Track the first trip that was ACTUALLY linked (addTripToJourney access-checks and
      // returns false for a foreign/inaccessible trip). Inheriting the cover from a raw
      // trip_ids[0] would otherwise leak an arbitrary trip's cover image cross-tenant.
      let coverTripId: number | undefined;
      for (const tripId of data.trip_ids) {
        if ((await this.addTripToJourney(journeyId, tripId, userId)) && coverTripId === undefined) coverTripId = tripId;
      }

      if (coverTripId !== undefined) {
        // JG11 — `SELECT cover_image FROM trips WHERE id = ?`; `TripsRepository.findRaw`
        // (already public, 3c) covers this column among every other trip column.
        const firstTrip = await this.tripsRepo.findRaw(coverTripId);
        if (firstTrip?.cover_image) {
          // trip stores full path (/uploads/covers/x.jpg), journey stores relative (covers/x.jpg)
          const relativePath = firstTrip.cover_image.replace(/^\/uploads\//, '');
          await this.journeysRepo.updateCoverImage(journeyId, relativePath);
        }
      }
    }

    return (await this.journeysRepo.findById(journeyId)) as Journey;
  }

  async getJourneyFull(journeyId: number, userId: number) {
    const journey = await this.canAccessJourney(journeyId, userId);
    if (!journey) return null;

    const entries = await this.entriesRepo.listForJourney(journeyId);

    // JG15 — the per-entry photo join (journey_entry_photos/journey_photos/
    // trek_photos, the JP_SELECT/JP_JOIN composite). Stays raw: its owning
    // repository (JourneyEntryPhotosRepository) is Task 2's build, outside
    // this task's named file set — flagged in task-1-report.md for Task 2.
    const photos = this.db
      .prepare(
        `SELECT ${JP_SELECT} FROM ${JP_JOIN} WHERE jep.entry_id IN (SELECT id FROM journey_entries WHERE journey_id = ?) ORDER BY jep.sort_order ASC`,
      )
      .all(journeyId) as JourneyPhoto[];

    // group photos by entry
    const photosByEntry: Record<number, JourneyPhoto[]> = {};
    for (const p of photos) {
      (photosByEntry[p.entry_id] ||= []).push(p);
    }

    // JG19 — the gallery read, folding in the dialect-hard
    // GALLERY_CHRONOLOGICAL_ORDER constant. Stays raw for the same reason as
    // JG15 above (its owning repository, JourneyPhotosRepository, is Task
    // 2's build) — Task 0's Kysely rebuild of this ORDER BY is therefore not
    // consumed here; flagged in task-1-report.md for Task 2.
    const gallery = this.db
      .prepare(
        `SELECT ${GALLERY_SELECT} FROM ${GALLERY_JOIN} WHERE gp.journey_id = ? ${GALLERY_CHRONOLOGICAL_ORDER}`,
      )
      .all(journeyId);

    const enrichedEntries = await Promise.all(
      entries.map(async (e) => ({
        ...decodeEntryRow(e),
        photos: photosByEntry[e.id] || [],
        // JG16 — reuses `TripsRepository.getTitle` (already public, 3c; same
        // statement text as this site's legacy `SELECT title FROM trips
        // WHERE id = ?`) rather than a new method.
        source_trip_name: e.source_trip_id ? await this.tripsRepo.getTitle(e.source_trip_id) : null,
      })),
    );

    // linked trips (JG17)
    const trips = await this.journeyTripsRepo.listForJourney(journeyId);

    // contributors (JG18)
    const contributorsRaw = await this.contributorsRepo.listForJourney(journeyId);
    const contributors = contributorsRaw.map((c) => ({
      ...c,
      avatar_url: avatarUrl(c),
    }));

    // stats
    const entryCount = entries.filter((e) => e.type === 'entry').length;
    const photoCount = (gallery as any[]).length;
    const places = [...new Set(entries.map((e) => e.location_name).filter(Boolean))];

    // JG20
    const hideSkeletons = await this.contributorsRepo.getHideSkeletons(journeyId, userId);

    // Determine the viewer's role on this journey so the UI can gate edit/settings
    // actions. 'owner' = creator, 'editor' | 'viewer' = from journey_contributors.
    const journeyRow = journey as unknown as { user_id?: number };
    let myRole: 'owner' | 'editor' | 'viewer' | null;
    if (journeyRow.user_id === userId) {
      myRole = 'owner';
    } else {
      // JG21 — same text as JG7 (`findRole`).
      const role = await this.contributorsRepo.findRole(journeyId, userId);
      myRole = (role as 'editor' | 'viewer' | undefined) ?? null;
    }

    // JG22
    const dismissedCount = await this.entriesRepo.countDismissed(journeyId);

    return {
      ...journey,
      entries: enrichedEntries,
      gallery,
      trips,
      contributors,
      stats: { entries: entryCount, photos: photoCount, places: places.length },
      hide_skeletons: hideSkeletons,
      // What the eye toggle cannot say: how much was waved away one at a time, and
      // so whether a way back is worth any room at all.
      dismissed_count: dismissedCount,
      my_role: myRole,
    };
  }

  async updateJourney(
    journeyId: number,
    userId: number,
    data: Partial<{
      title: string;
      subtitle: string;
      cover_gradient: string;
      cover_image: string;
      status: string;
      show_trip_tracks: boolean | number;
      show_verdict: boolean | number;
      show_mood: boolean | number;
      show_weather: boolean | number;
    }>,
  ): Promise<Journey | null> {
    // Journey-level settings (title, cover, status) are owner-only — editors
    // may only edit entries and photos, not reshape the journey itself.
    if (!(await this.isOwner(journeyId, userId))) return null;

    const ALLOWED_STATUSES = ['draft', 'active', 'completed', 'archived'];
    // JG24 — R6's `presenceSet` conversion. The SERVICE resolves each field
    // to its final bound value (the `status` allow-list check, the
    // `show_*` boolean-to-0/1 coercion) before handing it to the repository;
    // a field absent here never reaches the SET clause, matching the legacy
    // dynamic-SET-list's own "not present, not touched" behavior.
    const patch = presenceSet<{
      title: string;
      subtitle: string | null;
      cover_gradient: string | null;
      cover_image: string | null;
      status: string;
      show_trip_tracks: number;
      show_verdict: number;
      show_mood: number;
      show_weather: number;
    }>({
      title: [data.title !== undefined, data.title as string],
      subtitle: [data.subtitle !== undefined, data.subtitle as string],
      cover_gradient: [data.cover_gradient !== undefined, data.cover_gradient as string],
      cover_image: [data.cover_image !== undefined, data.cover_image as string],
      status: [data.status !== undefined && ALLOWED_STATUSES.includes(data.status as string), data.status as string],
      show_trip_tracks: [data.show_trip_tracks !== undefined, data.show_trip_tracks ? 1 : 0],
      show_verdict: [data.show_verdict !== undefined, data.show_verdict ? 1 : 0],
      show_mood: [data.show_mood !== undefined, data.show_mood ? 1 : 0],
      show_weather: [data.show_weather !== undefined, data.show_weather ? 1 : 0],
    });

    if (Object.keys(patch).length === 0) return ((await this.journeysRepo.findById(journeyId)) as Journey) ?? null;

    await this.journeysRepo.updateFields(journeyId, { ...patch, updated_at: this.ts() });
    return ((await this.journeysRepo.findById(journeyId)) as Journey) ?? null;
  }

  async updateJourneyPreferences(journeyId: number, userId: number, data: { hide_skeletons?: boolean }) {
    if (!(await this.canAccessJourney(journeyId, userId))) return null;
    if (data.hide_skeletons !== undefined) {
      await this.contributorsRepo.setHideSkeletons(journeyId, userId, data.hide_skeletons ? 1 : 0);
    }
    const hideSkeletons = await this.contributorsRepo.getHideSkeletons(journeyId, userId);
    return { hide_skeletons: hideSkeletons };
  }

  /**
   * Bring every waved-away suggestion back.
   *
   * All of them at once rather than one at a time: dismissing is a per-card
   * gesture, undoing it is a change of mind about the plan, and a list of
   * things you have already said you did not want is not a screen worth
   * building. The count comes back so the caller can say what happened.
   */
  async restoreDismissedSuggestions(journeyId: number, userId: number): Promise<{ restored: number } | null> {
    if (!(await this.canEdit(journeyId, userId))) return null;
    const restored = await this.entriesRepo.restoreDismissed(journeyId);
    if (restored > 0) await this.broadcastJourneyEvent(journeyId, 'journey:entry:updated', { restored });
    return { restored };
  }

  async deleteJourney(journeyId: number, userId: number): Promise<boolean> {
    if (!(await this.isOwner(journeyId, userId))) return false;
    await this.journeysRepo.deleteById(journeyId);
    return true;
  }

  // ── Trip management ──────────────────────────────────────────────────────

  async addTripToJourney(journeyId: number, tripId: number, userId: number): Promise<boolean> {
    // Only attach a trip the caller can actually access — otherwise a journey
    // owner could pull an arbitrary trip's places + photos into their journey
    // (cross-tenant leak). Mirrors the trip-access gate every other trip-scoped
    // path enforces.
    if (!(await this.tripsRepo.findAccessible(tripId, userId))) return false;
    // And a journey the caller can actually reach. Without this, any logged-in user
    // could link a trip of theirs into a stranger's journey and seed entries and
    // photos there — the MCP tool has always checked this, the REST route never did.
    if (!(await this.canAccessJourney(journeyId, userId))) return false;
    const now = this.ts();
    try {
      await this.journeyTripsRepo.insertIgnore(journeyId, tripId, now);
    } catch {
      return false;
    }

    // sync skeleton entries for all places in this trip
    await this.syncTripPlaces(journeyId, tripId, userId);
    // Trip photos are deliberately NOT pulled in any more (#1614). Photos live in
    // journeys now: the trip-photo surface lost its UI in 3.1.0, nothing writes to
    // it on an install newer than that, and copying rows between the two was what
    // let a photo one member had chosen not to share reach a journey at all. The
    // table and its (unreferenced) routes stay for one more release rather than
    // being dropped in an append-only migration.
    await this.broadcastJourneyEvent(journeyId, 'journey:trip:synced', { tripId });
    return true;
  }

  async removeTripFromJourney(journeyId: number, tripId: number, userId: number): Promise<boolean> {
    if (!(await this.isOwner(journeyId, userId))) return false;

    // remove skeleton entries that haven't been filled in
    await this.entriesRepo.deleteSkeletonsForTrip(journeyId, tripId);

    // detach filled entries from this trip
    await this.entriesRepo.detachFilledForTrip(journeyId, tripId);

    await this.journeyTripsRepo.deleteLink(journeyId, tripId);
    return true;
  }

  // ── Sync engine ──────────────────────────────────────────────────────────

  async syncTripPlaces(journeyId: number, tripId: number, authorId: number) {
    const places = await this.journeyTripsRepo.listAssignedPlacesForTrip(tripId);

    const now = this.ts();
    const existing = await this.entriesRepo.listSourceKeysForTrip(journeyId, tripId);
    const existingKeys = new Set(existing.map((e) => skeletonKey(e.source_place_id, e.source_assignment_id)));

    // Track next sort_order per date so synced skeletons get unique, sequential positions.
    const dateMaxOrder = new Map<string, number>();
    const maxRows = await this.entriesRepo.dateSortOrderMaxima(journeyId);
    for (const row of maxRows) dateMaxOrder.set(row.entry_date, row.m);

    for (const place of places) {
      const key = skeletonKey(place.id, place.assignment_id);
      if (existingKeys.has(key)) continue;
      existingKeys.add(key);

      const entryDate = place.day_date || new Date().toISOString().split('T')[0];
      const entryTime = place.assignment_time || place.place_time || null;
      const nextOrder = (dateMaxOrder.get(entryDate) ?? -1) + 1;
      dateMaxOrder.set(entryDate, nextOrder);

      await this.insertSkeletonEntry({
        journeyId,
        tripId,
        placeId: place.id,
        assignmentId: place.assignment_id ?? null,
        authorId,
        title: place.name,
        entryDate,
        entryTime,
        locationName: place.address || place.name,
        lat: place.lat || null,
        lng: place.lng || null,
        sortOrder: nextOrder,
        now,
      });
    }
  }

  // called when a trip place is created
  async onPlaceCreated(tripId: number, placeId: number) {
    const links = await this.journeyTripsRepo.listJourneyIdsForTrip(tripId);
    if (!links.length) return;

    // One row per assignment, not one per place: a place can already stand on
    // several days by the time this fires, and each of those days is its own
    // entry (#2329).
    const assignments = await this.journeyTripsRepo.listAssignedPlacesForPlace(placeId);
    if (!assignments.length) return; // not assigned to a day yet — skip

    const now = this.ts();
    for (const journeyId of links) {
      // JG40 — same text as JG2/JG54, resolved through `findOwnerId`. No
      // undefined-guard here (matching the legacy statement's own unchecked
      // `as { user_id: number }` cast): `journey_trips` cascades on the
      // owning journey's delete, so a linked journey can never be missing.
      const ownerId = (await this.journeysRepo.findOwnerId(journeyId)) as number;

      for (const place of assignments) {
        const already = await this.entriesRepo.existsForPlaceAssignment(journeyId, placeId, place.assignment_id ?? null);
        if (already) continue;

        const entryDate = place.day_date as string;
        const maxOrder = await this.entriesRepo.maxSortOrderForDate(journeyId, entryDate);
        const nextOrder = (maxOrder ?? -1) + 1;

        await this.insertSkeletonEntry({
          journeyId,
          tripId,
          placeId,
          assignmentId: place.assignment_id ?? null,
          authorId: ownerId,
          title: place.name,
          entryDate,
          entryTime: place.assignment_time || place.place_time || null,
          locationName: place.address || place.name,
          lat: place.lat || null,
          lng: place.lng || null,
          sortOrder: nextOrder,
          now,
        });
      }
    }
  }

  // called when a trip place is updated
  async onPlaceUpdated(placeId: number) {
    const entries = await this.entriesRepo.listBySourcePlace(placeId);
    if (!entries.length) return;

    // JG44 — `SELECT * FROM places WHERE id = ?`. Stays raw: `Places.repository.ts`
    // is a 3c file outside this task's named file set, and no already-public
    // method there covers this exact "one place by id, every column" shape —
    // flagged in task-1-report.md.
    const place = this.db.prepare('SELECT * FROM places WHERE id = ?').get(placeId) as any;
    if (!place) return;

    // Every day this place stands on, so each entry can follow its own rather
    // than all of them collapsing onto whichever assignment the join returned
    // first (#2329).
    const assignments = await this.journeyTripsRepo.listAssignmentTimesForPlace(placeId);
    const byAssignment = new Map(assignments.map((a) => [a.assignment_id, a]));
    const assignmentFor = (entry: JourneyEntry) =>
      (entry.source_assignment_id != null ? byAssignment.get(entry.source_assignment_id) : undefined) ?? assignments[0];

    const now = this.ts();
    for (const entry of entries) {
      const assignment = assignmentFor(entry);
      if (entry.type === 'skeleton') {
        // update everything on skeletons
        await this.entriesRepo.updateSkeletonSnapshot(entry.id, {
          title: place.name,
          entry_date: assignment?.day_date || entry.entry_date,
          entry_time: assignment?.assignment_time || place.place_time || entry.entry_time,
          location_name: place.address || place.name,
          location_lat: place.lat || null,
          location_lng: place.lng || null,
          // The pin moved, so the flag has to follow it — the same rule updateEntry
          // states, and the one every sync write here used to skip.
          country_code: this.countryFor(place.lat ?? null, place.lng ?? null),
          updated_at: now,
        });
      } else {
        // for filled entries, only update location silently
        await this.entriesRepo.updateLocationOnly(entry.id, {
          location_name: place.address || place.name,
          location_lat: place.lat || null,
          location_lng: place.lng || null,
          country_code: this.countryFor(place.lat ?? null, place.lng ?? null),
          updated_at: now,
        });
      }
    }
  }

  // called when a trip place is deleted
  async onPlaceDeleted(placeId: number) {
    const entries = await this.entriesRepo.listBySourcePlace(placeId);

    for (const entry of entries) {
      if (entry.type === 'skeleton') {
        // no content: just delete
        const hasPhotos = await this.entriesRepo.existsPhotoForEntry(entry.id);
        if (!hasPhotos && !entry.story) {
          await this.entriesRepo.deleteById(entry.id);
          continue;
        }
      }
      // entry has content: keep it, detach, add note
      const note = '\n\n> _Note: the original trip place was removed from the trip plan_';
      const newStory = (entry.story || '') + note;
      await this.entriesRepo.detachAndAnnotate(entry.id, {
        type: entry.type === 'skeleton' ? 'entry' : entry.type,
        story: newStory,
        updated_at: this.ts(),
      });
    }
  }

  // Shared skeleton INSERT, reused by syncTripPlaces / onPlaceCreated / reconcileTripSkeletons.
  /**
   * The country a pair of coordinates falls in, or null when there is no pair.
   *
   * Bundled polygons, no network: the timeline card wants a flag, and a flag is
   * not worth a geocoding request per entry. Wrapped because the boundary data is
   * an optional asset — an install without it should lose the flag, not the save.
   */
  private countryFor(lat: number | null | undefined, lng: number | null | undefined): string | null {
    if (typeof lat !== 'number' || typeof lng !== 'number') return null;
    try {
      return getCountryFromCoords(lat, lng);
    } catch {
      return null;
    }
  }

  private async insertSkeletonEntry(p: {
    journeyId: number;
    tripId: number;
    placeId: number;
    assignmentId: number | null;
    authorId: number;
    title: string;
    entryDate: string;
    entryTime: string | null;
    locationName: string;
    lat: number | null;
    lng: number | null;
    sortOrder: number;
    now: number;
  }) {
    await this.entriesRepo.insertSkeleton({
      journey_id: p.journeyId,
      source_trip_id: p.tripId,
      source_place_id: p.placeId,
      source_assignment_id: p.assignmentId,
      author_id: p.authorId,
      title: p.title,
      entry_date: p.entryDate,
      entry_time: p.entryTime,
      location_name: p.locationName,
      location_lat: p.lat,
      location_lng: p.lng,
      country_code: this.countryFor(p.lat, p.lng),
      sort_order: p.sortOrder,
      created_at: p.now,
      updated_at: p.now,
    });
  }

  // Make every journey linked to `tripId` mirror the trip's current day assignments:
  // one skeleton per assignment, so a place standing on two days is two entries (#2329);
  // refresh skeleton snapshots when a stop is moved to another day / its time changes;
  // and drop skeletons whose assignment is gone. Filled entries are never destroyed —
  // only detached + annotated, mirroring onPlaceDeleted. Idempotent: a second call with
  // no underlying change is a no-op (no writes, no broadcast). Called from every
  // assignment mutation path.
  async reconcileTripSkeletons(tripId: number, sid?: string | number) {
    const links = await this.journeyTripsRepo.listJourneyIdsForTrip(tripId);
    if (!links.length) return;

    // JG53 — a variant of JG34 sharing `listAssignedPlacesForTrip` (see that
    // method's docstring: the two extra columns JG53's raw text carried
    // beyond JG34's, `order_index`/no `assignment_end_time`, are never read
    // as JS fields by either caller, only used inside each legacy
    // statement's own ORDER BY — already reproduced by the method's
    // `.orderBy(...)` calls).
    const places = await this.journeyTripsRepo.listAssignedPlacesForTrip(tripId);

    // One skeleton per assignment, not per place: a stop kept across two days is
    // two days of the journal (#2329).
    const assignedKeys = new Set(places.map((p) => skeletonKey(p.id, p.assignment_id)));
    const assignedPlaceIds = new Set<number>(places.map((p) => p.id));

    const now = this.ts();
    for (const journeyId of links) {
      const ownerId = await this.journeysRepo.findOwnerId(journeyId);
      if (ownerId === undefined) continue;

      let changed = false;
      // JG55 — a wider column set than JG35 (`listSourceKeysForTrip`), not a dup.
      const existing = await this.entriesRepo.listForTripReconcile(journeyId, tripId);
      const existingByKey = new Map<string, (typeof existing)[number]>();
      // Rows from before the assignment link existed, and any the backfill could not
      // resolve. The place's earliest assignment claims one below, rather than the row
      // being read as "no longer in the plan" and annotated out from under its author.
      const unclaimed = new Map<number, (typeof existing)[number][]>();
      for (const e of existing) {
        if (e.source_place_id == null) continue;
        if (e.source_assignment_id == null) {
          const pool = unclaimed.get(e.source_place_id);
          if (pool) pool.push(e);
          else unclaimed.set(e.source_place_id, [e]);
        } else {
          existingByKey.set(skeletonKey(e.source_place_id, e.source_assignment_id), e);
        }
      }

      // Next sort_order per date for freshly inserted skeletons.
      const dateMaxOrder = new Map<string, number>();
      const maxRows = await this.entriesRepo.dateSortOrderMaxima(journeyId);
      for (const row of maxRows) dateMaxOrder.set(row.entry_date, row.m);

      // 1) Upsert a skeleton for every current day assignment.
      for (const place of places) {
        const entryDate = place.day_date || new Date().toISOString().split('T')[0];
        const entryTime = place.assignment_time || place.place_time || null;
        const locationName = place.address || place.name;
        const lat = place.lat || null;
        const lng = place.lng || null;
        let found = existingByKey.get(skeletonKey(place.id, place.assignment_id));

        if (!found) {
          // `places` is ordered by day, so the earliest assignment claims it.
          const adopted = unclaimed.get(place.id)?.shift();
          if (adopted) {
            await this.entriesRepo.claimAssignment(adopted.id, place.assignment_id ?? null);
            adopted.source_assignment_id = place.assignment_id ?? null;
            existingByKey.set(skeletonKey(place.id, place.assignment_id), adopted);
            found = adopted;
          }
        }

        if (!found) {
          const nextOrder = (dateMaxOrder.get(entryDate) ?? -1) + 1;
          dateMaxOrder.set(entryDate, nextOrder);
          await this.insertSkeletonEntry({
            journeyId,
            tripId,
            placeId: place.id,
            assignmentId: place.assignment_id ?? null,
            authorId: ownerId,
            title: place.name,
            entryDate,
            entryTime,
            locationName,
            lat,
            lng,
            sortOrder: nextOrder,
            now,
          });
          changed = true;
        } else if (found.type === 'skeleton') {
          // Skeletons follow the place's day/time/location snapshot.
          const stale =
            found.title !== place.name ||
            found.entry_date !== entryDate ||
            found.entry_time !== entryTime ||
            found.location_name !== locationName ||
            found.location_lat !== lat ||
            found.location_lng !== lng;
          if (stale) {
            await this.entriesRepo.updateSkeletonSnapshot(found.id, {
              title: place.name,
              entry_date: entryDate,
              entry_time: entryTime,
              location_name: locationName,
              location_lat: lat,
              location_lng: lng,
              country_code: this.countryFor(lat, lng),
              updated_at: now,
            });
            changed = true;
          }
        } else {
          // Filled entries keep the user's date/story; only location follows the place.
          const stale =
            found.location_name !== locationName || found.location_lat !== lat || found.location_lng !== lng;
          if (stale) {
            await this.entriesRepo.updateLocationOnly(found.id, {
              location_name: locationName,
              location_lat: lat,
              location_lng: lng,
              country_code: this.countryFor(lat, lng),
              updated_at: now,
            });
            changed = true;
          }
        }
      }

      // 2) Drop skeletons whose assignment is gone. One still waiting to be claimed is
      //    spared while its place is on the plan somewhere: having no link yet is not
      //    the same as the stop having left.
      for (const e of existing) {
        if (e.source_place_id == null) continue;
        if (e.source_assignment_id == null && assignedPlaceIds.has(e.source_place_id)) continue;
        if (e.source_assignment_id != null && assignedKeys.has(skeletonKey(e.source_place_id, e.source_assignment_id))) {
          continue;
        }
        if (e.type === 'skeleton') {
          const hasPhotos = await this.entriesRepo.existsPhotoForEntry(e.id);
          if (!hasPhotos && !e.story) {
            await this.entriesRepo.deleteById(e.id);
            changed = true;
            continue;
          }
        }
        const note = '\n\n> _Note: the original trip place was removed from the trip plan_';
        const newStory = (e.story || '') + note;
        await this.entriesRepo.detachAndAnnotate(e.id, {
          type: e.type === 'skeleton' ? 'entry' : e.type,
          story: newStory,
          updated_at: now,
        });
        changed = true;
      }

      if (changed) await this.broadcastJourneyEvent(journeyId, 'journey:trip:synced', { tripId }, sid);
    }
  }

  // ── Entries ──────────────────────────────────────────────────────────────

  /**
   * The GPX tracks belonging to a journey (#1260). A journey has no trip of its own,
   * so the link runs through its entries: every entry records the trip it came from,
   * and a trip's routed geometries live on its places. Uploading a GPX in the planner
   * therefore already puts everything in place; nothing drew it in the journal.
   *
   * Only places that actually carry geometry are returned, so a journey whose trips
   * have no tracks answers with an empty list rather than a wall of null points.
   */
  async journeyTracks(journeyId: number, userId: number): Promise<JourneyTrack[] | null> {
    if (!(await this.canAccessJourney(journeyId, userId))) return null;

    const rows = await this.entriesRepo.listTracksSource(journeyId);

    const tracks: JourneyTrack[] = [];
    for (const row of rows) {
      let parsed: unknown;
      try {
        parsed = JSON.parse(row.route_geometry);
      } catch {
        continue; // A geometry that is not JSON is not worth failing the whole map over.
      }
      if (!Array.isArray(parsed)) continue;

      const points: [number, number][] = [];
      for (const entry of parsed) {
        if (!Array.isArray(entry) || entry.length < 2) continue;
        const lat = Number(entry[0]);
        const lng = Number(entry[1]);
        if (!Number.isFinite(lat) || !Number.isFinite(lng)) continue;
        points.push([lat, lng]);
      }
      // A single point is a pin, not a line, and the map already has the entry markers.
      if (points.length < 2) continue;

      tracks.push({
        place_id: row.place_id,
        trip_id: row.trip_id,
        name: row.name ?? '',
        color: row.route_color,
        points,
      });
    }
    return tracks;
  }

  /**
   * What this journey adds up to — the figures TREK Studio prints on a page.
   *
   * Derived, never stored: the trips added to the journey carry the places and
   * the dates, the journey carries the entries and the photographs, and the
   * numbers fall out of those. Nothing here is a column anyone has to keep in
   * step.
   *
   * ── Where the route comes from ─────────────────────────────────────────
   *
   * The journey's own entries when they carry coordinates, because an entry is
   * something that happened somewhere on a day and that is exactly what a route
   * is made of. A journey assembled from trips that nobody has written up yet
   * has no such entries, and falls back to the places on those trips — which is
   * the same route, told by the itinerary instead of by the traveller.
   *
   * Mixing the two would double back on itself: an entry written about a place
   * that is also on the trip would be two stops at one location, and the
   * distance would count the leg twice.
   *
   * ── Where the countries come from ──────────────────────────────────────
   *
   * `place_regions` first: Atlas already resolves a place to its country and
   * caches it there, and reading a cache beats repeating a point-in-polygon
   * test against 4MB of boundaries. What is missing falls through to
   * `getCountryFromCoords`, which is the same answer computed rather than
   * remembered. That import is a plain function from a module built to have no
   * DI and no Nest edges, so it costs this domain no coupling to Atlas.
   *
   * ── Stops switched off ─────────────────────────────────────────────────
   *
   * An entry marked `stats_excluded` is in the journal and in nothing here:
   * not on the route, not in the distance, not a step, not a country
   * (discussion #2064). It is still named, under `excluded`, because the only
   * way to switch a stop back on is to be able to see it.
   */
  async journeyStats(journeyId: number, userId: number): Promise<JourneyStats | null> {
    if (!(await this.canAccessJourney(journeyId, userId))) return null;

    const entryRows = this.db.prepare(`
      SELECT id, title, location_name, location_lat, location_lng, entry_date, source_trip_id,
             source_place_id, stats_excluded
        FROM journey_entries
       WHERE journey_id = ? AND dismissed = 0
       ORDER BY entry_date ASC, sort_order ASC, id ASC
    `).all(journeyId) as {
      id: number; title: string | null; location_name: string | null;
      location_lat: number | null; location_lng: number | null; entry_date: string | null;
      source_trip_id: number | null; source_place_id: number | null; stats_excluded: number;
    }[];

    /*
     * The trips themselves, named and dated.
     *
     * Ordered by the trip's own start date: `journey_trips` had a `sort_order`
     * for one migration and has not had one since 87, so the link row carries
     * no order to read. Undated trips sort last rather than first, where an
     * empty string would otherwise put them.
     */
    const tripRows = this.db.prepare(`
      SELECT t.id, t.title, t.start_date AS start, t.end_date AS end
        FROM journey_trips jt JOIN trips t ON t.id = jt.trip_id
       WHERE jt.journey_id = ?
       ORDER BY t.start_date IS NULL, t.start_date ASC, t.id ASC
    `).all(journeyId) as { id: number; title: string | null; start: string | null; end: string | null }[];

    const tripDates = tripRows.map(t => ({ start: t.start, end: t.end }));

    // Ordered the way the trip is walked: by day, then by the order within it.
    // A place can be assigned to more than one day (a hotel across three nights
    // is one place, three assignments), so the join is aggregated back down to
    // one row per place at its earliest day — otherwise the route would visit
    // the hotel three times and the distance would count those legs.
    const placeRows = this.db.prepare(`
      SELECT p.id, p.name, p.lat, p.lng, p.trip_id AS tripId,
             MIN(d.date) AS day,
             MIN(da.order_index) AS ord
        FROM journey_trips jt
        JOIN places p ON p.trip_id = jt.trip_id
        LEFT JOIN day_assignments da ON da.place_id = p.id
        LEFT JOIN days d ON d.id = da.day_id
       WHERE jt.journey_id = ?
       GROUP BY p.id
       ORDER BY day IS NULL, day ASC, ord ASC, p.id ASC
    `).all(journeyId) as {
      id: number; name: string | null; lat: number | null; lng: number | null; tripId: number | null;
      day: string | null; ord: number | null;
    }[];

    const placeCount = this.db.prepare(`
      SELECT COUNT(*) AS n FROM journey_trips jt
        JOIN places p ON p.trip_id = jt.trip_id
       WHERE jt.journey_id = ?
    `).get(journeyId) as { n: number };

    const photoCount = this.db
      .prepare('SELECT COUNT(*) AS n FROM journey_photos WHERE journey_id = ?')
      .get(journeyId) as { n: number };

    /*
     * ── A photograph per stop, for a map that marks them with pictures ───
     *
     * The truthful source is the junction: the photos somebody actually
     * attached to that entry, earliest first, videos excluded because a video
     * poster inside a four-millimetre circle is not a photograph.
     */
    const entryPhotoRows = this.db.prepare(`
      SELECT jep.entry_id AS entryId, gp.photo_id AS photoId
        FROM journey_entry_photos jep
        JOIN journey_photos gp ON gp.id = jep.journey_photo_id
        JOIN trek_photos tp ON tp.id = gp.photo_id
       WHERE gp.journey_id = ?
         AND (tp.media_type IS NULL OR tp.media_type = 'image')
       ORDER BY jep.entry_id ASC, jep.sort_order ASC, gp.sort_order ASC, gp.id ASC
    `).all(journeyId) as { entryId: number; photoId: number }[];

    const photoByEntry = new Map<number, number>();
    for (const r of entryPhotoRows) if (!photoByEntry.has(r.entryId)) photoByEntry.set(r.entryId, r.photoId);

    /*
     * ── And no second tier, deliberately ─────────────────────────────────
     *
     * The obvious fallback is to hand the journey's gallery out in blocks, the
     * way the auto layout hands photographs to pages, so that a journey with
     * fifty-seven pictures and an empty junction still gets pictures on its
     * map. It was written that way first and it was wrong: a marker at
     * Akureyri showing a photograph taken in Vík is a caption that lies, and a
     * map is exactly where a reader trusts that a picture is OF the place it
     * sits on.
     *
     * So a stop shows its own first photograph or it shows a number. The
     * number is not a degraded state; it is the honest one.
     */

    // The cached country per place, for whichever of them Atlas has seen.
    const cachedCountry = new Map<number, string>();
    const placeIds = placeRows.map(p => p.id);
    for (let i = 0; i < placeIds.length; i += 400) {
      const chunk = placeIds.slice(i, i + 400);
      if (!chunk.length) continue;
      const rows = this.db
        .prepare(`SELECT place_id, country_code FROM place_regions WHERE place_id IN (${chunk.map(() => '?').join(',')})`)
        .all(...chunk) as { place_id: number; country_code: string }[];
      for (const r of rows) if (r.country_code) cachedCountry.set(r.place_id, r.country_code.toUpperCase());
    }

    const countryAt = (lat: number, lng: number, placeId?: number): string | null => {
      if (placeId != null) {
        const cached = cachedCountry.get(placeId);
        if (cached) return cached;
      }
      return getCountryFromCoords(lat, lng);
    };

    /*
     * The switch is honoured before anything is measured, on both routes.
     *
     * Only an entry with coordinates is listed under `excluded`: one without
     * a place was never a stop, and offering to switch it back on would offer
     * a stop that does not exist. It still stops being a step, because the
     * traveller said it does not count.
     *
     * The fallback has to honour it too. A skeleton is the entry TREK derives
     * from a trip place, so switching the skeleton off and then drawing the
     * place it came from would put the same stop straight back on the map
     * under its other name. Hence the set of places to leave out.
     */
    const hasCoords = (e: { location_lat: number | null; location_lng: number | null }) =>
      Number.isFinite(e.location_lat) && Number.isFinite(e.location_lng);
    const counting = entryRows.filter(e => !e.stats_excluded);
    const excluded = entryRows
      .filter(e => e.stats_excluded && hasCoords(e))
      .map(e => ({ entryId: e.id, label: e.title || e.location_name || '', date: e.entry_date ?? null }));
    const excludedPlaceIds = new Set(
      entryRows
        .filter(e => e.stats_excluded && e.source_place_id != null)
        .map(e => e.source_place_id as number),
    );

    const fromEntries: StatsInputPoint[] = counting
      .filter(hasCoords)
      .map(e => ({
        lat: e.location_lat as number,
        lng: e.location_lng as number,
        label: e.title || e.location_name || '',
        date: e.entry_date ?? null,
        country: countryAt(e.location_lat as number, e.location_lng as number),
        tripId: e.source_trip_id ?? null,
        photoId: photoByEntry.get(e.id) ?? null,
        entryId: e.id,
      }));

    /*
     * Which source wins is decided before the switches, not after.
     *
     * `fromEntries.length` was the test, and with a switch in the world it
     * answers the wrong question: a journey whose every stop has been switched
     * off has no entry points left, so the fallback would draw the trip's
     * places instead and put the whole route back under other names. The
     * journal is the source as soon as one entry carries a point, whether or
     * not it still counts.
     */
    const journalHasPoints = entryRows.some(hasCoords);
    const points: StatsInputPoint[] = journalHasPoints
      ? fromEntries
      : placeRows
        .filter(p => !excludedPlaceIds.has(p.id) && Number.isFinite(p.lat) && Number.isFinite(p.lng))
        .map(p => ({
          lat: p.lat as number,
          lng: p.lng as number,
          label: p.name || '',
          date: p.day ?? null,
          country: countryAt(p.lat as number, p.lng as number, p.id),
          tripId: p.tripId ?? null,
          // A trip place carries `image_url`, which is a provider photo behind
          // its own attribution rather than a trek_photos id. It must not be
          // smuggled into a field the book will print as one of the journey's
          // own pictures.
          photoId: null,
          // No entry to switch off, so a panel lists it and offers no switch.
          entryId: null,
        }));

    /*
     * How many of the route's stops each trip owns.
     *
     * Counted rather than assumed: a linked trip whose entries nobody wrote,
     * or whose places carry no coordinates, contributes nothing to the line and
     * offering a map of it would produce an empty frame.
     */
    const perTrip = new Map<number, number>();
    for (const p of points) {
      if (p.tripId != null) perTrip.set(p.tripId, (perTrip.get(p.tripId) ?? 0) + 1);
    }

    return computeJourneyStats({
      journeyId,
      points,
      entries: counting.length,
      photos: photoCount?.n ?? 0,
      // A place whose skeleton was switched off is not a place the journey
      // went to, whichever route drew it.
      places: (placeCount?.n ?? 0) - placeRows.filter(p => excludedPlaceIds.has(p.id)).length,
      tripDates,
      countryNames: countryNamesFor(points),
      trips: tripRows.map(t => ({
        id: t.id,
        title: t.title || '',
        start: t.start,
        end: t.end,
        points: perTrip.get(t.id) ?? 0,
      })),
      excluded,
    });
  }

  async listEntries(journeyId: number, userId: number) {
    if (!(await this.canAccessJourney(journeyId, userId))) return null;

    const entries = this.db
      .prepare('SELECT * FROM journey_entries WHERE journey_id = ? AND dismissed = 0 ORDER BY entry_date ASC, sort_order ASC, id ASC')
      .all(journeyId) as JourneyEntry[];

    const photos = this.db
      .prepare(
        `SELECT ${JP_SELECT} FROM ${JP_JOIN} WHERE jep.entry_id IN (SELECT id FROM journey_entries WHERE journey_id = ?) ORDER BY jep.sort_order ASC`,
      )
      .all(journeyId) as JourneyPhoto[];

    const photosByEntry: Record<number, JourneyPhoto[]> = {};
    for (const p of photos) {
      (photosByEntry[p.entry_id] ||= []).push(p);
    }

    return entries.map((e) => ({
      ...decodeEntryRow(e),
      photos: photosByEntry[e.id] || [],
      source_trip_name: e.source_trip_id
        ? (this.db.prepare('SELECT title FROM trips WHERE id = ?').get(e.source_trip_id) as { title: string } | undefined)
            ?.title || null
        : null,
    }));
  }

  async createEntry(
    journeyId: number,
    userId: number,
    data: {
      type?: string;
      title?: string;
      story?: string;
      entry_date: string;
      entry_time?: string;
      location_name?: string;
      location_lat?: number;
      location_lng?: number;
      mood?: string;
      weather?: string;
      tags?: string[];
      pros_cons?: { pros: string[]; cons: string[] };
      visibility?: string;
      sort_order?: number;
    },
    sid?: string,
  ): Promise<JourneyEntryWire | null> {
    if (!(await this.canEdit(journeyId, userId))) return null;

    const now = this.ts();
    const maxOrder = this.db
      .prepare('SELECT MAX(sort_order) as m FROM journey_entries WHERE journey_id = ? AND entry_date = ?')
      .get(journeyId, data.entry_date) as { m: number | null };

    const prosConsJson =
      data.pros_cons && (data.pros_cons.pros.length || data.pros_cons.cons.length)
        ? JSON.stringify(data.pros_cons)
        : null;

    const res = this.db
      .prepare(
        `
      INSERT INTO journey_entries (journey_id, author_id, type, title, story, entry_date, entry_time, location_name, location_lat, location_lng, country_code, mood, weather, tags, pros_cons, visibility, sort_order, created_at, updated_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `,
      )
      .run(
        journeyId,
        userId,
        data.type || 'entry',
        data.title || null,
        data.story || null,
        data.entry_date,
        data.entry_time || null,
        data.location_name || null,
        data.location_lat ?? null,
        data.location_lng ?? null,
        this.countryFor(data.location_lat, data.location_lng),
        data.mood || null,
        data.weather || null,
        data.tags?.length ? JSON.stringify(data.tags) : null,
        prosConsJson,
        data.visibility || 'private',
        (maxOrder?.m ?? -1) + 1,
        now,
        now,
      );

    const created = decodeEntryRow(
      this.db
        .prepare('SELECT * FROM journey_entries WHERE id = ?')
        .get(Number(res.lastInsertRowid)) as JourneyEntry,
    );
    await this.broadcastJourneyEvent(journeyId, 'journey:entry:created', { entry: created }, sid);
    return created;
  }

  async updateEntry(
    entryId: number,
    userId: number,
    data: Partial<{
      type: string;
      title: string;
      story: string;
      entry_date: string;
      entry_time: string;
      location_name: string;
      location_lat: number;
      location_lng: number;
      mood: string;
      weather: string;
      tags: string[];
      pros_cons: { pros: string[]; cons: string[] };
      visibility: string;
      sort_order: number;
      stats_excluded: boolean;
      dismissed: boolean;
    }>,
    sid?: string,
  ): Promise<JourneyEntryWire | null> {
    const entry = this.db.prepare('SELECT * FROM journey_entries WHERE id = ?').get(entryId) as JourneyEntry | undefined;
    if (!entry) return null;
    if (!(await this.canEdit(entry.journey_id, userId))) return null;

    const fields: string[] = [];
    const values: unknown[] = [];

    // Allow-list the columns a client may set: keys come from the request body
    // and are interpolated as SQL column names, so restrict them to the known
    // entry fields. Keep this in sync with the data type above.
    const allowed = new Set([
      'type',
      'title',
      'story',
      'entry_date',
      'entry_time',
      'location_name',
      'location_lat',
      'location_lng',
      'mood',
      'weather',
      'tags',
      'pros_cons',
      'visibility',
      'sort_order',
      'stats_excluded',
      'dismissed',
    ]);

    for (const [key, val] of Object.entries(data)) {
      if (val === undefined) continue;
      if (!allowed.has(key)) continue;
      if (key === 'tags') {
        fields.push('tags = ?');
        values.push(Array.isArray(val) ? JSON.stringify(val) : val);
      } else if (key === 'pros_cons') {
        fields.push('pros_cons = ?');
        values.push(val && typeof val === 'object' ? JSON.stringify(val) : val);
      } else if (key === 'stats_excluded' || key === 'dismissed') {
        // INTEGER columns, and better-sqlite3 refuses to bind a boolean.
        fields.push(`${key} = ?`);
        values.push(val ? 1 : 0);
      } else {
        fields.push(`${key} = ?`);
        values.push(val);
      }
    }

    // The pin moved, so the flag has to follow it. Either half of the pair may be
    // the one being changed, so the other is read off the stored row — and the
    // test is `!== undefined`, not `??`: a null here means "take this entry off the
    // map", which has to clear the country rather than fall back to the old one.
    if (data.location_lat !== undefined || data.location_lng !== undefined) {
      const lat = data.location_lat !== undefined ? data.location_lat : entry.location_lat;
      const lng = data.location_lng !== undefined ? data.location_lng : entry.location_lng;
      fields.push('country_code = ?');
      values.push(this.countryFor(lat, lng));
    }

    // if adding story to a skeleton, promote to entry
    if (entry.type === 'skeleton' && data.story && data.story.trim()) {
      fields.push('type = ?');
      values.push('entry');
    }

    if (fields.length === 0) return decodeEntryRow(entry);

    fields.push('updated_at = ?');
    values.push(this.ts());
    values.push(entryId);
    this.db.prepare(`UPDATE journey_entries SET ${fields.join(', ')} WHERE id = ?`).run(...values);

    // touch the journey
    this.db.prepare('UPDATE journeys SET updated_at = ? WHERE id = ?').run(this.ts(), entry.journey_id);

    const updated = decodeEntryRow(
      this.db.prepare('SELECT * FROM journey_entries WHERE id = ?').get(entryId) as JourneyEntry,
    );
    await this.broadcastJourneyEvent(entry.journey_id, 'journey:entry:updated', { entry: updated }, sid);
    return updated;
  }

  // Reorder entries (typically within a single day). Caller passes the new
  // desired order of ids; each entry's sort_order is set to its index in the
  // array. Only entries owned by this journey are accepted.
  async reorderEntries(journeyId: number, userId: number, orderedIds: number[], sid?: string): Promise<boolean> {
    if (!(await this.canEdit(journeyId, userId))) return false;
    if (!orderedIds.length) return true;

    const placeholders = orderedIds.map(() => '?').join(',');
    const rows = this.db
      .prepare(`SELECT id FROM journey_entries WHERE id IN (${placeholders}) AND journey_id = ?`)
      .all(...orderedIds, journeyId) as { id: number }[];
    if (rows.length !== orderedIds.length) return false;

    const now = this.ts();
    const update = this.db.prepare('UPDATE journey_entries SET sort_order = ?, updated_at = ? WHERE id = ?');
    await this.uow.transactional(async () => {
      orderedIds.forEach((id, index) => update.run(index, now, id));
      this.db.prepare('UPDATE journeys SET updated_at = ? WHERE id = ?').run(now, journeyId);
    });

    await this.broadcastJourneyEvent(journeyId, 'journey:entries:reordered', { orderedIds }, sid);
    return true;
  }

  async deleteEntry(entryId: number, userId: number, sid?: string): Promise<boolean> {
    const entry = this.db.prepare('SELECT * FROM journey_entries WHERE id = ?').get(entryId) as JourneyEntry | undefined;
    if (!entry) return false;
    if (!(await this.canEdit(entry.journey_id, userId))) return false;

    if (entry.source_trip_id && entry.source_place_id && entry.type !== 'skeleton') {
      // Revert filled entry back to skeleton instead of deleting
      this.db.prepare(
        `
        UPDATE journey_entries
        SET type = 'skeleton', story = NULL, mood = NULL, weather = NULL, pros_cons = NULL,
            visibility = 'private', updated_at = ?
        WHERE id = ?
      `,
      ).run(this.ts(), entryId);
      await this.broadcastJourneyEvent(entry.journey_id, 'journey:entry:updated', { entryId }, sid);
    } else {
      this.db.prepare('DELETE FROM journey_entries WHERE id = ?').run(entryId);
      await this.broadcastJourneyEvent(entry.journey_id, 'journey:entry:deleted', { entryId }, sid);
    }

    return true;
  }

  // ── Photos ───────────────────────────────────────────────────────────────

  // Promote a skeleton suggestion to a concrete entry. Called whenever the user
  // adds content (photo upload, provider photo, gallery link) — a suggestion
  // with photos is no longer just a suggestion.
  private async promoteSkeletonIfNeeded(entry: JourneyEntry): Promise<void> {
    if (entry.type !== 'skeleton') return;
    this.db.prepare('UPDATE journey_entries SET type = ?, updated_at = ? WHERE id = ?').run('entry', this.ts(), entry.id);
  }

  // Ensure a trek_photo_id is in the journey gallery; return its gallery row id.
  private async ensureInGallery(journeyId: number, trekPhotoId: number, caption?: string, shared?: number): Promise<number> {
    const now = this.ts();
    const maxOrderRow = this.db
      .prepare('SELECT MAX(sort_order) as m FROM journey_photos WHERE journey_id = ?')
      .get(journeyId) as { m: number | null };
    this.db.prepare(
      `
      INSERT OR IGNORE INTO journey_photos (journey_id, photo_id, caption, shared, sort_order, created_at)
      VALUES (?, ?, ?, ?, ?, ?)
    `,
    ).run(journeyId, trekPhotoId, caption || null, shared ?? 0, (maxOrderRow?.m ?? -1) + 1, now);
    const row = this.db
      .prepare('SELECT id FROM journey_photos WHERE journey_id = ? AND photo_id = ?')
      .get(journeyId, trekPhotoId) as { id: number };
    return row.id;
  }

  // Link a gallery photo to an entry (idempotent). Returns the junction JP_SELECT row.
  private async linkGalleryPhotoToEntry(galleryId: number, entryId: number): Promise<JourneyPhoto | null> {
    const now = this.ts();
    const maxOrderRow = this.db
      .prepare('SELECT MAX(sort_order) as m FROM journey_entry_photos WHERE entry_id = ?')
      .get(entryId) as { m: number | null };
    this.db.prepare(
      `
      INSERT OR IGNORE INTO journey_entry_photos (entry_id, journey_photo_id, sort_order, created_at)
      VALUES (?, ?, ?, ?)
    `,
    ).run(entryId, galleryId, (maxOrderRow?.m ?? -1) + 1, now);
    return this.db
      .prepare(`SELECT ${JP_SELECT} FROM ${JP_JOIN} WHERE jep.entry_id = ? AND jep.journey_photo_id = ?`)
      .get(entryId, galleryId) as JourneyPhoto | null;
  }

  /**
   * Attach an uploaded file to an entry.
   *
   * `media` carries what a clip needs beyond a picture: the type, so the viewer
   * plays it instead of trying to draw it, and the duration the browser measured
   * while it took the poster frame. The gallery route has taken both since #823;
   * the entry route could not, which is why a video dropped on an entry came
   * back as a 400 (issue #2341).
   */
  async addPhoto(
    entryId: number,
    userId: number,
    filePath: string,
    thumbnailPath?: string,
    caption?: string,
    media?: { mediaType?: string; durationMs?: number | null },
  ): Promise<JourneyPhoto | null> {
    const entry = this.db.prepare('SELECT * FROM journey_entries WHERE id = ?').get(entryId) as JourneyEntry | undefined;
    if (!entry) return null;
    if (!(await this.canEdit(entry.journey_id, userId))) return null;

    const trekPhotoId = await this.photos.getOrCreateLocal(
      filePath,
      thumbnailPath,
      null,
      null,
      media?.mediaType || 'image',
      media?.durationMs ?? null,
    );
    const galleryId = await this.uow.transactional(async () => await this.ensureInGallery(entry.journey_id, trekPhotoId, caption));
    const result = await this.linkGalleryPhotoToEntry(galleryId, entryId);
    await this.promoteSkeletonIfNeeded(entry);
    return result;
  }

  async addProviderPhoto(
    entryId: number,
    userId: number,
    provider: string,
    assetId: string,
    caption?: string,
    passphrase?: string,
    mediaType: string = 'image',
  ): Promise<JourneyPhoto | null> {
    const entry = this.db.prepare('SELECT * FROM journey_entries WHERE id = ?').get(entryId) as JourneyEntry | undefined;
    if (!entry) return null;
    if (!(await this.canEdit(entry.journey_id, userId))) return null;

    const trekPhotoId = await this.photos.getOrCreate(provider, assetId, userId, passphrase, mediaType);

    // skip if this photo is already linked to this entry
    const alreadyLinked = this.db
      .prepare(
        `
      SELECT 1 FROM journey_entry_photos jep
      JOIN journey_photos gp ON gp.id = jep.journey_photo_id
      WHERE jep.entry_id = ? AND gp.photo_id = ?
    `,
      )
      .get(entryId, trekPhotoId);
    if (alreadyLinked) return null;

    const galleryId = await this.uow.transactional(async () => await this.ensureInGallery(entry.journey_id, trekPhotoId, caption));
    const result = await this.linkGalleryPhotoToEntry(galleryId, entryId);
    await this.promoteSkeletonIfNeeded(entry);
    return result;
  }

  // Link a gallery photo (by its journey_photos.id) to an entry — idempotent.
  async linkPhotoToEntry(entryId: number, journeyPhotoId: number, userId: number): Promise<JourneyPhoto | null> {
    const entry = this.db.prepare('SELECT * FROM journey_entries WHERE id = ?').get(entryId) as JourneyEntry | undefined;
    if (!entry) return null;
    if (!(await this.canEdit(entry.journey_id, userId))) return null;

    // Verify the gallery photo belongs to this journey
    const galleryRow = this.db.prepare('SELECT id, journey_id FROM journey_photos WHERE id = ?').get(journeyPhotoId) as
      | { id: number; journey_id: number }
      | undefined;
    if (!galleryRow || galleryRow.journey_id !== entry.journey_id) return null;

    const result = await this.linkGalleryPhotoToEntry(galleryRow.id, entryId);
    await this.promoteSkeletonIfNeeded(entry);
    return result;
  }

  // Upload photos to the journey gallery only (no entry association).
  async uploadGalleryPhotos(
    journeyId: number,
    userId: number,
    filePaths: { path: string; thumbnail?: string; mediaType?: string; durationMs?: number | null }[],
  ): Promise<JourneyPhoto[]> {
    if (!(await this.canEdit(journeyId, userId))) return [];
    const results: any[] = [];
    const now = this.ts();
    const maxOrderRow = this.db
      .prepare('SELECT MAX(sort_order) as m FROM journey_photos WHERE journey_id = ?')
      .get(journeyId) as { m: number | null };
    let nextOrder = (maxOrderRow?.m ?? -1) + 1;

    for (const f of filePaths) {
      const trekPhotoId = await this.photos.getOrCreateLocal(f.path, f.thumbnail, null, null, f.mediaType || 'image', f.durationMs ?? null);
      this.db.prepare(
        `
        INSERT OR IGNORE INTO journey_photos (journey_id, photo_id, shared, sort_order, created_at)
        VALUES (?, ?, 0, ?, ?)
      `,
      ).run(journeyId, trekPhotoId, nextOrder++, now);
      const row = this.db
        .prepare(`SELECT ${GALLERY_SELECT} FROM ${GALLERY_JOIN} WHERE gp.journey_id = ? AND gp.photo_id = ?`)
        .get(journeyId, trekPhotoId);
      if (row) results.push(row);
    }
    return results;
  }

  // Add a provider photo to the gallery only (no entry link).
  async addProviderPhotoToGallery(
    journeyId: number,
    userId: number,
    provider: string,
    assetId: string,
    caption?: string,
    passphrase?: string,
    mediaType: string = 'image',
  ): Promise<any | null> {
    if (!(await this.canEdit(journeyId, userId))) return null;
    const trekPhotoId = await this.photos.getOrCreate(provider, assetId, userId, passphrase, mediaType);
    const galleryId = await this.uow.transactional(async () => await this.ensureInGallery(journeyId, trekPhotoId, caption));
    return this.db.prepare(`SELECT ${GALLERY_SELECT} FROM ${GALLERY_JOIN} WHERE gp.id = ?`).get(galleryId) ?? null;
  }

  // Unlink a photo from a specific entry; gallery row is preserved.
  async unlinkPhotoFromEntry(entryId: number, journeyPhotoId: number, userId: number): Promise<boolean> {
    const entry = this.db.prepare('SELECT * FROM journey_entries WHERE id = ?').get(entryId) as JourneyEntry | undefined;
    if (!entry) return false;
    if (!(await this.canEdit(entry.journey_id, userId))) return false;

    const result = this.db
      .prepare('DELETE FROM journey_entry_photos WHERE entry_id = ? AND journey_photo_id = ?')
      .run(entryId, journeyPhotoId);
    return result.changes > 0;
  }

  // Hard-delete a gallery photo (removes from all entries and the gallery).
  async deleteGalleryPhoto(
    journeyPhotoId: number,
    userId: number,
  ): Promise<{ photo_id: number; file_path?: string | null; thumbnail_path?: string | null } | null> {
    const row = this.db.prepare('SELECT * FROM journey_photos WHERE id = ?').get(journeyPhotoId) as
      | { id: number; journey_id: number; photo_id: number }
      | undefined;
    if (!row) return null;
    if (!(await this.canEdit(row.journey_id, userId))) return null;

    const trekRow = this.db.prepare('SELECT file_path, thumbnail_path, provider FROM trek_photos WHERE id = ?').get(row.photo_id) as
      | { file_path?: string; thumbnail_path?: string; provider?: string }
      | undefined;

    // cascade on journey_entry_photos.journey_photo_id handles junction cleanup
    this.db.prepare('DELETE FROM journey_photos WHERE id = ?').run(journeyPhotoId);
    await this.photos.deleteIfOrphan(row.photo_id);

    return { photo_id: row.photo_id, file_path: trekRow?.file_path ?? null, thumbnail_path: trekRow?.thumbnail_path ?? null };
  }

  async setPhotoProvider(photoId: number, provider: string, assetId: string, ownerId: number) {
    // photoId = journey_photos.id (gallery row); look up the trek_photo_id
    const jp = this.db.prepare('SELECT photo_id FROM journey_photos WHERE id = ?').get(photoId) as
      | { photo_id: number }
      | undefined;
    if (!jp) return;
    await this.photos.setProvider(jp.photo_id, provider, assetId, ownerId);
    // also denorm on gallery row for fast reads
    this.db.prepare('UPDATE journey_photos SET provider = ?, asset_id = ?, owner_id = ? WHERE id = ?').run(
      provider,
      assetId,
      ownerId,
      photoId,
    );
  }

  async updatePhoto(
    photoId: number,
    userId: number,
    data: { caption?: string; sort_order?: number },
  ): Promise<JourneyPhoto | null> {
    // photoId = journey_photos.id (gallery row)
    const row = this.db.prepare('SELECT id, journey_id FROM journey_photos WHERE id = ?').get(photoId) as
      | { id: number; journey_id: number }
      | undefined;
    if (!row) return null;
    if (!(await this.canEdit(row.journey_id, userId))) return null;

    // caption lives on the gallery row; sort_order lives on the junction table
    // (JP_SELECT reads jep.sort_order, so updating journey_photos.sort_order
    // would not be reflected in the returned row).
    if (data.caption !== undefined) {
      this.db.prepare('UPDATE journey_photos SET caption = ? WHERE id = ?').run(data.caption, photoId);
    }
    if (data.sort_order !== undefined) {
      this.db.prepare('UPDATE journey_entry_photos SET sort_order = ? WHERE journey_photo_id = ?').run(
        data.sort_order,
        photoId,
      );
    }
    return this.db.prepare(`SELECT ${JP_SELECT} FROM ${JP_JOIN} WHERE gp.id = ? LIMIT 1`).get(photoId) as JourneyPhoto | null;
  }

  // deletePhoto: hard-delete (backwards compat name used by old route).
  async deletePhoto(
    photoId: number,
    userId: number,
  ): Promise<{ id: number; photo_id: number; file_path?: string | null; thumbnail_path?: string | null; journey_id: number } | null> {
    const row = this.db.prepare('SELECT id, journey_id, photo_id FROM journey_photos WHERE id = ?').get(photoId) as
      | { id: number; journey_id: number; photo_id: number }
      | undefined;
    if (!row) return null;
    if (!(await this.canEdit(row.journey_id, userId))) return null;

    const trekRow = this.db.prepare('SELECT file_path, thumbnail_path, provider FROM trek_photos WHERE id = ?').get(row.photo_id) as
      | { file_path?: string; thumbnail_path?: string; provider?: string }
      | undefined;

    this.db.prepare('DELETE FROM journey_photos WHERE id = ?').run(photoId);
    await this.photos.deleteIfOrphan(row.photo_id);

    return { id: row.id, photo_id: row.photo_id, file_path: trekRow?.file_path ?? null, thumbnail_path: trekRow?.thumbnail_path ?? null, journey_id: row.journey_id };
  }

  // ── Contributors ─────────────────────────────────────────────────────────

  async addContributor(
    journeyId: number,
    userId: number,
    targetUserId: number,
    role: 'editor' | 'viewer',
  ): Promise<boolean> {
    if (!(await this.isOwner(journeyId, userId))) return false;
    if (targetUserId === userId) return false;
    try {
      this.db.prepare(
        'INSERT OR REPLACE INTO journey_contributors (journey_id, user_id, role, added_at) VALUES (?, ?, ?, ?)',
      ).run(journeyId, targetUserId, role, this.ts());
      await this.broadcastJourneyEvent(journeyId, 'journey:contributor:changed', { targetUserId, role });
      return true;
    } catch {
      return false;
    }
  }

  async updateContributorRole(
    journeyId: number,
    userId: number,
    targetUserId: number,
    role: 'editor' | 'viewer',
  ): Promise<boolean> {
    if (!(await this.isOwner(journeyId, userId))) return false;
    this.db.prepare('UPDATE journey_contributors SET role = ? WHERE journey_id = ? AND user_id = ?').run(
      role,
      journeyId,
      targetUserId,
    );
    await this.broadcastJourneyEvent(journeyId, 'journey:contributor:changed', { targetUserId, role });
    return true;
  }

  async removeContributor(journeyId: number, userId: number, targetUserId: number): Promise<boolean> {
    if (!(await this.isOwner(journeyId, userId))) return false;
    this.db.prepare("DELETE FROM journey_contributors WHERE journey_id = ? AND user_id = ? AND role != 'owner'").run(
      journeyId,
      targetUserId,
    );
    return true;
  }

  // ── Suggestions ──────────────────────────────────────────────────────────

  async getSuggestions(userId: number) {
    const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
    return this.db
      .prepare(
        `
      SELECT t.id, t.title, t.start_date, t.end_date, t.cover_image,
        (SELECT COUNT(*) FROM places p INNER JOIN day_assignments da ON da.place_id = p.id WHERE p.trip_id = t.id) as place_count
      FROM trips t
      LEFT JOIN trip_members tm ON t.id = tm.trip_id AND tm.user_id = ?
      WHERE (t.user_id = ? OR tm.user_id = ?)
        AND t.end_date IS NOT NULL
        AND t.end_date >= ?
        AND t.end_date <= date('now')
        AND t.id NOT IN (SELECT trip_id FROM journey_trips)
      ORDER BY t.end_date DESC
    `,
      )
      .all(userId, userId, userId, thirtyDaysAgo);
  }

  // ── User trips (for trip picker) ─────────────────────────────────────────

  async listUserTrips(userId: number) {
    return this.db
      .prepare(
        `
      SELECT t.id, t.title, t.start_date, t.end_date, t.cover_image,
        (SELECT COUNT(*) FROM places p INNER JOIN day_assignments da ON da.place_id = p.id WHERE p.trip_id = t.id) as place_count
      FROM trips t
      LEFT JOIN trip_members tm ON t.id = tm.trip_id AND tm.user_id = ?
      WHERE t.user_id = ? OR tm.user_id = ?
      ORDER BY t.start_date DESC
    `,
      )
      .all(userId, userId, userId);
  }
}
