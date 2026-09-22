import { McpTokens } from '../entities/McpTokens.entity';
import { toRow, type AssertRowKeys } from './_shared/rows';
import { columnRef, currentTimestamp } from '../dialect/sql-functions';
import { EntityRepository } from '@mikro-orm/sql';

/**
 * A full `mcp_tokens` row (`SELECT * FROM mcp_tokens WHERE ...`), as the API
 * emits it. `user_id` is the `persist(false)` mirror of the `user` relation
 * (same pattern as `InviteTokens.created_by`/`createdByRef` and
 * `Categories.user`/`user_id`) — a scalar column for `AssertRowKeys`
 * purposes even though it is never written directly.
 */
export interface McpTokenRow {
  id: number;
  user_id: number;
  name: string;
  token_hash: string;
  token_prefix: string;
  created_at: string | null;
  last_used_at: string | null;
  kind: string;
  scope_mode: string;
  api_scopes: string | null;
}

const _mcpTokenRowKeys: AssertRowKeys<McpTokenRow, McpTokens> = true;

/** `TokenService.listTokens` (TK1) — the column set both the MCP and API panels start from. */
export interface McpTokenListRow {
  id: number;
  name: string;
  token_prefix: string;
  created_at: string | null;
  last_used_at: string | null;
  scope_mode: string;
  api_scopes: string | null;
}

/** `TokenService.createToken`'s write (TK3) — the hash is computed by the service, never here. */
export interface NewMcpTokenRow {
  user_id: number;
  name: string;
  token_hash: string;
  token_prefix: string;
  kind: string;
  scope_mode: string;
  api_scopes: string | null;
}

/** `TokenService.createToken`'s re-select (TK4) and `adminDeleteMcpToken`'s 404 check (TK9) — see `findBasic`. */
export interface McpTokenBasicRow {
  id: number;
  user_id: number;
  name: string;
  token_prefix: string;
  created_at: string | null;
  last_used_at: string | null;
}

/** `TokenService.deleteToken`'s ownership + kind check (TK5). */
export interface McpTokenIdRow {
  id: number;
}

/** `TokenService.listAllMcpTokens` (TK8) — the admin panel's cross-user join. */
export interface McpTokenWithUsernameRow {
  id: number;
  name: string;
  token_prefix: string;
  created_at: string | null;
  last_used_at: string | null;
  user_id: number;
  username: string;
}

/** `TokenService.verifyApiTokenWithGrant` (TK11) — bearer auth for the public API. */
export interface McpTokenGrantRow {
  id: number;
  username: string;
  email: string;
  role: string;
  scope_mode: string;
  api_scopes: string | null;
}

/** `TokenService.verifyToken` (TK13) — bearer auth shared by the MCP/legacy-static-token surfaces. */
export interface McpTokenUserRow {
  id: number;
  username: string;
  email: string;
  role: string;
}

/**
 * MCP tokens (assistant-tool bearer credentials) and API tokens (public REST
 * integration keys) — one table (`mcp_tokens`), discriminated by `kind`, one
 * repository (Plan 3b Task 2, inventory §2). The raw token is never stored,
 * only its SHA-256 hash — this repository never computes or compares a
 * hash, `TokenService` does, and it is handed the hash as an opaque string
 * on every read here. `deleteAllForUser` exists for Task 5's `AuthService`
 * (AU17/AU45 — session revocation on password change), not consumed here.
 */
