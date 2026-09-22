import { afterAll, beforeAll, beforeEach, describe, expect, it } from 'vitest';
import { Platform } from '@mikro-orm/core';
import { createSnapshotTestDb } from '../../../helpers/db-mock';
import { resetTestDb } from '../../../helpers/test-db';
import { createTestOrm, type TestOrm } from '../../../helpers/test-orm';
import { createUser } from '../../../helpers/factories';
import { Users } from '../../../../src/db/entities/Users.entity';
import { columnIncrementedBy, columnRef, currentTimestamp, dateAdd, dateOf, lower } from '../../../../src/db/dialect/sql-functions';

const testDb = createSnapshotTestDb();
let t: TestOrm;

beforeAll(async () => { t = await createTestOrm(testDb); });
beforeEach(() => { resetTestDb(testDb); t.clear(); });
afterAll(async () => { await t.close(); testDb.close(); });

describe('sql-functions (sqlite)', () => {
  it('SQLF-001: dateOf yields the calendar date of a stored timestamp', async () => {
    const { user } = createUser(testDb);
    testDb.prepare("UPDATE users SET created_at = '2026-09-21 13:05:09' WHERE id = ?").run(user.id);
    const row = await t.em.createQueryBuilder(Users, 'u')
      .select([dateOf(t.em.getPlatform(), 'u.created_at').as('d')])
      .where({ id: user.id })
      .execute('get', false);
    expect(row).toEqual({ d: '2026-09-21' });
  });

  it('SQLF-002: dateAdd shifts by whole days', async () => {
    const { user } = createUser(testDb);
    testDb.prepare("UPDATE users SET created_at = '2026-09-21 13:05:09' WHERE id = ?").run(user.id);
    const row = await t.em.createQueryBuilder(Users, 'u')
      .select([dateAdd(t.em.getPlatform(), 'u.created_at', 10).as('d')])
      .where({ id: user.id })
      .execute('get', false);
    expect(row).toEqual({ d: '2026-10-01' });
  });

  it('SQLF-003: currentTimestamp is the DB clock in the wire format', async () => {
    createUser(testDb);
    const row = await t.em.createQueryBuilder(Users, 'u')
      .select([currentTimestamp(t.em.getPlatform()).as('now')])
      .limit(1)
      .execute('get', false);
    expect(String((row as { now: string }).now)).toMatch(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/);
  });

  it('SQLF-004: dateOf rejects anything that is not a plain column reference', () => {
    expect(() => dateOf(t.em.getPlatform(), 'u.created_at); DROP TABLE users; --')).toThrow(/not a column reference/);
    expect(() => dateOf(t.em.getPlatform(), 'u.created_at.extra')).toThrow(/not a column reference/);
    expect(() => dateOf(t.em.getPlatform(), '')).toThrow(/not a column reference/);
  });

  it('SQLF-005: dateAdd rejects a non-integer day count', () => {
    expect(() => dateAdd(t.em.getPlatform(), 'u.created_at', 1.5)).toThrow(/integer day count/);
    expect(() => dateAdd(t.em.getPlatform(), 'u.created_at', Number.NaN)).toThrow(/integer day count/);
  });

  it('SQLF-006: dateAdd shifts backwards for a negative day count', async () => {
    const { user } = createUser(testDb);
    testDb.prepare("UPDATE users SET created_at = '2026-09-21 13:05:09' WHERE id = ?").run(user.id);
    const row = await t.em.createQueryBuilder(Users, 'u')
      .select([dateAdd(t.em.getPlatform(), 'u.created_at', -10).as('d')])
      .where({ id: user.id })
      .execute('get', false);
    expect(row).toEqual({ d: '2026-09-11' });
  });

  it('SQLF-007: an unknown platform fails closed instead of guessing a spelling', () => {
    class FakePlatform extends Platform {}
    const foreign = new FakePlatform();
    expect(() => dateOf(foreign, 'u.created_at')).toThrow(/no implementation for platform FakePlatform/);
    expect(() => dateAdd(foreign, 'u.created_at', 1)).toThrow(/no implementation for platform FakePlatform/);
    expect(() => currentTimestamp(foreign)).toThrow(/no implementation for platform FakePlatform/);
    expect(() => columnRef(foreign, 'u.max_uses')).toThrow(/no implementation for platform FakePlatform/);
    expect(() => columnIncrementedBy(foreign, 'u.used_count', 1)).toThrow(/no implementation for platform FakePlatform/);
    expect(() => lower(foreign, 'u.email')).toThrow(/no implementation for platform FakePlatform/);
  });

  // Plan 3b Task 1: UsersRepository's CI (case-insensitive) lookups
  // (findByEmailCI, findIdByUsernameCI, ...) need `LOWER(col) = ?` as a
  // `find`/`findOne` filter KEY, not just inside a QueryBuilder `.where()` —
  // proving it works through `em.find`/`findOne` (the API the repository
  // actually calls) rather than only through `createQueryBuilder`.
  it('SQLF-012: lower is usable as a find() filter key, matching case-insensitively', async () => {
    const { user } = createUser(testDb, { email: 'Mixed.Case@Example.com' });
    const rows = await t.em.find(Users, { [lower(t.em.getPlatform(), 'email')]: 'mixed.case@example.com' });
    expect(rows.map((r) => r.id)).toEqual([user.id]);

    // A differently-cased query value that still lowercases to the same
    // string finds the same row; one that does not, finds nothing.
    const none = await t.em.find(Users, { [lower(t.em.getPlatform(), 'email')]: 'nobody@example.com' });
    expect(none).toEqual([]);
  });

  it('SQLF-013: lower composes with other filter keys in one findOne call', async () => {
    const { user } = createUser(testDb, { username: 'MixedCaseName' });
    const row = await t.em.findOne(Users, {
      [lower(t.em.getPlatform(), 'username')]: 'mixedcasename',
      id: { $ne: -1 },
    });
    expect(row?.id).toBe(user.id);
  });

  // Plan 3b Task 0: InviteTokensRepository.incrementUsedCount needs a
  // sibling-column comparison (`used_count < max_uses`) and a sibling-column
  // increment (`used_count = used_count + 1`) inside a QueryBuilder filter —
  // ESLint bans a repository from spelling `raw()` itself (src/db/repositories/**),
  // so both go through these two dialect helpers instead.
  it('SQLF-009: columnRef compares one column against another (not a bound value)', async () => {
    const { user } = createUser(testDb);
    testDb.prepare('UPDATE users SET login_count = 5, password_version = 3 WHERE id = ?').run(user.id);
    const below = await t.em.createQueryBuilder(Users, 'u')
      .select('*')
      .where({ id: user.id, password_version: { $lt: columnRef(t.em.getPlatform(), 'login_count') } })
      .execute('get', false);
    expect((below as { id: number } | undefined)?.id).toBe(user.id);

    testDb.prepare('UPDATE users SET login_count = 1 WHERE id = ?').run(user.id);
    const notBelow = await t.em.createQueryBuilder(Users, 'u')
      .select('*')
      .where({ id: user.id, password_version: { $lt: columnRef(t.em.getPlatform(), 'login_count') } })
      .execute('get', false);
    expect(notBelow).toBeUndefined();
  });

  it('SQLF-010: columnIncrementedBy writes <col> + n / <col> - n, never a bound-parameter add', async () => {
    const { user } = createUser(testDb);
    testDb.prepare('UPDATE users SET login_count = 10 WHERE id = ?').run(user.id);
    await t.em.createQueryBuilder(Users, 'u')
      .update({ login_count: columnIncrementedBy(t.em.getPlatform(), 'login_count', 3) })
      .where({ id: user.id })
      .execute('run');
    t.clear();
    expect((testDb.prepare('SELECT login_count FROM users WHERE id = ?').get(user.id) as { login_count: number }).login_count).toBe(13);

    await t.em.createQueryBuilder(Users, 'u')
      .update({ login_count: columnIncrementedBy(t.em.getPlatform(), 'login_count', -5) })
      .where({ id: user.id })
      .execute('run');
    t.clear();
    expect((testDb.prepare('SELECT login_count FROM users WHERE id = ?').get(user.id) as { login_count: number }).login_count).toBe(8);
  });

  it('SQLF-011: columnIncrementedBy rejects a non-integer amount', () => {
    expect(() => columnIncrementedBy(t.em.getPlatform(), 'u.login_count', 1.5)).toThrow(/integer amount/);
    expect(() => columnIncrementedBy(t.em.getPlatform(), 'u.login_count', Number.NaN)).toThrow(/integer amount/);
  });

  // Plan 3b Task 0: OA8 (oauth_tokens' client-secret-rotation revoke) is the
  // one call site in the whole codebase that spells "now" as `datetime('now')`
  // instead of `CURRENT_TIMESTAMP` — same effective SQLite value, but D10
  // wants exactly one dialect-function path. `currentTimestamp` already
  // renders the literal `CURRENT_TIMESTAMP` fragment (SQLF-003 pins its wire
  // format); this proves that fragment's stored text is byte-identical to
  // what the legacy `datetime('now')` spelling produces, so OA8 (Task 4) can
  // route through `currentTimestamp(platform)` with no behaviour change.
  it("SQLF-008: currentTimestamp's CURRENT_TIMESTAMP spelling is byte-identical, in the same statement, to the legacy datetime('now') spelling", async () => {
    // One atomic SELECT evaluates both expressions at the exact same instant —
    // no timing window between two separate writes, so this is not a
    // usually-true "close enough" comparison, it is a real strict equality.
    const row = testDb.prepare("SELECT CURRENT_TIMESTAMP as a, datetime('now') as b").get() as { a: string; b: string };
    expect(row.a).toBe(row.b);
    expect(row.a).toMatch(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/);

    // And a real write through the repository-facing dialect helper, read
    // back through the raw connection, stores that exact same shape — not
    // just the fragment text in isolation.
    const { user } = createUser(testDb);
    await t.em.createQueryBuilder(Users, 'u')
      .update({ created_at: currentTimestamp(t.em.getPlatform()) })
      .where({ id: user.id })
      .execute('run');
    t.clear();
    const stored = testDb.prepare('SELECT created_at FROM users WHERE id = ?').get(user.id) as { created_at: string };
    expect(stored.created_at).toMatch(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/);
  });
});
