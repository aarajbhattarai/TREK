import type { Database } from 'better-sqlite3';
import { AccommodationsService } from '../../src/nest/accommodations/accommodations.service';
import { AssignmentsService } from '../../src/nest/assignments/assignments.service';
import { DatabaseService } from '../../src/nest/database/database.service';
import { JourneyDomainService } from '../../src/nest/journey/journey-domain.service';
import { PermissionsService } from '../../src/nest/permissions/permissions.service';
import { QueryHelpersService } from '../../src/nest/query-helpers/query-helpers.service';
import { RealtimeService } from '../../src/nest/realtime/realtime.service';
import { TrekPhotoRegistrationService } from '../../src/nest/photos/trek-photos.repository';
import { TrekPhotos } from '../../src/db/entities/TrekPhotos.entity';
import { TripPhotos } from '../../src/db/entities/TripPhotos.entity';
import {
  createTestUnitOfWork, createTestAppSettingsRepo, createTestTagsRepo, createTestPlaceRatingsRepo,
  createTestAssignmentParticipantsRepo, createTestDayAssignmentsRepo, createTestDaysRepo, createTestPlacesRepo,
  createTestTripMembersRepo, createTestRoadtripViasRepo, createTestDayAccommodationsRepo, createTestReservationsRepo,
  sharedTestOrm, createTestTripsRepo,
} from './test-uow';
import { createTestBudgetItemsRepo } from './files-repos';
import {
  createTestJourneysRepo, createTestJourneyContributorsRepo, createTestJourneyTripsRepo, createTestJourneyEntriesRepo,
} from './journey-repos';

/**
 * AccommodationsService over a test connection.
 *
 * Booking a night also writes the day stop that puts it on the route, through a
 * real AssignmentsService rather than a stub: the stop is a row these cases read
 * back, and it has to come out of the same connection. Five collaborators deep is
 * why this is a helper and not five copies across the suites.
 *
 * Plan 3c Task 0b: the `DatabaseService` built here needs a real
 * `EntityManager` now — `AccommodationsService.stampLodging` reaches
 * `getPlaceWithTags`, which is `PlacesRepository.findWithTagsAndRatings`
 * (not `db/database.ts`'s deleted free function).
 */
export async function makeAccommodationsService(conn: Database): Promise<AccommodationsService> {
  return accommodationsOver(new DatabaseService(conn, (await sharedTestOrm(conn)).em));
}

/**
 * The same, for a suite that already holds the DatabaseService.
 *
 * ReservationsService takes one now, because a hotel booking owes the day plan
 * the same stop a night entered under Days does, and every suite that builds
 * that service by hand needs one to hand it.
 */
export async function accommodationsOver(dbs: DatabaseService): Promise<AccommodationsService> {
  const permissions = new PermissionsService(await createTestAppSettingsRepo(dbs.connection), await createTestUnitOfWork(dbs.connection));
  const realtime = new RealtimeService();
  const t = await sharedTestOrm(dbs.connection);
  const assignments = new AssignmentsService(
    dbs, permissions, realtime,
    new QueryHelpersService(await createTestTagsRepo(dbs.connection), await createTestPlaceRatingsRepo(dbs.connection), await createTestAssignmentParticipantsRepo(dbs.connection)),
    new JourneyDomainService(
      dbs, realtime, new TrekPhotoRegistrationService(t.repo(TrekPhotos), t.repo(TripPhotos), dbs), await createTestUnitOfWork(dbs.connection),
      await createTestJourneysRepo(dbs.connection), await createTestJourneyContributorsRepo(dbs.connection),
      await createTestJourneyTripsRepo(dbs.connection), await createTestJourneyEntriesRepo(dbs.connection), await createTestTripsRepo(dbs.connection),
    ),
    await createTestUnitOfWork(dbs.connection),
    await createTestDayAssignmentsRepo(dbs.connection),
    await createTestAssignmentParticipantsRepo(dbs.connection),
    await createTestDaysRepo(dbs.connection),
    await createTestPlacesRepo(dbs.connection),
    await createTestTripMembersRepo(dbs.connection),
    await createTestRoadtripViasRepo(dbs.connection),
  );
  return new AccommodationsService(
    dbs, permissions, realtime, assignments, await createTestUnitOfWork(dbs.connection),
    await createTestDayAccommodationsRepo(dbs.connection),
    await createTestDayAssignmentsRepo(dbs.connection),
    await createTestPlacesRepo(dbs.connection),
    await createTestDaysRepo(dbs.connection),
    await createTestRoadtripViasRepo(dbs.connection),
    await createTestReservationsRepo(dbs.connection),
    await createTestBudgetItemsRepo(dbs.connection),
  );
}
