import { Injectable } from '@nestjs/common';
import path from 'path';
import { EntityManager } from '@mikro-orm/core';
import { DatabaseService } from '../database/database.service';
import { Trips } from '../../db/entities/Trips.entity';
import { Days } from '../../db/entities/Days.entity';
import { Users } from '../../db/entities/Users.entity';
import { Places } from '../../db/entities/Places.entity';
import { DayAssignments } from '../../db/entities/DayAssignments.entity';
import { AssignmentParticipants } from '../../db/entities/AssignmentParticipants.entity';
import { Tags } from '../../db/entities/Tags.entity';
import { DayNotes } from '../../db/entities/DayNotes.entity';
import { MAX_TRIP_DAYS, tripSpanDays, type ActiveTrip, type TrekWsPayload, type TrekWsTripEventName } from '@trek/shared';
import { RealtimeService } from '../realtime/realtime.service';
import { PermissionsService } from '../permissions/permissions.service';
import type { Trip, User } from '../../types';
import { DaysService } from '../days/days.service';
import { BudgetService } from '../budget/budget.service';
import { ReservationsService } from '../reservations/reservations.service';
import { VacayService } from '../vacay/vacay.service';
import { UnsplashService } from '../unsplash/unsplash.service';
import { StorageService } from '../storage/storage.service';
import { NotFoundError, ValidationError } from '../common/domain-errors';
import { UnitOfWork } from '../database/unit-of-work';

export const MS_PER_DAY = 86400000;

/**
 * The date range is refused, not cut short: generateDays used to clip the day
 * rows at the limit while the trip kept its full end date, so everything past
 * the cut-off had dates but no day to go on (#2403). An inverted range is
 * refused here as well, because a start date moved past the stored end date
 * arrives on its own and would otherwise empty the trip.
 */
function assertTripSpan(startDate: string, endDate: string) {
  const span = tripSpanDays(startDate, endDate);
  if (span < 1) throw new ValidationError('End date must be after start date');
  if (span > MAX_TRIP_DAYS) throw new ValidationError(`A trip can span at most ${MAX_TRIP_DAYS} days`);
}

/**
 * Strips `feed_token` from a trip row on its way out.
 *
 * The column is the sole credential for the anonymous /api/feed/trip/:token.ics
 * route, and `SELECT t.*` hands it to every reader of the trip. Gating the
 * token endpoint on `share_manage` means nothing while any member can read the
 * same value out of the trip payload, so the two go together. No TREK client
 * reads the field (it is absent from client/ and shared/ entirely).
 */
export function withoutFeedToken<T>(row: T): T {
  if (row && typeof row === 'object') delete (row as Record<string, unknown>).feed_token;
  return row;
}

interface CreateTripData {
  title: string;
  description?: string | null;
  start_date?: string | null;
  end_date?: string | null;
  currency?: string;
  reminder_days?: number;
  day_count?: number;
}

// Nullable where the wire contract (tripUpdateRequestSchema) is nullable — the
// legacy route accepted arbitrary JSON, so null always reached these fields.
interface UpdateTripData {
  title?: string;
  description?: string | null;
  start_date?: string | null;
  end_date?: string | null;
  currency?: string;
  is_archived?: boolean | number;
  cover_image?: string | null;
  reminder_days?: number;
  day_count?: number;
  date_shift_mode?: 'keep_bookings' | 'shift_all';
}

export interface UpdateTripResult {
  updatedTrip: any;
  changes: Record<string, unknown>;
  isAdminEdit: boolean;
  ownerEmail?: string;
  newTitle: string;
  newReminder: number;
  oldReminder: number;
}

export interface DeleteTripInfo {
  tripId: number;
  title: string;
  ownerId: number;
  isAdminDelete: boolean;
  ownerEmail?: string;
}

export interface AddMemberResult {
  member: { id: number; username: string; email: string; avatar?: string | null; role: string; avatar_url: string | null };
  targetUserId: number;
  tripTitle: string;
}

export interface TransferOwnershipResult {
  tripTitle: string;
  fromEmail: string;
  toEmail: string;
}

// ── Guest members (#1362) ───────────────────────────────────────────────────
//
// A guest is a credential-less users row (is_guest=1) joined into trip_members, so
// it is assignable everywhere a real member is (budget splits, packing, to-dos, day
// participants) yet can never authenticate (the auth/global-list guards exclude
// is_guest=1). The display name lives in users.username so every existing JOIN that
// renders a member name shows the guest correctly; a synthetic, non-deliverable
// email keeps the UNIQUE/NOT NULL constraints satisfied.

export interface GuestMember {
  id: number;
  username: string;
  email: string;
  role: 'member';
  is_guest: true;
  avatar_url: null;
}

/**
 * Trip aggregate root, DI-native. Membership, the calendar export and the two
 * read aggregates live in their own domains now; what is left is the write core
 * plus day generation, which is why the constructor is eight parameters instead
 * of fourteen. The SQL moved 1:1 from the legacy
 * services/tripService.ts: identical statements, the `||` falsy-coercion
 * defaults, the post-write TRIP_SELECT re-selects and the mixed
 * named/positional parameter styles are all preserved byte-for-byte.
 * Post-migration quirk fixes on top of the 1:1 move: the multi-statement
 * deletes (remove, deleteGuest's re-split + user delete) run in
 * db.transaction(), and listMembers' owner row COALESCEs display_name like
 * the member rows. Auth (canAccessTrip), per-field permission checks and
 * audit logging stay in the controller (1:1 with the legacy route);
 * trip:updated / trip:deleted broadcasts stay in the controller too — this
 * service emits none.
 */
