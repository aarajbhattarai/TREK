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

// ---------------------------------------------------------------------------
// Plan 3c Task 0b (R6) — no consumer yet: Tasks 1–8 wire these in as each
// converts the statement that needs them (`place-shadow.service.ts:192`,
// `places.service.ts:642,651-652`, the ~16 `COALESCE` sites across
// `days`/`assignments`/`trip-members`/`places`). Added here, with their own
// SQLF-0xx tests pinning the SQLite text against a raw statement, so a later
// task imports a tested helper instead of writing one inline.
// ---------------------------------------------------------------------------

/**
 * `datetime('now', '-N days')` — the SQLite clock shifted backwards by whole
 * days, as TEXT (not a stored column's value — `dateAdd` above is the wrong
 * shape for this: it shifts a *column*, not "now"). `days` is validated to be
 * a non-negative integer and spelled directly into the fragment rather than
 * bound: the legacy statement (`place-shadow.service.ts:192`) binds the
 * WHOLE modifier string (`'-30 days'`) as one parameter, and MikroORM's raw
 * fragments do not accept a placeholder inside the modifier argument of a
 * SQLite date/time function — `datetime('now', ?)` with `'-30 days'` bound
 * does work in raw SQLite, but composing that shape through a `raw()`
 * fragment used as a QueryBuilder value needs the modifier already in the
 * SQL text, the same way `dateAdd` above spells its own day count.
 */
export function nowMinusDays(platform: Platform, days: number): RawQueryFragment {
  if (!Number.isInteger(days) || days < 0) {
    throw new Error(`sql-functions: nowMinusDays needs a non-negative integer day count, got ${days}`);
  }
  if (platform instanceof SqlitePlatform) return raw(`datetime('now', '-${days} days')`);
  return unsupported(platform);
}

/**
 * `TRIM(<col>)`, standalone. **Does NOT compose with `lower()`** to build
 * `LOWER(TRIM(name))` (Task 0b review M3): `lower()`'s `ref` argument goes
 * through `column()`, whose regex rejects anything but a bare
 * `alias.column` reference — `TRIM(name)` fails it — and even if it didn't,
 * `coalesce()`'s own docstring in this file documents that a
 * `RawQueryFragment` cannot be nested inside another one (`raw()`'s
 * `[Symbol.toPrimitive]` only implements the `'string'` coercion hint, which
 * is the object-key position, not template-literal interpolation). Use
 * `lowerTrim()` below for the composed shape.
 */
export function trim(platform: Platform, ref: string): RawQueryFragment {
  if (platform instanceof SqlitePlatform) return raw(`TRIM(${column(ref)})`);
  return unsupported(platform);
}

/**
 * `LOWER(TRIM(<col>))` as one fragment — the shape `places.service.ts:642`
 * (`lower(trim(name))`, PL26) actually needs; `lower()`/`trim()` above
 * cannot be composed to build it (see `trim()`'s docstring, Task 0b review
 * M3). Typed `RawQueryFragment & symbol`, the same brand `lower()` carries,
 * for use as a filter KEY: `{ [lowerTrim(platform, 'name')]: lowerParam(...) }`.
 * SQLite's `LOWER()` is ASCII-only (program rule 18) — unchanged by the
 * `TRIM()`.
 */
export function lowerTrim(platform: Platform, ref: string): RawQueryFragment & symbol {
  if (platform instanceof SqlitePlatform) return raw(`LOWER(TRIM(${column(ref)}))`);
  return unsupported(platform);
}

/**
 * `COALESCE(<col>, <fallbackCol>)` — both sides column references, for the
 * `COALESCE(a, b)` SELECT-projection shape (`days.service.ts:93-94`,
 * `assignments.service.ts:103-104`, `trip-members.service.ts:116-143`, …).
 *
 * Not composed by nesting a `RawQueryFragment` inside this one: MikroORM's
 * `RawQueryFragment[Symbol.toPrimitive]` only returns a usable value for the
 * `'string'` coercion hint (object-key position) — a template-literal
 * `${fragment}` embed uses the `'default'` hint and throws
 * (`node_modules/@mikro-orm/core/utils/RawQueryFragment.js`, verified
 * directly, not assumed). So `coalesce`'s second argument is a second
 * `column()`-validated identifier, spelled into the same fragment as the
 * first — two columns, one statement, matching `lower`/`lowerParam`'s
 * two-function split for the same reason (a filter KEY vs a bound VALUE
 * are different shapes).
 */
