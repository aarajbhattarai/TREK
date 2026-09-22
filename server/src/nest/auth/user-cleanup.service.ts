import fs from 'node:fs';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@mikro-orm/nestjs';
import { DatabaseService } from '../database/database.service';
// Injected since BudgetModule dropped its AuthModule import (BudgetMcp's demo
// guard reads RuntimeEnvService + the users table now), which un-closed the
// AuthModule -> BudgetModule cycle that used to force budget.bridge here.
import { BudgetService } from '../budget/budget.service';
import { pluginsDataRoot } from '../plugins/paths';
import { UnitOfWork } from '../database/unit-of-work';
import { Users } from '../../db/entities/Users.entity';
import type { UsersRepository } from '../../db/repositories/Users.repository';

/**
 * Account erasure — everything that has to happen around `DELETE FROM users`
 * and is not covered by a foreign key.
 *
 * Lives in the auth domain because it owns the `users` table; both deletion
 * paths (a user deleting their own account, an admin deleting someone else's)
 * go through here, and `TripsService.deleteGuest` reuses the plugin half for a
 * guest id. The plugin erasure runs in the CORE deletion path, not via the
 * plugin runtime, so it works even when TREK_PLUGINS_ENABLED=false or before
 * the runtime has booted — otherwise a deletion in those windows would leave
 * the user's plugin data behind forever.
 */
@Injectable()
export class UserCleanupService {
  constructor(
    private readonly db: DatabaseService,
    private readonly budget: BudgetService,
    private readonly uow: UnitOfWork,
    @InjectRepository(Users) private readonly usersRepo: UsersRepository,
  ) {}

  /**
   * Erase a user's PLUGIN-held data on account deletion. Two parts:
   *  1. Host-side per-user plugin tables (encrypted config values, OAuth access/refresh
   *     tokens, in-flight OAuth state) — deleted directly; these live in trek.db, not in
   *     a plugin's own db, so nothing else ever removes them.
   *  2. A durable erasure row per plugin that holds `hook:user-data`, so its OWN db is
   *     purged of the user (drained to the plugin when it is next active).
   *
   * Best-effort per table so a slimmed-down schema (some tests) can't fail the user
   * deletion itself.
   *
   * UC1 (`plugin_user_config`/`plugin_oauth_tokens`/`plugin_oauth_state`),
   * UC2 (`plugins`) and UC3 (`plugin_user_erasure_queue`) stay raw
   * `DatabaseService` calls — every one of these tables is owned by
   * `nest/plugins`, which lands in Plan 3j, not this plan (Plan 3b Task 5
   * ruling; inventory §6 "the single largest 'stays raw' carve-out in Plan
   * 3b"). Only `DELETE FROM users` below (UC11) is this domain's own and
   * converts.
   */
  async erasePluginUserData(userId: number): Promise<void> {
    for (const table of ['plugin_user_config', 'plugin_oauth_tokens', 'plugin_oauth_state']) {
      try { this.db.run(`DELETE FROM ${table} WHERE user_id = ?`, userId); } catch { /* table absent (slim schema) */ } // UC1 — Plan 3j
    }
    try {
      const rows = this.db.all<{ id: string; permissions: string | null }>('SELECT id, permissions FROM plugins'); // UC2 — Plan 3j
      const installed = new Set(rows.map((r) => r.id));
      const insert = this.db.prepare('INSERT OR IGNORE INTO plugin_user_erasure_queue (plugin_id, user_id) VALUES (?, ?)'); // UC3 — Plan 3j
      for (const r of rows) {
        let perms: unknown;
        try { perms = JSON.parse(r.permissions ?? '[]'); } catch { perms = []; }
        if (Array.isArray(perms) && perms.includes('hook:user-data')) insert.run(r.id, userId);
      }
      // Also enqueue for plugins UNINSTALLED with their data retained (deleteData=false):
      // their data dir still holds the user's rows and a same-id reinstall would re-adopt
      // them. No permissions record survives uninstall, so we can't check hook:user-data —
      // enqueue for every orphan data dir; the row sits inert (no FK) and drains only if
      // that id is reinstalled + active (erasure delivery is a duty, not grant-gated).
      try {
        for (const entry of fs.readdirSync(pluginsDataRoot(), { withFileTypes: true })) {
          if (entry.isDirectory() && !installed.has(entry.name)) insert.run(entry.name, userId);
        }
      } catch { /* no plugin data root yet */ }
    } catch { /* plugins / queue table absent (slim schema) */ }
  }

  /**
   * UC4–UC10: every table here is owned by a domain outside this plan —
   * `trip_members` (`nest/trip-membership`, Plan 3c), `budget_items`
   * (`nest/budget`, Plan 3e), `share_tokens`/`journey_share_tokens`/
   * `journeys`/`journey_entries`/`journey_contributors` (`nest/share`/
   * `nest/journey-share`/`nest/journey-domain`, Plan 3g) — so they stay raw
   * `DatabaseService` calls (Plan 3b Task 5 ruling; inventory §6). Verbatim
   * otherwise: same statement order, same bounded 3-table
   * journey/journey_entries/journey_contributors sequence,
   * `this.budget.removeUserFromBudgetItems` unchanged.
   */
  private async cleanupUserReferences(userId: number): Promise<void> {
    this.db.run('UPDATE trip_members SET invited_by = NULL WHERE invited_by = ?', userId); // UC4 — Plan 3c
    this.db.run('UPDATE budget_items SET paid_by_user_id = NULL WHERE paid_by_user_id = ?', userId); // UC5 — Plan 3e
    await this.budget.removeUserFromBudgetItems(userId);
    this.db.run('DELETE FROM share_tokens WHERE created_by = ?', userId); // UC6 — Plan 3g
    this.db.run('DELETE FROM journey_share_tokens WHERE created_by = ?', userId); // UC7 — Plan 3g
    // Owned journeys cascade-delete their entries/contributors/share_tokens/photos via journey_id FKs
    this.db.run('DELETE FROM journeys WHERE user_id = ?', userId); // UC8 — Plan 3g
    // Entries authored on other users' journeys (not covered by the cascade above)
    this.db.run('DELETE FROM journey_entries WHERE author_id = ?', userId); // UC9 — Plan 3g
    this.db.run('DELETE FROM journey_contributors WHERE user_id = ?', userId); // UC10 — Plan 3g
  }

  /**
   * UC11, the transaction's final statement — `UsersRepository.deleteById`
   * (Plan 3b Task 5; the one pre-authorised `UsersRepository` addition, per
   * `task-1-review.md`'s "contract gaps"). Everything above it (UC1–UC10)
   * stays raw, per each method's own docstring.
   */
  async deleteUserCompletely(userId: number): Promise<void> {
    await this.uow.transactional(async () => {
      await this.cleanupUserReferences(userId);
      await this.erasePluginUserData(userId);
      await this.usersRepo.deleteById(userId);
    });
  }
}