@Injectable()
export class TripsService {
  constructor(
    private readonly dbs: DatabaseService,
    private readonly reservations: ReservationsService,
    private readonly days: DaysService,
    private readonly permissions: PermissionsService,
    private readonly budget: BudgetService,
    private readonly vacay: VacayService,
    private readonly realtime: RealtimeService,
    private readonly unsplash: UnsplashService,
    private readonly storage: StorageService,
    private readonly uow: UnitOfWork,
    // Plan 3c Task 0b (task-0a-review-security.md F-A1): `canAccessTrip`/
    // `isOwner` below resolve `TripsRepository` directly through this,
    // rather than through `this.dbs.canAccessTrip`/`isOwner` — the third of
    // the security review's three sites, alongside `TripAccessGuard` and
    // `TripOwnerGuard`. `EntityManager` is `@Global()` (`MikroOrmModule
    // .forRoot`'s core module), so no module needs new wiring.
    private readonly em: EntityManager,
  ) {}

  // Plan 3c Task 7: the raw better-sqlite3 handle now backs only the three
  // documented survivors — `remove`'s TP32/TP33 (journey_entries, Plan 3g)
  // and `copy`/`getCopiedTrip` (Task 8's own file). Every other method below
  // reads/writes through `tripsRepo`/`daysRepo` (or a sibling repository
  // reached the same way `TripsService.canAccessTrip`/`.isOwner` already
  // did since Task 0b: `this.em.getRepository(...)`, not a new constructor
  // parameter — the shared per-request `EntityManager` caches repositories,
  // so this is the same instance a hand-constructed test spies on).
  private get db() {
    return this.dbs.connection;
  }

  private get tripsRepo() {
    return this.em.getRepository(Trips);
  }

  private get daysRepo() {
    return this.em.getRepository(Days);
  }

  // Plan 3c Task 8 (`copy`'s own 6 owned tables): resolved the same way
  // `tripsRepo`/`daysRepo` above are — `this.em.getRepository(...)`, not a
  // new constructor parameter.
  private get placesRepo() {
    return this.em.getRepository(Places);
  }

  private get dayAssignmentsRepo() {
    return this.em.getRepository(DayAssignments);
  }

  private get assignmentParticipantsRepo() {
    return this.em.getRepository(AssignmentParticipants);
  }

  private get tagsRepo() {
    return this.em.getRepository(Tags);
  }

  private get dayNotesRepo() {
    return this.em.getRepository(DayNotes);
  }

  async canAccessTrip(tripId: string | number, userId: number) {
    const access = await this.em.getRepository(Trips).findAccessible(tripId, userId);
    return access as { user_id: number } | null | undefined;
  }

  async isOwner(tripId: string | number, userId: number): Promise<boolean> {
    return await this.em.getRepository(Trips).isOwner(tripId, userId);
  }

  async can(action: string, role: string, ownerId: number | null, userId: number, isMember: boolean): Promise<boolean> {
    return this.permissions.checkPermission(action, role, ownerId, userId, isMember);
  }

  broadcast<E extends TrekWsTripEventName>(tripId: string, event: E, payload: TrekWsPayload<E>, socketId: string | undefined): void {
    this.realtime.broadcast(tripId, event, payload, socketId);
  }

  // ── Day generation ────────────────────────────────────────────────────────

