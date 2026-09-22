import { Users } from '../entities/Users.entity';
import { toRow, type AssertRowKeys } from './_shared/rows';
import { columnIncrementedBy, currentTimestamp, lower, lowerParam } from '../dialect/sql-functions';
import { TrekRepository } from './_shared/trek-repository';

/**
 * The three third-party keys that belong to the instance rather than to a
 * person (see `nest/settings/instance-api-keys.ts`). A closed union, never a
 * dynamic column string — `getApiKeyColumn` dispatches through MikroORM's
 * typed `fields` option, which only accepts a real property of `Users`, so a
 * name outside this union fails `tsc` rather than reaching a query.
 *
 * This repository is the union's source of truth; `instance-api-keys.ts`
 * imports it rather than keeping its own copy (Task 5).
 */
export type InstanceApiKeyName = 'maps_api_key' | 'unsplash_api_key' | 'amap_api_key';

/**
 * A full `users` row (`SELECT * FROM users WHERE ...`), as the API emits it.
 * Every scalar column of the entity, hand-nullability-annotated the way
 * `AppSettingsRepository`/`CategoriesRepository`'s row interfaces are —
 * `AssertRowKeys` below fails `tsc` the moment this list and the entity's
 * scalar columns drift.
 */
export interface UserRow {
  id: number;
  username: string;
  email: string;
  password_hash: string;
  role: string;
  maps_api_key: string | null;
  unsplash_api_key: string | null;
  amap_api_key: string | null;
  openweather_api_key: string | null;
  avatar: string | null;
  oidc_sub: string | null;
  oidc_issuer: string | null;
  last_login: string | null;
  mfa_enabled: number | null;
  mfa_secret: string | null;
  mfa_backup_codes: string | null;
  immich_url: string | null;
  immich_access_token: string | null;
  synology_url: string | null;
  synology_username: string | null;
  synology_password: string | null;
  synology_sid: string | null;
  must_change_password: number | null;
  password_version: number;
  feed_token: string | null;
  is_guest: number;
  created_at: string | null;
  updated_at: string | null;
  immich_api_key: string | null;
  synology_skip_ssl: number;
  synology_did: string | null;
  first_seen_version: string;
  login_count: number;
  immich_auto_upload: number;
  airtrail_url: string | null;
  airtrail_api_key: string | null;
  airtrail_allow_insecure_tls: number | null;
  airtrail_write_enabled: number | null;
  display_name: string | null;
}

const _userRowKeys: AssertRowKeys<UserRow, Users> = true;

/** `AuthService.registerUser` (AU10) / `OidcService.findOrCreateUser` (O14) — the two column sets `insertUser` covers as one method (Task 1 brief's Required set: "one method, nullable oidc/avatar fields"). */
export interface NewUserRow {
  username: string;
  email: string;
  password_hash: string;
  role: string;
  first_seen_version: string;
  oidc_sub?: string | null;
  oidc_issuer?: string | null;
  avatar?: string | null;
}

/** `UserProfileService.updateApiKeys` (UP3) — the four encrypted key columns, already resolved by the service. */
export interface ApiKeysPatch {
  maps_api_key: string | null;
  openweather_api_key: string | null;
  unsplash_api_key: string | null;
  amap_api_key: string | null;
}

/** `UserProfileService.updateSettings`'s bounded dynamic SET clause (UP7) — a closed key union, never a built SQL string. */
export interface UserProfilePatch {
  maps_api_key?: string | null;
  openweather_api_key?: string | null;
  unsplash_api_key?: string | null;
  amap_api_key?: string | null;
  username?: string;
  email?: string;
}

/** `UserProfileService.getApiKeyColumns`/`currentKeys` (UP1). */
export interface UserApiKeyColumns {
  role: string;
  maps_api_key: string | null;
  openweather_api_key: string | null;
  unsplash_api_key: string | null;
  amap_api_key: string | null;
}

/** `UserProfileService.updateApiKeys`/`updateSettings`'s re-select (UP4/UP8). */
export interface UserProfileWithKeys {
  id: number;
  username: string;
  email: string;
  role: string;
  maps_api_key: string | null;
  openweather_api_key: string | null;
  unsplash_api_key: string | null;
  amap_api_key: string | null;
  avatar: string | null;
  mfa_enabled: number | null;
}

/** `UserProfileService.saveAvatar`'s re-select (UP11). */
export interface UserProfileBasic {
  id: number;
  username: string;
  email: string;
  role: string;
  avatar: string | null;
}

/** `UserProfileService.listUsers` (UP14). */
export interface UserDirectoryRow {
  id: number;
  username: string;
  avatar: string | null;
}

/** `AuthService.getCurrentUser` (AU14). */
export interface CurrentUserRow {
  id: number;
  username: string;
  email: string;
  role: string;
  avatar: string | null;
  oidc_issuer: string | null;
  created_at: string | null;
  mfa_enabled: number | null;
  must_change_password: number | null;
}

/** `jwt-verify.ts#verifyJwtAndLoadUser` (JV1). */
export interface UserWithPasswordVersion {
  id: number;
  username: string;
  email: string;
  role: string;
  password_version: number;
}

