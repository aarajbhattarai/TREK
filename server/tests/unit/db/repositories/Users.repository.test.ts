import { afterAll, beforeAll, beforeEach, describe, expect, it, vi } from 'vitest';
import { createSnapshotTestDb } from '../../../helpers/db-mock';
import { resetTestDb } from '../../../helpers/test-db';
import { createTestOrm, type TestOrm } from '../../../helpers/test-orm';
import { createUser, createAdmin } from '../../../helpers/factories';
import { Users } from '../../../../src/db/entities/Users.entity';
import type { UsersRepository } from '../../../../src/db/repositories/Users.repository';

const testDb = createSnapshotTestDb();
let t: TestOrm;
let users: UsersRepository;

beforeAll(async () => {
  t = await createTestOrm(testDb);
  users = t.repo(Users);
});
beforeEach(() => { resetTestDb(testDb); t.clear(); });
afterAll(async () => { await t.close(); testDb.close(); });

/**
 * Runs `fn` while counting queries MikroORM actually issues over the shared
 * connection — see `AppSettings.repository.test.ts` for why a value-only
 * assertion can't catch the identity-map bug I1 fixed (Task 0 review).
 */
async function withQueryCount<T>(fn: () => Promise<T>): Promise<{ value: T; queries: number }> {
  const connection = t.orm.em.getConnection();
  const spy = vi.spyOn(connection, 'execute');
  try {
    const value = await fn();
    return { value, queries: spy.mock.calls.length };
  } finally {
    spy.mockRestore();
  }
}

