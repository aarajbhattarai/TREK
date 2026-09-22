/**
 * The one place an external, string-shaped route/tool id is turned into a
 * numeric primary key before it reaches a typed repository filter.
 *
 * The legacy raw-SQL layer bound a route param straight into `WHERE id = ?`
 * and let SQLite's column-affinity rules do the work: a well-formed numeric
 * string ('5', ' 5', '5.0') converts and matches, anything else ('abc', '',
 * '0x10', '1e3') stays TEXT, can never equal an INTEGER column, and the
 * lookup simply misses — answered with the route's ordinary not-found. A
 * typed MikroORM filter has no such affinity: `Number('abc')` is `NaN`, and
 * the ORM renders that as the bare, unquoted token `NaN` in the generated
 * SQL, which SQLite parses as a column reference and throws
 * `InvalidFieldNameException: no such column: NaN` — a 500 where the legacy
 * route 404'd (Plan 3b Task 2 review, F1).
 *
 * `toRowId` is the guard every converted service calls instead of a bare
 * `Number(id)`: it accepts only what the legacy binding actually matched —
 * digits only, no sign, no decimal point, no exponent, no hex — and returns
 * `null` for everything else, which the caller answers with the route's own
 * legacy not-found result BEFORE any repository call (program rule 15,
 * `docs/superpowers/plans/2026-09-21-orm-migration-program.md`).
 *
 * A `/^\d+$/` string match is deliberately stricter than `Number.isSafeInteger`
 * alone: `Number('0x10')` is `16` and `Number('1e3')` is `1000`, both safe
 * integers a bare `Number()` conversion would have accepted even though
 * SQLite's affinity conversion never would have matched either shape against
 * an INTEGER column. Requiring the digits-only shape first closes that gap.
 */
export function toRowId(value: unknown): number | null {
  if (typeof value === 'number') {
    return Number.isSafeInteger(value) ? value : null;
  }
  if (typeof value === 'string' && /^\d+$/.test(value)) {
    const parsed = Number(value);
    return Number.isSafeInteger(parsed) ? parsed : null;
  }
  return null;
}