  /**
   * TP1–TP13 (inventory §11b), all through `DaysRepository` — statement order
   * and the two-phase renumber (negative pass then positive pass, sequential
   * `for…of`, never `Promise.all`: order is load-bearing against
   * `UNIQUE(trip_id, day_number)`, the same discipline Task 2's own
   * `DaysService` conversion kept) preserved byte-for-byte. Inherits the
   * caller's transaction — `updateTrip`'s `:423` `uow.transactional` block —
   * or runs with none at all when called from `create` (R5/§18.6, unchanged
   * by this conversion; no transaction is opened HERE either way).
   *
   * TP1/TP4/TP8/TP13 (four legacy sites, one shared repository method):
   * `listOrderedForReorder` orders `ASC` by `day_number` where TP1's own
   * statement has no `ORDER BY` at all — harmless: TP1's result only ever
   * feeds `.filter()`/re-`.sort()` calls below, never relies on read order.
   */
  async generateDays(tripId: number | bigint | string, startDate: string | null, endDate: string | null, dayCount?: number) {
    const trip_id = Number(tripId);
    const existing = await this.daysRepo.listOrderedForReorder(trip_id); // TP1

    // Two-phase renumber to avoid UNIQUE(trip_id, day_number) collisions.
    const renumber = async (days: { id: number }[]) => {
      for (let i = 0; i < days.length; i++) await this.daysRepo.setDayNumber(days[i].id, -(i + 1)); // TP2
      for (let i = 0; i < days.length; i++) await this.daysRepo.setDayNumber(days[i].id, i + 1); // TP2
    };

    if (!startDate || !endDate) {
      // Nullify all dated days instead of deleting them — preserves assignments/notes/accommodations
      const withDates = existing.filter(d => d.date);
      for (const d of withDates) await this.daysRepo.clearDate(d.id); // TP3

      // Now all days are dateless — adjust count toward dayCount target
      const allDays = await this.daysRepo.listOrderedForReorder(trip_id); // TP4
      const targetCount = Math.min(Math.max(dayCount ?? (allDays.length || 7), 1), MAX_TRIP_DAYS);
      const needed = targetCount - allDays.length;
      if (needed > 0) {
        for (let i = 0; i < needed; i++) await this.daysRepo.insertDay({ trip_id, day_number: allDays.length + i + 1, date: null }); // TP5
      } else if (needed < 0) {
        // Only trim trailing empty days to avoid destroying content
        const candidates = await this.daysRepo.listTrailingEmptyIds(trip_id, -needed); // TP6
        for (const id of candidates) await this.daysRepo.deleteById(id); // TP7
      }
      const remaining = await this.daysRepo.listOrderedForReorder(trip_id); // TP8
      await renumber(remaining);
      return;
    }

    const [sy, sm, sd] = startDate.split('-').map(Number);
    const startMs = Date.UTC(sy, sm - 1, sd);
    const numDays = tripSpanDays(startDate, endDate);

    const targetDates: string[] = [];
    for (let i = 0; i < numDays; i++) {
      const d = new Date(startMs + i * MS_PER_DAY);
      const yyyy = d.getUTCFullYear();
      const mm = String(d.getUTCMonth() + 1).padStart(2, '0');
      const dd = String(d.getUTCDate()).padStart(2, '0');
      targetDates.push(`${yyyy}-${mm}-${dd}`);
    }

    // Split into dated (sorted by day_number = position) and dateless (spare pool)
    const dated = existing.filter(d => d.date).sort((a, b) => a.day_number - b.day_number);
    const dateless = existing.filter(d => !d.date).sort((a, b) => a.day_number - b.day_number);

    // Phase 1: stamp all existing days with negative day_numbers to free up slots
    const allExisting = [...dated, ...dateless];
    for (let i = 0; i < allExisting.length; i++) await this.daysRepo.setDayNumber(allExisting[i].id, -(i + 1)); // TP2

    let datelessIdx = 0;

    for (let i = 0; i < targetDates.length; i++) {
      const date = targetDates[i];
      if (i < dated.length) {
        // Positional remap: existing dated day i gets new date — keeps all children
        await this.daysRepo.setDayNumberAndDate(dated[i].id, i + 1, date); // TP9
      } else if (datelessIdx < dateless.length) {
        // Reuse a dateless day — keeps its assignments, notes, etc.
        await this.daysRepo.setDayNumberAndDate(dateless[datelessIdx].id, i + 1, date); // TP9
        datelessIdx++;
      } else {
        await this.daysRepo.insertDay({ trip_id, day_number: i + 1, date }); // TP10
      }
    }

    // Overflow dated days (trip shrunk): delete them (issue #909).
    // Cascade removes their assignments, notes, and accommodations.
    for (let i = targetDates.length; i < dated.length; i++) {
      await this.daysRepo.deleteById(dated[i].id); // TP11
    }

    // Any remaining unused dateless days: drop the empty placeholders so day_count
    // reflects the dated range, but keep ones that still hold content (assignments,
    // notes, accommodations) — mirrors the dateless-path trimming above (#1083).
    // Base must be max(targetDates.length, dated.length) to avoid colliding with
    // positives already assigned by the main loop or the overflow loop above.
    const maxAssigned = Math.max(targetDates.length, dated.length);
    let keptDateless = 0;
    for (let i = datelessIdx; i < dateless.length; i++) {
      const empty = await this.daysRepo.isEmptyDay(dateless[i].id); // TP12
      if (empty) {
        await this.daysRepo.deleteById(dateless[i].id); // TP11
      } else {
        await this.daysRepo.setDayNumber(dateless[i].id, maxAssigned + keptDateless + 1); // TP2
        keptDateless++;
      }
    }

    // Final renumber to compact and eliminate any gaps/negatives
    const remaining = await this.daysRepo.listOrderedForReorder(trip_id); // TP13
    await renumber(remaining);
  }

  // ── Trip CRUD ─────────────────────────────────────────────────────────────

  /** TP16/TP17 — `TripsRepository.listForUser` (`TRIP_SELECT` + the access join, ONE builder, inventory §11a/§11c). */
  async list(userId: number, archived: number | null) {
    return this.tripsRepo.listForUser(userId, archived);
  }

  async create(userId: number, data: CreateTripData) {
    if (data.start_date && data.end_date) assertTripSpan(data.start_date, data.end_date);
    const rd = data.reminder_days !== undefined
      ? (Number(data.reminder_days) >= 0 && Number(data.reminder_days) <= 30 ? Number(data.reminder_days) : 3)
      : 3;

    const tripId = await this.tripsRepo.insertTrip({ // TP18
      user_id: userId,
      title: data.title,
      description: data.description || null,
      start_date: data.start_date || null,
      end_date: data.end_date || null,
      currency: data.currency || 'EUR',
      reminder_days: rd,
    });

    await this.generateDays(tripId, data.start_date || null, data.end_date || null, data.day_count);

    const trip = await this.tripsRepo.findForViewer(tripId, userId); // TP19 — the creator always owns it, so the access predicate is trivially satisfied
    return { trip, tripId, reminderDays: rd };
  }

  /** TP20 — `TripsRepository.findForViewer`: `TRIP_SELECT` scoped to one trip AND the access predicate. */
  async get(tripId: string | number, userId: number) {
    return await this.tripsRepo.findForViewer(tripId, userId) as Trip | undefined;
  }

  /**
   * The trip a user most likely means by "my trip" right now: the one running
   * today, else the next one starting, else the one that started most recently.
   * Archived trips never qualify. Same order the dashboard hero picks its
   * spotlight with (client sortTrips) — the two must agree, or "open my trip on
   * startup" would land somewhere other than the trip the dashboard features.
   *
   * Kept separate from list() on purpose: this runs on the very first paint of
   * a startup redirect, so it reads four columns of one row instead of every
   * trip with its per-trip day/place counts.
   */
  /** TP21 — `TripsRepository.activeTrip`: the triple `CASE WHEN … relevance` projection and the double-`CASE WHEN` `ORDER BY`. */
  async activeTrip(userId: number, today = new Date().toISOString().slice(0, 10)) {
    return await this.tripsRepo.activeTrip(userId, today) as ActiveTrip & { relevance: number } | undefined;
  }