export class McpTokensRepository extends EntityRepository<McpTokens> {
  /**
   * `SELECT id, name, token_prefix, created_at, last_used_at, scope_mode,
   *  api_scopes FROM mcp_tokens WHERE user_id = ? AND kind = ?
   *  ORDER BY created_at DESC` (TK1, `listTokens` — the private method
   * `listMcpTokens`/`listApiTokens` both call). `kind` discriminates the
   * shape the caller derives from the row: an MCP token drops
   * `scope_mode`/`api_scopes` from what it shows, an API key resolves them
   * into a grant — both stay in the service, unchanged.
   *
   * `disableIdentityMap: true` (controller ruling on Task 1's review,
   * applied to every entity-hydrating read in this repository): a `find`/
   * `findOne` with a `fields` projection merges a PARTIAL snapshot of this
   * row into the request's shared identity map. If the same row is later
   * loaded elsewhere in the request with a *different* projection, MikroORM
   * merges both into one managed entity; a `nativeUpdate` elsewhere in the
   * same transaction does not touch that managed entity (native writes
   * bypass the identity map by design), so the merged-but-stale entity can
   * still be flushed — by the closing `flush()` of a surrounding
   * `uow.transactional` block — writing its stale unselected columns back
   * over the `nativeUpdate`'s change. `disableIdentityMap: true` returns an
   * isolated entity that is never merged into the shared context, so it can
   * never be flushed at all: nothing here can go stale-write-back a later
   * write. See `MCPTOKREPO-021` for the regression proof.
   */
  async listByUserAndKind(userId: number, kind: string): Promise<McpTokenListRow[]> {
    const rows = await this.find(
      { user: userId, kind },
      {
        fields: ['id', 'name', 'token_prefix', 'created_at', 'last_used_at', 'scope_mode', 'api_scopes'],
        orderBy: { created_at: 'desc' },
        disableIdentityMap: true,
      },
    );
    return rows.map((row) => ({
      id: row.id,
      name: row.name,
      token_prefix: row.token_prefix,
      created_at: row.created_at ?? null,
      last_used_at: row.last_used_at ?? null,
      scope_mode: row.scope_mode,
      api_scopes: row.api_scopes ?? null,
    }));
  }

  /** `SELECT COUNT(*) as count FROM mcp_tokens WHERE user_id = ? AND kind = ?` (TK2 — the 10-per-kind cap). */
  async countByUserAndKind(userId: number, kind: string): Promise<number> {
    return this.count({ user: userId, kind });
  }

  /**
   * `INSERT INTO mcp_tokens (user_id, name, token_hash, token_prefix, kind,
   *  scope_mode, api_scopes) VALUES (...)` (TK3 — token mint,
   * **security-sensitive**). Named `insertToken`, not `create`:
   * `EntityRepository#create` is a synchronous, non-persisting factory with
   * an incompatible signature — shadowing it would fail to compile (the
   * same collision Task 1's `insertUser` avoided). The raw token is never
   * given to or returned by this method — `token_hash` arrives already
   * hashed, and the caller appends the raw value to its own response
   * afterward, never storing or re-reading it.
   *
   * A native `em.insert()`, not `create()` + `persist()` + `flush()`
   * (controller ruling on Task 1's review — every repository insert, not
   * only the best-effort ones Plan 3a scoped this to originally):
   * `flush()` commits the *whole* unit of work of the request's
   * `EntityManager`, not just this row — inside `AuthService.registerUser`'s
   * transaction (a later task's caller), a `flush()` here would commit
   * whatever else that transaction was still assembling. `em.insert()` fires
   * one native INSERT with no side effects on the context/identity map,
   * matching `AuditLogRepository.insertEntry`'s precedent. Followed by a
   * `disableIdentityMap: true` re-select (D4's create rule, this
   * repository's isolated-read shape) rather than `em.refresh`, which needs
   * a managed entity `em.insert` never produces.
   */
  async insertToken(row: NewMcpTokenRow): Promise<McpTokenRow> {
    const id = await this.getEntityManager().insert(McpTokens, {
      user: row.user_id,
      name: row.name,
      token_hash: row.token_hash,
      token_prefix: row.token_prefix,
      kind: row.kind,
      scope_mode: row.scope_mode,
      api_scopes: row.api_scopes,
    });
    const inserted = await this.findOne({ id }, { disableIdentityMap: true });
    if (!inserted) {
      throw new Error(`McpTokensRepository.insertToken: row ${String(id)} not found immediately after insert`);
    }
    return toRow(inserted) as McpTokenRow;
  }

