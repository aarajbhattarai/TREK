import type { Platform } from '@mikro-orm/core';
import type { ExpressionBuilder } from 'kysely';
import { coalesceParam } from '../../dialect/sql-functions';

/**
 * The visibility predicate an anonymous viewer's reads are filtered
 * through — ONE source, typed, for `reservations`/`day_accommodations`
 * (Plan 3d Task 0, R3).
 *
 * Derived from the two legacy SQL-fragment builders this file supersedes
 * (`src/nest/reservations/reservation-visibility.ts`'s `publicReservationSql`
 * and `publicStaySql`, kept in place — string form — until Tasks 2/4/5
 * convert their own consumers and `share`'s owner is decided, §14.6):
 *
 * - **RV1** `publicReservationSql(alias)` — `` COALESCE(${alias}.ingest_state,
 *   'live') <> 'staged' ``. A reservation is public unless an automated
 *   ingest staged it for review.
 * - **RV2** `publicStaySql(alias)` — a stay is public when nothing points at
 *   it (added by hand), or when a LIVE booking does:
 *   `(NOT EXISTS (…) OR EXISTS (… AND <RV1>))`, correlated on
 *   `CAST(vr.accommodation_id AS INTEGER) = ${alias}.id` (`accommodation_id`
 *   is TEXT with no FK, §18.1 — some rows read back as `"14.0"`).
 *
 * Two shapes are exported because the two predicates need different query
 * APIs: RV1 has no correlated subquery, so it renders as a typed MikroORM
 * QueryBuilder filter OBJECT (`publicReservationCondition`) — spreadable
 * into any `.where({...})` call at any table alias, exactly like the
 * legacy fragment builder's own runtime-alias shape, no compile-time table
 * binding needed (rule 23: a typed condition, not a string). RV2's
 * NOT EXISTS/EXISTS pair has no MikroORM QueryBuilder expression (no
 * relation exists from `day_accommodations` to `reservations` via
 * `accommodation_id` — R10 keeps it that way; QB's `$exists` operator
 * checks embeddable/JSON path existence, not a correlated SQL subquery),
 * so it is built with Kysely's own typed `ExpressionBuilder`
 * (`publicStayExists`) — `eb.exists`/`eb.not` (Kysely's `unary('exists'|
 * 'not', …)` shortcuts), `eb.cast`, `eb.fn.coalesce`, all fully typed,
 * never a `raw()` call or a `sql` tagged template (both banned under
 * `src/db/repositories/**` by ESLint's `no-restricted-syntax`, checked
 * directly against `server/eslint.config.mjs`).
 *
 * **`publicStayExists` is deliberately narrow, not maximally generic** —
 * `ReservationVisibilityKyselyDB` fixes the two aliases every known
 * caller already uses (`a` for the outer stay row, `vr` for the
 * correlated reservations lookup — "Alias interpolation is a
 * caller-supplied constant ('r', 'vr', 'a'); never user input", inventory
 * §2d). `Trips.repository.ts`'s `tripSelectQuery` docstring records why a
 * shared Kysely helper across differently-joined outer queries doesn't
 * compose well ("a shared private helper can't be typed across these four
 * callbacks either… `leftJoin`'s alias widens each callback's own
 * `ExpressionBuilder` table-set in a way a separate generic method
 * signature can't match structurally") — the same limitation would bite a
 * predicate meant to serve arbitrarily-different outer queries. This
 * function instead requires exactly one contract: the caller's outer query
 * is built with `.selectFrom('day_accommodations as a')` (or any
 * `.selectFrom`/`.leftJoin` chain that puts an `a` alias with an `id`
 * column into scope) and a `reservations` table exists in the same `DB`
 * interface. A consumer whose own local Kysely `DB` interface satisfies
 * `ReservationVisibilityKyselyDB` structurally can pass its `eb` straight
 * through, extending its interface with `& ReservationVisibilityKyselyDB`
 * if needed (the same additive-intersection shape
 * `DayAssignmentsKyselyDB`/`AssignmentTimeSortKyselyDB` already use for
 * their own narrow, per-query interfaces) — proven end-to-end (not just
 * typechecked) by this file's own test and by the string-vs-predicate
 * parity harness (`tests/unit/db/repositories/_shared/reservation-visibility.test.ts`),
 * which Tasks 2/4/5 reuse rather than re-derive.
 *
 * `ingest_state` visibility is deliberately NOT filtered for authenticated
 * reads (`reservation-visibility.ts`'s own docstring: "the staging inbox
 * has to see its own rows, or nobody can confirm them") — these two
 * exports exist ONLY for the two anonymous surfaces (the ICS feeds,
 * `share`) that need it; nothing in this file changes an authenticated
 * list.
 */

