import { afterAll, beforeAll, beforeEach, describe, expect, it } from 'vitest';
import { Platform } from '@mikro-orm/core';
import { createSnapshotTestDb } from '../../../helpers/db-mock';
import { resetTestDb } from '../../../helpers/test-db';
import { createTestOrm, type TestOrm } from '../../../helpers/test-orm';
import { createUser } from '../../../helpers/factories';
import { Users } from '../../../../src/db/entities/Users.entity';
import {
  absDifference,
  caseWhenEquals,
  castInteger,
  coalesce,
  coalesceParam,
  columnIncrementedBy,
  columnRef,
  concat,
  countAll,
  countAllRef,
  currentTimestamp,
  dateAdd,
  dateOf,
  dayDistance,
  lower,
  lowerParam,
  lowerTrim,
  maxOf,
  minOf,
  nowMinusDays,
  startsWithIsoDate,
  substring,
  trim,
} from '../../../../src/db/dialect/sql-functions';

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
    expect(() => lowerParam(foreign, 'x')).toThrow(/no implementation for platform FakePlatform/);
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

  // Program rule 18 / Plan 3b Task 7 review H1: SQLite's LOWER() is
  // ASCII-only; JavaScript's toLowerCase() is full-Unicode. lowerParam()
  // binds the RAW value so SQLite folds both sides of the comparison with
  // the same engine, matching a legacy `LOWER(col) = LOWER(?)` statement.
  it('SQLF-014: SQLite LOWER() is ASCII-only, unlike JS toLowerCase() — verified directly', () => {
    const cases: Array<[string, string]> = [
      ['JOSÉ@x.com', 'josÉ@x.com'],
      ['ÄNNA@x.com', 'Änna@x.com'],
      ['ΣIGMA@x.com', 'Σigma@x.com'],
      ['İSTANBUL@x.com', 'İstanbul@x.com'],
      ['ASCII@x.com', 'ascii@x.com'],
    ];
    for (const [input, sqliteLowered] of cases) {
      const row = testDb.prepare('SELECT LOWER(?) as l').get(input) as { l: string };
      expect(row.l).toBe(sqliteLowered);
      // Every non-ASCII case proves the two engines disagree.
      if (input !== 'ASCII@x.com') {
        expect(row.l).not.toBe(input.toLowerCase());
      }
    }
  });

  it('SQLF-015: lowerParam pairs with lower() to fold BOTH sides in SQLite, matching a non-ASCII stored spelling that toLowerCase() would miss', async () => {
    const { user } = createUser(testDb, { email: 'JOSÉ@x.com' });
    const platform = t.em.getPlatform();

    // The exact stored spelling matches (SQLite's LOWER() is a no-op on both
    // sides for this input, so this is really an equality check — the real
    // proof is the next assertion).
    const exact = await t.em.findOne(Users, { [lower(platform, 'email')]: lowerParam(platform, 'JOSÉ@x.com') });
    expect(exact?.id).toBe(user.id);

    // A JS-lowered value-side bind (the bug: mixing engines) must NOT match
    // — this is the mutation-proof: reverting `lowerParam(platform, email)`
    // to a plain `email.toLowerCase()` bind makes this assertion fail
    // because SQLite's LOWER(column) still reads 'josÉ@x.com', which does
    // not equal the JS-lowered bind 'josé@x.com'.
    const jsLowered = await t.em.findOne(Users, { [lower(platform, 'email')]: 'josé@x.com' });
    expect(jsLowered).toBeNull();

    const none = await t.em.findOne(Users, { [lower(platform, 'email')]: lowerParam(platform, 'nobody@example.com') });
    expect(none).toBeNull();
  });

  // Plan 3c Task 0b (R6): no consumer yet — Tasks 1–8 wire these in as each
  // converts the statement that needs them. Pinned here so a later task
  // imports a tested helper instead of writing one inline.

  it("SQLF-016: nowMinusDays renders datetime('now', '-N days'), matching a JS-computed date within a few seconds' tolerance", async () => {
    const row = testDb.prepare(`SELECT ${nowMinusDays(t.em.getPlatform(), 5).sql} as d`).get() as { d: string };
    const got = new Date(`${row.d.replace(' ', 'T')}Z`).getTime();
    const expected = Date.now() - 5 * 24 * 60 * 60 * 1000;
    expect(Math.abs(got - expected)).toBeLessThan(10_000);
  });

  it('SQLF-016b: nowMinusDays(0) is "now", not one day back', async () => {
    const row = testDb.prepare(`SELECT ${nowMinusDays(t.em.getPlatform(), 0).sql} as d`).get() as { d: string };
    const got = new Date(`${row.d.replace(' ', 'T')}Z`).getTime();
    expect(Math.abs(got - Date.now())).toBeLessThan(10_000);
  });

  it('SQLF-017: nowMinusDays rejects a non-integer or negative day count', () => {
    expect(() => nowMinusDays(t.em.getPlatform(), 1.5)).toThrow(/non-negative integer day count/);
    expect(() => nowMinusDays(t.em.getPlatform(), -1)).toThrow(/non-negative integer day count/);
    expect(() => nowMinusDays(t.em.getPlatform(), Number.NaN)).toThrow(/non-negative integer day count/);
  });

  it('SQLF-018: trim strips leading/trailing whitespace', async () => {
    const { user } = createUser(testDb, { username: '  Padded Name  ' });
    const platform = t.em.getPlatform();
    const row = await t.em.createQueryBuilder(Users, 'u')
      .select([trim(platform, 'u.username').as('n')])
      .where({ id: user.id })
      .execute('get', false);
    expect((row as { n: string }).n).toBe('Padded Name');
  });

  it('SQLF-019: coalesce(ref, fallbackRef) picks the first non-null column, else the second', async () => {
    const { user: withName } = createUser(testDb, { username: 'has-display-name' });
    testDb.prepare('UPDATE users SET display_name = ? WHERE id = ?').run('Display Name', withName.id);
    const { user: withoutName } = createUser(testDb, { username: 'no-display-name' });
    const platform = t.em.getPlatform();

    const a = await t.em.createQueryBuilder(Users, 'u')
      .select([coalesce(platform, 'u.display_name', 'u.username').as('name')])
      .where({ id: withName.id })
      .execute('get', false);
    expect((a as { name: string }).name).toBe('Display Name');

    const b = await t.em.createQueryBuilder(Users, 'u')
      .select([coalesce(platform, 'u.display_name', 'u.username').as('name')])
      .where({ id: withoutName.id })
      .execute('get', false);
    expect((b as { name: string }).name).toBe('no-display-name');
  });

  it('SQLF-020: coalesceParam(ref, value) writes COALESCE(col, ?) with the fallback bound, not another column', async () => {
    const { user } = createUser(testDb);
    const platform = t.em.getPlatform();
    await t.em.createQueryBuilder(Users, 'u')
      .update({ display_name: coalesceParam(platform, 'display_name', 'Fallback Name') })
      .where({ id: user.id })
      .execute('run');
    t.clear();
    expect((testDb.prepare('SELECT display_name FROM users WHERE id = ?').get(user.id) as { display_name: string }).display_name).toBe('Fallback Name');

    await t.em.createQueryBuilder(Users, 'u')
      .update({ display_name: coalesceParam(platform, 'display_name', 'Never Used') })
      .where({ id: user.id })
      .execute('run');
    t.clear();
    expect((testDb.prepare('SELECT display_name FROM users WHERE id = ?').get(user.id) as { display_name: string }).display_name).toBe('Fallback Name');
  });

  it('SQLF-021: absDifference is usable as a filter key, matching ABS(col - ?) <= tolerance', async () => {
    const { user: near } = createUser(testDb);
    testDb.prepare('UPDATE users SET login_count = 12 WHERE id = ?').run(near.id);
    const { user: far } = createUser(testDb);
    testDb.prepare('UPDATE users SET login_count = 100 WHERE id = ?').run(far.id);
    const platform = t.em.getPlatform();

    const rows = await t.em.find(Users, { [absDifference(platform, 'login_count', 10)]: { $lte: 5 } });
    expect(rows.map((r) => r.id)).toEqual([near.id]);

    const none = await t.em.find(Users, { [absDifference(platform, 'login_count', 10)]: { $lte: 0 } });
    expect(none).toEqual([]);
  });

  it('SQLF-022: an unknown platform fails closed for every Plan 3c Task 0b helper', () => {
    class FakePlatform extends Platform {}
    const foreign = new FakePlatform();
    expect(() => nowMinusDays(foreign, 1)).toThrow(/no implementation for platform FakePlatform/);
    expect(() => trim(foreign, 'u.name')).toThrow(/no implementation for platform FakePlatform/);
    expect(() => coalesce(foreign, 'u.a', 'u.b')).toThrow(/no implementation for platform FakePlatform/);
    expect(() => coalesceParam(foreign, 'u.a', 'x')).toThrow(/no implementation for platform FakePlatform/);
    expect(() => absDifference(foreign, 'u.lat', 1)).toThrow(/no implementation for platform FakePlatform/);
  });

  // Plan 3c Task 1 (§17a: COUNT(*)/MIN/MAX aggregates — `PlaceShadowPicksRepository
  // .totals`/`countBySource`/`countByLiveRank`). ESLint bans `raw()` inside
  // src/db/repositories/**, so these three aliased-aggregate helpers exist
  // for repositories that need a COUNT/MIN/MAX in a SELECT projection.

  it('SQLF-023: countAll/minOf/maxOf render one aliased aggregate row, matching a hand-written statement', async () => {
    const { user: a } = createUser(testDb);
    testDb.prepare("UPDATE users SET created_at = '2026-01-01 00:00:00' WHERE id = ?").run(a.id);
    const { user: b } = createUser(testDb);
    testDb.prepare("UPDATE users SET created_at = '2026-06-15 00:00:00' WHERE id = ?").run(b.id);
    const platform = t.em.getPlatform();

    const row = await t.em.createQueryBuilder(Users, 'u')
      .select([countAll(platform, 'total'), minOf(platform, 'u.created_at', 'oldest'), maxOf(platform, 'u.created_at', 'newest')])
      .where({ id: { $in: [a.id, b.id] } })
      .execute('get', false);
    expect(row).toEqual({ total: 2, oldest: '2026-01-01 00:00:00', newest: '2026-06-15 00:00:00' });

    const expected = testDb
      .prepare('SELECT COUNT(*) as total, MIN(created_at) as oldest, MAX(created_at) as newest FROM users WHERE id IN (?, ?)')
      .get(a.id, b.id);
    expect(row).toEqual(expected);
  });

  // No `.orderBy({ count: 'desc' })` here: MikroORM's QueryBuilder cannot
  // order by an ad-hoc raw-fragment alias (verified directly — it throws
  // "Trying to query by not existing property" at runtime, since `raw()`'s
  // alias carries no literal type for `ExtractRawAliases` to register). The
  // repository callers that need "ORDER BY <aliased count> DESC"
  // (`PlaceShadowPicksRepository.countBySource`) order by the `COUNT(*)`
  // EXPRESSION instead, via `countAllRef` below (SQLF-032) — NOT a JS
  // `Array.prototype.sort` of the fetched rows: that would be stable and
  // therefore leave ties in `GROUP BY`'s own (ascending-by-key) row order,
  // which is not the same order SQLite's own, non-stable `ORDER BY count
  // DESC` sorter produces on a tie (Task 1 fix review M1).
  it('SQLF-024: countAll composes with GROUP BY, matching a hand-written GROUP BY statement', async () => {
    createUser(testDb, { role: 'admin' });
    createUser(testDb, { role: 'admin' });
    createUser(testDb, { role: 'user' });
    const platform = t.em.getPlatform();

    const rows = await t.em.createQueryBuilder(Users, 'u')
      .select(['u.role', countAll(platform, 'count')])
      .groupBy('u.role')
      .execute('all', false);

    const expected = testDb.prepare('SELECT role, COUNT(*) as count FROM users GROUP BY role').all();
    expect([...(rows as { role: string; count: number }[])].sort((a, b) => a.role.localeCompare(b.role)))
      .toEqual([...(expected as { role: string; count: number }[])].sort((a, b) => a.role.localeCompare(b.role)));
  });

  it('SQLF-025: countAll/minOf/maxOf reject an alias that is not a plain identifier', () => {
    const platform = t.em.getPlatform();
    expect(() => countAll(platform, 'x; DROP TABLE users; --')).toThrow(/not an alias/);
    expect(() => minOf(platform, 'u.created_at', '1bad')).toThrow(/not an alias/);
    expect(() => maxOf(platform, 'u.created_at', '')).toThrow(/not an alias/);
  });

  it('SQLF-026: an unknown platform fails closed for countAll/minOf/maxOf', () => {
    class FakePlatform extends Platform {}
    const foreign = new FakePlatform();
    expect(() => countAll(foreign, 'total')).toThrow(/no implementation for platform FakePlatform/);
    expect(() => minOf(foreign, 'u.created_at', 'oldest')).toThrow(/no implementation for platform FakePlatform/);
    expect(() => maxOf(foreign, 'u.created_at', 'newest')).toThrow(/no implementation for platform FakePlatform/);
  });

  // Task 0b review M3 (blocks Task 4's PL26, places.service.ts:642
  // `lower(trim(name))`): `lower()`/`trim()` cannot compose to build
  // `LOWER(TRIM(name))` — `lowerTrim()` is the one fragment for that shape.
  it('SQLF-027: lowerTrim renders LOWER(TRIM(<col>)) as one fragment, matching a hand-written statement', async () => {
    const { user } = createUser(testDb, { username: '  Padded Name  ' });
    const platform = t.em.getPlatform();
    const row = await t.em.createQueryBuilder(Users, 'u')
      .select([lowerTrim(platform, 'u.username').as('n')])
      .where({ id: user.id })
      .execute('get', false);
    expect((row as { n: string }).n).toBe('padded name');

    const expected = testDb.prepare('SELECT LOWER(TRIM(username)) as n FROM users WHERE id = ?').get(user.id) as { n: string };
    expect((row as { n: string }).n).toBe(expected.n);
  });

  it('SQLF-028: lowerTrim is usable as a find() filter key, and SQLite LOWER() stays ASCII-only through the TRIM', async () => {
    const { user } = createUser(testDb, { username: '  JOSÉ  ' });
    const platform = t.em.getPlatform();
    const rows = await t.em.find(Users, { [lowerTrim(platform, 'username')]: 'josé'.toLowerCase() });
    // toLowerCase() is full-Unicode ('é' stays 'é'), but SQLite's LOWER() is
    // ASCII-only and leaves 'É' untouched — so the JS-lowered bind does NOT
    // match the SQL-lowered, SQL-trimmed column (program rule 18: mixing
    // engines is the bug, not the fix).
    expect(rows).toEqual([]);
    const matching = await t.em.find(Users, { [lowerTrim(platform, 'username')]: 'josÉ' });
    expect(matching.map((r) => r.id)).toEqual([user.id]);
  });

  it('SQLF-029: an unknown platform fails closed for lowerTrim', () => {
    class FakePlatform extends Platform {}
    const foreign = new FakePlatform();
    expect(() => lowerTrim(foreign, 'u.name')).toThrow(/no implementation for platform FakePlatform/);
  });

  // Plan 3c Task 6 — `TripMembersRepository.listWithUserAndInviter`'s `role`
  // column (TM2): `CASE WHEN u.id = ? THEN 'owner' ELSE 'member' END`.
  it("SQLF-030: caseWhenEquals renders CASE WHEN <col> = ? THEN ? ELSE ? END, matching a hand-written statement", async () => {
    const { user: a } = createUser(testDb);
    const { user: b } = createUser(testDb);
    const platform = t.em.getPlatform();

    const rows = await t.em.createQueryBuilder(Users, 'u')
      .select(['u.id', caseWhenEquals(platform, 'u.id', a.id, 'owner', 'member').as('role')])
      .where({ id: { $in: [a.id, b.id] } })
      .orderBy({ id: 'asc' })
      .execute('all', false);
    expect(rows).toEqual([{ id: a.id, role: 'owner' }, { id: b.id, role: 'member' }]);

    const expected = testDb
      .prepare('SELECT id, CASE WHEN id = ? THEN ? ELSE ? END as role FROM users WHERE id IN (?, ?) ORDER BY id ASC')
      .all(a.id, 'owner', 'member', a.id, b.id);
    expect(rows).toEqual(expected);
  });

  it('SQLF-031: an unknown platform fails closed for caseWhenEquals', () => {
    class FakePlatform extends Platform {}
    const foreign = new FakePlatform();
    expect(() => caseWhenEquals(foreign, 'u.id', 1, 'owner', 'member')).toThrow(/no implementation for platform FakePlatform/);
  });

  // Task 1 fix review M1 (`PlaceShadowPicksRepository.countBySource`, PS5):
  // `countAll()`'s alias cannot be ordered by (`.orderBy({ count: 'desc' })`
  // throws "not existing property" — verified in SQLF-024's comment above);
  // `countAllRef` orders by the `COUNT(*)` EXPRESSION instead, which SQLite
  // accepts. The full tie-order proof (against the legacy `ORDER BY count
  // DESC` statement, on data with tied counts) lives in
  // `PlaceShadowPicksRepository.countBySource`'s own test (PSPICKREPO-006b) —
  // this pins the fragment's shape and composition with GROUP BY.
  it('SQLF-032: countAllRef renders COUNT(*) as an ORDER BY expression, matching a hand-written GROUP BY … ORDER BY statement', async () => {
    createUser(testDb, { role: 'admin' });
    createUser(testDb, { role: 'admin' });
    createUser(testDb, { role: 'user' });
    const platform = t.em.getPlatform();

    const rows = await t.em.createQueryBuilder(Users, 'u')
      .select(['u.role', countAll(platform, 'count')])
      .groupBy('u.role')
      .orderBy({ [countAllRef(platform)]: 'desc' })
      .execute('all', false);

    const expected = testDb.prepare('SELECT role, COUNT(*) as count FROM users GROUP BY role ORDER BY COUNT(*) DESC').all();
    expect(rows).toEqual(expected);
  });

  it('SQLF-033: an unknown platform fails closed for countAllRef', () => {
    class FakePlatform extends Platform {}
    const foreign = new FakePlatform();
    expect(() => countAllRef(foreign)).toThrow(/no implementation for platform FakePlatform/);
  });

  // Plan 3d Task 0 (R6): no consumer yet — Tasks 2/4 wire these in as each
  // converts RS11/RS20/RV2/DY23. Pinned here so a later task imports a
  // tested helper instead of writing one inline.

  it('SQLF-034: startsWithIsoDate matches a value that begins with YYYY-MM-DD, and only that shape (dates, non-dates, "2026-1-1", empty, NULL)', async () => {
    const platform = t.em.getPlatform();
    const cases: Array<[string | null, boolean]> = [
      ['2026-09-21', true],
      ['2026-09-21T13:05:09Z', true],
      ['2026-09-21 13:05:09', true],
      ['not-a-date', false],
      ['2026-1-1', false], // not zero-padded — the legacy pattern is exactly 4-2-2 digit classes, not a wildcard shorthand
      ['', false],
      [null, false],
    ];
    for (const [value, expected] of cases) {
      const { user } = createUser(testDb);
      testDb.prepare('UPDATE users SET display_name = ? WHERE id = ?').run(value, user.id);

      const row = await t.em.createQueryBuilder(Users, 'u')
        .select([startsWithIsoDate(platform, 'u.display_name').as('matched')])
        .where({ id: user.id })
        .execute('get', false);
      expect(Boolean((row as { matched: number | null }).matched)).toBe(expected);

      const raw = testDb
        .prepare(`SELECT (display_name GLOB '[0-9][0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]*') as matched FROM users WHERE id = ?`)
        .get(user.id) as { matched: number | null };
      expect(Boolean(raw.matched)).toBe(expected);
    }
  });

  it('SQLF-035: an unknown platform fails closed for startsWithIsoDate', () => {
    class FakePlatform extends Platform {}
    const foreign = new FakePlatform();
    expect(() => startsWithIsoDate(foreign, 'u.reservation_time')).toThrow(/no implementation for platform FakePlatform/);
  });

  it('SQLF-036: substring(ref, start) — the two-arg form — reads from a 1-based position to the end, matching substr(col, N)', async () => {
    const { user } = createUser(testDb, { username: 'iso-ts' });
    testDb.prepare('UPDATE users SET display_name = ? WHERE id = ?').run('2026-09-21T13:05:09Z', user.id);
    const platform = t.em.getPlatform();

    const row = await t.em.createQueryBuilder(Users, 'u')
      .select([substring(platform, 'u.display_name', 12).as('n')])
      .where({ id: user.id })
      .execute('get', false);
    expect((row as { n: string }).n).toBe('13:05:09Z');

    const expected = testDb.prepare('SELECT substr(display_name, 12) as n FROM users WHERE id = ?').get(user.id) as { n: string };
    expect((row as { n: string }).n).toBe(expected.n);
  });

  it('SQLF-037: substring(ref, start, length) — the three-arg form — matches substr(col, N, L)', async () => {
    const { user } = createUser(testDb, { username: 'iso-ts-2' });
    testDb.prepare('UPDATE users SET display_name = ? WHERE id = ?').run('2026-09-21T13:05:09Z', user.id);
    const platform = t.em.getPlatform();

    const row = await t.em.createQueryBuilder(Users, 'u')
      .select([substring(platform, 'u.display_name', 1, 10).as('n')])
      .where({ id: user.id })
      .execute('get', false);
    expect((row as { n: string }).n).toBe('2026-09-21');

    const expected = testDb.prepare('SELECT substr(display_name, 1, 10) as n FROM users WHERE id = ?').get(user.id) as { n: string };
    expect((row as { n: string }).n).toBe(expected.n);
  });

  it('SQLF-038: substring rejects a non-positive start or a negative length', () => {
    const platform = t.em.getPlatform();
    expect(() => substring(platform, 'u.x', 0)).toThrow(/1-based integer start/);
    expect(() => substring(platform, 'u.x', 1.5)).toThrow(/1-based integer start/);
    expect(() => substring(platform, 'u.x', 1, -1)).toThrow(/non-negative integer length/);
    expect(() => substring(platform, 'u.x', 1, 1.5)).toThrow(/non-negative integer length/);
  });

  it('SQLF-039: an unknown platform fails closed for substring', () => {
    class FakePlatform extends Platform {}
    const foreign = new FakePlatform();
    expect(() => substring(foreign, 'u.x', 1)).toThrow(/no implementation for platform FakePlatform/);
  });

  it('SQLF-040: concat renders <col> || <bound-literal> || <col>, matching the legacy d.date || \'T\' || a.check_in shape', async () => {
    const { user } = createUser(testDb, { username: 'concat-me' });
    testDb.prepare('UPDATE users SET display_name = ? WHERE id = ?').run('13:05', user.id);
    const platform = t.em.getPlatform();

    const row = await t.em.createQueryBuilder(Users, 'u')
      .select([concat(platform, { column: 'u.username' }, { value: 'T' }, { column: 'u.display_name' }).as('n')])
      .where({ id: user.id })
      .execute('get', false);
    expect((row as { n: string }).n).toBe('concat-meT13:05');

    const expected = testDb.prepare("SELECT username || ? || display_name as n FROM users WHERE id = ?").get('T', user.id) as { n: string };
    expect((row as { n: string }).n).toBe(expected.n);
  });

  it('SQLF-041: concat rejects fewer than two parts', () => {
    const platform = t.em.getPlatform();
    expect(() => concat(platform, { column: 'u.a' })).toThrow(/at least two parts/);
    expect(() => concat(platform)).toThrow(/at least two parts/);
  });

  it('SQLF-042: an unknown platform fails closed for concat', () => {
    class FakePlatform extends Platform {}
    const foreign = new FakePlatform();
    expect(() => concat(foreign, { column: 'u.a' }, { value: 'x' })).toThrow(/no implementation for platform FakePlatform/);
  });

  // §18.1: reservations.accommodation_id is TEXT holding integer ids with no
  // FK; some rows read back as "14.0". castInteger exists so a comparison
  // against a genuine INTEGER column matches both spellings the way the
  // legacy CAST(... AS INTEGER) statement does.
  it('SQLF-043: castInteger matches both "14" and "14.0" TEXT rows against a bound INTEGER value (the accommodation_id shape, §18.1)', async () => {
    const platform = t.em.getPlatform();
    const { user: exact } = createUser(testDb);
    testDb.prepare('UPDATE users SET display_name = ? WHERE id = ?').run('14', exact.id);
    const { user: dotZero } = createUser(testDb);
    testDb.prepare('UPDATE users SET display_name = ? WHERE id = ?').run('14.0', dotZero.id);
    const { user: other } = createUser(testDb);
    testDb.prepare('UPDATE users SET display_name = ? WHERE id = ?').run('15', other.id);

    const rows = await t.em.createQueryBuilder(Users, 'u')
      .select('u.id')
      .where({ id: { $in: [exact.id, dotZero.id, other.id] }, [castInteger(platform, 'u.display_name')]: 14 })
      .orderBy({ id: 'asc' })
      .execute('all', false);
    expect((rows as { id: number }[]).map((r) => r.id)).toEqual([exact.id, dotZero.id]);

    const expected = testDb
      .prepare('SELECT id FROM users WHERE id IN (?, ?, ?) AND CAST(display_name AS INTEGER) = ? ORDER BY id ASC')
      .all(exact.id, dotZero.id, other.id, 14);
    expect(rows).toEqual(expected);
  });

  it('SQLF-044: castInteger compares against another column via columnRef, matching CAST(col AS INTEGER) = other_col (the real RV2/RS20 shape)', async () => {
    const platform = t.em.getPlatform();
    const { user: exact } = createUser(testDb);
    testDb.prepare('UPDATE users SET display_name = ? WHERE id = ?').run(String(exact.id), exact.id);
    const { user: dotZero } = createUser(testDb);
    testDb.prepare('UPDATE users SET display_name = ? WHERE id = ?').run(`${dotZero.id}.0`, dotZero.id);
    const { user: mismatched } = createUser(testDb);
    testDb.prepare('UPDATE users SET display_name = ? WHERE id = ?').run(String(exact.id), mismatched.id);

    const rows = await t.em.createQueryBuilder(Users, 'u')
      .select('u.id')
      .where({ id: { $in: [exact.id, dotZero.id, mismatched.id] }, [castInteger(platform, 'u.display_name')]: columnRef(platform, 'u.id') })
      .orderBy({ id: 'asc' })
      .execute('all', false);
    expect((rows as { id: number }[]).map((r) => r.id)).toEqual([exact.id, dotZero.id]);

    const expected = testDb
      .prepare('SELECT id FROM users WHERE id IN (?, ?, ?) AND CAST(display_name AS INTEGER) = id ORDER BY id ASC')
      .all(exact.id, dotZero.id, mismatched.id);
    expect(rows).toEqual(expected);
  });

  it('SQLF-045: an unknown platform fails closed for castInteger', () => {
    class FakePlatform extends Platform {}
    const foreign = new FakePlatform();
    expect(() => castInteger(foreign, 'u.accommodation_id')).toThrow(/no implementation for platform FakePlatform/);
  });

  it('SQLF-046: dayDistance orders by nearest calendar date, matching ORDER BY ABS(JULIANDAY(col) - JULIANDAY(?)) ASC', async () => {
    const platform = t.em.getPlatform();
    const { user: a } = createUser(testDb);
    testDb.prepare("UPDATE users SET created_at = '2026-01-01 00:00:00' WHERE id = ?").run(a.id);
    const { user: b } = createUser(testDb);
    testDb.prepare("UPDATE users SET created_at = '2026-06-15 00:00:00' WHERE id = ?").run(b.id);
    const { user: c } = createUser(testDb);
    testDb.prepare("UPDATE users SET created_at = '2026-06-20 00:00:00' WHERE id = ?").run(c.id);
    const target = '2026-06-18';

    const rows = await t.em.createQueryBuilder(Users, 'u')
      .select('u.id')
      .where({ id: { $in: [a.id, b.id, c.id] } })
      .orderBy({ [dayDistance(platform, 'u.created_at', target)]: 'asc' })
      .execute('all', false);
    expect((rows as { id: number }[]).map((r) => r.id)).toEqual([c.id, b.id, a.id]);

    const expected = testDb
      .prepare('SELECT id FROM users WHERE id IN (?, ?, ?) ORDER BY ABS(JULIANDAY(created_at) - JULIANDAY(?)) ASC')
      .all(a.id, b.id, c.id, target);
    expect(rows).toEqual(expected);
  });

  it('SQLF-047: an unknown platform fails closed for dayDistance', () => {
    class FakePlatform extends Platform {}
    const foreign = new FakePlatform();
    expect(() => dayDistance(foreign, 'u.date', '2026-01-01')).toThrow(/no implementation for platform FakePlatform/);
  });
});
