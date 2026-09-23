import type { JourneyEntry } from '../../types';
import type { JourneyEntries } from '../entities/JourneyEntries.entity';
import { TrekRepository } from './_shared/trek-repository';

/** JG55's wider reconciliation projection (`reconcileTripSkeletons`) — a distinct column set from JG35's dedup-key-only read. */
export interface ReconcileEntryRow {
  id: number;
  source_place_id: number | null;
  source_assignment_id: number | null;
  type: string;
  story: string | null;
  title: string | null;
  entry_date: string | null;
  entry_time: string | null;
  location_name: string | null;
  location_lat: number | null;
  location_lng: number | null;
}

/** JG63's `journeyTracks` source row — the places a journey's linked trips carry GPX geometry for. */
export interface JourneyTrackSourceRow {
  place_id: number;
  trip_id: number;
  name: string | null;
  route_color: string | null;
  route_geometry: string;
}

/** The narrow `journey_entries`/`places` shape {@link JourneyEntriesRepository.listTracksSource} needs. */
interface JourneyTracksKyselyDB {
  journey_entries: { journey_id: number; source_trip_id: number | null };
  places: { id: number; trip_id: number; name: string | null; route_color: string | null; route_geometry: string | null };
}

/** The narrow `journey_entries` shape a bare `entry_date`/`sort_order` MAX-per-date read needs. */
interface JourneyEntriesDateSortKyselyDB {
  journey_entries: { journey_id: number; entry_date: string; sort_order: number | null };
}

/** `journey_entry_photos`, read cross-table (no `JourneyEntryPhotosRepository` yet — Task 2's own; the two `hasPhotos` guards in Part A only ever check existence). */
interface JourneyEntryPhotosExistsKyselyDB {
  journey_entry_photos: { entry_id: number };
}

/**
 * `journey_entries` — first cut (Plan 3g Task 1, R9's Part A): every
 * insert/find/update/delete the sync engine (`syncTripPlaces`/
 * `onPlaceCreated`/`onPlaceUpdated`/`onPlaceDeleted`/`reconcileTripSkeletons`)
 * and `getJourneyFull`/`journeyTracks` need. Task 2 completes this file with
 * the entries-CRUD/photos-surface methods (JG64-116) its own Part B owns.
 */
export class JourneyEntriesRepository extends TrekRepository<JourneyEntries> {
  /** JG14 — `getJourneyFull`'s entries read: `SELECT * FROM journey_entries WHERE journey_id = ? AND dismissed = 0 ORDER BY entry_date ASC, sort_order ASC, id ASC` (same text as Task 2's own JG64/JG71). */
  async listForJourney(journeyId: number): Promise<JourneyEntry[]> {
    return await this.qb('je')
      .select(['je.*'])
      .where({ journey: journeyId, dismissed: 0 })
      .orderBy({ entry_date: 'asc', sort_order: 'asc', id: 'asc' })
      .execute<JourneyEntry[]>('all', false);
  }

  /** JG22 — `getJourneyFull`'s `dismissed_count`: `SELECT COUNT(*) AS n FROM journey_entries WHERE journey_id = ? AND dismissed = 1`. */
  async countDismissed(journeyId: number): Promise<number> {
    return await this.count({ journey: journeyId, dismissed: 1 });
  }

  /** JG28 — `restoreDismissedSuggestions`: `UPDATE journey_entries SET dismissed = 0 WHERE journey_id = ? AND dismissed = 1`. Returns the affected-row count (the SERVICE broadcasts only when it is > 0, unchanged). */
  async restoreDismissed(journeyId: number): Promise<number> {
    return await this.nativeUpdate({ journey: journeyId, dismissed: 1 }, { dismissed: 0 });
  }

  /** JG31 — `removeTripFromJourney`'s unfilled-skeleton cleanup: `DELETE FROM journey_entries WHERE journey_id = ? AND source_trip_id = ? AND type = 'skeleton'`. */
  async deleteSkeletonsForTrip(journeyId: number, tripId: number): Promise<void> {
    await this.nativeDelete({ journey: journeyId, sourceTrip: tripId, type: 'skeleton' });
  }

  /** JG32 — `removeTripFromJourney`'s filled-entry detach: content kept, `source_*` columns cleared. */
  async detachFilledForTrip(journeyId: number, tripId: number): Promise<void> {
    await this.nativeUpdate(
      { journey: journeyId, sourceTrip: tripId, type: { $ne: 'skeleton' } },
      { sourcePlace: null, sourceTrip: null, source_assignment_id: null },
    );
  }

