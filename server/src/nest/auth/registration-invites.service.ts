import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@mikro-orm/nestjs';
import crypto from 'crypto';
import { DatabaseService } from '../database/database.service';
import { InviteTokens } from '../../db/entities/InviteTokens.entity';
import type { InviteTokensRepository } from '../../db/repositories/InviteTokens.repository';
import { toRowId } from '../common/row-id';

/**
 * Registration invites: the tokens an admin hands out so someone can create an
 * account on a closed instance, optionally dropping them straight into a trip.
 *
 * This lives in auth/ and not in trip-invite/, which is the trap the name sets.
 * invite_tokens and trip_invite_tokens are different tables for different
 * things — the first gates signup, the second adds an existing user to a trip.
 * The consumer of this one is the registration path in AuthService, so the
 * table belongs to the auth domain.
 *
 * The four methods moved verbatim out of AdminService, which held them only
 * because the management routes are under /api/admin. Those routes keep their
 * paths and their guards; AdminController now injects this instead of carrying
 * another domain's SQL.
 *
 * Plan 3b Task 3: `invite_tokens` reads/writes go through
 * `InviteTokensRepository` (RI1, RI4–RI7). RI2/RI3 (`trips`) stay on
 * `DatabaseService` — `trips` is `nest/trips`' table, not this domain's, and
 * Plan 3c is the one that builds a `TripsRepository`; building a shim one
 * here would be exactly the "manual synchronization" this migration exists
 * to remove (same carve-out shape as Plan 3a's `addons.service.ts`
 * `listTripsForInvite`/`createInvite`'s trip-binding validation, documented
 * at the inventory's §6).
 */
@Injectable()
export class RegistrationInvitesService {
  constructor(
    private readonly db: DatabaseService,
    @InjectRepository(InviteTokens) private readonly inviteTokens: InviteTokensRepository,
  ) {}

  /** RI1 — `InviteTokensRepository.listWithCreatorAndTrip()`'s joined projection. */
  async listInvites() {
    return this.inviteTokens.listWithCreatorAndTrip();
  }

  /**
   * Trips an admin can bind an invite to — id + title only, for the picker
   * (#1402). RI2 — stays raw on `DatabaseService` (see the class docstring).
   */
  async listTripsForInvite() {
    return this.db.all('SELECT id, title FROM trips ORDER BY title COLLATE NOCASE ASC');
  }

  async createInvite(
    createdBy: number,
    data: { max_uses?: string | number; expires_in_days?: string | number; trip_id?: string | number | null },
  ) {
    const rawUses = Number.parseInt(String(data.max_uses));
    const uses = rawUses === 0 ? 0 : Math.min(Math.max(rawUses || 1, 1), 5);
    const token = crypto.randomBytes(16).toString('hex');
    const expiresAt = data.expires_in_days
      ? new Date(Date.now() + Number.parseInt(String(data.expires_in_days)) * 86400000).toISOString()
      : null;

    // Optional trip binding: only persist a trip that actually exists, so a stale
    // or forged id can never bind (and never auto-adds anyone on registration).
    // RI3 — stays raw on `DatabaseService` (see the class docstring).
    let tripId: number | null = null;
    if (data.trip_id != null && String(data.trip_id).trim() !== '') {
      const parsed = Number.parseInt(String(data.trip_id));
      if (!Number.isInteger(parsed) || !this.db.get('SELECT id FROM trips WHERE id = ?', parsed)) {
        // Used to bind null silently, handing back a plain registration invite
        // the admin never asked for.
        return { error: 'Trip not found', status: 404 };
      }
      tripId = parsed;
    }

    // RI4: the write. RI5: the same joined re-select RI1 projects, filtered
    // to the new row — `insertInvite`'s column set already matches this
    // INSERT exactly (Task 0).
    const created = await this.inviteTokens.insertInvite({ token, max_uses: uses, expires_at: expiresAt, created_by: createdBy, trip_id: tripId });
    const invite = await this.inviteTokens.findWithCreatorAndTrip(created.id);

    return { invite, inviteId: created.id, uses, expiresInDays: data.expires_in_days ?? null, tripId };
  }

  async deleteInvite(id: string) {
    // A non-numeric id can never match an `invite_tokens.id` row — resolved
    // here rather than handed to the repository as `NaN` (SQLite's driver
    // has no representation for it as a bind parameter; the legacy raw
    // statement tolerated a non-numeric string bind and simply matched no
    // row, so the 404 below reproduces that same observable outcome without
    // routing an invalid value into the query layer).
    //
    // `toRowId`, not a bare `Number.isInteger(Number(id))` guard: the plain
    // guard accepted prefixed numeric literals JS understands and SQLite's
    // INTEGER affinity does not (`'0x10'` → `16`, `'0b100'` → `4`), which is
    // a genuine parity break, not just stricter validation (Plan 3b Task 3
    // review, F2) — `toRowId` requires the digits-only shape the legacy
    // raw-string bind actually matched.
    const numericId = toRowId(id);
    // RI6 — the 404 check.
    if (numericId === null || (await this.inviteTokens.findIdById(numericId)) === null) {
      return { error: 'Invite not found', status: 404 };
    }
    // RI7.
    await this.inviteTokens.deleteById(numericId);
    return {};
  }
}