export function coalesce(platform: Platform, ref: string, fallbackRef: string): RawQueryFragment {
  if (platform instanceof SqlitePlatform) return raw(`COALESCE(${column(ref)}, ${column(fallbackRef)})`);
  return unsupported(platform);
}

/**
 * `COALESCE(<col>, ?)` — the value-side twin of `coalesce()` above, for the
 * `COALESCE(col, ?)` UPDATE-SET shape (`places.service.ts:344,351,363,…`).
 * `value` is bound as a genuine parameter, never interpolated.
 */
export function coalesceParam(platform: Platform, ref: string, value: string | number | null): RawQueryFragment {
  if (platform instanceof SqlitePlatform) return raw(`COALESCE(${column(ref)}, ?)`, [value]);
  return unsupported(platform);
}

/**
 * `ABS(<col> - ?)`, for use as a filter KEY (the `'string'`-hint coercion
 * `lower()` above relies on) so it composes with `$lte`/`$gte`:
 * `{ [absDifference(platform, 'lat', targetLat)]: { $lte: tolerance } }`
 * renders `WHERE ABS(lat - ?) <= ?`, matching `places.service.ts:651-652`'s
 * `abs(lat - ?) <= ?` (and the sibling `lng` comparison at `:652`) exactly.
 * Typed `RawQueryFragment & symbol`, same reason `lower()` is: only a
 * `string | number | symbol` is a valid computed property name, and the
 * brand only lives on that typing for values meant to be used as a key.
 */
export function absDifference(platform: Platform, ref: string, value: number): RawQueryFragment & symbol {
  if (platform instanceof SqlitePlatform) return raw(`ABS(${column(ref)} - ?)`, [value]);
  return unsupported(platform);
}

// ---------------------------------------------------------------------------
// Plan 3c Task 1 — aggregate SELECT projections (`PlaceShadowPicksRepository
// .totals`/`countBySource`/`countByLiveRank`, `place-shadow.service.ts:144,
// 149, 157`). `alias` is a hand-written literal at every call site today
// (never user input), validated the same way `column()` validates a column
// reference, so a future caller cannot smuggle SQL through it either.
// ---------------------------------------------------------------------------

function alias(name: string): string {
  if (!/^[a-z_][a-z0-9_]*$/i.test(name)) {
    throw new Error(`sql-functions: not an alias: ${name}`);
  }
  return name;
}

/** `COUNT(*) as <alias>`, for a single-row totals read or a `GROUP BY` count column. */
export function countAll(platform: Platform, aliasName: string): RawQueryFragment {
  if (platform instanceof SqlitePlatform) return raw(`COUNT(*) as ${alias(aliasName)}`);
  return unsupported(platform);
}

/** `MIN(<col>) as <alias>`. */
export function minOf(platform: Platform, ref: string, aliasName: string): RawQueryFragment {
  if (platform instanceof SqlitePlatform) return raw(`MIN(${column(ref)}) as ${alias(aliasName)}`);
  return unsupported(platform);
}

/** `MAX(<col>) as <alias>`. */
export function maxOf(platform: Platform, ref: string, aliasName: string): RawQueryFragment {
  if (platform instanceof SqlitePlatform) return raw(`MAX(${column(ref)}) as ${alias(aliasName)}`);
  return unsupported(platform);
}

// ---------------------------------------------------------------------------
// Plan 3c Task 6 — `TripMembersRepository.listWithUserAndInviter`
// (`trip-members.service.ts:117`, TM2): the `role` column, a `CASE WHEN`
// comparing the joined user's id against the trip's owner id.
// ---------------------------------------------------------------------------

/**
 * `CASE WHEN <col> = ? THEN ? ELSE ? END`, for use as a `.select()` value
 * (chain `.as(aliasName)` at the call site, the same way `coalesce()`'s
 * callers do — this file does not bake the alias into the SQL text itself
 * for this one, unlike `countAll`/`minOf`/`maxOf`, because `.as()` already
 * covers it and a `value`-bearing fragment cannot reuse `alias()`'s bare
 * identifier validation the same way an aggregate's literal alias does).
 * `value`/`whenTrue`/`whenFalse` are all bound as parameters, never
 * interpolated — even though today's only caller (TM2's owner/member role
 * label) passes fixed literal strings, parity is by VALUE, not by whether
 * the string happens to be a source-code literal at the call site.
 */
export function caseWhenEquals(platform: Platform, ref: string, value: number, whenTrue: string, whenFalse: string): RawQueryFragment {
  if (platform instanceof SqlitePlatform) return raw(`CASE WHEN ${column(ref)} = ? THEN ? ELSE ? END`, [value, whenTrue, whenFalse]);
  return unsupported(platform);
}