  /** JG35 — `syncTripPlaces`'s existing-skeleton dedup-key read: `SELECT source_place_id, source_assignment_id FROM journey_entries WHERE journey_id = ? AND source_trip_id = ?`. */
  async listSourceKeysForTrip(journeyId: number, tripId: number): Promise<{ source_place_id: number; source_assignment_id: number | null }[]> {
    return await this.qb('je')
      .select(['je.sourcePlace', 'je.source_assignment_id'])
      .where({ journey: journeyId, sourceTrip: tripId })
      .execute<{ source_place_id: number; source_assignment_id: number | null }[]>('all', false);
  }

  /** JG36/JG56 — the per-date next-`sort_order` map: `SELECT entry_date, COALESCE(MAX(sort_order), -1) AS m FROM journey_entries WHERE journey_id = ? GROUP BY entry_date`. */
  async dateSortOrderMaxima(journeyId: number): Promise<{ entry_date: string; m: number }[]> {
    const rows = await this.kysely<JourneyEntriesDateSortKyselyDB>()
      .selectFrom('journey_entries')
      .select(['entry_date', (eb) => eb.fn.coalesce(eb.fn.max('sort_order'), eb.val<number>(-1)).as('m')])
      .where('journey_id', '=', journeyId)
      .groupBy('entry_date')
      .execute();
    return rows as { entry_date: string; m: number }[];
  }

  /** JG42 — `onPlaceCreated`'s next-order lookup: `SELECT MAX(sort_order) AS m FROM journey_entries WHERE journey_id = ? AND entry_date = ?`. The `?? -1` fallback stays the SERVICE's, unchanged (same text as Task 2's own JG74). */
  async maxSortOrderForDate(journeyId: number, entryDate: string): Promise<number | null> {
    const row = await this.kysely<JourneyEntriesDateSortKyselyDB>()
      .selectFrom('journey_entries')
      .select((eb) => eb.fn.max<number | null>('sort_order').as('m'))
      .where('journey_id', '=', journeyId)
      .where('entry_date', '=', entryDate)
      .executeTakeFirst();
    return row?.m ?? null;
  }

  /** JG37 — `insertSkeletonEntry`'s shared write, called from `syncTripPlaces`/`onPlaceCreated`/`reconcileTripSkeletons`. `country_code` is resolved by the SERVICE's `countryFor` (pure JS, not SQL) before this call. */
  async insertSkeleton(data: {
    journey_id: number;
    source_trip_id: number;
    source_place_id: number;
    source_assignment_id: number | null;
    author_id: number;
    title: string;
    entry_date: string;
    entry_time: string | null;
    location_name: string;
    location_lat: number | null;
    location_lng: number | null;
    country_code: string | null;
    sort_order: number;
    created_at: number;
    updated_at: number;
  }): Promise<number> {
    return await this.insert({
      journey: data.journey_id,
      sourceTrip: data.source_trip_id,
      sourcePlace: data.source_place_id,
      source_assignment_id: data.source_assignment_id,
      author: data.author_id,
      type: 'skeleton',
      title: data.title,
      entry_date: data.entry_date,
      entry_time: data.entry_time,
      location_name: data.location_name,
      location_lat: data.location_lat,
      location_lng: data.location_lng,
      country_code: data.country_code,
      sort_order: data.sort_order,
      created_at: data.created_at,
      updated_at: data.updated_at,
    });
  }

  /** JG41 — `onPlaceCreated`'s per-assignment dedup guard: `SELECT 1 FROM journey_entries WHERE journey_id = ? AND source_place_id = ? AND source_assignment_id IS ?` — NULL-safe, an unassigned skeleton matches a `null` `assignmentId` the same way. */
  async existsForPlaceAssignment(journeyId: number, placeId: number, assignmentId: number | null): Promise<boolean> {
    const row = await this.qb('je')
      .select(['je.id'])
      .where({ journey: journeyId, sourcePlace: placeId, source_assignment_id: assignmentId })
      .execute<{ id: number } | undefined>('get', false);
    return !!row;
  }

  /** JG43/JG48 — `onPlaceUpdated`/`onPlaceDeleted`: `SELECT * FROM journey_entries WHERE source_place_id = ?`, one statement text. */
  async listBySourcePlace(placeId: number): Promise<JourneyEntry[]> {
    return await this.qb('je').select(['je.*']).where({ sourcePlace: placeId }).execute<JourneyEntry[]>('all', false);
  }