/** `AuthService.requestPasswordReset` (AU36). */
export interface PasswordResetLookup {
  id: number;
  email: string;
  password_hash: string;
  oidc_sub: string | null;
}

/** `AuthService.resetPassword`'s reset-target read (AU40). */
export interface ResetTargetRow {
  id: number;
  email: string;
  mfa_enabled: number | null;
  mfa_secret: string | null;
  mfa_backup_codes: string | null;
  password_version: number;
}

export class UsersRepository extends TrekRepository<Users> {
  /**
   * **Ruling (Plan 3b Task 1 fix round, supersedes Plan 3a's I1 "`refresh:
   * true` on every PK-only `findOne`"):** every row-out read in this
   * repository (`findOne`/`find`) passes `disableIdentityMap: true` instead.
   * MikroORM forks the EM with `keepTransactionContext: true`, loads inside
   * that fork (so the read still sees the transaction's own uncommitted
   * writes), and clears the fork afterwards
   * (`node_modules/@mikro-orm/core/EntityManager.js:807-814`) — the entity
   * is never added to the *request's* identity map, so it can never become a
   * stale pending change-set entry that a later `flush()` (including the
   * implicit one at `UnitOfWork.transactional` commit) writes back over an
   * intervening `nativeUpdate`. `refresh: true` is dropped as redundant: it
   * only mattered for an entity that stayed in the map, and none does now.
   * See https://mikro-orm.io/docs/entity-manager#disableidentitymap and
   * `.superpowers/sdd/2026-09-22-orm-phase3b/task-1-review.md` (B1).
   *
   * **Plan 3b interlude B update:** this option is now applied by the base
   * class, not per call — `TrekRepository`'s `find`/`findOne` overrides
   * (`_shared/trek-repository.ts`) merge `{ disableIdentityMap: true }` into
   * every call's options unless the caller passes `disableIdentityMap:
   * false` explicitly, so no method below names it any more. The base class
   * also closes the gap the Task 1 re-review found in this mechanism
   * (`task-1-rereview.md` F-R1): `disableIdentityMap: true` resolves with
   * MikroORM's non-validating `getContext(false)`, so a converted read no
   * longer failed closed outside a request context — every override
   * validates first (`this.getEntityManager().getContext()`, the
   * VALIDATING form) and only then delegates, restoring the ratchet for
   * reads AND for the write paths that never validated at all (F7 INFO).
   */
  async getEmail(userId: number): Promise<string | null> {
    const row = await this.findOne({ id: userId }, { fields: ['email'] });
    return row?.email ?? null;
  }

  /**
   * One of the three instance-API-key columns, selected by `name`:
   * `SELECT <name> FROM users WHERE id = ?`. `name` is the typed union above,
   * not an interpolated column — MikroORM's `fields` option only accepts a
   * real property of `Users`, so this can never select an arbitrary column.
   *
   * `disableIdentityMap: true` per the class-level ruling above.
   */
  async getApiKeyColumn(userId: number, name: InstanceApiKeyName): Promise<string | null> {
    const row = await this.findOne({ id: userId }, { fields: [name] });
    return row ? (row[name] ?? null) : null;
  }

  // ---------------------------------------------------------------------
  // JV1 — jwt-verify.ts
  // ---------------------------------------------------------------------

  /**
   * `SELECT id, username, email, role, password_version FROM users WHERE id = ?`
   *
   * The canonical session-invalidation read: `verifyJwtAndLoadUser` compares
   * the returned `password_version` against the JWT's `pv` claim on every
   * request. `disableIdentityMap: true` per the class-level ruling above.
   */
  async findByIdWithPasswordVersion(id: number): Promise<UserWithPasswordVersion | null> {
    const row = await this.findOne(
      { id },
      { fields: ['id', 'username', 'email', 'role', 'password_version'] },
    );
    return row ? { id: row.id, username: row.username, email: row.email, role: row.role, password_version: row.password_version } : null;
  }

  // ---------------------------------------------------------------------
  // AU2 / TK7 / O2 — password_version (session-invalidation gate)
  // ---------------------------------------------------------------------

  /** `SELECT password_version FROM users WHERE id = ?`. `?? 0` stays in the caller (AU2/TK7/O2 each fall back differently in spirit, identically in value). */
  async getPasswordVersion(id: number): Promise<number | null> {
    const row = await this.findOne({ id }, { fields: ['password_version'] });
    return row?.password_version ?? null;
  }

  // ---------------------------------------------------------------------
  // AU4 / AU7 / O10 — first-user / admin-role decisions
  // ---------------------------------------------------------------------

  /** `SELECT COUNT(*) as count FROM users WHERE COALESCE(is_guest, 0) = 0`. `is_guest` is `INTEGER NOT NULL DEFAULT 0` (verified in the baseline + guest-members migrations) — no row can store NULL there, so `{ is_guest: 0 }` is exact parity for the `COALESCE(is_guest, 0) = 0` guard, not an approximation. */
  async countNonGuest(): Promise<number> {
    return this.count({ is_guest: 0 });
  }

  // ---------------------------------------------------------------------
  // AU6 — setup_complete
  // ---------------------------------------------------------------------

