/**
 * The one place an external, string-shaped route/tool id is turned into a
 * numeric primary key before it reaches a typed repository filter.
 *
 * The legacy raw-SQL layer bound a route param straight into `WHERE id = ?`
 * and let SQLite's column-affinity rules do the work. Those rules are more
 * permissive than they look: SQLite applies NUMERIC affinity to a TEXT
 * operand compared against an INTEGER column using the same conversion CAST
 * uses, which accepts leading/trailing whitespace, a leading sign, a decimal
 * point and an exponent — so `WHERE id = ?` genuinely matches integer row 1
 * for `' 1'`, `'1 '`, `'1.0'` and `'+1'`, and matches row 1000 for `'1e3'`
 * (verified empirically against `better-sqlite3`, not assumed — this
 * docstring previously claimed the opposite, that `'1e3'` "can never equal
 * an INTEGER column"; that claim was false). A typed MikroORM filter has no
 * such affinity: `Number('abc')` is `NaN`, and the ORM renders that as the
 * bare, unquoted token `NaN` in the generated SQL, which SQLite parses as a
 * column reference and throws `InvalidFieldNameException: no such column:
 * NaN` — a 500 where the legacy route 404'd (Plan 3b Task 2 review, F1).
 *
 * `toRowId` is the guard every converted service calls instead of a bare
 * `Number(id)`. It does NOT reproduce every string SQLite's affinity
 * conversion would have matched — that would mean accepting `' 1'`, `'1.0'`,
 * `'1e3'`, `'+1'`, and there is no realistic route/tool input that spells an
 * id that way: every id in this codebase originates as
 * `String(<integer column value>)` on our own client (a URL path segment or
 * an MCP tool argument), which is always a canonical decimal string, digits
 * only, no sign, no leading zero beyond what the id itself is, no decimal
 * point, no exponent, no surrounding whitespace. `toRowId` accepts exactly
 * that canonical shape (`/^\d+$/`, so `'007'` — an id that happens to have
 * leading zeros, which SQLite's own affinity conversion also resolves to 7 —
 * still matches) and returns `null` for every non-canonical spelling,
 * INCLUDING the ones SQLite's affinity would have matched. This is a
 * DELIBERATE, ACCEPTED narrowing (program rule 15,
 * `docs/superpowers/plans/2026-09-21-orm-migration-program.md`): a
 * non-canonical id can only ever reach this guard from something other than
 * our own client (a hand-crafted request), and failing closed to the
 * route's legacy not-found result for it is the documented parity
 * deviation, not a bug — never widen the regex to `/^(0|[1-9]\d*)$/` or any
 * other shape that would reject `'007'`, and never widen it to accept the
 * divergent shapes above either.
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