  /**
   * `SELECT id, name, token_prefix, created_at, last_used_at FROM
   *  mcp_tokens WHERE id = ?` (TK4, `createToken`'s re-select) and
   * `SELECT id, user_id FROM mcp_tokens WHERE id = ?` (TK9,
   * `adminDeleteMcpToken`'s 404 check) — ONE method: TK9's two columns
   * (`id`, `user_id`) are a subset of TK4's five, and both statements are a
   * plain by-id lookup with no other filter, so a single narrower-than-`*`
   * projection covering the union of both column sets serves both call
   * sites without a second near-identical statement (same economy as
   * `deleteById` below covering TK6/TK10). PK-only `findOne` ->
   * `disableIdentityMap: true`, NOT `refresh: true` (controller ruling on
   * Task 1's review, superseding Plan 3a's "PK-only `findOne` -> `refresh:
   * true`" ruling everywhere in this repository): `refresh` still re-queries
   * on every call, but it also MERGES the fresh row into the shared identity
   * map — exactly the mechanism `listByUserAndKind`'s docstring above
   * describes going stale. `disableIdentityMap: true` re-queries every call
   * (same "always fresh" property `refresh` gave) without ever registering
   * the result anywhere a later `flush()` could find it.
   *
   * `fields` asks for the RELATION property `'user'`, not the `persist(false)`
   * mirror `'user_id'` — verified empirically (not from the `.d.ts`): a
   * `fields` list naming the mirror directly leaves `row.user_id`
   * `undefined` (it has no column of its own to select), while naming the
   * relation loads its (unpopulated) `Ref`, whose `.id` is readable
   * synchronously without a second query (`EntityRef`'s whole point, per
   * `@mikro-orm/core`'s own typings comment: `ref.id` instead of
   * `ref.unwrap().id`) — read here as `row.user.id`, not the entity's own
   * `.user_id` field, which the `fields`-narrowed `Loaded<...>` type does
   * not expose (MikroORM does derive it at runtime, same mechanism `toRow`'s
   * full-row methods rely on, but `fields` narrows the TYPE to only the
   * names actually requested).
   */
  async findBasic(id: number): Promise<McpTokenBasicRow | null> {
    const row = await this.findOne(
      { id },
      { fields: ['id', 'user', 'name', 'token_prefix', 'created_at', 'last_used_at'], disableIdentityMap: true },
    );
    return row
      ? {
          id: row.id,
          user_id: row.user.id,
          name: row.name,
          token_prefix: row.token_prefix,
          created_at: row.created_at ?? null,
          last_used_at: row.last_used_at ?? null,
        }
      : null;
  }

  /**
   * `SELECT id FROM mcp_tokens WHERE id = ? AND user_id = ? AND kind = ?`
   * (TK5, `deleteToken`'s 404 check — ownership AND kind scoping, so an
   * integrations-panel delete can never remove a token the MCP panel
   * manages, and vice versa). Not a PK-only filter (`id` + `user` + `kind`),
   * so this always re-queries regardless; `disableIdentityMap: true` all the
   * same (controller ruling on Task 1's review — every entity-hydrating read
   * in this repository, PK-only or not, per `listByUserAndKind`'s docstring
   * above: a narrow `fields` projection merged into the shared identity map
   * is the hazard, not specifically a PK-only filter).
   */
  async findOwnedByKind(id: number, userId: number, kind: string): Promise<McpTokenIdRow | null> {
    const row = await this.findOne({ id, user: userId, kind }, { fields: ['id'], disableIdentityMap: true });
    return row ? { id: row.id } : null;
  }

  /**
   * `DELETE FROM mcp_tokens WHERE id = ?` — TK6 (`deleteToken`, after the
   * owner+kind check above; the caller treats the follow-up session revoke
   * as best-effort) and TK10 (`adminDeleteMcpToken`, after `findBasic`'s
   * 404 check; the caller revokes sessions unconditionally). Identical
   * statement, two call sites with different revoke-session semantics —
   * that difference stays in `TokenService`, this repository only deletes
   * the row.
   */
  async deleteById(id: number): Promise<void> {
    await this.nativeDelete({ id });
  }

  /**
   * `SELECT t.id, t.name, t.token_prefix, t.created_at, t.last_used_at,
   *  t.user_id, u.username FROM mcp_tokens t JOIN users u ON u.id =
   *  t.user_id ORDER BY t.created_at DESC` (TK8, `listAllMcpTokens` — the
   * admin panel, deliberately unscoped by user). An INNER JOIN, matching
   * the legacy `JOIN` (every `mcp_tokens` row has a `user`, FK
   * `deleteRule('cascade')`, so no row is ever excluded by this choice).
   * The projection root is `McpTokens` (`this.qb('t')`), not `Users` — D4/
   * Task 1's ruling that a join projection through this table stays owned
   * by `McpTokensRepository` rather than adding a users-side method.
   * `mapResults: false` (`execute(..., false)`) leaves the driver's raw row
   * alone. Verified empirically (not from the `.d.ts`, and NOT the same
   * shape as `TripsRepository.findAccessible`'s `t.user` -> `user_id`
   * precedent): selecting the relation property `t.user` while ALSO joining
   * that same relation (`t.user` -> alias `u`) is absorbed into the join
   * rather than emitting a `user_id` column at all — MikroORM treats the
   * select as redundant with the join, not as "select the FK scalar." A
   * bare `columnRef(platform, 't.user_id')` (the dialect helper `no
   * -restricted-syntax` steers every repository through instead of a
   * hand-spelled `raw()`) selects the literal column and comes back keyed
   * `user_id`, confirmed against the formatted SQL and the raw row.
   */
  async listAllWithUsername(): Promise<McpTokenWithUsernameRow[]> {
    const platform = this.getEntityManager().getPlatform();
    const rows = await this.qb('t')
      .innerJoin('t.user', 'u')
      .select(['t.id', 't.name', 't.token_prefix', 't.created_at', 't.last_used_at', columnRef(platform, 't.user_id'), 'u.username'])
      .orderBy({ 't.created_at': 'desc' })
      .execute<McpTokenWithUsernameRow[]>('all', false);
    return rows.map((row) => ({
      id: row.id,
      name: row.name,
      token_prefix: row.token_prefix,
      created_at: row.created_at ?? null,
      last_used_at: row.last_used_at ?? null,
      user_id: row.user_id,
      username: row.username,
    }));
  }