describe('UsersRepository', () => {
  it('USERSREPO-001: getEmail reads the stored email, matching SELECT email FROM users WHERE id = ?', async () => {
    const { user } = createUser(testDb, { email: 'someone@example.com' });
    expect(await users.getEmail(user.id)).toBe('someone@example.com');
    const raw = testDb.prepare('SELECT email FROM users WHERE id = ?').get(user.id) as { email: string };
    expect(await users.getEmail(user.id)).toBe(raw.email);
  });

  it('USERSREPO-002: getEmail returns null for a user id that does not exist', async () => {
    expect(await users.getEmail(999999)).toBeNull();
  });

  it('USERSREPO-003: getApiKeyColumn reads maps_api_key, matching SELECT maps_api_key FROM users WHERE id = ?', async () => {
    const { user } = createUser(testDb);
    testDb.prepare('UPDATE users SET maps_api_key = ? WHERE id = ?').run('encrypted-maps-key', user.id);
    expect(await users.getApiKeyColumn(user.id, 'maps_api_key')).toBe('encrypted-maps-key');
  });

  it('USERSREPO-004: getApiKeyColumn reads unsplash_api_key, not the other two columns', async () => {
    const { user } = createUser(testDb);
    testDb.prepare('UPDATE users SET maps_api_key = ?, unsplash_api_key = ?, amap_api_key = ? WHERE id = ?')
      .run('maps-value', 'unsplash-value', 'amap-value', user.id);
    expect(await users.getApiKeyColumn(user.id, 'unsplash_api_key')).toBe('unsplash-value');
  });

  it('USERSREPO-005: getApiKeyColumn reads amap_api_key', async () => {
    const { user } = createUser(testDb);
    testDb.prepare('UPDATE users SET amap_api_key = ? WHERE id = ?').run('amap-value', user.id);
    expect(await users.getApiKeyColumn(user.id, 'amap_api_key')).toBe('amap-value');
  });

  it('USERSREPO-006: getApiKeyColumn returns null for an unset column and for a missing user', async () => {
    const { user } = createUser(testDb);
    expect(await users.getApiKeyColumn(user.id, 'maps_api_key')).toBeNull();
    expect(await users.getApiKeyColumn(999999, 'maps_api_key')).toBeNull();
  });

  // I1 (Task 0 review): getEmail/getApiKeyColumn are primary-key findOne
  // calls, which MikroORM answers from the identity map on a repeat call
  // unless `refresh: true` is set — invisible to a raw UPDATE on the same
  // user id inside the same request. Pins the fix at one query each.
  describe('getEmail/getApiKeyColumn see a raw UPDATE on the same user in the same request (I1, identity-map regression)', () => {
    it('USERSREPO-007: a raw UPDATE users SET email then getEmail reads the new email, in one query', async () => {
      const { user } = createUser(testDb, { email: 'old@example.com' });
      expect(await users.getEmail(user.id)).toBe('old@example.com'); // populate the identity map
      testDb.prepare('UPDATE users SET email = ? WHERE id = ?').run('new@example.com', user.id);
      const { value, queries } = await withQueryCount(() => users.getEmail(user.id));
      expect(value).toBe('new@example.com');
      expect(queries).toBe(1);
    });

    it('USERSREPO-008: a raw UPDATE users SET maps_api_key then getApiKeyColumn reads the new value, in one query', async () => {
      const { user } = createUser(testDb);
      testDb.prepare('UPDATE users SET maps_api_key = ? WHERE id = ?').run('old-key', user.id);
      expect(await users.getApiKeyColumn(user.id, 'maps_api_key')).toBe('old-key'); // populate the identity map
      testDb.prepare('UPDATE users SET maps_api_key = ? WHERE id = ?').run('new-key', user.id);
      const { value, queries } = await withQueryCount(() => users.getApiKeyColumn(user.id, 'maps_api_key'));
      expect(value).toBe('new-key');
      expect(queries).toBe(1);
    });
  });

  // ---------------------------------------------------------------------
  // Plan 3b Task 1 — every users-table method the auth/oidc/oauth/tokens
  // cluster needs (see Users.repository.ts for the legacy-statement mapping
  // per method). One `it` (or a focused group) per method, on real rows.
  // ---------------------------------------------------------------------

  it('USERSREPO-009: findByIdWithPasswordVersion (JV1) reads id/username/email/role/password_version', async () => {
    const { user } = createUser(testDb);
    testDb.prepare('UPDATE users SET password_version = 3 WHERE id = ?').run(user.id);
    const row = await users.findByIdWithPasswordVersion(user.id);
    expect(row).toEqual({ id: user.id, username: user.username, email: user.email, role: 'user', password_version: 3 });
    expect(await users.findByIdWithPasswordVersion(999999)).toBeNull();
  });

  it('USERSREPO-010: getPasswordVersion reads password_version, null for a missing user', async () => {
    const { user } = createUser(testDb);
    expect(await users.getPasswordVersion(user.id)).toBe(0);
    testDb.prepare('UPDATE users SET password_version = 7 WHERE id = ?').run(user.id);
    expect(await users.getPasswordVersion(user.id)).toBe(7);
    expect(await users.getPasswordVersion(999999)).toBeNull();
  });

  describe('countNonGuest (AU4/AU7/O10) — is_guest is INTEGER NOT NULL DEFAULT 0, never observed NULL', () => {
    it('USERSREPO-011: counts only non-guest users', async () => {
      createUser(testDb);
      createUser(testDb);
      const { user: guest } = createUser(testDb);
      testDb.prepare('UPDATE users SET is_guest = 1 WHERE id = ?').run(guest.id);
      expect(await users.countNonGuest()).toBe(2);
    });

    it('USERSREPO-012: a NULL is_guest row cannot exist — the column is NOT NULL DEFAULT 0 (verified against the baseline + guest-members migrations), so a direct INSERT that omits the column, or an explicit NULL, both resolve to 0, never leaving a row this filter would miscount', () => {
      testDb.prepare('INSERT INTO users (username, email, password_hash, role) VALUES (?, ?, ?, ?)').run('nog', 'nog@test.example.com', 'x', 'user');
      const stored = testDb.prepare("SELECT is_guest FROM users WHERE username = 'nog'").get() as { is_guest: number };
      expect(stored.is_guest).toBe(0); // the DEFAULT 0, not a nullable column silently coercing
      expect(() => testDb.prepare('UPDATE users SET is_guest = NULL WHERE username = ?').run('nog')).toThrow(/NOT NULL constraint failed/);
    });
  });

  it('USERSREPO-013: findAdminNeedingPasswordChange finds an admin flagged must_change_password, ignores a matching non-admin or an unflagged admin', async () => {
    expect(await users.findAdminNeedingPasswordChange()).toBeNull();
    const { user: plainAdmin } = createAdmin(testDb);
    expect(await users.findAdminNeedingPasswordChange()).toBeNull();
    const { user: flaggedUser } = createUser(testDb);
    testDb.prepare('UPDATE users SET must_change_password = 1 WHERE id = ?').run(flaggedUser.id);
    expect(await users.findAdminNeedingPasswordChange()).toBeNull(); // not an admin
    testDb.prepare('UPDATE users SET must_change_password = 1 WHERE id = ?').run(plainAdmin.id);
    expect(await users.findAdminNeedingPasswordChange()).toBe(plainAdmin.id);
  });

  describe('findIdByEmailOrUsernameCI (AU9)', () => {
    it('USERSREPO-014: matches by email OR username, case-insensitively, excluding guests', async () => {
      const { user } = createUser(testDb, { email: 'Someone@Example.com', username: 'SomeoneName' });
      expect(await users.findIdByEmailOrUsernameCI('someone@example.com', 'no-match')).toBe(user.id);
      expect(await users.findIdByEmailOrUsernameCI('no-match@example.com', 'someonename')).toBe(user.id);
      expect(await users.findIdByEmailOrUsernameCI('nope@example.com', 'nope')).toBeNull();
    });

    it('USERSREPO-015: excludes a guest even on an exact match', async () => {
      const { user } = createUser(testDb, { email: 'guest1@example.com', username: 'guest1' });
      testDb.prepare('UPDATE users SET is_guest = 1 WHERE id = ?').run(user.id);
      expect(await users.findIdByEmailOrUsernameCI('guest1@example.com', 'guest1')).toBeNull();
    });
  });

  describe('insertUser (AU10/O14)', () => {
    it('USERSREPO-016: local registration shape (AU10) — no oidc/avatar columns', async () => {
      const row = await users.insertUser({
        username: 'localuser',
        email: 'local@example.com',
        password_hash: 'hashed',
        role: 'user',
        first_seen_version: '1.2.3',
      });
      expect(row.username).toBe('localuser');
      expect(row.email).toBe('local@example.com');
      expect(row.password_hash).toBe('hashed');
      expect(row.role).toBe('user');
      expect(row.first_seen_version).toBe('1.2.3');
      expect(row.login_count).toBe(0);
      expect(row.oidc_sub).toBeNull();
      expect(row.oidc_issuer).toBeNull();
      expect(row.avatar).toBeNull();
      expect(row.created_at).not.toBeNull();
      const raw = testDb.prepare('SELECT * FROM users WHERE id = ?').get(row.id);
      expect(raw).toMatchObject({ username: 'localuser', email: 'local@example.com', role: 'user', login_count: 0 });
    });

    it('USERSREPO-017: SSO registration shape (O14) — oidc_sub/oidc_issuer/avatar set', async () => {
      const row = await users.insertUser({
        username: 'ssouser',
        email: 'sso@example.com',
        password_hash: 'unusable-hash',
        role: 'admin',
        first_seen_version: '1.2.3',
        oidc_sub: 'sub-123',
        oidc_issuer: 'https://idp.example.com',
        avatar: 'https://idp.example.com/pic.png',
      });
      expect(row.oidc_sub).toBe('sub-123');
      expect(row.oidc_issuer).toBe('https://idp.example.com');
      expect(row.avatar).toBe('https://idp.example.com/pic.png');
      expect(row.role).toBe('admin');
      expect(row.login_count).toBe(0);
    });
  });

  describe('findByEmailCI (AU12/O4)', () => {
    it('USERSREPO-018: matches case-insensitively, excludes guests, returns the full row', async () => {
      const { user } = createUser(testDb, { email: 'Case.Test@Example.com' });
      const row = await users.findByEmailCI('case.test@example.com');
      expect(row?.id).toBe(user.id);
      expect(row?.username).toBe(user.username);
      expect(await users.findByEmailCI('nope@example.com')).toBeNull();
    });

    it('USERSREPO-019: a guest with a matching email is not returned', async () => {
      const { user } = createUser(testDb, { email: 'guest2@example.com' });
      testDb.prepare('UPDATE users SET is_guest = 1 WHERE id = ?').run(user.id);
      expect(await users.findByEmailCI('guest2@example.com')).toBeNull();
    });
  });

  describe('touchLastLogin (AU13/AU34/AU35/PK12/O16)', () => {
    it('USERSREPO-020: bumps login_count by exactly 1 and stamps last_login, in one statement', async () => {
      const { user } = createUser(testDb);
      testDb.prepare('UPDATE users SET login_count = 5 WHERE id = ?').run(user.id);
      await users.touchLastLogin(user.id);
      const row = testDb.prepare('SELECT login_count, last_login FROM users WHERE id = ?').get(user.id) as { login_count: number; last_login: string };
      expect(row.login_count).toBe(6);
      expect(row.last_login).toMatch(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/);
    });

    it('USERSREPO-021: two concurrent calls both land — +2, never +1 (no read-modify-write)', async () => {
      const { user } = createUser(testDb);
      testDb.prepare('UPDATE users SET login_count = 10 WHERE id = ?').run(user.id);
      await Promise.all([users.touchLastLogin(user.id), users.touchLastLogin(user.id)]);
      const row = testDb.prepare('SELECT login_count FROM users WHERE id = ?').get(user.id) as { login_count: number };
      expect(row.login_count).toBe(12);
    });
  });

  it('USERSREPO-022: findMeRow (AU14) reads the /api/auth/me projection', async () => {
    const { user } = createUser(testDb);
    testDb.prepare('UPDATE users SET avatar = ?, mfa_enabled = 1, must_change_password = 1 WHERE id = ?').run('pic.png', user.id);
    const row = await users.findMeRow(user.id);
    expect(row).toMatchObject({ id: user.id, username: user.username, email: user.email, role: 'user', avatar: 'pic.png', mfa_enabled: 1, must_change_password: 1 });
    expect(row?.created_at).not.toBeNull();
    expect(await users.findMeRow(999999)).toBeNull();
  });

  it('USERSREPO-023: getPasswordHashAndVersion (AU15) reads both columns together', async () => {
    const { user, password: _password } = createUser(testDb);
    testDb.prepare('UPDATE users SET password_version = 2 WHERE id = ?').run(user.id);
    const row = await users.getPasswordHashAndVersion(user.id);
    expect(row?.password_hash).toBe(user.password_hash);
    expect(row?.password_version).toBe(2);
  });

  it('USERSREPO-024: setPassword (AU16/AU43) writes hash+version, clears must_change_password, stamps updated_at', async () => {
    const { user } = createUser(testDb);
    testDb.prepare('UPDATE users SET must_change_password = 1 WHERE id = ?').run(user.id);
    await users.setPassword(user.id, 'new-hash', 5);
    const row = testDb.prepare('SELECT password_hash, password_version, must_change_password, updated_at FROM users WHERE id = ?').get(user.id) as {
      password_hash: string; password_version: number; must_change_password: number; updated_at: string;
    };
    expect(row.password_hash).toBe('new-hash');
    expect(row.password_version).toBe(5);
    expect(row.must_change_password).toBe(0);
    expect(row.updated_at).toMatch(/^\d{4}-\d{2}-\d{2}/);
  });

  it('USERSREPO-025: countAdmins (AU19/O7) counts only role=admin', async () => {
    createUser(testDb);
    createAdmin(testDb);
    createAdmin(testDb);
    expect(await users.countAdmins()).toBe(2);
  });

  it('USERSREPO-026: getRole (AU20/AU22) reads the role column', async () => {
    const { user } = createAdmin(testDb);
    expect(await users.getRole(user.id)).toBe('admin');
    expect(await users.getRole(999999)).toBeNull();
  });

  describe('getMfaEnabled (AU23/AU27/MP2) — distinguishes "no row" from "row present, mfa_enabled unset"', () => {
    it('USERSREPO-027: returns the row wrapper when the user exists', async () => {
      const { user } = createUser(testDb);
      expect(await users.getMfaEnabled(user.id)).toEqual({ mfa_enabled: 0 });
      testDb.prepare('UPDATE users SET mfa_enabled = 1 WHERE id = ?').run(user.id);
      expect(await users.getMfaEnabled(user.id)).toEqual({ mfa_enabled: 1 });
    });

    it('USERSREPO-028: returns null (not a row with a null field) when the user does not exist', async () => {
      expect(await users.getMfaEnabled(999999)).toBeNull();
    });
  });

  it('USERSREPO-029: enableMfa (AU28) sets mfa_enabled=1, writes the already-encrypted secret and codes, stamps updated_at', async () => {
    const { user } = createUser(testDb);
    await users.enableMfa(user.id, 'encrypted-secret', '["hash1","hash2"]');
    const row = testDb.prepare('SELECT mfa_enabled, mfa_secret, mfa_backup_codes, updated_at FROM users WHERE id = ?').get(user.id) as {
      mfa_enabled: number; mfa_secret: string; mfa_backup_codes: string; updated_at: string;
    };
    expect(row.mfa_enabled).toBe(1);
    expect(row.mfa_secret).toBe('encrypted-secret');
    expect(row.mfa_backup_codes).toBe('["hash1","hash2"]');
    expect(row.updated_at).toMatch(/^\d{4}-\d{2}-\d{2}/);
  });

  describe('findById (AU30/AU32/PK4/PK10/O15) — full row, PK-only findOne', () => {
    it('USERSREPO-030: reads every scalar column', async () => {
      const { user } = createUser(testDb);
      const row = await users.findById(user.id);
      expect(row?.id).toBe(user.id);
      expect(row?.username).toBe(user.username);
      expect(row?.password_hash).toBe(user.password_hash);
      expect(await users.findById(999999)).toBeNull();
    });

    it('USERSREPO-031: sees a raw UPDATE on the same id in the same request (I1, identity-map regression)', async () => {
      const { user } = createUser(testDb, { username: 'before' });
      await users.findById(user.id); // populate the identity map
      testDb.prepare('UPDATE users SET username = ? WHERE id = ?').run('after', user.id);
      const { value, queries } = await withQueryCount(() => users.findById(user.id));
      expect(value?.username).toBe('after');
      expect(queries).toBe(1);
    });
  });

  it('USERSREPO-032: disableMfa (AU31) clears mfa_enabled/secret/codes, stamps updated_at', async () => {
    const { user } = createUser(testDb);
    testDb.prepare('UPDATE users SET mfa_enabled = 1, mfa_secret = ?, mfa_backup_codes = ? WHERE id = ?').run('s', 'c', user.id);
    await users.disableMfa(user.id);
    const row = testDb.prepare('SELECT mfa_enabled, mfa_secret, mfa_backup_codes, updated_at FROM users WHERE id = ?').get(user.id) as {
      mfa_enabled: number; mfa_secret: string | null; mfa_backup_codes: string | null; updated_at: string;
    };
    expect(row.mfa_enabled).toBe(0);
    expect(row.mfa_secret).toBeNull();
    expect(row.mfa_backup_codes).toBeNull();
    expect(row.updated_at).toMatch(/^\d{4}-\d{2}-\d{2}/);
  });

  describe('setBackupCodesAndTouch (AU33) vs setBackupCodes (AU44) — one stamps updated_at, the other does not', () => {
    it('USERSREPO-033: setBackupCodesAndTouch writes codes and stamps updated_at', async () => {
      const { user } = createUser(testDb);
      testDb.prepare("UPDATE users SET updated_at = '2020-01-01 00:00:00' WHERE id = ?").run(user.id);
      await users.setBackupCodesAndTouch(user.id, '["a"]');
      const row = testDb.prepare('SELECT mfa_backup_codes, updated_at FROM users WHERE id = ?').get(user.id) as { mfa_backup_codes: string; updated_at: string };
      expect(row.mfa_backup_codes).toBe('["a"]');
      expect(row.updated_at).not.toBe('2020-01-01 00:00:00');
    });

    it('USERSREPO-034: setBackupCodes writes codes WITHOUT touching updated_at', async () => {
      const { user } = createUser(testDb);
      testDb.prepare("UPDATE users SET updated_at = '2020-01-01 00:00:00' WHERE id = ?").run(user.id);
      await users.setBackupCodes(user.id, '["b"]');
      const row = testDb.prepare('SELECT mfa_backup_codes, updated_at FROM users WHERE id = ?').get(user.id) as { mfa_backup_codes: string; updated_at: string };
      expect(row.mfa_backup_codes).toBe('["b"]');
      expect(row.updated_at).toBe('2020-01-01 00:00:00');
    });
  });

  describe('findForPasswordReset (AU36) — case-SENSITIVE email, unlike every other email lookup here', () => {
    it('USERSREPO-035: matches the exact case only', async () => {
      const { user } = createUser(testDb, { email: 'Exact@Example.com' });
      const row = await users.findForPasswordReset('Exact@Example.com');
      expect(row?.id).toBe(user.id);
      expect(await users.findForPasswordReset('exact@example.com')).toBeNull(); // no LOWER() in the legacy statement
    });

    it('USERSREPO-036: excludes a guest', async () => {
      const { user } = createUser(testDb, { email: 'guest3@example.com' });
      testDb.prepare('UPDATE users SET is_guest = 1 WHERE id = ?').run(user.id);
      expect(await users.findForPasswordReset('guest3@example.com')).toBeNull();
    });
  });

  it('USERSREPO-037: findResetTarget (AU40) reads the reset-branch projection', async () => {
    const { user } = createUser(testDb);
    testDb.prepare('UPDATE users SET mfa_enabled = 1, mfa_secret = ?, mfa_backup_codes = ?, password_version = 4 WHERE id = ?').run('s', 'c', user.id);
    const row = await users.findResetTarget(user.id);
    expect(row).toEqual({ id: user.id, email: user.email, mfa_enabled: 1, mfa_secret: 's', mfa_backup_codes: 'c', password_version: 4 });
  });

  it('USERSREPO-038: getPasswordHash (PK15) reads password_hash', async () => {
    const { user } = createUser(testDb);
    expect(await users.getPasswordHash(user.id)).toBe(user.password_hash);
    expect(await users.getPasswordHash(999999)).toBeNull();
  });

  it('USERSREPO-039: findIdAndEmail (PK17) reads id+email', async () => {
    const { user } = createUser(testDb);
    expect(await users.findIdAndEmail(user.id)).toEqual({ id: user.id, email: user.email });
  });

  describe('findByOidcIdentity (O3)', () => {
    it('USERSREPO-040: matches on the (sub, issuer) pair', async () => {
      const { user } = createUser(testDb);
      testDb.prepare('UPDATE users SET oidc_sub = ?, oidc_issuer = ? WHERE id = ?').run('sub-1', 'https://idp.example.com', user.id);
      const row = await users.findByOidcIdentity('sub-1', 'https://idp.example.com');
      expect(row?.id).toBe(user.id);
      expect(await users.findByOidcIdentity('sub-1', 'https://other-idp.example.com')).toBeNull();
    });
  });

  it('USERSREPO-041: linkOidcIdentity (O5/O6) writes sub+issuer WITHOUT touching updated_at', async () => {
    const { user } = createUser(testDb);
    testDb.prepare("UPDATE users SET updated_at = '2020-01-01 00:00:00' WHERE id = ?").run(user.id);
    await users.linkOidcIdentity(user.id, 'sub-2', 'https://idp2.example.com');
    const row = testDb.prepare('SELECT oidc_sub, oidc_issuer, updated_at FROM users WHERE id = ?').get(user.id) as {
      oidc_sub: string; oidc_issuer: string; updated_at: string;
    };
    expect(row.oidc_sub).toBe('sub-2');
    expect(row.oidc_issuer).toBe('https://idp2.example.com');
    expect(row.updated_at).toBe('2020-01-01 00:00:00');
  });

  it('USERSREPO-042: setRole (O8) writes role WITHOUT touching updated_at', async () => {
    const { user } = createUser(testDb);
    testDb.prepare("UPDATE users SET updated_at = '2020-01-01 00:00:00' WHERE id = ?").run(user.id);
    await users.setRole(user.id, 'admin');
    const row = testDb.prepare('SELECT role, updated_at FROM users WHERE id = ?').get(user.id) as { role: string; updated_at: string };
    expect(row.role).toBe('admin');
    expect(row.updated_at).toBe('2020-01-01 00:00:00');
  });

  it('USERSREPO-043: setAvatarRaw (O9) writes avatar WITHOUT touching updated_at, unlike setAvatar', async () => {
    const { user } = createUser(testDb);
    testDb.prepare("UPDATE users SET updated_at = '2020-01-01 00:00:00' WHERE id = ?").run(user.id);
    await users.setAvatarRaw(user.id, 'https://idp.example.com/pic.png');
    const row = testDb.prepare('SELECT avatar, updated_at FROM users WHERE id = ?').get(user.id) as { avatar: string; updated_at: string };
    expect(row.avatar).toBe('https://idp.example.com/pic.png');
    expect(row.updated_at).toBe('2020-01-01 00:00:00');
  });

  describe('findIdByUsernameCI (UP5) vs findIdByUsernameCIAny (O12) — different WHERE, two methods', () => {
    it('USERSREPO-044: findIdByUsernameCI excludes the given id and any guest', async () => {
      const { user: a } = createUser(testDb, { username: 'DupeName' });
      const { user: b } = createUser(testDb, { username: 'other' });
      expect(await users.findIdByUsernameCI('dupename', b.id)).toBe(a.id);
      expect(await users.findIdByUsernameCI('dupename', a.id)).toBeNull(); // excludes self
      testDb.prepare('UPDATE users SET is_guest = 1 WHERE id = ?').run(a.id);
      expect(await users.findIdByUsernameCI('dupename', b.id)).toBeNull(); // guest excluded
    });

    it('USERSREPO-045: findIdByUsernameCIAny has no exclude and no guest filter', async () => {
      const { user } = createUser(testDb, { username: 'AnyName' });
      testDb.prepare('UPDATE users SET is_guest = 1 WHERE id = ?').run(user.id);
      expect(await users.findIdByUsernameCIAny('anyname')).toBe(user.id); // a guest still matches here
    });
  });

  it('USERSREPO-046: getApiKeyColumns (UP1) reads role + the four key columns', async () => {
    const { user } = createAdmin(testDb);
    testDb.prepare('UPDATE users SET maps_api_key = ?, openweather_api_key = ?, unsplash_api_key = ?, amap_api_key = ? WHERE id = ?')
      .run('m', 'o', 'u', 'a', user.id);
    expect(await users.getApiKeyColumns(user.id)).toEqual({ role: 'admin', maps_api_key: 'm', openweather_api_key: 'o', unsplash_api_key: 'u', amap_api_key: 'a' });
  });

  it('USERSREPO-047: updateMapsKey (UP2) writes maps_api_key + updated_at', async () => {
    const { user } = createUser(testDb);
    await users.updateMapsKey(user.id, 'encrypted');
    const row = testDb.prepare('SELECT maps_api_key, updated_at FROM users WHERE id = ?').get(user.id) as { maps_api_key: string; updated_at: string };
    expect(row.maps_api_key).toBe('encrypted');
    expect(row.updated_at).toMatch(/^\d{4}-\d{2}-\d{2}/);
  });

  it('USERSREPO-048: updateApiKeys (UP3) writes all four columns + updated_at in one statement', async () => {
    const { user } = createUser(testDb);
    await users.updateApiKeys(user.id, { maps_api_key: 'm2', openweather_api_key: 'o2', unsplash_api_key: 'u2', amap_api_key: null });
    const row = testDb.prepare('SELECT maps_api_key, openweather_api_key, unsplash_api_key, amap_api_key, updated_at FROM users WHERE id = ?').get(user.id) as Record<string, unknown>;
    expect(row).toMatchObject({ maps_api_key: 'm2', openweather_api_key: 'o2', unsplash_api_key: 'u2', amap_api_key: null });
    expect(row.updated_at).toMatch(/^\d{4}-\d{2}-\d{2}/);
  });

  it('USERSREPO-049: findProfileWithKeys (UP4/UP8) reads the profile-with-keys projection', async () => {
    const { user } = createUser(testDb);
    testDb.prepare('UPDATE users SET maps_api_key = ?, mfa_enabled = 1 WHERE id = ?').run('m', user.id);
    const row = await users.findProfileWithKeys(user.id);
    expect(row).toMatchObject({ id: user.id, username: user.username, email: user.email, role: 'user', maps_api_key: 'm', mfa_enabled: 1 });
  });

  it('USERSREPO-050: findIdByEmailCI (UP6) matches case-insensitively, excludes self and guests', async () => {
    const { user: a } = createUser(testDb, { email: 'Dup@Example.com' });
    const { user: b } = createUser(testDb, { email: 'other@example.com' });
    expect(await users.findIdByEmailCI('dup@example.com', b.id)).toBe(a.id);
    expect(await users.findIdByEmailCI('dup@example.com', a.id)).toBeNull();
  });

  it('USERSREPO-051: patchProfile (UP7) writes only the given bounded columns + updated_at, in one statement', async () => {
    const { user } = createUser(testDb, { username: 'patchme', email: 'patchme@example.com' });
    await users.patchProfile(user.id, { username: 'patched', maps_api_key: 'newkey' });
    const row = testDb.prepare('SELECT username, email, maps_api_key, updated_at FROM users WHERE id = ?').get(user.id) as Record<string, unknown>;
    expect(row.username).toBe('patched');
    expect(row.email).toBe('patchme@example.com'); // untouched — not in `changes`
    expect(row.maps_api_key).toBe('newkey');
    expect(row.updated_at).toMatch(/^\d{4}-\d{2}-\d{2}/);
  });

  describe('getAvatar (UP9/UP12) / setAvatar (UP10/UP13)', () => {
    it('USERSREPO-052: getAvatar reads the avatar column', async () => {
      const { user } = createUser(testDb);
      expect(await users.getAvatar(user.id)).toBeNull();
      testDb.prepare('UPDATE users SET avatar = ? WHERE id = ?').run('pic.png', user.id);
      expect(await users.getAvatar(user.id)).toBe('pic.png');
    });

    it('USERSREPO-053: setAvatar writes avatar + updated_at (both a filename and NULL for delete)', async () => {
      const { user } = createUser(testDb);
      await users.setAvatar(user.id, 'new.png');
      let row = testDb.prepare('SELECT avatar, updated_at FROM users WHERE id = ?').get(user.id) as { avatar: string; updated_at: string };
      expect(row.avatar).toBe('new.png');
      expect(row.updated_at).toMatch(/^\d{4}-\d{2}-\d{2}/);

      testDb.prepare("UPDATE users SET updated_at = '2020-01-01 00:00:00' WHERE id = ?").run(user.id);
      await users.setAvatar(user.id, null);
      row = testDb.prepare('SELECT avatar, updated_at FROM users WHERE id = ?').get(user.id) as { avatar: string | null; updated_at: string };
      expect(row.avatar).toBeNull();
      expect(row.updated_at).not.toBe('2020-01-01 00:00:00');
    });
  });

  it('USERSREPO-054: findProfileBasic (UP11) reads id/username/email/role/avatar', async () => {
    const { user } = createUser(testDb);
    testDb.prepare('UPDATE users SET avatar = ? WHERE id = ?').run('a.png', user.id);
    expect(await users.findProfileBasic(user.id)).toEqual({ id: user.id, username: user.username, email: user.email, role: 'user', avatar: 'a.png' });
  });

  describe('listOthersNonGuest (UP14)', () => {
    it('USERSREPO-055: excludes the given id and every guest, ordered by username', async () => {
      const { user: me } = createUser(testDb, { username: 'me' });
      const { user: bravo } = createUser(testDb, { username: 'bravo' });
      const { user: alpha } = createUser(testDb, { username: 'alpha' });
      const { user: guest } = createUser(testDb, { username: 'zzz-guest' });
      testDb.prepare('UPDATE users SET is_guest = 1 WHERE id = ?').run(guest.id);
      const rows = await users.listOthersNonGuest(me.id);
      expect(rows.map((r) => r.id)).toEqual([alpha.id, bravo.id]);
    });
  });

  it('USERSREPO-056: getRoleAndWeatherKey (UP15) reads role + openweather_api_key', async () => {
    const { user } = createAdmin(testDb);
    testDb.prepare('UPDATE users SET openweather_api_key = ? WHERE id = ?').run('w', user.id);
    expect(await users.getRoleAndWeatherKey(user.id)).toEqual({ role: 'admin', openweather_api_key: 'w' });
  });
});
