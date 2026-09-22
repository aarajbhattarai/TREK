import type { Database } from 'better-sqlite3';
import { AccommodationsService } from '../../src/nest/accommodations/accommodations.service';
import { AssignmentsService } from '../../src/nest/assignments/assignments.service';
import { DatabaseService } from '../../src/nest/database/database.service';
import { JourneyDomainService } from '../../src/nest/journey/journey-domain.service';
import { PermissionsService } from '../../src/nest/permissions/permissions.service';
import { QueryHelpersService } from '../../src/nest/query-helpers/query-helpers.service';
import { RealtimeService } from '../../src/nest/realtime/realtime.service';
import { TrekPhotosRepository } from '../../src/nest/photos/trek-photos.repository';
import { createTestUnitOfWork, createTestAppSettingsRepo } from './test-uow';

/**
 * AccommodationsService over a test connection.
 *
 * Booking a night also writes the day stop that puts it on the route, through a
 * real AssignmentsService rather than a stub: the stop is a row these cases read
 * back, and it has to come out of the same connection. Five collaborators deep is
 * why this is a helper and not five copies across the suites.
 */
export async function makeAccommodationsService(conn: Database): Promise<AccommodationsService> {
  return accommodationsOver(new DatabaseService(conn));
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
  const assignments = new AssignmentsService(
    dbs, permissions, realtime,
    new QueryHelpersService(dbs),
    new JourneyDomainService(dbs, realtime, new TrekPhotosRepository(dbs), await createTestUnitOfWork(dbs.connection)),
    await createTestUnitOfWork(dbs.connection),
  );
  return new AccommodationsService(dbs, permissions, realtime, assignments, await createTestUnitOfWork(dbs.connection));
}
