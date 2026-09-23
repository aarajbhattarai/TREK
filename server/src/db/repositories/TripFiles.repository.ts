import { currentTimestamp } from '../dialect/sql-functions';
import type { TripFiles } from '../entities/TripFiles.entity';
import { type AssertRowKeys } from './_shared/rows';
import { TrekRepository } from './_shared/trek-repository';

/**
 * A bare `trip_files` row — every scalar column of the entity, incl. the SIX
 * `persist(false)` relation mirrors (`trip_id`, `place_id`, `reservation_id`,
 * `note_id`, `uploaded_by`, `message_id` — the trap the class docstring
 * below names). Kysely's `selectAll()` reads real DB columns directly, so it
 * carries every one of these without the bare-QB-`.select([...])` drop a
 * `columnRef` would otherwise be needed to avoid.
 */
export interface TripFileRow {
  id: number;
  trip_id: number;
  place_id: number | null;
  reservation_id: number | null;
  filename: string;
  original_name: string;
  file_size: number | null;
  mime_type: string | null;
  description: string | null;
  created_at: string | null;
  note_id: number | null;
  uploaded_by: number | null;
  starred: number | null;
  deleted_at: string | null;
  message_id: number | null;
}

const _tripFileRowKeys: AssertRowKeys<TripFileRow, TripFiles> = true;

/** FILE_SELECT's joined projection (FL7/FL11/FL15/FL17/FL20). */
export interface TripFileJoinRow extends TripFileRow {
  reservation_title: string | null;
  uploaded_by_name: string | null;
  uploaded_by_avatar: string | null;
}

interface TripFilesKyselyDB {
  trip_files: TripFileRow;
  reservations: { id: number; title: string };
  users: { id: number; username: string; avatar: string | null };
}

/**
 * `trip_files` — trip attachments (uploads, expense receipts). Every read
 * below goes through Kysely rather than the QueryBuilder: this entity has
 * SIX `persist(false)` mirror columns (see {@link TripFileRow}'s docstring),
 * and a bare QB `.select([...])` silently drops any of them it names without
 * `columnRef` (the program-wide trap `RoadtripDayBoundariesRepository`
 * documents) — Kysely's `selectAll()`/typed column list reads the real DB
 * columns directly and has no such gap, so it is the simpler, uniformly-safe
 * choice for a row this wide rather than six `columnRef` calls repeated
 * across five read methods.
 */
export class TripFilesRepository extends TrekRepository<TripFiles> {
  /** FILE_SELECT (`:22-27`) — `trip_files f LEFT JOIN reservations r ON f.reservation_id = r.id LEFT JOIN users u ON f.uploaded_by = u.id`. */
  private joinedQuery() {
    return this.kysely<TripFilesKyselyDB>()
      .selectFrom('trip_files as f')
      .leftJoin('reservations as r', 'r.id', 'f.reservation_id')
      .leftJoin('users as u', 'u.id', 'f.uploaded_by')
      .selectAll('f')
      .select(['r.title as reservation_title', 'u.username as uploaded_by_name', 'u.avatar as uploaded_by_avatar']);
  }

  /**
   * FL5 (`FilesService.getFileById`) — `SELECT * FROM trip_files WHERE id = ?
   * AND trip_id = ?`, the trip-scoping guard reused by budget/collab reads
   * (BG29/44, CB21) and by `permanentDeleteFile`/`softDeleteFile`/`remove`'s
   * pre-image reads.
   */
  async findInTrip(id: number, trip_id: number): Promise<TripFileRow | undefined> {
    return await this.kysely<TripFilesKyselyDB>()
      .selectFrom('trip_files')
      .selectAll()
      .where('id', '=', id)
      .where('trip_id', '=', trip_id)
      .executeTakeFirst();
  }

  /** FL6 (`FilesService.getDeletedFile`) — same as {@link findInTrip} plus `AND deleted_at IS NOT NULL`, the trash-scoped variant. */
  async findDeletedInTrip(id: number, trip_id: number): Promise<TripFileRow | undefined> {
    return await this.kysely<TripFilesKyselyDB>()
      .selectFrom('trip_files')
      .selectAll()
      .where('id', '=', id)
      .where('trip_id', '=', trip_id)
      .where('deleted_at', 'is not', null)
      .executeTakeFirst();
  }

  /**
   * FL7 (`FilesService.listFiles`) — `` FILE_SELECT WHERE f.trip_id = ? AND
   * f.message_id IS NULL AND f.deleted_at IS (NOT) NULL ORDER BY f.starred
   * DESC, f.created_at DESC ``. `showTrash` toggles the `deleted_at` arm
   * (D4: two WHERE shapes, one method, matching the legacy ternary).
   */
  async listForTrip(trip_id: number, showTrash: boolean): Promise<TripFileJoinRow[]> {
    let q = this.joinedQuery().where('f.trip_id', '=', trip_id).where('f.message_id', 'is', null);
    q = showTrash ? q.where('f.deleted_at', 'is not', null) : q.where('f.deleted_at', 'is', null);
    return await q.orderBy('f.starred', 'desc').orderBy('f.created_at', 'desc').execute();
  }