  /** `SELECT id FROM users WHERE role = 'admin' AND must_change_password = 1 LIMIT 1`. */
  async findAdminNeedingPasswordChange(): Promise<number | null> {
    const row = await this.findOne({ role: 'admin', must_change_password: 1 }, { fields: ['id'] });
    return row?.id ?? null;
  }

  // ---------------------------------------------------------------------
  // AU9 — registration collision check
  // ---------------------------------------------------------------------

  /**
   * `SELECT id FROM users WHERE (LOWER(email) = LOWER(?) OR LOWER(username) = LOWER(?))
   *  AND COALESCE(is_guest, 0) = 0`
   *
   * Both operands of each comparison are folded by SQLite's own `LOWER()`
   * (`lowerParam` binds the RAW value) — never a JS-lowered bind. SQLite's
   * `LOWER()` is ASCII-only; `String.prototype.toLowerCase()` is
   * full-Unicode, and mixing them locks out any non-ASCII cased identifier
   * (program rule 18; Plan 3b Task 7 review, H1).
   */
  async findIdByEmailOrUsernameCI(email: string, username: string): Promise<number | null> {
    const platform = this.getEntityManager().getPlatform();
    const row = await this.findOne(
      {
        $or: [
          { [lower(platform, 'email')]: lowerParam(platform, email) },
          { [lower(platform, 'username')]: lowerParam(platform, username) },
        ],
        is_guest: 0,
      },
      { fields: ['id'] },
    );
    return row?.id ?? null;
  }

  // ---------------------------------------------------------------------
  // AU10 / O14 — account creation
  // ---------------------------------------------------------------------

  /**
   * `INSERT INTO users (username, email, password_hash, role, first_seen_version, login_count)
   *  VALUES (?, ?, ?, ?, ?, 0)` (AU10, local registration) and
   * `INSERT INTO users (username, email, password_hash, role, oidc_sub, oidc_issuer, avatar, first_seen_version, login_count)
   *  VALUES (?, ?, ?, ?, ?, ?, ?, ?, 0)` (O14, SSO registration) — ONE method
   * (Task 1 brief's Required set), the `oidc_sub`/`oidc_issuer`/`avatar`
   * columns nullable so AU10's caller simply omits them. `login_count` is
   * always the literal `0` on insert, never a parameter, matching both
   * statements exactly.
   *
   * `this.insert` (F2, Plan 3b Task 1 fix round; routed through the
   * repository rather than `this.getEntityManager().insert(Users, …)` so it
   * goes through the base class's validation — see
   * `_shared/trek-repository.ts`), never `create()` + `persist().flush()`:
   * `flush()` commits the *whole* unit of work of the request's
   * `EntityManager`, not just this row — the review caught it emitting a
   * full-row `UPDATE users … WHERE id = ?` against an unrelated,
   * previously-read user in the same EM. `insert` fires a single native
   * INSERT with no side effects on the context/identity map (the same rule
   * as `AuditLogRepository.insertEntry`). Followed by a read-back
   * (`findById`, `disableIdentityMap: true` by the base class's default):
   * the returned row carries the generated `id` and the `defaultRaw`
   * `created_at` the same way a legacy INSERT-then-reselect pair did.
   */
  async insertUser(row: NewUserRow): Promise<UserRow> {
    const id = await this.insert({
      username: row.username,
      email: row.email,
      password_hash: row.password_hash,
      role: row.role,
      first_seen_version: row.first_seen_version,
      login_count: 0,
      oidc_sub: row.oidc_sub ?? null,
      oidc_issuer: row.oidc_issuer ?? null,
      avatar: row.avatar ?? null,
    });
    const inserted = await this.findById(id);
    if (!inserted) {
      throw new Error('insertUser: read-back after insert found no row');
    }
    return inserted;
  }

  // ---------------------------------------------------------------------
  // AU12 / O4 — email lookup (login + OIDC email-fallback)
  // ---------------------------------------------------------------------

  /**
   * `SELECT * FROM users WHERE LOWER(email) = LOWER(?) AND COALESCE(is_guest, 0) = 0`
   * — AU9's sibling for AU12 (`AuthService.loginUser`, `auth.service.ts`).
   *
   * Both sides folded by SQLite's own `LOWER()` (`lowerParam` binds the
   * RAW, untransformed email) — the legacy statement lowered BOTH operands
   * in SQL, so a JS-lowered bind here would disagree with the column on
   * every non-ASCII cased character (program rule 18; Plan 3b Task 7
   * review, H1: a `JOSÉ@x.com` account could register but never log back
   * in). Distinct from `findByEmailLoweredBind` below, which mirrors O4's
   * different legacy statement — do not collapse the two back into one
   * method (D4).
   */
  async findByEmailCI(email: string): Promise<UserRow | null> {
    const platform = this.getEntityManager().getPlatform();
    const user = await this.findOne({ [lower(platform, 'email')]: lowerParam(platform, email), is_guest: 0 });
    return user ? (toRow(user) as UserRow) : null;
  }

