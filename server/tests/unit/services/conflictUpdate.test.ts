/**
 * Optimistic-concurrency / 409 conflict tests (#1135) for the place + packing
 * update services. A matching If-Match token (or none) updates as before; a
 * stale token returns the conflict sentinel carrying the server's current row.
 */
import { describe, it, expect, vi, beforeAll, beforeEach, afterAll } from 'vitest';

vi.mock('../../../src/db/database', async () => {
  const { createSnapshotTestDb } = await import('../../helpers/db-mock');
  const db = createSnapshotTestDb();
  function getPlaceWithTags(placeId: number | string) {
    const p = db.prepare('SELECT * FROM places WHERE id = ?').get(placeId);
    if (!p) return null;
    return { ...(p as object), category: null, tags: [] };
  }
  return {
    db,
    closeDb: () => {},
    reinitialize: () => {},
    getPlaceWithTags,
    canAccessTrip: async () => null,
    isOwner: async () => false,
  };
});
vi.mock('../../../src/config', () => ({
  JWT_SECRET: 'test-secret',
  ENCRYPTION_KEY: 'a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6a7b8c9d0e1f2a3b4c5d6a7b8c9d0e1f2',
  updateJwtSecret: () => {},
}));

import { db as testDb } from '../../../src/db/database';
import { resetTestDb } from '../../helpers/test-db';
import { createUser, createTrip } from '../../helpers/factories';
import { accommodationsOver } from '../../helpers/accommodations-service';
import { isUpdateConflict } from '../../../src/nest/common/conflictResult';
import { DatabaseService } from '../../../src/nest/database/database.service';
import { PackingService } from '../../../src/nest/packing/packing.service';
import { PlacesService } from '../../../src/nest/places/places.service';
import { MapsService } from '../../../src/nest/maps/maps.service';
import { PermissionsService } from '../../../src/nest/permissions/permissions.service';
import { RealtimeService } from '../../../src/nest/realtime/realtime.service';
import { QueryHelpersService } from '../../../src/nest/query-helpers/query-helpers.service';
import { UnsplashService } from '../../../src/nest/unsplash/unsplash.service';
import { PlacePhotoCacheService } from '../../../src/nest/place-photos/place-photo-cache.service';
import { JourneyDomainService } from '../../../src/nest/journey/journey-domain.service';
import { TrekPhotoRegistrationService } from '../../../src/nest/photos/trek-photos.repository';
import { TrekPhotos } from '../../../src/db/entities/TrekPhotos.entity';
import { TripPhotos } from '../../../src/db/entities/TripPhotos.entity';
import { RuntimeEnvService } from '../../../src/nest/app-config/runtime-env.service';
import { notificationsStub } from '../../helpers/notifications';
import { makeStorageFixture } from '../../helpers/storage-fixture';
import {
  createTestUnitOfWork,
  createTestAppSettingsRepo,
  createTestUsersRepo,
  createTestTagsRepo,
  createTestPlaceRatingsRepo,
  createTestAssignmentParticipantsRepo,
  createTestGooglePlacePhotoMetaRepo,
  createTestPlacesRepo,
  createTestPlaceDetailsCacheRepo,
  createTestTripMembersRepo,
  createTestDayAssignmentsRepo,
  createTestCategoriesRepo,
  createTestTripsRepo,
  sharedTestOrm,
} from '../../helpers/test-uow';
import { createTestBudgetItemsRepo } from '../../helpers/files-repos';
import { createTestCollectionPlacesRepo } from '../../helpers/test-uow';
import {
  createTestJourneysRepo, createTestJourneyContributorsRepo, createTestJourneyTripsRepo, createTestJourneyEntriesRepo,
  createTestJourneyPhotosRepo, createTestJourneyEntryPhotosRepo,
} from '../../helpers/journey-repos';
import {
  createTestPackingItemsRepo,
  createTestPackingItemContributorsRepo,
  createTestPackingBagsRepo,
  createTestPackingCategoryAssigneesRepo,
  createTestPackingTemplatesRepo,
  createTestPackingTemplateCategoriesRepo,
  createTestPackingTemplateItemsRepo,
} from '../../helpers/packing-repos';

