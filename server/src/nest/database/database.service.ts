import { Inject, Injectable, Optional } from '@nestjs/common';
import { EntityManager } from '@mikro-orm/core';
import type Database from 'better-sqlite3';
import { Trips } from '../../db/entities/Trips.entity';
import { TripMembers } from '../../db/entities/TripMembers.entity';
import { Places } from '../../db/entities/Places.entity';
import type { TripAccess } from '../../db/repositories/Trips.repository';
import type { PlaceWithTagsRow as PlaceWithTags } from '../../db/repositories/Places.repository';
import { DATABASE_CONNECTION } from './database.tokens';

// Plan 3c Task 0b: `TripAccess`/`PlaceWithTags` used to be db/database.ts's
// own interfaces, re-exported from here (§18.1's duplicate-declaration
// surprise). Both are deleted there now — `Trips.repository.ts`'s
// `TripAccess` and `Places.repository.ts`'s `PlaceWithTagsRow` are the single
// sources, re-exported under their original names so every one of the ~40
// importers of `{ TripAccess, PlaceWithTags }` from this module needs no
// change.
export type { TripAccess, PlaceWithTags };

/**
 * Injectable wrapper around TREK's existing better-sqlite3 connection.
 *
 * The injected connection is the Proxy onto the singleton the legacy app
 * already uses (WAL enabled), so Nest modules share the exact same
 * connection — no second connection, no split state, single writer preserved.
 */
@Injectable()
export class DatabaseService {
  constructor(
    @Inject(DATABASE_CONNECTION) private readonly conn: Database.Database,
    // Plan 3c Task 0b: `canAccessTrip`/`isOwner`/`rosterUserIds`/
    // `getPlaceWithTags` moved off the raw better-sqlite3 singleton onto
    // TripsRepository/TripMembersRepository/PlacesRepository, which need an
    // EntityManager to resolve — `@Optional()` (not just `?`, which is
    // TS-only and does not tell Nest's DI the provider may be absent),
    // matching CronRegistrarService's own `@Optional() orm` ruling: this
    // service is provided by the `@Global()` DatabaseModule, which some e2e
    // harnesses compose standalone without MikroOrmModule.forRoot in the
    // container (see `orm.module.ts`'s docstring) — a hard EntityManager
    // dependency here would fail every one of those at `compile()`, the same
    // class of break `@InjectRepository` would cause (D5). Production
    // (buildApp) always has it, since `MikroOrmModule.forRoot`'s core module
    // is itself `@Global()` — the same resolution `JwtAuthGuard` relies on.
    // A hand-built `DatabaseService` in a unit test that calls one of the
    // four methods below must pass one explicitly (`sharedTestOrm(db)).em`),
    // same as `createTestUsersRepo`'s callers do for `UsersRepository`.
    @Optional() private readonly em?: EntityManager,
  ) {}

  /** The shared better-sqlite3 connection (same singleton the legacy app uses). */
  get connection(): Database.Database {
    return this.conn;
  }

  prepare(sql: string): Database.Statement {
    return this.conn.prepare(sql);
  }

  get<T = unknown>(sql: string, ...params: unknown[]): T | undefined {
    return this.conn.prepare(sql).get(...params) as T | undefined;
  }

  all<T = unknown>(sql: string, ...params: unknown[]): T[] {
    return this.conn.prepare(sql).all(...params) as T[];
  }

  run(sql: string, ...params: unknown[]): Database.RunResult {
    return this.conn.prepare(sql).run(...params);
  }

  /**
   * The EntityManager the four repository-backed methods below resolve their
   * repository through. Throws its OWN clear error when absent — never
   * MikroORM's generic "global EntityManager" wording — so a hand-built
   * instance that forgot to pass one fails loudly and distinctly, the same
   * fail-closed shape `CronRegistrarService.runOnBoot` uses.
   */
  private entityManager(): EntityManager {
    if (!this.em) {
      throw new Error(
        'DatabaseService: no EntityManager available — construct with one (Nest DI supplies it in production) to call canAccessTrip/isOwner/rosterUserIds/getPlaceWithTags',
      );
    }
    return this.em;
  }

  /** Trip visible to the user (owner or member); undefined when no access. */
  async canAccessTrip(tripId: number | string, userId: number): Promise<TripAccess | undefined> {
    return await this.entityManager().getRepository(Trips).findAccessible(tripId, userId);
  }

  async isOwner(tripId: number | string, userId: number): Promise<boolean> {
    return await this.entityManager().getRepository(Trips).isOwner(tripId, userId);
  }

  /**
   * The user ids a trip may refer to: its members plus the owner. Guests count —
   * a guest is a credential-less users row joined into trip_members, and #1362
   * makes it assignable everywhere a real member is.
   *
   * This is canAccessTrip's question asked as a set rather than a predicate, so
   * it lives beside it. Domains that accept user ids in a write body intersect
   * against it: holding the permission says you may edit the trip, not that any
   * id you name belongs to it.
   */
  async rosterUserIds(tripId: number | string): Promise<Set<number>> {
    return await this.entityManager().getRepository(TripMembers).rosterUserIds(tripId);
  }

  /**
   * Delegates to `PlacesRepository.findWithTagsAndRatings` (Plan 3c Task 0b).
   * `PlacesService`'s 11 call sites are Task 4's — this method keeps its own
   * name/shape on `DatabaseService` for now, so Task 4 is the only future
   * change those 11 sites need.
   */
  async getPlaceWithTags(placeId: number | string): Promise<PlaceWithTags | null> {
    return await this.entityManager().getRepository(Places).findWithTagsAndRatings(placeId);
  }
}