  /**
   * `SELECT * FROM users WHERE LOWER(email) = ? AND COALESCE(is_guest, 0) = 0`
   * — O4 (`OidcService.findOrCreateUser`, `oidc.service.ts:655`), whose only
   * caller JS-lowers the email itself (`oidc.service.ts:620`,
   * `userInfo.email.trim().toLowerCase()`) before calling this method,
   * exactly mirroring the legacy statement's `LOWER(email) = ?` (SQL
   * `LOWER()` on the column, a bind the CALLER already lowered — not a
   * second SQL `LOWER()` on the value side). Do not point a caller that has
   * NOT already lowered its value at this method — use `findByEmailCI`
   * above instead.
   */
  async findByEmailLoweredBind(alreadyLoweredEmail: string): Promise<UserRow | null> {
    const platform = this.getEntityManager().getPlatform();
    const user = await this.findOne({ [lower(platform, 'email')]: alreadyLoweredEmail, is_guest: 0 });
    return user ? (toRow(user) as UserRow) : null;
  }

  // ---------------------------------------------------------------------
  // AuthService.demoLogin (auth.service.ts:~376) — inventory-correction
  // addition, Plan 3b Task 1 fix round item 7 (pre-authorised for Task 5).
  // ---------------------------------------------------------------------

  /**
   * `SELECT * FROM users WHERE email = ?` — case-**sensitive**, **no** guest
   * filter, full row. Distinct from both `findByEmailCI` (case-insensitive
   * + guest-filtered) and `findForPasswordReset` (case-sensitive but
   * projected + guest-filtered): `AuthService.demoLogin` needs the exact,
   * unfiltered legacy statement, including matching a guest row.
   */
  async findByEmailExact(email: string): Promise<UserRow | null> {
    const user = await this.findOne({ email });
    return user ? (toRow(user) as UserRow) : null;
  }

  // ---------------------------------------------------------------------
  // AU13 / AU34 / AU35 / PK12 / O16 — login bookkeeping
  // ---------------------------------------------------------------------

  /**
   * `UPDATE users SET last_login = CURRENT_TIMESTAMP, login_count = login_count + 1
   *  WHERE id = ?` — ONE statement via `nativeUpdate` with a raw sibling-column
   * increment (`columnIncrementedBy`), never a read-modify-write: two
   * concurrent calls both read `login_count` from the row at commit time, not
   * from a value fetched earlier, so both increments land (proven by
   * `USERSREPO` `touchLastLogin` concurrency test — two concurrent calls →
   * `+2`, never `+1`).
   */
  async touchLastLogin(id: number): Promise<void> {
    const platform = this.getEntityManager().getPlatform();
    await this.nativeUpdate(
      { id },
      { last_login: currentTimestamp(platform), login_count: columnIncrementedBy(platform, 'login_count', 1) },
    );
  }

  // ---------------------------------------------------------------------
  // AU14 — /api/auth/me
  // ---------------------------------------------------------------------

  /** `SELECT id, username, email, role, avatar, oidc_issuer, created_at, mfa_enabled, must_change_password FROM users WHERE id = ?` */
  async findMeRow(id: number): Promise<CurrentUserRow | null> {
    const row = await this.findOne(
      { id },
      {
        fields: ['id', 'username', 'email', 'role', 'avatar', 'oidc_issuer', 'created_at', 'mfa_enabled', 'must_change_password'],
      },
    );
    return row
      ? {
          id: row.id,
          username: row.username,
          email: row.email,
          role: row.role,
          avatar: row.avatar ?? null,
          oidc_issuer: row.oidc_issuer ?? null,
          created_at: row.created_at ?? null,
          mfa_enabled: row.mfa_enabled ?? null,
          must_change_password: row.must_change_password ?? null,
        }
      : null;
  }

  // ---------------------------------------------------------------------
  // AU15 — current-password check
  // ---------------------------------------------------------------------

  /** `SELECT password_hash, password_version FROM users WHERE id = ?` */
  async getPasswordHashAndVersion(id: number): Promise<{ password_hash: string; password_version: number } | null> {
    const row = await this.findOne({ id }, { fields: ['password_hash', 'password_version'] });
    return row ? { password_hash: row.password_hash, password_version: row.password_version } : null;
  }

  // ---------------------------------------------------------------------
  // AU16 / AU43 — password change / reset
  // ---------------------------------------------------------------------

  /**
   * `UPDATE users SET password_hash = ?, must_change_password = 0,
   *  password_version = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?`
   * (AU16 `changePassword`, AU43 `resetPassword` — identical statement).
   */
  async setPassword(id: number, passwordHash: string, passwordVersion: number): Promise<void> {
    const platform = this.getEntityManager().getPlatform();
    await this.nativeUpdate(
      { id },
      { password_hash: passwordHash, must_change_password: 0, password_version: passwordVersion, updated_at: currentTimestamp(platform) },
    );
  }

  // ---------------------------------------------------------------------
  // AU19 / O7 — last-admin guard
  // ---------------------------------------------------------------------

  /** `SELECT COUNT(*) as count FROM users WHERE role = 'admin'` */
  async countAdmins(): Promise<number> {
    return this.count({ role: 'admin' });
  }

