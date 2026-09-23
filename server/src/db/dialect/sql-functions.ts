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
 *
 * Typed `RawQueryFragment & symbol` (widened from a bare `RawQueryFragment`
 * in Plan 3d Task 0, R3 — `_shared/reservation-visibility.ts`'s
 * `publicReservationCondition` needs `COALESCE(alias.ingest_state, 'live')`
 * as a `.where({...})` filter KEY, `{ [coalesceParam(...)]: { $ne: 'staged'
 * } }`, the same brand `lower()`/`lowerTrim()`/`castInteger()` carry for
 * that use): every existing UPDATE-SET caller (`Places.repository.ts`'s six
 * `coalesceParam(...)` assignments into a loosely-typed `data` object) keeps
 * typechecking unchanged — `RawQueryFragment & symbol` is assignable
 * anywhere a plain `RawQueryFragment` is expected, a strict widening with no
 * behaviour change (the function body is untouched).
 */
export function coalesceParam(platform: Platform, ref: string, value: string | number | null): RawQueryFragment & symbol {
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
 * `value`/`whenTrue`/`whenFalse` are all passed through `raw()`'s own
 * parameter escaping, never spliced into the SQL text by this function —
 * even though today's only caller (TM2's owner/member role label) passes
 * fixed literal strings, parity is by VALUE, not by whether the string
 * happens to be a source-code literal at the call site. (Task 6 review's
 * I1: downstream, MikroORM still formats the FINAL query with every
 * parameter inlined as an escaped literal in the SQL text it hands
 * better-sqlite3 — not as a separate bound-params array — so a non-finite
 * `value` renders as the bare token `NaN`/`Infinity` and fails at PREPARE
 * time regardless of this function's own escaping; callers must guard a
 * non-finite `value` before calling.)
 */
export function caseWhenEquals(platform: Platform, ref: string, value: number, whenTrue: string, whenFalse: string): RawQueryFragment {
  if (platform instanceof SqlitePlatform) return raw(`CASE WHEN ${column(ref)} = ? THEN ? ELSE ? END`, [value, whenTrue, whenFalse]);
  return unsupported(platform);
}

// ---------------------------------------------------------------------------
// Plan 3c Task 1 fix round (review M1) — `PlaceShadowPicksRepository
// .countBySource` (PS5): `.orderBy()` on `countAll()`'s aliased column throws
// ("Trying to query by not existing property" — `raw()`'s alias carries no
// literal type for `ExtractRawAliases` to register), and sorting the fetched
// rows in JS is NOT equivalent to the legacy `ORDER BY count DESC`: SQLite's
// own sorter is not stable, so on a tie it orders descending by GROUP BY key,
// while `Array.prototype.sort` (stable) leaves ties in the rows' incoming
// (ascending) order — verified directly (five sources, two tied pairs).
// ---------------------------------------------------------------------------

/**
 * `COUNT(*)` as an ORDER BY EXPRESSION (not an alias — `.orderBy()` cannot
 * order by `countAll()`'s aliased column; ordering by the expression itself
 * works and reproduces the legacy `ORDER BY count DESC` tie order exactly).
 * Typed `RawQueryFragment & symbol`, the same brand `lower()`/`lowerTrim()`
 * carry, so it is usable as an `.orderBy()` object key:
 * `.orderBy({ [countAllRef(platform)]: 'desc' })`.
 */
export function countAllRef(platform: Platform): RawQueryFragment & symbol {
  if (platform instanceof SqlitePlatform) return raw('COUNT(*)');
  return unsupported(platform);
}

// ---------------------------------------------------------------------------
// Plan 3d Task 0 (R6) — no consumer yet: Tasks 2/4 wire these in as each
// converts the statement that needs them (`reservations.service.ts` RS11 and
// RS20 `listUpcoming`, `reservation-visibility.ts` RV2, DY23 in
// `days.service.ts`). Added here, with their own SQLF-0xx tests pinning the
// SQLite text against a raw statement on seeded rows, so Tasks 1-6 import a
// tested helper instead of writing one inline.
// ---------------------------------------------------------------------------