  /**
   * FL11/FL15/FL17/FL20 — `` FILE_SELECT WHERE f.id = ? `` , the SAME
   * re-select text run after `createFile`/`updateFile`/`toggleStarred`/
   * `restoreFile`. No `trip_id` filter (matching the legacy statement — the
   * caller already knows `id` is in-scope by construction, having just
   * written it).
   */
  async findByIdWithJoins(id: number): Promise<TripFileJoinRow | undefined> {
    return await this.joinedQuery().where('f.id', '=', id).executeTakeFirst();
  }

  /** FL22 (`FilesService.emptyTrash`'s read half) — `SELECT * FROM trip_files WHERE trip_id = ? AND deleted_at IS NOT NULL`. */
  async listTrashed(trip_id: number): Promise<TripFileRow[]> {
    return await this.kysely<TripFilesKyselyDB>()
      .selectFrom('trip_files')
      .selectAll()
      .where('trip_id', '=', trip_id)
      .where('deleted_at', 'is not', null)
      .execute();
  }

  /**
   * FL9 (`FilesService.createFile`) — `INSERT INTO trip_files (trip_id,
   * place_id, reservation_id, filename, original_name, file_size, mime_type,
   * description, uploaded_by) VALUES (?×9)`. Relation properties
   * (`trip`/`place`/`reservation`/`uploadedByRef`), not their `persist(false)`
   * `_id` mirrors — MikroORM accepts a raw scalar id for a `Ref`-typed
   * property (`InviteTokensRepository.insertInvite`'s precedent).
   * `uploadedByRef` is the entity's own name for the `uploaded_by`
   * `joinColumn` relation (`TripFiles.entity.ts`). `trip_id: number |
   * string` — the caller's own trip id, already vouched for by the
   * guard/access check upstream, written (never compared) here; SQLite's
   * own INTEGER-affinity conversion on INSERT normalises either shape the
   * same way `DayAccommodationsRepository.insertStay`'s `trip_id` does, so
   * no `toRowId` gate is needed on a write-only value (rule 21 governs the
   * read-then-write seam, not every scalar a write ever carries).
   */
  async insertFile(row: {
    trip_id: number | string;
    place_id: number | null;
    reservation_id: number | null;
    filename: string;
    original_name: string;
    file_size: number;
    mime_type: string;
    description: string | null;
    uploaded_by: number;
  }): Promise<number> {
    return await this.insert({
      trip: row.trip_id,
      place: row.place_id,
      reservation: row.reservation_id,
      filename: row.filename,
      original_name: row.original_name,
      file_size: row.file_size,
      mime_type: row.mime_type,
      description: row.description,
      uploadedByRef: row.uploaded_by,
    });
  }

  /**
   * FL12 (`FilesService.updateFile`) — `UPDATE trip_files SET description =
   * ?, place_id = ?, reservation_id = ? WHERE id = ?`. The caller resolves
   * the `!== undefined ? (x || null) : current.x` presence sentinel BEFORE
   * calling this (matching the legacy inline ternaries) — this method just
   * writes the three final values verbatim.
   */
  async updateFile(id: number, write: { description: string | null; place_id: number | null; reservation_id: number | null }): Promise<void> {
    await this.nativeUpdate({ id }, { description: write.description, place: write.place_id, reservation: write.reservation_id });
  }

  /** FL16 (`FilesService.toggleStarred`) — `UPDATE trip_files SET starred = ? WHERE id = ?`. */
  async setStarred(id: number, starred: number): Promise<void> {
    await this.nativeUpdate({ id }, { starred });
  }

  /** FL18 (`FilesService.softDeleteFile`) — `UPDATE trip_files SET deleted_at = CURRENT_TIMESTAMP WHERE id = ?`. */
  async softDelete(id: number): Promise<void> {
    const platform = this.getEntityManager().getPlatform();
    await this.nativeUpdate({ id }, { deleted_at: currentTimestamp(platform) });
  }

  /** FL19 (`FilesService.restoreFile`) — `UPDATE trip_files SET deleted_at = NULL WHERE id = ?`. */
  async restore(id: number): Promise<void> {
    await this.nativeUpdate({ id }, { deleted_at: null });
  }

  /** FL21 (`FilesService.permanentDeleteFile`) — `DELETE FROM trip_files WHERE id = ?`, run after a successful (or idempotent-missing) storage delete. */
  async deleteById(id: number): Promise<void> {
    await this.nativeDelete({ id });
  }

  /**
   * FL23 (`FilesService.emptyTrash`'s bulk delete) — `DELETE FROM trip_files
   * WHERE id IN (dynamic)`, only for the ids whose storage delete already
   * succeeded. `$in` for the dynamic list (rule 23) — no interpolated SQL.
   */
  async deleteMany(ids: number[]): Promise<void> {
    if (ids.length === 0) return;
    await this.nativeDelete({ id: { $in: ids } });
  }
}