const dbs = new DatabaseService(testDb);
const realtime = new RealtimeService();
const runtimeEnv = new RuntimeEnvService();

let packing: PackingService;
let places: PlacesService;
let photoCache: PlacePhotoCacheService;
beforeAll(async () => {
  // One cache instance shared by maps and places, the way the container
  // wires it: the service's stampede guard only works if there is exactly
  // one of them. Plan 3c Task 1: PlacePhotoCacheService now takes the two
  // repositories too.
  photoCache = new PlacePhotoCacheService(
    dbs,
    makeStorageFixture('photos/google/').storage,
    await createTestGooglePlacePhotoMetaRepo(dbs.connection),
    await createTestPlacesRepo(dbs.connection),
    await createTestCollectionPlacesRepo(dbs.connection),
  );
  // Plan 3c Task 0b: `dbs` is constructed at module load, before any
  // `beforeAll` can resolve a real `EntityManager` — the four
  // repository-backed methods are spied directly on this instance instead,
  // routed to a real `DatabaseService` built with one.
  const t = await sharedTestOrm(testDb);
  const real = new DatabaseService(testDb, t.em);
  vi.spyOn(dbs, 'canAccessTrip').mockImplementation((...a) => real.canAccessTrip(...a));
  vi.spyOn(dbs, 'isOwner').mockImplementation((...a) => real.isOwner(...a));
  vi.spyOn(dbs, 'rosterUserIds').mockImplementation((...a) => real.rosterUserIds(...a));
  vi.spyOn(dbs, 'getPlaceWithTags').mockImplementation((...a) => real.getPlaceWithTags(...a));
  packing = new PackingService(
    dbs,
    new PermissionsService(await createTestAppSettingsRepo(dbs.connection), await createTestUnitOfWork(dbs.connection)),
    realtime,
    notificationsStub(),
    await createTestUnitOfWork(dbs.connection),
    await createTestPackingItemsRepo(dbs.connection),
    await createTestPackingItemContributorsRepo(dbs.connection),
    await createTestPackingBagsRepo(dbs.connection),
    await createTestPackingCategoryAssigneesRepo(dbs.connection),
    await createTestPackingTemplatesRepo(dbs.connection),
    await createTestPackingTemplateCategoriesRepo(dbs.connection),
    await createTestPackingTemplateItemsRepo(dbs.connection),
    await createTestTripsRepo(dbs.connection),
  );
  places = new PlacesService(
  dbs,
  new PermissionsService(await createTestAppSettingsRepo(dbs.connection), await createTestUnitOfWork(dbs.connection)),
  realtime,
  new MapsService(photoCache, await createTestAppSettingsRepo(dbs.connection), await createTestUsersRepo(dbs.connection), await createTestPlaceDetailsCacheRepo(dbs.connection), await createTestPlacesRepo(dbs.connection)),
  new QueryHelpersService(await createTestTagsRepo(dbs.connection), await createTestPlaceRatingsRepo(dbs.connection), await createTestAssignmentParticipantsRepo(dbs.connection)),
  new UnsplashService(await createTestAppSettingsRepo(dbs.connection), await createTestUsersRepo(dbs.connection), runtimeEnv, makeStorageFixture('').storage),
  photoCache,
  new JourneyDomainService(
    dbs, realtime, new TrekPhotoRegistrationService(t.repo(TrekPhotos), t.repo(TripPhotos), await createTestJourneyPhotosRepo(dbs.connection), dbs), await createTestUnitOfWork(dbs.connection),
    await createTestJourneysRepo(dbs.connection), await createTestJourneyContributorsRepo(dbs.connection),
    await createTestJourneyTripsRepo(dbs.connection), await createTestJourneyEntriesRepo(dbs.connection), await createTestTripsRepo(dbs.connection),
    // Plan 3g Task 2 constructor-ripple: JourneyPhotosRepository/JourneyEntryPhotosRepository/PlacesRepository.
    await createTestJourneyPhotosRepo(dbs.connection), await createTestJourneyEntryPhotosRepo(dbs.connection), await createTestPlacesRepo(dbs.connection),
  ),
  makeStorageFixture('').storage,
  await accommodationsOver(dbs), await createTestUnitOfWork(dbs.connection),
  await createTestPlacesRepo(dbs.connection),
  await createTestTagsRepo(dbs.connection),
  await createTestPlaceRatingsRepo(dbs.connection),
  await createTestTripMembersRepo(dbs.connection),
  await createTestDayAssignmentsRepo(dbs.connection),
  await createTestCategoriesRepo(dbs.connection),
  await createTestTripsRepo(dbs.connection),
  await createTestBudgetItemsRepo(dbs.connection),
  await createTestCollectionPlacesRepo(dbs.connection),
);
});

