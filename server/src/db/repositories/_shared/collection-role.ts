import type { ExpressionBuilder, ExpressionWrapper, SqlBool } from 'kysely';
import type { CollectionMembers } from '../../entities/CollectionMembers.entity';
import type { Collections } from '../../entities/Collections.entity';
import type { TrekRepository } from './trek-repository';

/**
 * Plan 3h Task 1, R6 — the collections cluster's own membership/role model,
 * as ONE shared typed predicate instead of three ad hoc re-implementations.
 *
 * Legacy shape (`collections.service.ts` at HEAD, pre-conversion):
 * - `isVisible` (CL2) — `SELECT 1 FROM collections WHERE id=? AND
 *   owner_id=? UNION SELECT 1 FROM collection_members WHERE
 *   collection_id=? AND user_id=? AND status='accepted' LIMIT 1`.
 * - `isOwner` (CL3) — `SELECT 1 FROM collections WHERE id=? AND owner_id=?`.
 * - `roleOf` (CL4) — calls `isOwner` first (`'owner'` short-circuit), else
 *   `SELECT role FROM collection_members WHERE collection_id=? AND
 *   user_id=? AND status='accepted'`, normalizing an unrecognized/legacy
 *   role value to `'editor'` (only `'admin'`/`'viewer'` pass through as-is).
 *
 * `roleOf`'s own legacy body ALREADY resolved `isVisible`/`isOwner` as its
 * own first branch — the three functions were never independent, only
 * independently re-queried. {@link resolveCollectionRole} is the SAME
 * two-step resolution (owner match, else an accepted member row's role),
 * built once here: `isVisible` becomes `role !== null`, `isOwner` becomes
 * `role === 'owner'`, `roleOf` returns the role directly.
 * `assertAccess`/`assertCanEdit`/`assertCanDelete` stay service-level
 * orchestration (CollectionsService) — they call this predicate and branch
 * on their own three distinct refusal shapes (404 no-access, 403-viewer
 * edit-refused, 403-non-admin delete-refused); this file has no knowledge
 * of HTTP status codes.
 *
 * **QB-callable form** ({@link resolveCollectionRole}): takes the caller's
 * own `CollectionsRepository`/`CollectionMembersRepository` (both extend
 * `TrekRepository`, typed generically here so this file stays independent
 * of either repository class — the same reason `_shared/owned-lookup.ts`
 * types its helpers against `TrekRepository<T>` rather than a concrete
 * repository) and resolves the role via two ordinary `findOne` calls —
 * MikroORM's own QueryBuilder-backed API, the "repository methods that need
 * it inline" form R6 asks for. This is what `CollectionsService`'s
 * `isVisible`/`isOwner`/`roleOf` call directly; Task 2's own
 * `assertCanEdit`/`assertCanDelete` call sites throughout the saved-places/
 * copy-to-trip/labels/invites surface go through the SAME service methods,
 * never re-deriving the predicate.
 *
 * **Kysely-callable form** ({@link collectionVisibleExpr}): an inline
 * boolean `EXISTS`/`OR` predicate for a caller already building a raw,
 * multi-join statement through `this.kysely()` (the shape Task 2's dynamic
 * OR-condition methods — `matchingCollectionPlaces`/`findMembership`,
 * CL58/CL69 — are the most likely future consumers of), modelled on
 * `packing-visibility.ts`'s `packingVisibleToActorExpr`: an owner-id equality
 * plus a correlated `EXISTS` against `collection_members`, mirroring CL2's
 * own UNION shape as a boolean OR instead of a value-returning UNION SELECT.
 * This form answers "is this collection visible to this user", not "what is
 * their role" — a caller needing the actual role (for an edit/delete gate)
 * always uses {@link resolveCollectionRole}, never this boolean form.
 *
 * Proven against five actor cases (owner, admin member, editor member,
 * viewer member, an invited-but-still-pending user, a complete stranger) by
 * `tests/unit/db/repositories/_shared/collection-role.parity.test.ts`,
 * mutation-proved (flip one branch, confirm the matching case goes red) —
 * Task 2 imports that harness rather than re-deriving it.
 */
export type CollectionRole = 'owner' | 'admin' | 'editor' | 'viewer' | null;

/**
 * The two-step role resolution CL2/CL3/CL4 all reduce to: an owner match
 * short-circuits to `'owner'`; otherwise an accepted member row's own
 * `role` column is read and normalized (`'admin'`/`'viewer'` pass through,
 * anything else — including a future/unknown value — becomes `'editor'`,
 * the legacy `roleOf`'s own fallback); no row of either kind resolves to
 * `null` (no access).
 *
 * `fields: ['id']`/`fields: ['role']` — a narrow projection, like every
 * other "rows out, existence/value only" read in this program
 * (`findOwnedByUser`'s own docstring).
 */
export async function resolveCollectionRole(
  collections: TrekRepository<Collections>,
  members: TrekRepository<CollectionMembers>,
  collectionId: number,
  userId: number,
): Promise<CollectionRole> {
  const owner = await collections.findOne({ id: collectionId, owner: userId }, { fields: ['id'] });
  if (owner) return 'owner';
  const member = await members.findOne(
    { collection: collectionId, user: userId, status: 'accepted' },
    { fields: ['role'] },
  );
  if (!member) return null;
  return member.role === 'admin' || member.role === 'viewer' ? (member.role as 'admin' | 'viewer') : 'editor';
}

/**
 * `collections`/`collection_members`'s REAL table names, the shape
 * {@link collectionVisibleExpr} needs. A consumer's own local Kysely `DB`
 * interface satisfies this by structural extension, the
 * `ReservationVisibilityKyselyDB`/`PackingVisibilityKyselyDB` precedent.
 */
export interface CollectionVisibilityKyselyDB {
  collections: { id: number; owner_id: number };
  collection_members: { collection_id: number; user_id: number; status: string };
}

/**
 * The Kysely-expression twin of CL2's UNION, as a boolean OR: owner-id
 * equality, or a correlated `EXISTS` against an accepted `collection_members`
 * row. `collections` is a genuine `p.manyToOne(Users)` FK
 * (`Collections.entity.ts`), but this form takes the raw `owner_id` column
 * directly rather than joining through the relation — matching CL2's own
 * `owner_id = ?` text, and avoiding a second join the caller's own outer
 * query may not want.
 */
export function collectionVisibleExpr(
  eb: ExpressionBuilder<CollectionVisibilityKyselyDB, 'collections'>,
  userId: number,
): ExpressionWrapper<CollectionVisibilityKyselyDB, 'collections', SqlBool> {
  return eb.or([
    eb('collections.owner_id', '=', userId),
    eb.exists(
      eb
        .selectFrom('collection_members as cm')
        .select('cm.collection_id')
        .whereRef('cm.collection_id', '=', 'collections.id')
        .where('cm.user_id', '=', userId)
        .where('cm.status', '=', 'accepted'),
    ),
  ]);
}