/**
 * RV1 as a typed QB filter-object condition:
 * `COALESCE(<alias>.ingest_state, 'live') <> 'staged'`. Spread into a
 * `.where({...})` call — `{ ...publicReservationCondition(platform, 'r'),
 * trip_id: tripId }` — at any table alias the caller's own query already
 * established; this needs no compile-time table binding, the same way
 * `coalesceParam` itself needs none (its `ref` argument is validated only
 * by `column()`'s identifier-shape regex, not against a live entity's
 * declared columns).
 */
export function publicReservationCondition(platform: Platform, alias: string) {
  return { [coalesceParam(platform, `${alias}.ingest_state`, 'live')]: { $ne: 'staged' } };
}

/**
 * `reservations`/`day_accommodations`'s REAL table names, the shape
 * `publicStayExists` needs. A consumer's own local Kysely `DB` interface
 * (the `DayAssignmentsKyselyDB`/`AssignmentTimeSortKyselyDB`/
 * `TripSelectKyselyDB` per-query-interface precedent) satisfies this by
 * structural extension — declaring `day_accommodations`/`reservations`
 * with at least these columns is enough; `Kysely<DB>` typed against it and
 * queried via `.selectFrom('day_accommodations as a')` (the fixed alias
 * every known legacy caller uses — see this file's module docstring) is
 * what actually produces the aliased `a` member `publicStayExists`
 * requires; Kysely computes that from THIS interface's `day_accommodations`
 * entry, not from a hand-declared `a` key (a table's alias is a property of
 * the QUERY, never of the `DB` interface itself).
 */
export interface ReservationVisibilityKyselyDB {
  day_accommodations: { id: number };
  reservations: { id: number; accommodation_id: number | string | null; ingest_state: string | null };
}

/**
 * RV2 as a Kysely predicate: `(NOT EXISTS (…) OR EXISTS (… AND <RV1>))`,
 * correlated on `CAST(vr.accommodation_id AS INTEGER) = a.id`. Call inside
 * a `.where((eb) => publicStayExists(eb))` on a query already
 * `.selectFrom('day_accommodations as a')` against a `Kysely<DB>` whose
 * `DB` satisfies `ReservationVisibilityKyselyDB`. The parameter type is
 * fixed to exactly the shape `.selectFrom('day_accommodations as a')`
 * itself produces (`ReservationVisibilityKyselyDB` plus the derived `a`
 * alias member) rather than generic over an arbitrary caller `DB`/`TB` —
 * `Trips.repository.ts`'s `tripSelectQuery` docstring records why a shared
 * Kysely helper generic across differently-shaped outer queries doesn't
 * compose ("a shared private helper can't be typed across these four
 * callbacks either… a separate generic method signature can't match
 * structurally"); this function accepts exactly one contract instead,
 * proven end-to-end by this file's own parity-harness test.
 */
export function publicStayExists(eb: ExpressionBuilder<ReservationVisibilityKyselyDB & { a: { id: number } }, 'a'>) {
  const linkedTo = eb
    .selectFrom('reservations as vr')
    .select('vr.id')
    .where((eb2) => eb2(eb2.cast(eb2.ref('vr.accommodation_id'), 'integer'), '=', eb2.ref('a.id')));

  return eb.or([
    eb.not(eb.exists(linkedTo)),
    eb.exists(
      linkedTo.where((eb2) => eb2(eb2.fn.coalesce(eb2.ref('vr.ingest_state'), eb2.val('live')), '<>', eb2.val('staged'))),
    ),
  ]);
}
