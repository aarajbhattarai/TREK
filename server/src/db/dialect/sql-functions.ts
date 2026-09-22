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

/**
 * A bare reference to another column of the same row, for a filter or update
 * value that must compare against or combine with a sibling column instead
 * of a bound parameter (e.g. `used_count < max_uses` — `InviteTokensRepository
 * .incrementUsedCount`'s capacity guard). Portable across dialects on its own,
 * but still routed through this file (not spelled with `raw()` in a
 * repository) so every escape hatch stays in one place ESLint's
 * `no-restricted-syntax` rule for `src/db/repositories/**` can enforce.
 */
export function columnRef(platform: Platform, ref: string): RawQueryFragment {
  if (platform instanceof SqlitePlatform) return raw(column(ref));
  return unsupported(platform);
}

/** A column shifted by a signed integer amount: `<col> + n` / `<col> - n`. */
export function columnIncrementedBy(platform: Platform, ref: string, amount: number): RawQueryFragment {
  if (!Number.isInteger(amount)) {
    throw new Error(`sql-functions: columnIncrementedBy needs an integer amount, got ${amount}`);
  }
  if (platform instanceof SqlitePlatform) {
    const sign = amount < 0 ? '-' : '+';
    return raw(`${column(ref)} ${sign} ${Math.abs(amount)}`);
  }
  return unsupported(platform);
}

/**
 * A case-insensitive column reference, for use as a filter's object key:
 * `{ [lower(platform, 'email')]: <value-side> }` produces
 * `WHERE LOWER(email) = <value-side>`.
 *
 * **SQLite's `LOWER()` is ASCII-only; JavaScript's `String.prototype
 * .toLowerCase()` is full-Unicode.** They do NOT agree on every input this
 * codebase stores — a locally-registered e-mail can carry any non-whitespace
 * character (`EMAIL_REGEX`), including non-ASCII letters (program rule 18;
 * Plan 3b Task 7 review, H1: `JOSÉ@x.com` proved a live login lockout). Two
 * value-side shapes are legitimate, and they are NOT interchangeable:
 *
 * - `LOWER(col) = LOWER(?)` — pair with `lowerParam()` below, binding the
 *   RAW value. Both sides are folded by the SAME engine (SQLite's), so they
 *   agree on every input. This is the shape for every legacy
 *   `LOWER(col) = LOWER(?)` statement (AU9, AU12, UP5, UP6, O12).
 * - `LOWER(col) = ?` — pair with a value the CALLER has already lowered in
 *   JS (`value.toLowerCase()`) as a plain string, matching a legacy
 *   `LOWER(col) = ?` statement exactly (only O4 today —
 *   `OidcService.findOrCreateUser` JS-lowers the email once upfront and the
 *   legacy statement it replaced never re-lowered it in SQL). Do not use
 *   this shape for a value the caller has not already lowered.
 *
 * Typed `RawQueryFragment & symbol` (not the bare `RawQueryFragment` the
 * other helpers in this file return): TypeScript only accepts a
 * `string | number | symbol` as a computed property name, and a raw
 * fragment is only usable as an object key because `raw()`'s default
 * generic already brands it with a `[Symbol.toPrimitive]`. The other
 * helpers here are only ever used as VALUES, where that brand isn't needed.
 */
export function lower(platform: Platform, ref: string): RawQueryFragment & symbol {
  if (platform instanceof SqlitePlatform) return raw(`LOWER(${column(ref)})`);
  return unsupported(platform);
}

/**
 * The value-side twin of `lower()`: `LOWER(?)` bound with the RAW,
 * untransformed value, for the right-hand side of a `lower(platform, col)`
 * filter key. Together they render `LOWER(<column>) = LOWER(?)`,
 * byte-for-byte a legacy `LOWER(col) = LOWER(?)` statement, because SQLite
 * folds BOTH sides with the same (ASCII-only) engine — proven directly
 * against `better-sqlite3`: `SELECT LOWER(?)` on `'JOSÉ@x.com'` yields
 * `'josÉ@x.com'` (only the ASCII letters fold; the `É` is untouched), the
 * same transform SQLite would apply to a stored column. Do NOT pre-lower
 * the value in JS before calling this (program rule 18) — that reintroduces
 * the mixed-engine bug this helper exists to close.
 */
export function lowerParam(platform: Platform, value: string): RawQueryFragment {
  if (platform instanceof SqlitePlatform) return raw('LOWER(?)', [value]);
  return unsupported(platform);
}