beforeEach(() => {
  resetTestDb(testDb);
});

afterAll(() => {
  testDb.close();
});

async function freshPlace(tripId: number) {
  const place = await places.create(String(tripId), { name: 'Original' }) as unknown as { id: number; updated_at: string };
  return place;
}

describe('PlacesService.update — optimistic concurrency', () => {
  it('updates normally when no If-Match token is sent (back-compat)', async () => {
    const { user } = createUser(testDb);
    const trip = createTrip(testDb, user.id);
    const place = await freshPlace(trip.id);

    const result = await places.update(String(trip.id), String(place.id), { name: 'Edited' });
    expect(isUpdateConflict(result)).toBe(false);
    expect((result as { name: string }).name).toBe('Edited');
  });

  it('updates when the If-Match token matches the current updated_at', async () => {
    const { user } = createUser(testDb);
    const trip = createTrip(testDb, user.id);
    const place = await freshPlace(trip.id);

    const result = await places.update(String(trip.id), String(place.id), { name: 'Edited' }, place.updated_at);
    expect(isUpdateConflict(result)).toBe(false);
    expect((result as { name: string }).name).toBe('Edited');
  });

  it('returns a conflict (with the server row) when the token is stale', async () => {
    const { user } = createUser(testDb);
    const trip = createTrip(testDb, user.id);
    const place = await freshPlace(trip.id);

    const result = await places.update(String(trip.id), String(place.id), { name: 'Mine' }, '1999-01-01 00:00:00');
    expect(isUpdateConflict(result)).toBe(true);
    if (isUpdateConflict(result)) {
      expect((result.server as { name: string }).name).toBe('Original');
    }
    // The row must NOT have been overwritten.
    const row = testDb.prepare('SELECT name FROM places WHERE id = ?').get(place.id) as { name: string };
    expect(row.name).toBe('Original');
  });

  it('returns null for a place that does not exist', async () => {
    const { user } = createUser(testDb);
    const trip = createTrip(testDb, user.id);
    expect(await places.update(String(trip.id), '999999', { name: 'x' }, 'whatever')).toBeNull();
  });
});

describe('updateItem (packing) — optimistic concurrency', () => {
  it('migration added updated_at and createItem stamps it', async () => {
    const cols = testDb.prepare("PRAGMA table_info('packing_items')").all() as { name: string }[];
    expect(cols.map(c => c.name)).toContain('updated_at');

    const { user } = createUser(testDb);
    const trip = createTrip(testDb, user.id);
    const item = await packing.createItem(trip.id, { name: 'Socks' }) as { id: number; updated_at: string | null };
    expect(item.updated_at).toBeTruthy();
  });

  it('returns a conflict when the packing token is stale', async () => {
    const { user } = createUser(testDb);
    const trip = createTrip(testDb, user.id);
    const item = await packing.createItem(trip.id, { name: 'Socks' }, user.id) as { id: number; updated_at: string };

    const stale = await packing.updateItem(trip.id, item.id, { name: 'Mine' }, ['name'], '1999-01-01 00:00:00', user.id);
    expect(isUpdateConflict(stale)).toBe(true);

    const fresh = await packing.updateItem(trip.id, item.id, { name: 'Edited' }, ['name'], item.updated_at, user.id);
    expect(isUpdateConflict(fresh)).toBe(false);
    expect((fresh as { name: string }).name).toBe('Edited');
  });
})