  /** TP22 — `TripsRepository.findRaw` (shared with `TripReadModelService.getTripSummary`, TR-B, per the inventory's own note that they are the identical statement). */
  async getRaw(tripId: string | number): Promise<Trip | undefined> {
    const row = await this.tripsRepo.findRaw(tripId);
    return (row ?? undefined) as Trip | undefined;
  }

  async searchCoverImages(query: string, userId: number) {
    return this.unsplash.searchUnsplashPhotos(query, 9, await this.unsplash.getUnsplashKey(userId));
  }

  /** TP23 — `TripsRepository.getOwnerId` (already existed, TB1), reshaped to the legacy `{user_id}` row shape (matches `TripReadModelService`'s own TR-A reshape). */
  async getOwner(tripId: string | number): Promise<{ user_id: number } | undefined> {
    const ownerId = await this.tripsRepo.getOwnerId(tripId);
    return ownerId === null ? undefined : { user_id: ownerId };
  }

  /**
   * The folded legacy updateTrip core — no currency rebase. The REST path goes
   * through update() below; the plugin RPC host calls this directly (parity:
   * the legacy host path never rebased).
   */
  /**
   * TP24–TP29 (inventory §11c) — TP25's `UPDATE trips` write stays BEFORE
   * the `:423` days-regeneration transaction (R5/§18.6, unchanged): if
   * `generateDays` throws, the transaction rolls back the day rows but the
   * trip keeps its new dates. Flagged, not fixed, per the ruling.
   */
  async updateTrip(tripId: string | number, userId: number, data: UpdateTripData, userRole: string): Promise<UpdateTripResult> {
    const trip = await this.tripsRepo.findRaw(tripId) as (Trip & { reminder_days?: number }) | null; // TP24
    if (!trip) throw new NotFoundError('Trip not found');

    const { title, description, currency, is_archived, cover_image, reminder_days } = data;
    const { newStart, newEnd, dayCount, regenerate } = this.resolveRange(trip, data);

    const newTitle = title || trip.title;
    const newDesc = description !== undefined ? description : trip.description;
    const newCurrency = currency || trip.currency;
    const newArchived = is_archived !== undefined ? (is_archived ? 1 : 0) : trip.is_archived;
    const newCover = cover_image !== undefined ? cover_image : trip.cover_image;
    const oldReminder = (trip as any).reminder_days ?? 3;
    const newReminder = reminder_days !== undefined
      ? (Number(reminder_days) >= 0 && Number(reminder_days) <= 30 ? Number(reminder_days) : oldReminder)
      : oldReminder;

    const tripIdNum = Number(tripId); // safe: `trip` above only resolved through the raw-bind seam on a real row (Task 6 review's own ruling on this exact conversion)
    await this.tripsRepo.updateTripRow(tripIdNum, { // TP25
      title: newTitle,
      description: newDesc ?? null,
      start_date: newStart || null,
      end_date: newEnd || null,
      currency: newCurrency,
      // Task 7 security review L1 (absorbed here): `newArchived` is already
      // `trip.is_archived` verbatim when `data.is_archived` was never sent —
      // the legacy statement bound that value AS-IS, including a stored
      // `NULL`. A `?? 0` fold here would write `0` in that case instead,
      // silently un-nulling a column the caller never asked to change.
      is_archived: newArchived,
      cover_image: newCover ?? null,
      reminder_days: newReminder,
    });

    if (trip.start_date && trip.end_date && newStart && newStart !== trip.start_date)
      await this.vacay.shiftOwnerEntriesForTripWindow(trip.user_id, trip.start_date, trip.end_date, newStart);

    if (regenerate) {
      await this.uow.transactional(async () => {
        // Accommodations have no absolute date columns, so their pre-change dates must be
        // snapshotted before generateDays re-dates the day rows in place.
        const prevDays = await this.daysRepo.listOrderedForReorder(tripIdNum); // TP26
        const prevDateByDayId = new Map(prevDays.map(d => [d.id, d.date]));
        await this.generateDays(tripId, newStart || null, newEnd || null, dayCount);
        if (data.date_shift_mode === 'shift_all') {
          // Explicit "shift everything": bookings stay glued to their (re-dated) day rows,
          // so re-stamp reservation_time to follow — same rules as reorderDays/insertDay.
          const newDays = await this.daysRepo.listOrderedForReorder(tripIdNum); // TP27
          const newDateByDayId = new Map(newDays.map(d => [d.id, d.date]));
          await this.days.restampReservationDates(tripId, prevDateByDayId, newDateByDayId);
        } else {
          // Default: generateDays re-dates day rows positionally; re-anchor dated bookings to
          // the day matching their absolute reservation_time, and accommodations (+ their
          // linked hotel reservations) to the days now holding their pre-change dates (#1288).
          await this.reservations.resyncReservationDays(tripId);
          await this.days.resyncAccommodationDays(tripId, prevDateByDayId);
        }
      });
    }

    const changes: Record<string, unknown> = {};
    if (title && title !== trip.title) changes.title = title;
    if (newStart !== trip.start_date) changes.start_date = newStart;
    if (newEnd !== trip.end_date) changes.end_date = newEnd;
    if (newReminder !== oldReminder) changes.reminder_days = newReminder === 0 ? 'none' : `${newReminder} days`;
    if (is_archived !== undefined && newArchived !== trip.is_archived) changes.archived = !!newArchived;

    const isAdminEdit = userRole === 'admin' && trip.user_id !== userId;
    let ownerEmail: string | undefined;
    if (Object.keys(changes).length > 0 && isAdminEdit) {
      ownerEmail = (await this.em.getRepository(Users).getEmail(trip.user_id)) ?? undefined; // TP28
    }

    // TP29 — every caller of updateTrip has already passed an access check for
    // this exact trip (canAccessTrip / requireTripEdit), so the access
    // predicate `findForViewer` applies is always trivially satisfied here —
    // same reasoning as `create`'s TP19 re-select above.
    const updatedTrip = await this.tripsRepo.findForViewer(tripId, userId);

    return { updatedTrip, changes, isAdminEdit, ownerEmail, newTitle, newReminder, oldReminder };
  }

