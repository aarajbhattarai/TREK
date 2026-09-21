import { raw, type Platform, type RawQueryFragment } from '@mikro-orm/core';
import { SqlitePlatform } from '@mikro-orm/sql';

/**
 * The only place a repository may spell a database function.
 *
 * Every helper takes the MikroORM `Platform` the caller's EntityManager is
 * running on (`em.getPlatform()`) plus an already-qualified column reference
 * (`'t.created_at'`), and dispatches on that platform at runtime. TREK ships
 * one binary and the database is chosen by configuration, so the dialect is a
 * runtime property of the live connection, not a build-time swap: when the
 * Postgres driver arrives this file grows a second branch and no repository
 * changes. An unknown platform fails closed rather than guessing a spelling.
 *
 * Values are never interpolated — the day count in `dateAdd` is checked to be
 * an integer before it is spelled.
 */

function column(ref: string): string {
  if (!/^[a-z_][a-z0-9_]*(\.[a-z_][a-z0-9_]*)?$/i.test(ref)) {
    throw new Error(`sql-functions: not a column reference: ${ref}`);
  }
  return ref;
}

function unsupported(platform: Platform): never {
  throw new Error(`sql-functions: no implementation for platform ${platform.constructor.name}`);
}

/** The calendar date (`YYYY-MM-DD`) of a timestamp column. */
export function dateOf(platform: Platform, ref: string): RawQueryFragment {
  if (platform instanceof SqlitePlatform) return raw(`date(${column(ref)})`);
  return unsupported(platform);
}

/** The timestamp column shifted by whole days, as a calendar date. */
export function dateAdd(platform: Platform, ref: string, days: number): RawQueryFragment {
  if (!Number.isInteger(days)) throw new Error(`sql-functions: dateAdd needs an integer day count, got ${days}`);
  if (platform instanceof SqlitePlatform) {
    const sign = days < 0 ? '-' : '+';
    return raw(`date(${column(ref)}, '${sign}${Math.abs(days)} days')`);
  }
  return unsupported(platform);
}

/** The database clock, in the same text the column defaults produce. */
export function currentTimestamp(platform: Platform): RawQueryFragment {
  if (platform instanceof SqlitePlatform) return raw('CURRENT_TIMESTAMP');
  return unsupported(platform);
}
