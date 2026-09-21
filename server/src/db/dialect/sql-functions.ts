import { raw, type RawQueryFragment } from '@mikro-orm/core';

/**
 * The only place a repository may spell a database function.
 *
 * Every helper takes an already-qualified column reference (`'t.created_at'`)
 * and returns a fragment for the *current* dialect. The ORM exists so a
 * Postgres driver can follow; when it does, this file gets a second
 * implementation and no repository changes. Values are never interpolated —
 * the day count in `dateAdd` is checked to be an integer before it is spelled.
 */

function column(ref: string): string {
  if (!/^[a-z_][a-z0-9_]*(\.[a-z_][a-z0-9_]*)?$/i.test(ref)) {
    throw new Error(`sql-functions: not a column reference: ${ref}`);
  }
  return ref;
}

/** The calendar date (`YYYY-MM-DD`) of a timestamp column. */
export function dateOf(ref: string): RawQueryFragment {
  return raw(`date(${column(ref)})`);
}

/** The timestamp column shifted by whole days, as a calendar date. */
export function dateAdd(ref: string, days: number): RawQueryFragment {
  if (!Number.isInteger(days)) throw new Error(`sql-functions: dateAdd needs an integer day count, got ${days}`);
  const sign = days < 0 ? '-' : '+';
  return raw(`date(${column(ref)}, '${sign}${Math.abs(days)} days')`);
}

/** The database clock, in the same text the column defaults produce. */
export function currentTimestamp(): RawQueryFragment {
  return raw('CURRENT_TIMESTAMP');
}