  /**
   * `SELECT u.id, u.username, u.email, u.role, mt.scope_mode, mt.api_scopes
   *  FROM mcp_tokens mt JOIN users u ON mt.user_id = u.id WHERE
   *  mt.token_hash = ? AND mt.kind = 'api'` (TK11,
   * `verifyApiTokenWithGrant` — **security-sensitive**, bearer auth for the
   * public API). `kind = 'api'` is a literal in the WHERE, same as the
   * legacy statement — this method only ever verifies an API key, never an
   * MCP token, so the filter is not a parameter. Projection root
   * `McpTokens` (`this.qb('mt')`), matching the legacy alias.
   */
  async findGrantByHash(hash: string): Promise<McpTokenGrantRow | null> {
    const row = await this.qb('mt')
      .innerJoin('mt.user', 'u')
      .select(['u.id', 'u.username', 'u.email', 'u.role', 'mt.scope_mode', 'mt.api_scopes'])
      .where({ 'mt.token_hash': hash, 'mt.kind': 'api' })
      .execute<McpTokenGrantRow | undefined>('get', false);
    return row ?? null;
  }

  /**
   * `SELECT u.id, u.username, u.email, u.role FROM mcp_tokens mt JOIN users
   *  u ON mt.user_id = u.id WHERE mt.token_hash = ? AND mt.kind = ?` (TK13,
   * `verifyToken` — **security-sensitive**, every MCP/legacy static-token
   * request). `kind` is part of the WHERE, never a post-filter applied to
   * the result: a token of the wrong kind produces the exact same `null` a
   * nonexistent token would, at the SQL level, not after a JS check — the
   * caller (and a timing measurement) cannot distinguish "no such token"
   * from "real token, wrong door."
   */
  async findUserByHashAndKind(hash: string, kind: string): Promise<McpTokenUserRow | null> {
    const row = await this.qb('mt')
      .innerJoin('mt.user', 'u')
      .select(['u.id', 'u.username', 'u.email', 'u.role'])
      .where({ 'mt.token_hash': hash, 'mt.kind': kind })
      .execute<McpTokenUserRow | undefined>('get', false);
    return row ?? null;
  }

  /**
   * `UPDATE mcp_tokens SET last_used_at = CURRENT_TIMESTAMP WHERE
   *  token_hash = ?` — TK12 (`verifyApiTokenWithGrant`'s fire-and-forget
   * bookkeeping) and TK14 (`verifyToken`'s, same statement text, a separate
   * call site) — ONE method, two callers, same as `deleteById` above.
   * `currentTimestamp(platform)` rather than a hand-spelled `CURRENT_TIMESTAMP`
   * string (byte-identical per `sql-functions.test.ts`'s `SQLF-008`).
   */
  async touchLastUsedByHash(hash: string): Promise<void> {
    const platform = this.getEntityManager().getPlatform();
    await this.nativeUpdate({ token_hash: hash }, { last_used_at: currentTimestamp(platform) });
  }

  /**
   * `DELETE FROM mcp_tokens WHERE user_id = ?` — `AuthService.changePassword`
   * (AU17) and `resetPassword` (AU45), both inside the same transaction as
   * the password write itself (**security-sensitive**: every MCP/API token
   * the user held stops working the moment their password changes). Built
   * here because this table belongs to `nest/tokens`, per the inventory's
   * cross-domain ruling (§6) — Task 5 is the only caller.
   */
  async deleteAllForUser(userId: number): Promise<void> {
    await this.nativeDelete({ user: userId });
  }
}