/**
 * `<col> GLOB '[0-9][0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]*'` — "does this
 * column's TEXT value start with an ISO calendar date (`YYYY-MM-DD`)?", the
 * legacy `DATED` constant (`reservations.service.ts:120`:
 * `` `r.reservation_time GLOB '[0-9][0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]*'` ``,
 * used at `:453-454` inside RS20's two `CASE WHEN` arms). Spelled with
 * SQLite's `[0-9]` character-class glob syntax, NOT the plan's shorthand
 * `'????-??-??*'` — verified directly against the legacy source, not
 * assumed: a `?` in SQLite GLOB matches any single character (letters
 * included), so `????-??-??*` is a strictly WIDER, non-equivalent pattern
 * (it would also match `abcd-ef-gh...`); only the digit-class form matches
 * the legacy's actual behaviour byte-for-byte.
 *
 * A full boolean expression, not a bare value — pair with a `CASE WHEN`
 * builder or a QB/Kysely raw condition, never nest inside another raw
 * fragment (see `coalesce()`'s docstring on why nesting doesn't work).
 * Kysely has no `GLOB` comparison operator (`operator-node.d.ts`'s
 * `ComparisonOperator` union omits it — verified against the installed
 * 0.29.6 typings, per the inventory's §19 MikroORM/Kysely capability table)
 * — this helper's SQLite-only reach is therefore the only portable spelling
 * for this shape until a second platform is added.
 */
export function startsWithIsoDate(platform: Platform, ref: string): RawQueryFragment {
  if (platform instanceof SqlitePlatform) {
    return raw(`${column(ref)} GLOB '[0-9][0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]*'`);
  }
  return unsupported(platform);
}

/**
 * `substr(<col>, <start>[, <length>])`, 1-based on both ends — the legacy
 * shape at `reservations.service.ts:453` (`substr(r.reservation_time, 1,
 * 10)`, three-arg), `:454` (`substr(r.reservation_time, 12)`, two-arg — "from
 * position 12 to the end of the string") and `days.service.ts` DY23
 * (`SUBSTR(reservation_time, 11)`, same two-arg shape, spelled uppercase in
 * that statement — SQL function names are case-insensitive, so this helper's
 * lowercase spelling is behaviourally identical). `length` is optional,
 * matching SQLite's own two-arg `substr(X, Y)` form (everything from `Y` to
 * the end) — passing it renders the three-arg form instead. `start` and
 * `length` are validated integers and spelled directly (not bound): they are
 * always source-code constants at every known call site (`1`, `10`, `11`,
 * `12`), never user input, the same trust boundary `dateAdd`'s day count and
 * `columnIncrementedBy`'s amount already rely on in this file.
 */
export function substring(platform: Platform, ref: string, start: number, length?: number): RawQueryFragment {
  if (!Number.isInteger(start) || start < 1) {
    throw new Error(`sql-functions: substring needs a 1-based integer start, got ${start}`);
  }
  if (length !== undefined && (!Number.isInteger(length) || length < 0)) {
    throw new Error(`sql-functions: substring needs a non-negative integer length, got ${length}`);
  }
  if (platform instanceof SqlitePlatform) {
    if (length === undefined) return raw(`substr(${column(ref)}, ${start})`);
    return raw(`substr(${column(ref)}, ${start}, ${length})`);
  }
  return unsupported(platform);
}

/**
 * A part of a `concat()` expression: either a column reference (rendered
 * through `column()`, the same identifier validation every other helper in
 * this file applies) or a plain value bound as a genuine parameter (`?`) —
 * never interpolated, even for what today's only legacy caller spells as a
 * literal (`'T'` in `d.date || 'T' || a.check_in`,
 * `reservations.service.ts:475, :493`): a bound constant and an interpolated
 * one produce byte-identical SQLite behaviour for a plain string, and
 * binding is the shape every other value-side helper in this file already
 * prefers (`coalesceParam`, `lowerParam`, `absDifference`).
 */
export type ConcatPart = { column: string } | { value: string };

/**
 * `<part> || <part> || …` — SQLite (and Postgres) string concatenation, the
 * legacy shape at `reservations.service.ts:475, :493`
 * (`d.date || 'T' || a.check_in`, RS20's two check-in/check-out arms) and
 * `days.service.ts` DY23 (`:date || SUBSTR(reservation_time, 11)`, inside an
 * `UPDATE … SET`). Needs at least two parts — a one-part "concatenation" is
 * a caller bug, not a legitimate call. Each part is a `ConcatPart` (see its
 * own docstring) rather than a bare string, so a column reference and a
 * bound literal can never be confused with each other the way an untyped
 * `...parts: string[]` would invite (a plain string could mean either).
 *
 * Deliberately does NOT accept a nested `RawQueryFragment` as a part (e.g.
 * the output of `substring()` above) — the same limitation `coalesce()`'s
 * docstring documents: `RawQueryFragment`'s `[Symbol.toPrimitive]` only
 * implements the `'string'` coercion hint (the object-key position), not the
 * `'default'` hint a template-literal embed or an array-join would need, so
 * composing `concat(platform, substring(...), ...)` throws at the `raw()`
 * boundary rather than rendering silently wrong SQL. A caller that needs
 * `SUBSTR(...)` as one side of a `||` builds that one statement directly
 * (Kysely's `'||'` binary operator, per the inventory's §17a/§19), the same
 * way RS20's own CASE/CTE shape is built outside this file's helpers.
 */