  /**
   * The dates the update leaves the trip with, checked before anything is
   * written. The day grid is rebuilt whenever a date moves or a day_count
   * arrives, and a dated rebuild runs over the whole range, so the range is
   * held to the limit exactly then. A trip stored with a longer range can
   * still be renamed.
   */
  private resolveRange(trip: Trip, data: UpdateTripData) {
    const { start_date, end_date } = data;
    if (start_date && end_date && new Date(end_date) < new Date(start_date))
      throw new ValidationError('End date must be after start date');
    const newStart = start_date !== undefined ? start_date : trip.start_date;
    const newEnd = end_date !== undefined ? end_date : trip.end_date;
    const dayCount = data.day_count ? Math.min(Math.max(Number(data.day_count) || 7, 1), MAX_TRIP_DAYS) : undefined;
    const regenerate = newStart !== trip.start_date || newEnd !== trip.end_date || dayCount !== undefined;
    if (regenerate && newStart && newEnd) assertTripSpan(newStart, newEnd);
    return { newStart, newEnd, dayCount, regenerate };
  }

  async update(tripId: string | number, userId: number, body: UpdateTripData, role: string) {
    // A refused range must not leave the budget rebased onto a currency the trip
    // never took, so the dates are checked before the first write.
    const trip = await this.getRaw(tripId);
    if (!trip) throw new NotFoundError('Trip not found');
    this.resolveRange(trip, body);
    // Re-anchor the budget while the outgoing currency is still on the trip row,
    // otherwise the frozen FX rates and the currency-less expenses that inherit the
    // trip's base are left pointing at a currency that no longer exists (#1543).
    await this.budget.rebaseTripCurrency(tripId, body.currency);
    return await this.updateTrip(tripId, userId, body, role);
  }

  // ── Delete ─────────────────────────────────────────────────────────────────

  /**
   * TP30–TP34 (inventory §11c) — TP32/TP33 (`journey_entries`) stay raw
   * inside the transaction (`// Plan 3g`, that table's owning plan); every
   * other statement moved through `TripsRepository`.
   */
  async remove(tripId: string | number, userId: number, userRole: string): Promise<DeleteTripInfo> {
    const trip = await this.tripsRepo.findIdTitleOwner(tripId); // TP30 (the `id` field this method also selects is unused here)
    if (!trip) throw new NotFoundError('Trip not found');

    const isAdminDelete = userRole === 'admin' && trip.user_id !== userId;
    let ownerEmail: string | undefined;
    if (isAdminDelete) {
      ownerEmail = (await this.em.getRepository(Users).getEmail(trip.user_id)) ?? undefined; // TP31
    }

    // Quirk fix on top of the 1:1 move: the three-statement delete runs in a
    // transaction, so a failure mid-flow can't leave journey entries detached
    // from a trip that still exists.
    await this.uow.transactional(async () => {
      // Clean up journey entries synced from this trip before deleting
      // Delete skeleton entries (unfilled synced places)
      this.db.prepare(`
        DELETE FROM journey_entries
        WHERE source_trip_id = ? AND type = 'skeleton'
      `).run(tripId); // TP32 — Plan 3g
      // Detach filled entries (keep user's written content, just remove trip link)
      this.db.prepare(`
        UPDATE journey_entries SET source_trip_id = NULL, source_place_id = NULL, source_assignment_id = NULL
        WHERE source_trip_id = ?
      `).run(tripId); // TP33 — Plan 3g

      await this.tripsRepo.deleteById(Number(tripId)); // TP34 — safe: `trip` above only resolved through the raw-bind seam on a real row
    });

    return { tripId: Number(tripId), title: trip.title, ownerId: trip.user_id, isAdminDelete, ownerEmail };
  }

  // ── Cover image ───────────────────────────────────────────────────────────

  async deleteOldCover(coverImage: string | null | undefined): Promise<void> {
    if (!coverImage) return;
    // cover_image is client-supplied, so treat it as untrusted: covers are flat
    // filenames in the 'covers' category — basename() confines the delete to
    // it, and central key validation rejects anything hostile (swallowed like
    // the old containment guard; an external https URL is likewise a no-op).
    await this.storage.delete('covers', path.basename(coverImage)).catch(() => {
      /* external URL or already gone */
    });
  }

  /** TP35 — `TripsRepository.setCoverImage`. */
  async updateCoverImage(tripId: string | number, coverUrl: string): Promise<void> {
    await this.tripsRepo.setCoverImage(Number(tripId), coverUrl); // safe: only called after `getRaw`/`getOwner` matched the same id through the raw-bind seam
  }

  // ── Copy / duplicate ─────────────────────────────────────────────────────

