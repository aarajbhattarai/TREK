/**
 * First-run admin seeding — the live MikroORM `AdminSeeder` (`db/seeders/AdminSeeder.ts`),
 * not the retired `db/seeds.ts::seedAdminAccount` this file used to test (that function
 * has no production caller any more — `db/orm.ts`'s own comment says it "replaces
 * createTables() → runMigrations() → runSeeds()"). Same behavior, same env reads
 * (`readEnv().adminBootstrap`), redirected to the seeder that actually runs at boot.
 *
 * Covers the #1339 fix: ADMIN_EMAIL/ADMIN_PASSWORD only take effect on first run
 * (empty database). Setting them once a user exists must no longer be silent — it
 * has to warn — and a partial config (only one of the two) must warn too instead
 * of quietly falling back to a generated password.
 */
import { AdminSeeder } from '../../../src/db/seeders/AdminSeeder';
import { createSnapshotTestDb } from '../../helpers/db-mock';
import { createTestOrm, type TestOrm } from '../../helpers/test-orm';

import type Database from 'better-sqlite3';
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';

const ENV_KEYS = ['ADMIN_EMAIL', 'ADMIN_PASSWORD', 'DEMO_MODE', 'OIDC_ONLY', 'OIDC_ISSUER', 'OIDC_CLIENT_ID'];

function countUsers(db: Database.Database): number {
  return (db.prepare('SELECT COUNT(*) as c FROM users').get() as { c: number }).c;
}

function insertExistingUser(db: Database.Database): void {
  db.prepare(
    "INSERT INTO users (username, email, password_hash, role) VALUES ('admin', 'admin@trek.local', 'x', 'admin')",
  ).run();
}

describe('AdminSeeder — first-run admin', () => {
  let db: Database.Database;
  let t: TestOrm;
  let saved: Record<string, string | undefined>;

  beforeEach(async () => {
    db = createSnapshotTestDb();
    t = await createTestOrm(db);
    saved = {};
    for (const k of ENV_KEYS) {
      saved[k] = process.env[k];
      delete process.env[k];
    }
  });

  afterEach(async () => {
    await t.close();
    db.close();
    for (const k of ENV_KEYS) {
      if (saved[k] === undefined) delete process.env[k];
      else process.env[k] = saved[k];
    }
    vi.restoreAllMocks();
  });

  it('creates the admin from ADMIN_EMAIL/ADMIN_PASSWORD on an empty database', async () => {
    process.env.ADMIN_EMAIL = 'me@example.com';
    process.env.ADMIN_PASSWORD = 'S3cret-pw';
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});

    await new AdminSeeder().run(t.em);

    const user = db
      .prepare('SELECT email, role, must_change_password FROM users WHERE email = ?')
      .get('me@example.com') as { email: string; role: string; must_change_password: number } | undefined;
    expect(user).toBeDefined();
    expect(user!.role).toBe('admin');
    expect(user!.must_change_password).toBe(1);
    expect(warn).not.toHaveBeenCalled();
  });

  it('warns and creates nothing when ADMIN_* is set but a user already exists', async () => {
    insertExistingUser(db);
    process.env.ADMIN_EMAIL = 'new@example.com';
    process.env.ADMIN_PASSWORD = 'whatever';
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});

    await new AdminSeeder().run(t.em);

    expect(countUsers(db)).toBe(1);
    expect(db.prepare('SELECT 1 FROM users WHERE email = ?').get('new@example.com')).toBeUndefined();
    const msg = warn.mock.calls.map((c) => c.join(' ')).join('\n');
    expect(msg).toContain('only apply on first run');
  });

  it('stays silent when no admin env is set and a user already exists', async () => {
    insertExistingUser(db);
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});

    await new AdminSeeder().run(t.em);

    expect(countUsers(db)).toBe(1);
    expect(warn).not.toHaveBeenCalled();
  });

  it('warns about a partial config and falls back to a generated password', async () => {
    process.env.ADMIN_EMAIL = 'me@example.com'; // ADMIN_PASSWORD intentionally missing
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});

    await new AdminSeeder().run(t.em);

    // Falls back to the default local admin, NOT the provided email.
    expect(db.prepare('SELECT 1 FROM users WHERE email = ?').get('admin@trek.local')).toBeDefined();
    expect(db.prepare('SELECT 1 FROM users WHERE email = ?').get('me@example.com')).toBeUndefined();
    const msg = warn.mock.calls.map((c) => c.join(' ')).join('\n');
    expect(msg).toContain('Only one of ADMIN_EMAIL/ADMIN_PASSWORD');
  });
});