export function concat(platform: Platform, ...parts: readonly ConcatPart[]): RawQueryFragment {
  if (parts.length < 2) {
    throw new Error(`sql-functions: concat needs at least two parts, got ${parts.length}`);
  }
  if (platform instanceof SqlitePlatform) {
    const bindings: string[] = [];
    const sql = parts
      .map((part) => {
        if ('column' in part) return column(part.column);
        bindings.push(part.value);
        return '?';
      })
      .join(' || ');
    return raw(sql, bindings);
  }
  return unsupported(platform);
}

/**
 * `CAST(<col> AS INTEGER)` — the legacy shape at `reservations.service.ts:471,
 * :489` (inside RS20's correlated `stay_first_reservation_id`/title
 * subqueries: `CAST(res.accommodation_id AS INTEGER) = a.id`) and
 * `reservation-visibility.ts:106-107` (RV2's `publicStaySql`:
 * `CAST(vr.accommodation_id AS INTEGER) = ${alias}.id`). Exists specifically
 * for `reservations.accommodation_id`, a TEXT column holding integer ids
 * with no FK (§18.1 of the inventory — some rows read back as `"14.0"`):
 * casting it to INTEGER before comparing against a genuine INTEGER column
 * (`day_accommodations.id`) applies numeric affinity to BOTH sides, matching
 * `"14"` and `"14.0"` alike, the same way the legacy statement does.
 *
 * Typed `RawQueryFragment & symbol`, the same brand `lower()`/`lowerTrim()`
 * carry: both known legacy call sites compare the cast against ANOTHER
 * COLUMN, not a bound value (`= a.id`, `= ${alias}.id`) — the shape is
 * `{ [castInteger(platform, 'vr.accommodation_id')]: columnRef(platform,
 * 'a.id') }`, pairing this helper's filter-KEY brand with `columnRef()`'s
 * existing VALUE-side column reference. The brand also lets it appear in a
 * `.select()` projection via `.as(alias)` (the `lowerTrim`/SQLF-027 dual-use
 * precedent) for a caller that only needs the cast INTEGER value itself.
 */
export function castInteger(platform: Platform, ref: string): RawQueryFragment & symbol {
  if (platform instanceof SqlitePlatform) return raw(`CAST(${column(ref)} AS INTEGER)`);
  return unsupported(platform);
}

/**
 * `ABS(JULIANDAY(<col>) - JULIANDAY(?))` — the legacy shape at
 * `reservations.service.ts:307` (RS11, `resolveDayIdFromTime`'s
 * nearest-day fallback: `ORDER BY ABS(JULIANDAY(date) - JULIANDAY(?)) ASC,
 * date ASC LIMIT 1`), which clamps an imported booking's date to the
 * closest day row in the trip when no exact match exists. `isoDate` is
 * bound as a genuine parameter (never interpolated), matching the legacy
 * statement's own bind. Distinct from `absDifference()` above:
 * `absDifference` is `ABS(<col> - ?)` on plain NUMERIC values (for a
 * lat/lng tolerance filter); this helper compares two `JULIANDAY(...)`
 * calendar values. Typed `RawQueryFragment & symbol`, the same brand
 * `countAllRef()` carries, so it is usable as an `.orderBy()` object key —
 * `.orderBy({ [dayDistance(platform, 'date', isoDate)]: 'asc' })` —
 * matching the legacy's own `ORDER BY ABS(JULIANDAY(...) - JULIANDAY(?)) ASC`
 * shape exactly (an aliased column cannot be ordered by, the same
 * `ExtractRawAliases` limitation `countAllRef`'s own docstring / SQLF-024's
 * comment documents; ordering by the EXPRESSION itself is what works).
 */
export function dayDistance(platform: Platform, ref: string, isoDate: string): RawQueryFragment & symbol {
  if (platform instanceof SqlitePlatform) return raw(`ABS(JULIANDAY(${column(ref)}) - JULIANDAY(?))`, [isoDate]);
  return unsupported(platform);
}

