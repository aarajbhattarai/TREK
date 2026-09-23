import Database from 'better-sqlite3';
import { describe, expect, it } from 'vitest';

import { NulSafeSqlitePlatform } from '../../../src/db/nul-safe-sqlite-platform';

/**
 * Plan 3c Task 4 review M1 / program rule 22: MikroORM 7 inlines every bound
 * value into the SQL text via `platform.quoteValue`/`escape` (see
 * `NulSafeSqlitePlatform`'s own docstring for the full mechanism). These
 * tests prove the override round-trips a NUL byte at every position SQLite
 * itself will accept, by handing the platform's own generated SQL literal to
 * a REAL `better-sqlite3` connection and reading the value back — not a
 * string-shape assertion, an actual SQLite round-trip.
 */
describe('NulSafeSqlitePlatform', () => {
  const platform = new NulSafeSqlitePlatform();
  const db = new Database(':memory:');

  function roundTrip(value: string): string {
    const literal = platform.escape(value);
    const row = db.prepare(`SELECT ${literal} as v`).get() as { v: string };
    return row.v;
  }

  it('round-trips a string with no NUL unchanged (baseline: unaffected by the override)', () => {
    expect(roundTrip('plain string')).toBe('plain string');
  });

  it('round-trips a NUL in the middle of a string', () => {
    const value = 'nul\u0000name';
    expect(roundTrip(value)).toBe(value);
  });

  it('round-trips a NUL at the very start of a string', () => {
    const value = '\u0000leading';
    expect(roundTrip(value)).toBe(value);
  });

  it('round-trips a NUL at the very end of a string', () => {
    const value = 'trailing\u0000';
    expect(roundTrip(value)).toBe(value);
  });

  it('round-trips a string made ENTIRELY of NUL bytes', () => {
    expect(roundTrip('\u0000')).toBe('\u0000');
    expect(roundTrip('\u0000\u0000\u0000')).toBe('\u0000\u0000\u0000');
  });

  it('round-trips a NUL next to a single quote (the string-literal escape character)', () => {
    const value = "o'brien\u0000's café";
    expect(roundTrip(value)).toBe(value);
  });

  it('round-trips a NUL next to a backslash (not special in a SQLite string literal)', () => {
    const value = 'back\\slash\u0000end\\';
    expect(roundTrip(value)).toBe(value);
  });

  it('round-trips multiple NULs mixed with quotes and backslashes', () => {
    const value = "a'\u0000b\\\u0000c''\u0000\\\\d";
    expect(roundTrip(value)).toBe(value);
  });

  it('fuzzes every 0x00-0x1F control character: none corrupt the round-trip and none throw', () => {
    for (let code = 0x00; code <= 0x1f; code++) {
      const ch = String.fromCharCode(code);
      const value = `before${ch}after`;
      expect(() => roundTrip(value)).not.toThrow();
      expect(roundTrip(value)).toBe(value);
    }
  });

  it('leaves non-string values to the base platform (numbers, null, dates, buffers untouched)', () => {
    expect(platform.escape(42)).toBe('42');
    expect(platform.escape(null)).toBe('null');
    expect(platform.escape(true)).toBe('true');
  });

  it('formatQuery (the real call path AbstractSqlConnection.execute uses: formatQuery -> quoteValue -> escape) inlines a NUL-safe literal for a bound `?`, matched via a real table', () => {
    db.exec('CREATE TABLE probe (name TEXT)');
    const value = 'search\u0000term';
    const insertSql = platform.formatQuery('insert into probe (name) values (?)', [value]);
    db.exec(insertSql);
    const selectSql = platform.formatQuery('select name from probe where name = ?', [value]);
    const row = db.prepare(selectSql).get() as { name: string } | undefined;
    expect(row?.name).toBe(value);
  });
});