  // ---------------------------------------------------------------------
  // AU20 / AU22 — admin gate
  // ---------------------------------------------------------------------

  /** `SELECT role FROM users WHERE id = ?` */
  async getRole(id: number): Promise<string | null> {
    const row = await this.findOne({ id }, { fields: ['role'] });
    return row?.role ?? null;
  }

  // ---------------------------------------------------------------------
  // AU23 / AU27 / MP2 — MFA state
  // ---------------------------------------------------------------------

  /**
   * `SELECT mfa_enabled FROM users WHERE id = ?`
   *
   * Returns the ROW, not the bare column: `mfa-policy.guard.ts` (MP2) needs
   * to tell "no row for this id" (`null` — the user vanished mid-request,
   * `MfaPolicyGuard` lets the request through) apart from "row present with
   * `mfa_enabled` unset" (`{ mfa_enabled: null }` — still governed by the
   * policy) — the same distinction the legacy `if (!row) return true;`
   * before `row.mfa_enabled === 1` made. A bare `T | null` return would
   * collapse both into the same value.
   */
  async getMfaEnabled(id: number): Promise<{ mfa_enabled: number | null } | null> {
    const row = await this.findOne({ id }, { fields: ['mfa_enabled'] });
    return row ? { mfa_enabled: row.mfa_enabled ?? null } : null;
  }

  // ---------------------------------------------------------------------
  // AU28 — enable MFA
  // ---------------------------------------------------------------------

  /**
   * `UPDATE users SET mfa_enabled = 1, mfa_secret = ?, mfa_backup_codes = ?,
   *  updated_at = CURRENT_TIMESTAMP WHERE id = ?`. `secret`/`codes` arrive
   * already encrypted/hashed — this repository never touches either.
   */
  async enableMfa(id: number, encryptedSecret: string, backupCodes: string): Promise<void> {
    const platform = this.getEntityManager().getPlatform();
    await this.nativeUpdate(
      { id },
      { mfa_enabled: 1, mfa_secret: encryptedSecret, mfa_backup_codes: backupCodes, updated_at: currentTimestamp(platform) },
    );
  }

  // ---------------------------------------------------------------------
  // AU30 / AU32 / PK4 / PK10 / O15 — full-row reads
  // ---------------------------------------------------------------------

  /**
   * `SELECT * FROM users WHERE id = ?` — the full row, reused by every
   * caller that needs more than a handful of columns (AU30 `disableMfa`,
   * AU32 `verifyMfaLogin`, PK4 `passkeyRegisterOptions`, PK10
   * `passkeyLoginVerify`, O15 `findOrCreateUser`'s post-transaction re-select).
   * `disableIdentityMap: true` per the class-level ruling above.
   */
  async findById(id: number): Promise<UserRow | null> {
    const user = await this.findOne({ id });
    return user ? (toRow(user) as UserRow) : null;
  }

  // ---------------------------------------------------------------------
  // AU31 — disable MFA
  // ---------------------------------------------------------------------

  /** `UPDATE users SET mfa_enabled = 0, mfa_secret = NULL, mfa_backup_codes = NULL, updated_at = CURRENT_TIMESTAMP WHERE id = ?` */
  async disableMfa(id: number): Promise<void> {
    const platform = this.getEntityManager().getPlatform();
    await this.nativeUpdate(
      { id },
      { mfa_enabled: 0, mfa_secret: null, mfa_backup_codes: null, updated_at: currentTimestamp(platform) },
    );
  }

  // ---------------------------------------------------------------------
  // AU33 / AU44 — backup-code burn
  // ---------------------------------------------------------------------

  /**
   * `UPDATE users SET mfa_backup_codes = ?, updated_at = CURRENT_TIMESTAMP
   *  WHERE id = ?` (AU33, `verifyMfaLogin`'s backup-code branch — inside the
   * same transaction as `touchLastLogin`).
   */
  async setBackupCodesAndTouch(id: number, backupCodes: string): Promise<void> {
    const platform = this.getEntityManager().getPlatform();
    await this.nativeUpdate({ id }, { mfa_backup_codes: backupCodes, updated_at: currentTimestamp(platform) });
  }

  /**
   * `UPDATE users SET mfa_backup_codes = ? WHERE id = ?` (AU44,
   * `resetPassword`'s conditional backup-code splice — no `updated_at`,
   * unlike AU33's otherwise-identical statement; two methods, byte-exact
   * parity per statement).
   */
  async setBackupCodes(id: number, backupCodes: string): Promise<void> {
    await this.nativeUpdate({ id }, { mfa_backup_codes: backupCodes });
  }

  // ---------------------------------------------------------------------
  // AU36 — password-reset request lookup
  // ---------------------------------------------------------------------

  /**
   * `SELECT id, email, password_hash, oidc_sub FROM users WHERE email = ?
   *  AND COALESCE(is_guest, 0) = 0` — case-SENSITIVE on `email`, unlike
   * every other email lookup in this repository (no `LOWER()` in the legacy
   * statement here); kept exactly as written, not "fixed" to match the
   * others (parity is law).
   */
  async findForPasswordReset(email: string): Promise<PasswordResetLookup | null> {
    const row = await this.findOne(
      { email, is_guest: 0 },
      { fields: ['id', 'email', 'password_hash', 'oidc_sub'] },
    );
    return row ? { id: row.id, email: row.email, password_hash: row.password_hash, oidc_sub: row.oidc_sub ?? null } : null;
  }