  /** JG46/JG58 — the full skeleton snapshot refresh (`onPlaceUpdated`'s skeleton branch, `reconcileTripSkeletons`'s stale-skeleton branch), one statement text. */
  async updateSkeletonSnapshot(
    id: number,
    patch: {
      title: string;
      entry_date: string;
      entry_time: string | null;
      location_name: string;
      location_lat: number | null;
      location_lng: number | null;
      country_code: string | null;
      updated_at: number;
    },
  ): Promise<void> {
    await this.nativeUpdate({ id }, patch);
  }

  /** JG47/JG59 — the location-only silent update (`onPlaceUpdated`'s filled-entry branch, `reconcileTripSkeletons`'s stale-filled-entry branch), one statement text. */
  async updateLocationOnly(
    id: number,
    patch: { location_name: string; location_lat: number | null; location_lng: number | null; country_code: string | null; updated_at: number },
  ): Promise<void> {
    await this.nativeUpdate({ id }, patch);
  }

  /** JG50/JG61/JG86 — the true hard delete (`onPlaceDeleted`'s no-content skeleton branch, `reconcileTripSkeletons`'s gone-assignment branch, Task 2's own `deleteEntry` else-branch), one statement text. */
  async deleteById(id: number): Promise<void> {
    await this.nativeDelete({ id });
  }

  /** JG51/JG62 — the detach-and-annotate write (`onPlaceDeleted`'s has-content branch, `reconcileTripSkeletons`'s gone-assignment-with-content branch), one statement text. */
  async detachAndAnnotate(id: number, patch: { type: string; story: string; updated_at: number }): Promise<void> {
    await this.nativeUpdate({ id }, { sourcePlace: null, sourceTrip: null, source_assignment_id: null, ...patch });
  }

  /** JG55 — `reconcileTripSkeletons`'s own wider read (a DIFFERENT column set from JG35 — not a dup). */
  async listForTripReconcile(journeyId: number, tripId: number): Promise<ReconcileEntryRow[]> {
    const rows = await this.qb('je')
      .select([
        'je.id',
        'je.sourcePlace',
        'je.source_assignment_id',
        'je.type',
        'je.story',
        'je.title',
        'je.entry_date',
        'je.entry_time',
        'je.location_name',
        'je.location_lat',
        'je.location_lng',
      ])
      .where({ journey: journeyId, sourceTrip: tripId })
      .execute<unknown[]>('all', false);
    return rows as ReconcileEntryRow[];
  }

  /** JG57 — `reconcileTripSkeletons`'s adoption branch: `UPDATE journey_entries SET source_assignment_id = ? WHERE id = ?`, claiming an unclaimed pre-assignment-link row. */
  async claimAssignment(id: number, assignmentId: number | null): Promise<void> {
    await this.nativeUpdate({ id }, { source_assignment_id: assignmentId });
  }

  /** JG49/JG60 — the `hasPhotos` guard (`onPlaceDeleted`, `reconcileTripSkeletons`) against `journey_entry_photos`, cross-table (Task 2 owns `JourneyEntryPhotosRepository` itself). */
  async existsPhotoForEntry(entryId: number): Promise<boolean> {
    const row = await this.kysely<JourneyEntryPhotosExistsKyselyDB>()
      .selectFrom('journey_entry_photos')
      .select('entry_id')
      .where('entry_id', '=', entryId)
      .executeTakeFirst();
    return !!row;
  }

  /** JG63 — `journeyTracks`: every place with route geometry belonging to a trip this journey's entries reference. */
  async listTracksSource(journeyId: number): Promise<JourneyTrackSourceRow[]> {
    const rows = await this.kysely<JourneyTracksKyselyDB>()
      .selectFrom('journey_entries as je')
      .innerJoin('places as p', 'p.trip_id', 'je.source_trip_id')
      .select(['p.id as place_id', 'p.trip_id', 'p.name', 'p.route_color', 'p.route_geometry'])
      .distinct()
      .where('je.journey_id', '=', journeyId)
      .where('je.source_trip_id', 'is not', null)
      .where('p.route_geometry', 'is not', null)
      .orderBy('p.trip_id', 'asc')
      .orderBy('p.id', 'asc')
      .execute();
    return rows as JourneyTrackSourceRow[];
  }
}