  /**
   * Duplicates a trip (all days, places, assignments, accommodations, reservations,
   * budget, packing bags/items, day notes) into a new trip owned by `newOwnerId`.
   * Cross-links are remapped to the copied rows (reservation↔budget item,
   * reservation↔accommodation) and split data travels with the copy
   * (budget_item_members/payers incl. paid flags, assignment_participants).
   * Packing items and to-dos are reset to unchecked. Returns the new trip's ID.
   */
  async copy(sourceTripId: string | number, newOwnerId: number, title?: string): Promise<number> {
    const src = await this.tripsRepo.findRaw(sourceTripId); // TP36
    if (!src) throw new NotFoundError('Trip not found');

    const newTitle = title || src.title;

    return await this.uow.transactional(async () => {
      const newTripId = await this.tripsRepo.insertTripCopy({ // TP37
        user_id: newOwnerId,
        title: newTitle,
        description: src.description,
        start_date: src.start_date,
        end_date: src.end_date,
        currency: src.currency,
        cover_image: src.cover_image,
        reminder_days: src.reminder_days ?? 3,
      });

      const oldDays = await this.daysRepo.listByTrip(Number(sourceTripId)); // TP38
      const dayMap = new Map<number, number>();
      for (const d of oldDays) {
        const newDayId = await this.daysRepo.insertDayCopy({ // TP39
          trip_id: newTripId, day_number: d.day_number, date: d.date, notes: d.notes, title: d.title,
        });
        dayMap.set(d.id, newDayId);
      }

      const oldPlaces = await this.placesRepo.listAllForTrip(sourceTripId); // TP40
      const placeMap = new Map<number, number>();
      for (const p of oldPlaces) {
        const newPlaceId = await this.placesRepo.insertPlaceCopy({ // TP41
          trip_id: newTripId, name: p.name, description: p.description, lat: p.lat, lng: p.lng,
          address: p.address, category_id: p.category_id, price: p.price, currency: p.currency,
          reservation_status: p.reservation_status, reservation_notes: p.reservation_notes,
          reservation_datetime: p.reservation_datetime, place_time: p.place_time, end_time: p.end_time,
          duration_minutes: p.duration_minutes, notes: p.notes, image_url: p.image_url,
          google_place_id: p.google_place_id, google_ftid: p.google_ftid, website: p.website, phone: p.phone,
          transport_mode: p.transport_mode, osm_id: p.osm_id, amap_poi_id: p.amap_poi_id,
          route_geometry: p.route_geometry, route_color: p.route_color, stop_type: p.stop_type,
          fill_percent: p.fill_percent,
        });
        placeMap.set(p.id, newPlaceId);
      }

      // The road-trip shaping goes with the copy. A via is not decoration: it is
      // the road the traveller chose over the one the router prefers, and a day
      // track is the line a day was fitted to. Leaving them behind gave back a
      // trip that looks complete and quietly drives somewhere else — visible
      // only once somebody starts editing the copy, with nothing to recover
      // from. Both tables are keyed by day, so they ride on `dayMap`.
      const oldVias = this.db.prepare(`
        SELECT v.* FROM roadtrip_vias v JOIN days d ON d.id = v.day_id WHERE d.trip_id = ?
      `).all(sourceTripId) as any[]; // TP42 — Plan 3d
      const insertVia = this.db.prepare(
        'INSERT INTO roadtrip_vias (day_id, after_order_index, sequence, lat, lng) VALUES (?, ?, ?, ?, ?)',
      );
      for (const v of oldVias) {
        const newDayId = dayMap.get(v.day_id);
        if (newDayId) insertVia.run(newDayId, v.after_order_index, v.sequence, v.lat, v.lng); // TP43 — Plan 3d
      }

      const oldTracks = this.db.prepare(`
        SELECT t.* FROM roadtrip_day_tracks t JOIN days d ON d.id = t.day_id WHERE d.trip_id = ?
      `).all(sourceTripId) as any[]; // TP44 — Plan 3d
      const insertTrack = this.db.prepare(
        'INSERT INTO roadtrip_day_tracks (day_id, place_id, stray_km) VALUES (?, ?, ?)',
      );
      for (const t of oldTracks) {
        const newDayId = dayMap.get(t.day_id);
        // The track is a place of the trip, so it has been copied too — but skip
        // the row rather than point it at the original, the way the assignment
        // and accommodation loops below skip an id they cannot map.
        const newPlaceId = placeMap.get(t.place_id);
        if (newDayId && newPlaceId) insertTrack.run(newDayId, newPlaceId, t.stray_km); // TP45 — Plan 3d
      }

      const oldTags = await this.tagsRepo.listPlaceTagsForTrip(sourceTripId); // TP46
      for (const t of oldTags) {
        const newPlaceId = placeMap.get(t.place_id);
        if (newPlaceId) await this.tagsRepo.insertIgnore(newPlaceId, [t.tag_id]); // TP47
      }

      const oldAssignments = await this.dayAssignmentsRepo.listAllForTrip(sourceTripId); // TP48
      const assignmentMap = new Map<number, number>();
      for (const a of oldAssignments) {
        const newDayId = dayMap.get(a.day_id);
        const newPlaceId = placeMap.get(a.place_id);
        if (newDayId && newPlaceId) {
          const newAssignmentId = await this.dayAssignmentsRepo.insertAssignmentCopy({ // TP49
            day_id: newDayId, place_id: newPlaceId, order_index: a.order_index, notes: a.notes,
            reservation_status: a.reservation_status, reservation_notes: a.reservation_notes,
            reservation_datetime: a.reservation_datetime, assignment_time: a.assignment_time,
            assignment_end_time: a.assignment_end_time, end_day: a.end_day ?? 0,
          });
          assignmentMap.set(a.id, newAssignmentId);
        }
      }

      this.db.prepare('INSERT INTO roadtrip_preferences (trip_id, key, value) SELECT ?, key, value FROM roadtrip_preferences WHERE trip_id = ?').run(newTripId, sourceTripId); // TP50 — Plan 3d
      const oldBoundaries = this.db.prepare('SELECT * FROM roadtrip_day_boundaries WHERE trip_id = ?').all(sourceTripId) as {
        day_number: number; from_assignment_id: number; to_assignment_id: number | null; fraction: number;
      }[]; // TP51 — Plan 3d
      const insertBoundary = this.db.prepare('INSERT INTO roadtrip_day_boundaries (trip_id, day_number, from_assignment_id, to_assignment_id, fraction) VALUES (?, ?, ?, ?, ?)');
      for (const boundary of oldBoundaries) {
        const from = assignmentMap.get(boundary.from_assignment_id);
        const to = boundary.to_assignment_id === null ? null : assignmentMap.get(boundary.to_assignment_id);
        if (from && to !== undefined) insertBoundary.run(newTripId, boundary.day_number, from, to, boundary.fraction); // TP52 — Plan 3d
      }

      const oldParticipants = await this.assignmentParticipantsRepo.listForTrip(sourceTripId); // TP53
      for (const ap of oldParticipants) {
        const newAssignmentId = assignmentMap.get(ap.assignment_id);
        if (newAssignmentId) await this.assignmentParticipantsRepo.insertIgnore(newAssignmentId, [ap.user_id]); // TP54
      }

      const oldAccom = this.db.prepare('SELECT * FROM day_accommodations WHERE trip_id = ?').all(sourceTripId) as any[]; // TP55 — Plan 3d
      const accomMap = new Map<number, number | bigint>();
      const insertAccom = this.db.prepare(`
        INSERT INTO day_accommodations (trip_id, place_id, start_day_id, end_day_id, check_in, check_in_end, check_out, confirmation, notes)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
      `);
      for (const a of oldAccom) {
        const newPlaceId = placeMap.get(a.place_id);
        const newStartDay = dayMap.get(a.start_day_id);
        const newEndDay = dayMap.get(a.end_day_id);
        if (newPlaceId && newStartDay && newEndDay) {
          const r = insertAccom.run(newTripId, newPlaceId, newStartDay, newEndDay, a.check_in, a.check_in_end, a.check_out, a.confirmation, a.notes); // TP56 — Plan 3d
          accomMap.set(a.id, r.lastInsertRowid);
        }
      }

      // A booked night's stop carries the booking that put it there. Left blank, the
      // copy draws the hotel twice: once as the stop and once as the overnight block,
      // which is the duplicate the mirror exists to remove. Stamped afterwards rather
      // than at insert time, because the bookings are copied after the stops.
      for (const a of oldAssignments) {
        if (!a.accommodation_id) continue;
        const newAssignmentId = assignmentMap.get(a.id);
        const newAccomId = accomMap.get(a.accommodation_id);
        if (newAssignmentId && newAccomId) await this.dayAssignmentsRepo.setAccommodation(newAssignmentId, Number(newAccomId)); // TP57
      }

      const oldReservations = this.db.prepare('SELECT * FROM reservations WHERE trip_id = ?').all(sourceTripId) as any[]; // TP58 — Plan 3d
      // The external_* / sync_enabled columns are deliberately not copied: the
      // duplicate must not inherit the source's external sync identity.
      const reservationMap = new Map<number, number | bigint>();
      const insertReservation = this.db.prepare(`
        INSERT INTO reservations (trip_id, day_id, end_day_id, place_id, assignment_id, accommodation_id, title, reservation_time, reservation_end_time,
          location, confirmation_number, notes, url, status, type, metadata, day_plan_position, needs_review, ingest_state)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `);
      for (const r of oldReservations) {
        const rr = insertReservation.run(newTripId,
          r.day_id ? (dayMap.get(r.day_id) ?? null) : null,
          // end_day_id is a day reference too (multi-day transport) — remap it like
          // day_id, otherwise the duplicated trip loses the reservation's end-day link.
          r.end_day_id ? (dayMap.get(r.end_day_id) ?? null) : null,
          r.place_id ? (placeMap.get(r.place_id) ?? null) : null,
          r.assignment_id ? (assignmentMap.get(r.assignment_id) ?? null) : null,
          // accommodation_id is a TEXT column, so it reads back as a string —
          // coerce before the number-keyed map lookup or the link silently nulls.
          r.accommodation_id != null ? (accomMap.get(Number(r.accommodation_id)) ?? null) : null,
          r.title, r.reservation_time, r.reservation_end_time,
          r.location, r.confirmation_number, r.notes, r.url, r.status, r.type,
          // ingest_state travels with the copy: a staged booking must not turn
          // 'live' just because the trip was duplicated, or it lands in the
          // duplicate's public feed.
          r.metadata, r.day_plan_position, r.needs_review ?? 0, r.ingest_state ?? 'live'); // TP59 — Plan 3d
        reservationMap.set(r.id, rr.lastInsertRowid);
      }

      const oldBudget = this.db.prepare('SELECT * FROM budget_items WHERE trip_id = ?').all(sourceTripId) as any[]; // TP60 — Plan 3e
      const budgetMap = new Map<number, number | bigint>();
      const insertBudget = this.db.prepare(`
        INSERT INTO budget_items (trip_id, category, name, total_price, persons, days, note, sort_order,
          reservation_id, currency, exchange_rate, expense_date, ticket_json, paid_by_user_id)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `);
      for (const b of oldBudget) {
        const br = insertBudget.run(newTripId, b.category, b.name, b.total_price, b.persons, b.days, b.note, b.sort_order,
          b.reservation_id ? (reservationMap.get(b.reservation_id) ?? null) : null,
          b.currency, b.exchange_rate ?? 1, b.expense_date, b.ticket_json, b.paid_by_user_id); // TP61 — Plan 3e
        budgetMap.set(b.id, br.lastInsertRowid);
      }

      const oldBudgetMembers = this.db.prepare(`
        SELECT bm.* FROM budget_item_members bm JOIN budget_items b ON b.id = bm.budget_item_id WHERE b.trip_id = ?
      `).all(sourceTripId) as any[]; // TP62 — Plan 3e
      const insertBudgetMember = this.db.prepare('INSERT OR IGNORE INTO budget_item_members (budget_item_id, user_id, paid, amount) VALUES (?, ?, ?, ?)');
      for (const bm of oldBudgetMembers) {
        const newItemId = budgetMap.get(bm.budget_item_id);
        if (newItemId) insertBudgetMember.run(newItemId, bm.user_id, bm.paid ?? 0, bm.amount); // TP63 — Plan 3e
      }

      const oldBudgetPayers = this.db.prepare(`
        SELECT bp.* FROM budget_item_payers bp JOIN budget_items b ON b.id = bp.budget_item_id WHERE b.trip_id = ?
      `).all(sourceTripId) as any[]; // TP64 — Plan 3e
      const insertBudgetPayer = this.db.prepare('INSERT OR IGNORE INTO budget_item_payers (budget_item_id, user_id, amount) VALUES (?, ?, ?)');
      for (const bp of oldBudgetPayers) {
        const newItemId = budgetMap.get(bp.budget_item_id);
        if (newItemId) insertBudgetPayer.run(newItemId, bp.user_id, bp.amount ?? 0); // TP65 — Plan 3e
      }

      const oldBags = this.db.prepare('SELECT * FROM packing_bags WHERE trip_id = ?').all(sourceTripId) as any[]; // TP66 — Plan 3e
      const bagMap = new Map<number, number | bigint>();
      const insertBag = this.db.prepare(`
        INSERT INTO packing_bags (trip_id, name, color, weight_limit_grams, sort_order)
        VALUES (?, ?, ?, ?, ?)
      `);
      for (const bag of oldBags) {
        const r = insertBag.run(newTripId, bag.name, bag.color, bag.weight_limit_grams, bag.sort_order); // TP67 — Plan 3e
        bagMap.set(bag.id, r.lastInsertRowid);
      }

      // Only what the copier may carry over: the Common list plus their own items.
      // This used to take every row and re-insert it without is_private/owner_id,
      // so both fell back to the column defaults and another member's Personal or
      // Shared item reappeared in the copy as a Common item visible to everyone.
      // A restricted item stays restricted, and it stays owned by the copier —
      // recipient rows are not carried over, and the copy has its own roster.
      const oldPacking = this.db.prepare(
        'SELECT * FROM packing_items WHERE trip_id = ? AND (is_private = 0 OR owner_id = ?)'
      ).all(sourceTripId, newOwnerId) as any[]; // TP68 — Plan 3e (security-sensitive: the privacy filter)
      const insertPacking = this.db.prepare(`
        INSERT INTO packing_items (trip_id, name, checked, category, sort_order, weight_grams, bag_id, is_private, owner_id, updated_at)
        VALUES (?, ?, 0, ?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP)
      `);
      for (const p of oldPacking) {
        const isPrivate = p.is_private ? 1 : 0;
        insertPacking.run(newTripId, p.name, p.category, p.sort_order, p.weight_grams,
          p.bag_id ? (bagMap.get(p.bag_id) ?? null) : null,
          isPrivate, isPrivate ? newOwnerId : null); // TP69 — Plan 3e
      }

      const oldNotes = await this.dayNotesRepo.listByTrip(sourceTripId); // TP70
      for (const n of oldNotes) {
        const newDayId = dayMap.get(n.day_id);
        if (newDayId) {
          await this.dayNotesRepo.insertNoteCopy({ // TP71
            day_id: newDayId, trip_id: newTripId, text: n.text, time: n.time, icon: n.icon, sort_order: n.sort_order,
          });
        }
      }

      const oldTodos = this.db.prepare('SELECT * FROM todo_items WHERE trip_id = ?').all(sourceTripId) as any[]; // TP72 — Plan 3e
      const insertTodo = this.db.prepare(`
        INSERT INTO todo_items (trip_id, name, checked, category, sort_order, due_date, description, assigned_user_id, priority)
        VALUES (?, ?, 0, ?, ?, ?, ?, NULL, ?)
      `);
      for (const t of oldTodos) {
        insertTodo.run(newTripId, t.name, t.category, t.sort_order, t.due_date, t.description, t.priority); // TP73 — Plan 3e
      }

      const oldCategoryOrder = this.db.prepare('SELECT category, sort_order FROM budget_category_order WHERE trip_id = ?').all(sourceTripId) as any[]; // TP74 — Plan 3e
      const insertCategoryOrder = this.db.prepare(`
        INSERT INTO budget_category_order (trip_id, category, sort_order)
        VALUES (?, ?, ?)
      `);
      for (const o of oldCategoryOrder) {
        insertCategoryOrder.run(newTripId, o.category, o.sort_order); // TP75 — Plan 3e
      }

      return newTripId;
    });
  }

  /** TP76 — Re-read a freshly copied trip in list shape via `TripsRepository.findForViewer` (the same private `tripSelectQuery` builder `get()`/`list()` use; the creator/copier always owns the new trip, so the access predicate is trivially satisfied — `create`'s TP19 precedent). The `TRIP_SELECT` string constant this used to re-render by hand is deleted — `tripSelectQuery` is the one source for the projection now (Task 7 review, absorbed here). */
  async getCopiedTrip(newTripId: number, userId: number) {
    return await this.tripsRepo.findForViewer(newTripId, userId);
  }

}

// Defined in common/ so calendar and maps can raise them without importing the
// trip aggregate; re-exported here because nine files already import them from
// this module.
export { NotFoundError, ValidationError };
