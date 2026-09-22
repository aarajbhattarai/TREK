import { afterAll, beforeAll, beforeEach, describe, expect, it } from 'vitest';
import { createHash } from 'crypto';
import { createSnapshotTestDb } from '../../../helpers/db-mock';
import { resetTestDb } from '../../../helpers/test-db';
import { createTestOrm, type TestOrm } from '../../../helpers/test-orm';
import { createMcpToken, createUser } from '../../../helpers/factories';
import { McpTokens } from '../../../../src/db/entities/McpTokens.entity';
import type { McpTokensRepository } from '../../../../src/db/repositories/McpTokens.repository';
import { UnitOfWork } from '../../../../src/nest/database/unit-of-work';

const testDb = createSnapshotTestDb();
let t: TestOrm;
let tokens: McpTokensRepository;

beforeAll(async () => {
  t = await createTestOrm(testDb);
  tokens = t.repo(McpTokens);
});
beforeEach(() => {
  resetTestDb(testDb);
  t.clear();
});
afterAll(async () => {
  await t.close();
  testDb.close();
});

function rawToken(id: number): unknown {
  return testDb.prepare('SELECT * FROM mcp_tokens WHERE id = ?').get(id);
}

describe('McpTokensRepository', () => {
  describe('listByUserAndKind', () => {
    it('MCPTOKREPO-001: scoped to user + kind, ordered by created_at DESC, exact column set', async () => {
      const { user } = createUser(testDb);
      const { user: other } = createUser(testDb);
      const older = createMcpToken(testDb, user.id, { name: 'older', kind: 'mcp' });
      testDb.prepare("UPDATE mcp_tokens SET created_at = '2020-01-01 00:00:00' WHERE id = ?").run(older.id);
      const newer = createMcpToken(testDb, user.id, { name: 'newer', kind: 'mcp' });
      testDb.prepare("UPDATE mcp_tokens SET created_at = '2020-01-02 00:00:00' WHERE id = ?").run(newer.id);
      createMcpToken(testDb, user.id, { name: 'an api key', kind: 'api' });
      createMcpToken(testDb, other.id, { name: 'not mine', kind: 'mcp' });

      const rows = await tokens.listByUserAndKind(user.id, 'mcp');
      expect(rows.map((r) => r.name)).toEqual(['newer', 'older']);
      expect(Object.keys(rows[0]).sort()).toEqual(
        ['api_scopes', 'created_at', 'id', 'last_used_at', 'name', 'scope_mode', 'token_prefix'].sort(),
      );
    });

    it('MCPTOKREPO-002: no tokens for the kind returns an empty array', async () => {
      const { user } = createUser(testDb);
      expect(await tokens.listByUserAndKind(user.id, 'api')).toEqual([]);
    });
  });

  describe('countByUserAndKind', () => {
    it('MCPTOKREPO-003: counts only the matching user + kind', async () => {
      const { user } = createUser(testDb);
      createMcpToken(testDb, user.id, { kind: 'mcp' });
      createMcpToken(testDb, user.id, { kind: 'mcp' });
      createMcpToken(testDb, user.id, { kind: 'api' });
      expect(await tokens.countByUserAndKind(user.id, 'mcp')).toBe(2);
      expect(await tokens.countByUserAndKind(user.id, 'api')).toBe(1);
    });
  });

  describe('insertToken', () => {
    it('MCPTOKREPO-004: inserts and returns exactly the row a legacy re-select would return', async () => {
      const { user } = createUser(testDb);
      const row = await tokens.insertToken({
        user_id: user.id,
        name: 'My Token',
        token_hash: 'hash-value',
        token_prefix: 'trek_abc123',
        kind: 'mcp',
        scope_mode: 'all',
        api_scopes: null,
      });
      expect(row).toStrictEqual(rawToken(row.id));
      expect(row.user_id).toBe(user.id);
      expect(row.name).toBe('My Token');
      expect(row.token_hash).toBe('hash-value');
      expect(row.kind).toBe('mcp');
      expect(row.scope_mode).toBe('all');
      expect(row.api_scopes).toBeNull();
      expect(row.last_used_at).toBeNull();
      expect(typeof row.created_at).toBe('string');
    });

    it('MCPTOKREPO-005: api_scopes is written when narrowed', async () => {
      const { user } = createUser(testDb);
      const row = await tokens.insertToken({
        user_id: user.id,
        name: 'Narrowed',
        token_hash: 'hash-2',
        token_prefix: 'trek_def456',
        kind: 'api',
        scope_mode: 'limited',
        api_scopes: '["stats","trips"]',
      });
      expect(row.scope_mode).toBe('limited');
      expect(row.api_scopes).toBe('["stats","trips"]');
    });
  });

  describe('findBasic', () => {
    it('MCPTOKREPO-006: returns the TK4/TK9 union column set by id', async () => {
      const { user } = createUser(testDb);
      const created = createMcpToken(testDb, user.id, { name: 'lookup-me' });
      const row = await tokens.findBasic(created.id);
      expect(row).toEqual({
        id: created.id,
        user_id: user.id,
        name: 'lookup-me',
        token_prefix: expect.any(String),
        created_at: expect.any(String),
        last_used_at: null,
      });
    });

    it('MCPTOKREPO-007: an unknown id is null', async () => {
      expect(await tokens.findBasic(999999)).toBeNull();
    });

    it('MCPTOKREPO-007b: identity-map regression — sees a raw UPDATE on the same id in the same request', async () => {
      const { user } = createUser(testDb);
      const created = createMcpToken(testDb, user.id, { name: 'before' });
      await tokens.findBasic(created.id); // populate identity map
      testDb.prepare("UPDATE mcp_tokens SET name = 'after' WHERE id = ?").run(created.id);
      const row = await tokens.findBasic(created.id);
      expect(row?.name).toBe('after');
    });
  });

  describe('findOwnedByKind', () => {
    it('MCPTOKREPO-008: matches on id + user + kind', async () => {
      const { user } = createUser(testDb);
      const created = createMcpToken(testDb, user.id, { kind: 'mcp' });
      expect(await tokens.findOwnedByKind(created.id, user.id, 'mcp')).toEqual({ id: created.id });
    });

    it('MCPTOKREPO-009: a different owner is null (ownership scoping)', async () => {
      const { user } = createUser(testDb);
      const { user: other } = createUser(testDb);
      const created = createMcpToken(testDb, user.id, { kind: 'mcp' });
      expect(await tokens.findOwnedByKind(created.id, other.id, 'mcp')).toBeNull();
    });

    it('MCPTOKREPO-010: the wrong kind is null (kind scoping)', async () => {
      const { user } = createUser(testDb);
      const created = createMcpToken(testDb, user.id, { kind: 'mcp' });
      expect(await tokens.findOwnedByKind(created.id, user.id, 'api')).toBeNull();
    });
  });

  describe('deleteById', () => {
    it('MCPTOKREPO-011: deletes the row', async () => {
      const { user } = createUser(testDb);
      const created = createMcpToken(testDb, user.id);
      await tokens.deleteById(created.id);
      expect(rawToken(created.id)).toBeUndefined();
    });
  });

  describe('listAllWithUsername', () => {
    it('MCPTOKREPO-012: spans users, carries the owner username, ordered by created_at DESC', async () => {
      const { user: ada } = createUser(testDb, { username: 'ada' });
      const { user: bob } = createUser(testDb, { username: 'bob' });
      const first = createMcpToken(testDb, ada.id, { name: 'first' });
      testDb.prepare("UPDATE mcp_tokens SET created_at = '2020-01-01 00:00:00' WHERE id = ?").run(first.id);
      const second = createMcpToken(testDb, bob.id, { name: 'second' });
      testDb.prepare("UPDATE mcp_tokens SET created_at = '2020-06-01 00:00:00' WHERE id = ?").run(second.id);

      const rows = await tokens.listAllWithUsername();
      expect(rows.map((r) => r.name)).toEqual(['second', 'first']);
      expect(rows.find((r) => r.name === 'first')).toEqual({
        id: first.id,
        name: 'first',
        token_prefix: expect.any(String),
        created_at: '2020-01-01 00:00:00',
        last_used_at: null,
        user_id: ada.id,
        username: 'ada',
      });
      expect(rows.find((r) => r.name === 'second')?.username).toBe('bob');
    });

    it('MCPTOKREPO-012b: no token_hash leaks through the projection', async () => {
      const { user } = createUser(testDb);
      createMcpToken(testDb, user.id);
      const rows = await tokens.listAllWithUsername();
      expect(rows.every((r) => !('token_hash' in r))).toBe(true);
    });
  });

  describe('findGrantByHash', () => {
    it('MCPTOKREPO-013: an API-kind token resolves the user + grant columns', async () => {
      const { user } = createUser(testDb, { username: 'grant-user' });
      createMcpToken(testDb, user.id, {
        kind: 'api',
        rawToken: 'trek_grant_raw',
        scope_mode: 'limited',
        api_scopes: '["stats"]',
      });
      const hash = createHash('sha256').update('trek_grant_raw').digest('hex');
      const row = await tokens.findGrantByHash(hash);
      expect(row).toEqual({
        id: user.id,
        username: 'grant-user',
        email: user.email,
        role: user.role,
        scope_mode: 'limited',
        api_scopes: '["stats"]',
      });
    });

    it('MCPTOKREPO-014: the same hash under kind=mcp does not resolve — kind is in the WHERE', async () => {
      const { user } = createUser(testDb);
      createMcpToken(testDb, user.id, { kind: 'mcp', rawToken: 'trek_mcp_raw' });
      const hash = createHash('sha256').update('trek_mcp_raw').digest('hex');
      expect(await tokens.findGrantByHash(hash)).toBeNull();
    });

    it('MCPTOKREPO-015: an unknown hash is null', async () => {
      expect(await tokens.findGrantByHash('does-not-exist')).toBeNull();
    });
  });

  describe('findUserByHashAndKind', () => {
    it('MCPTOKREPO-016: a matching hash + kind resolves the user identity columns', async () => {
      const { user } = createUser(testDb, { username: 'verify-user' });
      createMcpToken(testDb, user.id, { kind: 'mcp', rawToken: 'trek_verify_raw' });
      const hash = createHash('sha256').update('trek_verify_raw').digest('hex');
      const row = await tokens.findUserByHashAndKind(hash, 'mcp');
      expect(row).toEqual({ id: user.id, username: 'verify-user', email: user.email, role: user.role });
    });

    it('MCPTOKREPO-017: a real token of the wrong kind is indistinguishable from a missing one', async () => {
      const { user } = createUser(testDb);
      createMcpToken(testDb, user.id, { kind: 'api', rawToken: 'trek_wrong_kind' });
      const hash = createHash('sha256').update('trek_wrong_kind').digest('hex');
      expect(await tokens.findUserByHashAndKind(hash, 'mcp')).toBeNull();
      expect(await tokens.findUserByHashAndKind('completely-unknown-hash', 'mcp')).toBeNull();
    });

    it('MCPTOKREPO-018: an unknown hash is null', async () => {
      expect(await tokens.findUserByHashAndKind('nope', 'api')).toBeNull();
    });
  });

  describe('touchLastUsedByHash', () => {
    it('MCPTOKREPO-019: stamps last_used_at only on the matching row, no other column changes', async () => {
      const { user } = createUser(testDb);
      const target = createMcpToken(testDb, user.id, { rawToken: 'trek_touch_me' });
      const other = createMcpToken(testDb, user.id, { rawToken: 'trek_leave_me' });
      const before = rawToken(target.id) as { name: string; token_hash: string };

      await tokens.touchLastUsedByHash(target.tokenHash);

      const after = rawToken(target.id) as Record<string, unknown>;
      expect(after.last_used_at).not.toBeNull();
      expect(after.name).toBe(before.name);
      expect(after.token_hash).toBe(before.token_hash);
      expect((rawToken(other.id) as { last_used_at: string | null }).last_used_at).toBeNull();
    });

    it('MCPTOKREPO-019b: an unknown hash touches nothing (no error, no row)', async () => {
      await expect(tokens.touchLastUsedByHash('nonexistent')).resolves.toBeUndefined();
    });
  });

  describe('deleteAllForUser', () => {
    it('MCPTOKREPO-020: deletes every mcp_tokens row for the user, both kinds, leaves other users alone', async () => {
      const { user } = createUser(testDb);
      const { user: other } = createUser(testDb);
      createMcpToken(testDb, user.id, { kind: 'mcp' });
      createMcpToken(testDb, user.id, { kind: 'api' });
      const untouched = createMcpToken(testDb, other.id, { kind: 'mcp' });

      await tokens.deleteAllForUser(user.id);

      expect(testDb.prepare('SELECT COUNT(*) c FROM mcp_tokens WHERE user_id = ?').get(user.id)).toEqual({ c: 0 });
      expect(rawToken(untouched.id)).toBeDefined();
    });
  });

  // ---------------------------------------------------------------------
  // Controller ruling on Task 1's review (BLOCKER): a `findOne`/`find` with
  // `fields` + `refresh: true` used to re-snapshot only the selected fields
  // into the SHARED identity map; loading the same row again elsewhere in
  // the request with a different projection merged the two, and a later
  // `nativeUpdate` (which bypasses the identity map) left that merged entity
  // stale — the closing `flush()` of a `uow.transactional` block could then
  // write the stale unselected values back over the `nativeUpdate`. Every
  // entity-hydrating read in this repository now takes
  // `disableIdentityMap: true` instead (never merged anywhere a flush could
  // find it), and `insertToken` writes through `em.insert` rather than
  // `create()` + `persist()` + `flush()`. This is the regression proof.
  // ---------------------------------------------------------------------
  describe('identity-map isolation (disableIdentityMap regression)', () => {
    /**
     * The precise, mutation-proven form of the proof: `disableIdentityMap:
     * true` means the returned entity is never merged into
     * `EntityManager.getUnitOfWork()`'s tracked set at all — checked
     * directly via `getById`, which is the same lookup MikroORM's own
     * `flush()` consults to decide what to write. This is deliberately NOT
     * a black-box "does a stale value get written back" behavioural test:
     * hand-mutation-testing this repository (reverting `findBasic` to
     * `refresh: true` and `findOwnedByKind`/`listByUserAndKind` to no
     * `disableIdentityMap`, five different projection-pairing/nativeUpdate/
     * flush orderings tried by hand) never reproduced a stale write-back on
     * the installed MikroORM 7.2.1 + `better-sqlite3` combination — flush()'s
     * dirty-checking finds nothing to write for an entity nothing ever
     * mutated via `assign()`/direct property set, which is exactly the
     * shape this repository's methods have (`nativeUpdate` only, never
     * `assign()+flush()`, unlike `UsersRepository.patchProfile`'s callers).
     * `getById` is the one assertion that DOES fail on the un-fixed code
     * (verified: reverting `findBasic` to `refresh: true` flips `tracked1`
     * below from `false` to `true`) — the tracking itself is the hazard the
     * ruling targets, whether or not this particular table's call shapes
     * manage to turn it into an observable stale write today.
     */
    it('MCPTOKREPO-021: every entity-hydrating read leaves nothing behind in the shared identity map', async () => {
      const { user } = createUser(testDb);
      const created = createMcpToken(testDb, user.id, { name: 'stays-original' });

      await tokens.findBasic(created.id);
      expect(t.em.getUnitOfWork().getById(McpTokens, created.id)).toBeUndefined();

      await tokens.findOwnedByKind(created.id, user.id, 'mcp');
      expect(t.em.getUnitOfWork().getById(McpTokens, created.id)).toBeUndefined();

      const [listed] = await tokens.listByUserAndKind(user.id, 'mcp');
      expect(t.em.getUnitOfWork().getById(McpTokens, listed.id)).toBeUndefined();
    });

    it('MCPTOKREPO-021b: a nativeUpdate made after an isolated read is never discarded by an unrelated flush', async () => {
      // Belt-and-suspenders behavioural pin alongside MCPTOKREPO-021's
      // structural proof above: even though hand mutation-testing could not
      // turn the un-isolated shape into an observable failure here (see that
      // test's docstring), the fixed code's actual end-to-end behaviour —
      // read, nativeUpdate, flush, still correct — is still worth pinning.
      const { user } = createUser(testDb);
      const created = createMcpToken(testDb, user.id, { name: 'stays-original' });
      const uow = new UnitOfWork(t.em);

      await uow.transactional(async () => {
        const basic = await tokens.findBasic(created.id);
        expect(basic?.last_used_at).toBeNull();
        await tokens.findOwnedByKind(created.id, user.id, 'mcp');
        await tokens.touchLastUsedByHash(created.tokenHash);
      });

      const row = rawToken(created.id) as { last_used_at: string | null; name: string };
      expect(row.last_used_at).not.toBeNull();
      expect(row.name).toBe('stays-original');
    });

    it('MCPTOKREPO-022: insertToken never flushes an unrelated dirty entity sitting in the shared identity map', async () => {
      // A create()+persist()+flush() shape would flush the WHOLE unit of
      // work of the shared context-resolving EntityManager, not just the
      // row being inserted — including any other managed entity's unflushed
      // in-memory change (D4/AuditLogRepository's own precedent for this
      // exact hazard). `em.insert()` fires one native INSERT with no such
      // side effect. Proof: load a DIFFERENT row through the plain (merging)
      // EntityManager API, mutate it in memory only, call `insertToken`, and
      // confirm the mutation was never written — nothing here ever called
      // `flush()` on that dirty entity's context.
      const { user } = createUser(testDb);
      const untouched = createMcpToken(testDb, user.id, { name: 'do-not-flush-me' });
      const dirty = await t.em.findOneOrFail(McpTokens, { id: untouched.id });
      dirty.name = 'mutated-in-memory-only';

      await tokens.insertToken({
        user_id: user.id,
        name: 'the actual insert',
        token_hash: 'insert-no-side-effect-hash',
        token_prefix: 'trek_txprefi',
        kind: 'mcp',
        scope_mode: 'all',
        api_scopes: null,
      });

      expect((rawToken(untouched.id) as { name: string }).name).toBe('do-not-flush-me');
      expect(testDb.prepare('SELECT id FROM mcp_tokens WHERE token_hash = ?').get('insert-no-side-effect-hash')).toBeDefined();
    });
  });
});