  // ---------------------------------------------------------------------
  // AU40 — reset-target read
  // ---------------------------------------------------------------------

  /** `SELECT id, email, mfa_enabled, mfa_secret, mfa_backup_codes, password_version FROM users WHERE id = ?` */
  async findResetTarget(id: number): Promise<ResetTargetRow | null> {
    const row = await this.findOne(
      { id },
      { fields: ['id', 'email', 'mfa_enabled', 'mfa_secret', 'mfa_backup_codes', 'password_version'] },
    );
    return row
      ? {
          id: row.id,
          email: row.email,
          mfa_enabled: row.mfa_enabled ?? null,
          mfa_secret: row.mfa_secret ?? null,
          mfa_backup_codes: row.mfa_backup_codes ?? null,
          password_version: row.password_version,
        }
      : null;
  }

  // ---------------------------------------------------------------------
  // PK15 — re-auth before passkey deletion
  // ---------------------------------------------------------------------

  /**
   * `SELECT password_hash FROM users WHERE id = ?`
   *
   * The `?? null` fallback's own "row present but `password_hash` itself
   * null" branch is unreachable: `password_hash TEXT NOT NULL` in the
   * baseline schema (never relaxed by a later migration) — the same
   * defensive-but-unreachable shape as `countNonGuest`'s `COALESCE(is_guest,
   * 0)` above. The `?.`/`??` combination still earns its keep for the
   * "row missing" case (`?.` alone would leave `undefined`, not `null`).
   */
  async getPasswordHash(id: number): Promise<string | null> {
    const row = await this.findOne({ id }, { fields: ['password_hash'] });
    return row?.password_hash ?? null;
  }

  // ---------------------------------------------------------------------
  // PK17 — admin passkey-reset target
  // ---------------------------------------------------------------------

  /** `SELECT id, email FROM users WHERE id = ?` */
  async findIdAndEmail(id: number): Promise<{ id: number; email: string } | null> {
    const row = await this.findOne({ id }, { fields: ['id', 'email'] });
    return row ? { id: row.id, email: row.email } : null;
  }

  // ---------------------------------------------------------------------
  // O3 — OIDC primary identity match
  // ---------------------------------------------------------------------

  /** `SELECT * FROM users WHERE oidc_sub = ? AND oidc_issuer = ?` */
  async findByOidcIdentity(sub: string, issuer: string): Promise<UserRow | null> {
    const user = await this.findOne({ oidc_sub: sub, oidc_issuer: issuer });
    return user ? (toRow(user) as UserRow) : null;
  }

  // ---------------------------------------------------------------------
  // O5 / O6 — OIDC identity linking
  // ---------------------------------------------------------------------

  /**
   * `UPDATE users SET oidc_sub = ?, oidc_issuer = ? WHERE id = ?` (O5, the
   * email-matched/unlinked/verified-email branch; O6, the provider-switch
   * branch — identical statement, two call sites, no `updated_at`).
   */
  async linkOidcIdentity(id: number, sub: string, issuer: string): Promise<void> {
    await this.nativeUpdate({ id }, { oidc_sub: sub, oidc_issuer: issuer });
  }

  // ---------------------------------------------------------------------
  // O8 — claims-based role change
  // ---------------------------------------------------------------------

  /** `UPDATE users SET role = ? WHERE id = ?` — no `updated_at` (legacy statement). */
  async setRole(id: number, role: string): Promise<void> {
    await this.nativeUpdate({ id }, { role });
  }

  // ---------------------------------------------------------------------
  // O9 — OIDC avatar sync
  // ---------------------------------------------------------------------

  /**
   * `UPDATE users SET avatar = ? WHERE id = ?` — no `updated_at`, unlike
   * `setAvatar` (UP10/UP13) below, which is the profile-upload path's
   * otherwise-identical statement. Two methods, byte-exact parity per
   * statement (same rule as `setBackupCodes`/`setBackupCodesAndTouch`).
   */
  async setAvatarRaw(id: number, avatar: string | null): Promise<void> {
    await this.nativeUpdate({ id }, { avatar });
  }

  // ---------------------------------------------------------------------
  // O12 / UP5 — username collision checks
  // ---------------------------------------------------------------------

  /**
   * `SELECT id FROM users WHERE LOWER(username) = LOWER(?) AND id != ?
   *  AND COALESCE(is_guest, 0) = 0` (UP5, `updateSettings`'s own-username
   * collision check).
   *
   * Both sides folded by SQLite's own `LOWER()` (`lowerParam` binds the RAW
   * value) — program rule 18.
   */
  async findIdByUsernameCI(username: string, excludeId: number): Promise<number | null> {
    const platform = this.getEntityManager().getPlatform();
    const row = await this.findOne(
      { [lower(platform, 'username')]: lowerParam(platform, username), id: { $ne: excludeId }, is_guest: 0 },
      { fields: ['id'] },
    );
    return row?.id ?? null;
  }

