import { SqlitePlatform } from '@mikro-orm/sql';

/**
 * Program rule 22 (`docs/superpowers/plans/2026-09-21-orm-migration-program.md`),
 * surfaced by Plan 3c Task 4 review M1: MikroORM 7 never sends the driver a
 * parameterised statement. `AbstractSqlConnection.execute` calls
 * `platform.formatQuery(sql, params)` (`@mikro-orm/core`'s `Platform.formatQuery`)
 * and hands better-sqlite3 the fully INLINED SQL text — `formatQuery` walks the
 * `?` placeholders and splices in `this.quoteValue(param)` for each one, so
 * every bound value this ORM ever writes is a literal in the statement string,
 * not a bound parameter the driver escapes separately. `SqlitePlatform`'s own
 * `quoteValue` (`@mikro-orm/sql`'s `AbstractSqlPlatform.quoteValue`, for
 * anything that isn't a `Date`) delegates to `escape`, which wraps a string in
 * single quotes and doubles embedded `'` — the standard SQL literal shape.
 *
 * A `\u0000` inside that string survives the JS-level quoting untouched (it
 * is not `'`, so nothing escapes it), but the C string this literal eventually
 * becomes IS NUL-terminated: SQLite's own tokenizer reads the statement text
 * as a NUL-terminated buffer, so it stops scanning at the embedded `\0` —
 * inside the still-open `'…'` literal, which is exactly why the failure mode
 * is always "unterminated string", never anything an attacker could turn into
 * an injection (verified in the Task 4 review: every NUL statement in this
 * class fails closed with a syntax error, 500, never a different query).
 *
 * The legacy raw-SQL layer never had this problem: `better-sqlite3` binds `?`
 * parameters as real, separately-transmitted values (no inlining, no NUL
 * truncation), so a NUL byte in a user string round-tripped byte-for-byte —
 * `GET /api/trips/:id/places?search=%00` was 200 and a place named
 * `"nul\u0000name"` created (201) with its name intact. Once a route's
 * statement moves off `DatabaseService`'s raw bind onto anything this ORM
 * inlines (a QB read, `em.insert`, `nativeUpdate` — every one of them,
 * regardless of domain), that same input 500s instead, byte-for-byte across
 * every domain: this is corollary to rule 22, not specific to any one plan.
 *
 * The fix restores the round-trip AT THE PLATFORM, once, program-wide: a
 * string containing `\u0000` renders not as one `'…'` literal but as a
 * parenthesised `||` (SQL string concatenation) chain, splicing in SQLite's
 * builtin `char(0)` — which returns a one-character string holding the NUL
 * codepoint — everywhere the original string held one. `char()` is a core
 * SQLite function (no extension, no `PRAGMA`), and `||` binds tighter than
 * every arithmetic/comparison/logical operator that could otherwise appear
 * around a bound value, so `(...)`'s parens are redundant for a scalar
 * comparison — kept anyway so this expression composes safely as an
 * IN-list element or the operand of anything else `escape()`'s caller
 * splices it into (`AbstractSqlPlatform.escape` recurses through arrays
 * with `value.map(v => this.escape(v)).join(', ')`, so a NUL inside one
 * array element must stay a self-contained expression). Splitting on
 * `\u0000` and re-quoting each piece with the platform's own `escape` (via
 * `super.escape`) reuses the exact same `'`-doubling every non-NUL string
 * already goes through, so a NUL next to a quote or a backslash (neither
 * of which SQLite string literals treat specially) round-trips exactly as
 * it did before this override existed.
 *
 * Deliberately scoped to `typeof value === 'string'`: this is the M1 fix,
 * not a general re-implementation of `escape`/`quoteValue`. Non-finite
 * numbers rendering as bare, unquoted tokens is the SAME inlining mechanism
 * (rule 22's corollary) but is already fenced off upstream by rule 21's
 * `toRowId` id guards — it is not this override's job to guess at every
 * caller's numeric validation.
 */
export class NulSafeSqlitePlatform extends SqlitePlatform {
  override escape(value: unknown): string {
    if (typeof value === 'string' && value.includes('\u0000')) {
      const literals = value.split('\u0000').map(part => super.escape(part));
      return `(${literals.join(' || char(0) || ')})`;
    }
    return super.escape(value);
  }
}
