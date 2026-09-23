/**
 * Locks in the delegation direction: `DatabaseService`'s trip-access helpers
 * must call the repository each one owns (`TripsRepository.findAccessible`/
 * `isOwner`, `TripMembersRepository.rosterUserIds`, `PlacesRepository
 * .findWithTagsAndRatings`) through the injected `EntityManager`, never
 * reimplement the SQL against the raw connection.
 *
 * Plan 3c Task 0b: this used to lock in the OPPOSITE direction — that these
 * four methods delegated to `db/database.ts`'s free functions, which e2e
 * suites stubbed in their `vi.mock` factories. Those free functions (and the
 * duplicate `TripAccess` interface) are deleted now; `Trips.repository.ts`'s
 * `TripAccess` is the single source, and the primitive bodies live on the
 * repositories.
 */
import { describe, it, expect, vi } from 'vitest';
import type { EntityManager } from '@mikro-orm/core';
import { Trips } from '../../../src/db/entities/Trips.entity';
import { TripMembers } from '../../../src/db/entities/TripMembers.entity';
import { Places } from '../../../src/db/entities/Places.entity';
import { DatabaseService } from '../../../src/nest/database/database.service';

describe('DatabaseService (helper delegation)', () => {
  it('routes trip-access helpers through the EntityManager-resolved repositories', async () => {
    const findAccessible = vi.fn(async () => ({ id: -1, user_id: -2, currency: 'XXX' }));
    const isOwner = vi.fn(async () => true);
    const rosterUserIds = vi.fn(async () => new Set([1, 2, 3]));
    const findWithTagsAndRatings = vi.fn(async () => null);

    const em = {
      getRepository: vi.fn((entity: unknown) => {
        if (entity === Trips) return { findAccessible, isOwner };
        if (entity === TripMembers) return { rosterUserIds };
        if (entity === Places) return { findWithTagsAndRatings };
        throw new Error(`unexpected entity: ${String(entity)}`);
      }),
    } as unknown as EntityManager;

    const svc = new DatabaseService({} as never, em);

    expect(await svc.canAccessTrip(7, 8)).toEqual({ id: -1, user_id: -2, currency: 'XXX' });
    expect(findAccessible).toHaveBeenCalledWith(7, 8);

    expect(await svc.isOwner(7, 8)).toBe(true);
    expect(isOwner).toHaveBeenCalledWith(7, 8);

    expect(await svc.rosterUserIds(7)).toEqual(new Set([1, 2, 3]));
    expect(rosterUserIds).toHaveBeenCalledWith(7);

    expect(await svc.getPlaceWithTags(9)).toBeNull();
    expect(findWithTagsAndRatings).toHaveBeenCalledWith(9);
  });

  it('throws its own clear error — never MikroORM\'s generic one — when constructed with no EntityManager', async () => {
    const svc = new DatabaseService({} as never);
    await expect(svc.canAccessTrip(1, 2)).rejects.toThrow(/no EntityManager available/);
    await expect(svc.isOwner(1, 2)).rejects.toThrow(/no EntityManager available/);
    await expect(svc.rosterUserIds(1)).rejects.toThrow(/no EntityManager available/);
    await expect(svc.getPlaceWithTags(1)).rejects.toThrow(/no EntityManager available/);
  });
});