  /**
   * `SELECT id FROM users WHERE LOWER(username) = LOWER(?)` (O12, OIDC
   * derived-username collision avoidance — no `excludeId`, no guest filter:
   * a genuinely different WHERE than UP5's, so a separate method per D4
   * rather than an optional parameter that would silently change UP5's
   * shape.
   *
   * Both sides folded by SQLite's own `LOWER()` (`lowerParam` binds the RAW
   * value) — program rule 18. The only caller sanitises the username to
   * `[a-zA-Z0-9_.-]` before calling (`oidc.service.ts`), so this cannot
   * diverge in practice today; fixed anyway so the guarantee lives in the
   * method, not the caller.
   */
  async findIdByUsernameCIAny(username: string): Promise<number | null> {
    const platform = this.getEntityManager().getPlatform();
    const row = await this.findOne(
      { [lower(platform, 'username')]: lowerParam(platform, username) },
      { fields: ['id'] },
    );
    return row?.id ?? null;
  }

  // ---------------------------------------------------------------------
  // UP1 — API-key columns read (`currentKeys`)
  // ---------------------------------------------------------------------

  /** `SELECT role, maps_api_key, openweather_api_key, unsplash_api_key, amap_api_key FROM users WHERE id = ?` */
  async getApiKeyColumns(id: number): Promise<UserApiKeyColumns | null> {
    const row = await this.findOne(
      { id },
      { fields: ['role', 'maps_api_key', 'openweather_api_key', 'unsplash_api_key', 'amap_api_key'] },
    );
    return row
      ? {
          role: row.role,
          maps_api_key: row.maps_api_key ?? null,
          openweather_api_key: row.openweather_api_key ?? null,
          unsplash_api_key: row.unsplash_api_key ?? null,
          amap_api_key: row.amap_api_key ?? null,
        }
      : null;
  }

  // ---------------------------------------------------------------------
  // UP2 — single-key (maps) update
  // ---------------------------------------------------------------------

  /** `UPDATE users SET maps_api_key = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?` */
  async updateMapsKey(id: number, encryptedMapsApiKey: string | null): Promise<void> {
    const platform = this.getEntityManager().getPlatform();
    await this.nativeUpdate({ id }, { maps_api_key: encryptedMapsApiKey, updated_at: currentTimestamp(platform) });
  }

  // ---------------------------------------------------------------------
  // UP3 — four-key update
  // ---------------------------------------------------------------------

  /**
   * `UPDATE users SET maps_api_key = ?, openweather_api_key = ?,
   *  unsplash_api_key = ?, amap_api_key = ?, updated_at = CURRENT_TIMESTAMP
   *  WHERE id = ?`. The per-column "encrypt the new value or keep the
   * current one" branching (a deleted-row race degrading to a 0-row UPDATE,
   * not a crash) is the service's, per D4 — this writes exactly the four
   * final values it is given.
   */
  async updateApiKeys(id: number, keys: ApiKeysPatch): Promise<void> {
    const platform = this.getEntityManager().getPlatform();
    await this.nativeUpdate({ id }, { ...keys, updated_at: currentTimestamp(platform) });
  }

  // ---------------------------------------------------------------------
  // UP4 / UP8 — profile-with-keys re-select
  // ---------------------------------------------------------------------

  /** `SELECT id, username, email, role, maps_api_key, openweather_api_key, unsplash_api_key, amap_api_key, avatar, mfa_enabled FROM users WHERE id = ?` */
  async findProfileWithKeys(id: number): Promise<UserProfileWithKeys | null> {
    const row = await this.findOne(
      { id },
      {
        fields: ['id', 'username', 'email', 'role', 'maps_api_key', 'openweather_api_key', 'unsplash_api_key', 'amap_api_key', 'avatar', 'mfa_enabled'],
      },
    );
    return row
      ? {
          id: row.id,
          username: row.username,
          email: row.email,
          role: row.role,
          maps_api_key: row.maps_api_key ?? null,
          openweather_api_key: row.openweather_api_key ?? null,
          unsplash_api_key: row.unsplash_api_key ?? null,
          amap_api_key: row.amap_api_key ?? null,
          avatar: row.avatar ?? null,
          mfa_enabled: row.mfa_enabled ?? null,
        }
      : null;
  }

  // ---------------------------------------------------------------------
  // UP6 — email collision check
  // ---------------------------------------------------------------------

  /**
   * `SELECT id FROM users WHERE LOWER(email) = LOWER(?) AND id != ? AND COALESCE(is_guest, 0) = 0`
   *
   * Both sides folded by SQLite's own `LOWER()` (`lowerParam` binds the RAW
   * value) — program rule 18.
   */
  async findIdByEmailCI(email: string, excludeId: number): Promise<number | null> {
    const platform = this.getEntityManager().getPlatform();
    const row = await this.findOne(
      { [lower(platform, 'email')]: lowerParam(platform, email), id: { $ne: excludeId }, is_guest: 0 },
      { fields: ['id'] },
    );
    return row?.id ?? null;
  }

  // ---------------------------------------------------------------------
  // UP7 — bounded dynamic-column profile patch
  // ---------------------------------------------------------------------

  /**
   * `` UPDATE users SET ${updates.join(', ')}, updated_at = CURRENT_TIMESTAMP
   *  WHERE id = ? `` — the SET clause is built at the CALL SITE from a fixed
   * set of 6 possible literal column names, never here: `patchProfile` takes
   * only the already-decided final columns as a typed partial and writes
   * them in ONE `nativeUpdate` (never `assign`+`flush`, which would be a
   * second statement shape for the identical intent) — the entity-API
   * equivalent of the legacy's dynamic `SET` list, without ever building SQL
   * text. `updated_at` is always stamped, matching the legacy: this method's
   * only caller (`UserProfileService.updateSettings`) calls it only when at
   * least one field changed (`updates.length > 0`), the same guard the
   * legacy statement was built under.
   */
  async patchProfile(id: number, changes: UserProfilePatch): Promise<void> {
    const platform = this.getEntityManager().getPlatform();
    await this.nativeUpdate({ id }, { ...changes, updated_at: currentTimestamp(platform) });
  }

  // ---------------------------------------------------------------------
  // UP9 / UP12 — avatar read (before cleanup/replace)
  // ---------------------------------------------------------------------

  /** `SELECT avatar FROM users WHERE id = ?` */
  async getAvatar(id: number): Promise<string | null> {
    const row = await this.findOne({ id }, { fields: ['avatar'] });
    return row?.avatar ?? null;
  }

  // ---------------------------------------------------------------------
  // UP10 / UP13 — avatar write
  // ---------------------------------------------------------------------

  /**
   * `UPDATE users SET avatar = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?`
   * (UP10 `saveAvatar` with a filename, UP13 `deleteAvatar` with `NULL` —
   * same statement shape, `avatar` nullable either way).
   */
  async setAvatar(id: number, avatar: string | null): Promise<void> {
    const platform = this.getEntityManager().getPlatform();
    await this.nativeUpdate({ id }, { avatar, updated_at: currentTimestamp(platform) });
  }

  // ---------------------------------------------------------------------
  // UP11 — post-avatar-write re-select
  // ---------------------------------------------------------------------

  /** `SELECT id, username, email, role, avatar FROM users WHERE id = ?` */
  async findProfileBasic(id: number): Promise<UserProfileBasic | null> {
    const row = await this.findOne({ id }, { fields: ['id', 'username', 'email', 'role', 'avatar'] });
    return row ? { id: row.id, username: row.username, email: row.email, role: row.role, avatar: row.avatar ?? null } : null;
  }

  // ---------------------------------------------------------------------
  // UP14 — user directory (trip member / contributor pickers)
  // ---------------------------------------------------------------------

  /** `SELECT id, username, avatar FROM users WHERE id != ? AND COALESCE(is_guest, 0) = 0 ORDER BY username ASC` */
  async listOthersNonGuest(excludeId: number): Promise<UserDirectoryRow[]> {
    const rows = await this.find(
      { id: { $ne: excludeId }, is_guest: 0 },
      { fields: ['id', 'username', 'avatar'], orderBy: { username: 'asc' } },
    );
    return rows.map((row) => ({ id: row.id, username: row.username, avatar: row.avatar ?? null }));
  }

  // ---------------------------------------------------------------------
  // UP15 — key-validation probe
  // ---------------------------------------------------------------------

  /** `SELECT role, openweather_api_key FROM users WHERE id = ?` */
  async getRoleAndWeatherKey(id: number): Promise<{ role: string; openweather_api_key: string | null } | null> {
    const row = await this.findOne({ id }, { fields: ['role', 'openweather_api_key'] });
    return row ? { role: row.role, openweather_api_key: row.openweather_api_key ?? null } : null;
  }

  // ---------------------------------------------------------------------
  // UC11 — account erasure (Plan 3b Task 1 review, "contract gaps" item 2:
  // named in the plan's Task 1 bullet, deliberately deferred to Task 5 —
  // the ONE pre-authorised UsersRepository addition this task makes).
  // ---------------------------------------------------------------------

  /**
   * `DELETE FROM users WHERE id = ?` — `UserCleanupService.deleteUserCompletely`'s
   * final statement, the root of its 13-table transaction
   * (**security-sensitive**: account erasure). Named `deleteById`, not
   * `remove`/`delete`: `remove` is `EntityManager`'s (persist-marking,
   * needs-a-`flush()`), not `EntityRepository`'s — MikroORM 7.2.1's
   * `EntityRepository` has no `remove` method at all (Task 7 review, L1;
   * verified against the installed `.d.ts`, not assumed — that is why
   * `OauthClientsRepository.remove`/`TagsRepository.remove`/
   * `CategoriesRepository.remove` compile as their own, unrelated methods).
   * `deleteById` is chosen for naming consistency with this program's other
   * native, immediate deletes (`McpTokensRepository.deleteById`), not to
   * avoid a compiler conflict that does not exist.
   */
  async deleteById(id: number): Promise<void> {
    await this.nativeDelete({ id });
  }
}
