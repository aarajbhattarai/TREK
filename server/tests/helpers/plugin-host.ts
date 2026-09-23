import { DatabaseService } from '../../src/nest/database/database.service';
import { PluginRuntimeService } from '../../src/nest/plugins/plugin-runtime.service';
import { PluginUserSettingsService } from '../../src/nest/plugins/plugin-user-settings.service';
import type { PluginRegistryService } from '../../src/nest/plugins/registry/registry.service';
import { PluginRpcHostFactory } from '../../src/nest/plugins/host/plugin-rpc-host.factory';
import { PluginRpcRegistryService } from '../../src/nest/plugins/host/rpc-kit/registry.service';
import { createTestPluginRegistry } from '../../src/nest/plugins/host/rpc-kit/testing';
import { PluginGuards } from '../../src/nest/plugins/host/plugin-guards.service';
import { DbRpc } from '../../src/nest/plugins/host/rpc/db.rpc';
import { MetaRpc } from '../../src/nest/plugins/host/rpc/meta.rpc';
import { HostSurfaceRpc } from '../../src/nest/plugins/host/rpc/host-surface.rpc';
import { PluginHooks } from '../../src/nest/plugins/plugin-hooks.service';
import { PluginOAuthService } from '../../src/nest/plugins/oauth/plugin-oauth.service';
import { BudgetService } from '../../src/nest/budget/budget.service';
import { ExchangeRatesService } from '../../src/nest/budget/exchange-rates.service';
import { ReservationsService } from '../../src/nest/reservations/reservations.service';
import { ReservationsReadService } from '../../src/nest/reservations/reservations-read.service';
import { TagsService } from '../../src/nest/tags/tags.service';
import { CategoriesService } from '../../src/nest/categories/categories.service';
import { TodoService } from '../../src/nest/todo/todo.service';
import { PackingService } from '../../src/nest/packing/packing.service';
import { DayNotesService } from '../../src/nest/day-notes/day-notes.service';
import { DaysService } from '../../src/nest/days/days.service';
import { AssignmentsService } from '../../src/nest/assignments/assignments.service';
import { LlmConfigResolver } from '../../src/nest/llm-parse/llm-config.resolver';
import { SettingsService } from '../../src/nest/settings/settings.service';
import { FilesService } from '../../src/nest/files/files.service';
import { CollabService } from '../../src/nest/collab/collab.service';
import { RateLimitService } from '../../src/nest/common/rate-limit.service';
import { VacayService } from '../../src/nest/vacay/vacay.service';
import { TripsService } from '../../src/nest/trips/trips.service';
import { PlacesService } from '../../src/nest/places/places.service';
import { CollectionsService } from '../../src/nest/collections/collections.service';
import { AtlasService } from '../../src/nest/atlas/atlas.service';
import { MapsService } from '../../src/nest/maps/maps.service';
import { PermissionsService } from '../../src/nest/permissions/permissions.service';
import { AuditService } from '../../src/nest/audit/audit.service';
import { createTestAddonsService } from './test-addons';
import { RealtimeService } from '../../src/nest/realtime/realtime.service';
import { QueryHelpersService } from '../../src/nest/query-helpers/query-helpers.service';
import { TripMembershipService } from '../../src/nest/trip-membership/trip-membership.service';
import { JourneyDomainService } from '../../src/nest/journey/journey-domain.service';
import { TagsRpc } from '../../src/nest/tags/tags.rpc';
import { CategoriesRpc } from '../../src/nest/categories/categories.rpc';
import { WeatherRpc } from '../../src/nest/weather/weather.rpc';
import { WeatherService } from '../../src/nest/weather/weather.service';
import { ExchangeRatesRpc } from '../../src/nest/budget/exchange-rates.rpc';
import { TodoRpc } from '../../src/nest/todo/todo.rpc';
import { DayNotesRpc } from '../../src/nest/day-notes/day-notes.rpc';
import { PackingRpc } from '../../src/nest/packing/packing.rpc';
import { FilesRpc } from '../../src/nest/files/files.rpc';
import { PlacesRpc } from '../../src/nest/places/places.rpc';
import { DaysRpc } from '../../src/nest/days/days.rpc';
import { AccommodationsRpc } from '../../src/nest/accommodations/accommodations.rpc';
import { AccommodationsService } from '../../src/nest/accommodations/accommodations.service';
import { TripMembersService } from '../../src/nest/trip-members/trip-members.service';
import { ItineraryRpc } from '../../src/nest/assignments/itinerary.rpc';
import { TripsRpc } from '../../src/nest/trips/trips.rpc';
import { CostsRpc } from '../../src/nest/budget/costs.rpc';
import { ReservationsRpc } from '../../src/nest/reservations/reservations.rpc';
import { CollabRpc } from '../../src/nest/collab/collab.rpc';
import { AtlasRpc } from '../../src/nest/atlas/atlas.rpc';
import { VacayRpc } from '../../src/nest/vacay/vacay.rpc';
import { JournalRpc } from '../../src/nest/journey/journal.rpc';
import { CollectionsRpc } from '../../src/nest/collections/collections.rpc';
import { makeNotificationsService } from './notifications';
import { notificationsStub } from './notifications';
import { EphemeralTokenService } from '../../src/nest/auth/ephemeral-token.service';
import { UserCleanupService } from '../../src/nest/auth/user-cleanup.service';
import { UnsplashService } from '../../src/nest/unsplash/unsplash.service';
import { PlacePhotoCacheService } from '../../src/nest/place-photos/place-photo-cache.service';
import { TrekPhotoRegistrationService } from '../../src/nest/photos/trek-photos.repository';
import { TrekPhotos } from '../../src/db/entities/TrekPhotos.entity';
import { TripPhotos } from '../../src/db/entities/TripPhotos.entity';
import { RuntimeEnvService } from '../../src/nest/app-config/runtime-env.service';
import { makeStorageFixture } from './storage-fixture';
import {
  createTestUnitOfWork, createTestAppSettingsRepo, createTestCategoriesRepo, createTestTagsRepo, createTestSettingsRepo, sharedTestOrm,
  createTestCollectionsRepo, createTestCollectionMembersRepo, createTestCollectionLabelsRepo,
  createTestCollectionPlacesRepo, createTestCollectionPlaceRatingsRepo,
  createTestDaysRepo, createTestDayAssignmentsRepo, createTestDayNotesRepo, createTestTripsRepo,
  createTestTripMembersRepo, createTestPlaceRatingsRepo, createTestAssignmentParticipantsRepo,
  createTestGooglePlacePhotoMetaRepo, createTestPlacesRepo, createTestRoadtripViasRepo,
  createTestReservationsRepo,
  createTestReservationEndpointsRepo,
  createTestReservationTravelersRepo,
  createTestReservationDayPositionsRepo,
  createTestDayAccommodationsRepo,
  createTestUsersRepo,
} from './test-uow';
import { AppSettings } from '../../src/db/entities/AppSettings.entity';
import { AuditLog } from '../../src/db/entities/AuditLog.entity';
import { Users } from '../../src/db/entities/Users.entity';
import { createTestTripFilesRepo, createTestFileLinksRepo, createTestBudgetItemsRepo } from './files-repos';
import { budgetRepoArgs } from './budget-repos';
import {
  createTestCollabMessageReactionsRepo, createTestCollabNotesRepo, createTestCollabPollsRepo,
  createTestCollabPollVotesRepo, createTestCollabLinksRepo, createTestCollabMessagesRepo,
} from './collab-repos';
import {
  createTestPackingItemsRepo, createTestPackingItemContributorsRepo, createTestPackingBagsRepo,
  createTestPackingCategoryAssigneesRepo, createTestPackingTemplatesRepo, createTestPackingTemplateCategoriesRepo,
  createTestPackingTemplateItemsRepo,
} from './packing-repos';
import { createTestTodoItemsRepo, createTestTodoCategoryAssigneesRepo } from './todo-repos';
import { createTestVacayHolidayCalendarsRepo, createTestSchoolHolidayRegionsRepo } from './school-holidays-repos';
import {
  createTestVacayPlansRepo, createTestVacayPlanMembersRepo, createTestVacayYearsRepo, createTestVacayUserYearsRepo,
  createTestVacayUserColorsRepo, createTestVacayEntriesRepo, createTestVacayCompanyHolidaysRepo,
  createTestVacaySharesRepo, createTestVacayUserSettingsRepo,
} from './vacay-repos';
import {
  createTestBucketListRepo, createTestHiddenCountriesRepo, createTestHiddenRegionsRepo,
  createTestVisitedCountriesRepo, createTestVisitedRegionsRepo, createTestPlaceRegionsRepo,
} from './atlas-repos';
import {
  createTestJourneysRepo, createTestJourneyContributorsRepo, createTestJourneyTripsRepo, createTestJourneyEntriesRepo,
  createTestJourneyPhotosRepo, createTestJourneyEntryPhotosRepo,
} from './journey-repos';
import { createTestJourneyShareTokensRepo } from './journey-share-repos';

/**
 * Hand-wired counterpart of the PluginsModule DI graph for no-Nest tests
 * (same pattern as mcp-test-controllers.ts): real domain services over the
 * test DB, so runtime tests exercise the same wiring production gets from
 * the container.
 *
 * It used to build one 26-argument deps factory. The plugin surface now lives in the
 * domains, so what it builds is the same set of `@PluginController()` instances the
 * container would discover, handed to the host factory as a registry.
 */
export async function createPluginRpcHostFactory(dbs: DatabaseService): Promise<PluginRpcHostFactory> {
  const generalStorage = makeStorageFixture('').storage;
  const appSettings = (await sharedTestOrm(dbs.connection)).repo(AppSettings);
  const usersRepo = (await sharedTestOrm(dbs.connection)).repo(Users);
  const permissions = new PermissionsService(await createTestAppSettingsRepo(dbs.connection), await createTestUnitOfWork(dbs.connection));
  const exchangeRates = new ExchangeRatesService();
  const realtime = new RealtimeService();
  const budget = new BudgetService(dbs, permissions, exchangeRates, realtime, await createTestUnitOfWork(dbs.connection), ...(await budgetRepoArgs(dbs.connection)));
  const addons = await createTestAddonsService(dbs.connection, dbs);
  const queryHelpers = new QueryHelpersService(await createTestTagsRepo(dbs.connection), await createTestPlaceRatingsRepo(dbs.connection), await createTestAssignmentParticipantsRepo(dbs.connection));
  const todos = new TodoService(dbs, permissions, realtime, await createTestUnitOfWork(dbs.connection), await createTestTodoItemsRepo(dbs.connection), await createTestTodoCategoryAssigneesRepo(dbs.connection));
  const packing = new PackingService(
    dbs, permissions, realtime, notificationsStub(), await createTestUnitOfWork(dbs.connection),
    await createTestPackingItemsRepo(dbs.connection), await createTestPackingItemContributorsRepo(dbs.connection), await createTestPackingBagsRepo(dbs.connection),
    await createTestPackingCategoryAssigneesRepo(dbs.connection), await createTestPackingTemplatesRepo(dbs.connection), await createTestPackingTemplateCategoriesRepo(dbs.connection),
    await createTestPackingTemplateItemsRepo(dbs.connection), await createTestTripsRepo(dbs.connection),
  );
  // Plan 3e Task 1 (files): FilesService now also takes uow + the repositories
  // its R2 transactions and R12 cross-object trip-scoping guard need.
  const files = new FilesService(
    dbs, permissions, realtime, new EphemeralTokenService(), generalStorage, (await sharedTestOrm(dbs.connection)).em,
    await createTestUnitOfWork(dbs.connection),
    await createTestTripFilesRepo(dbs.connection),
    await createTestFileLinksRepo(dbs.connection),
    await createTestReservationsRepo(dbs.connection),
    await createTestPlacesRepo(dbs.connection),
    await createTestDayAssignmentsRepo(dbs.connection),
    await createTestBudgetItemsRepo(dbs.connection),
  );
  const collab = new CollabService(
    dbs, permissions, realtime, notificationsStub(), generalStorage, new RateLimitService(), await createTestUnitOfWork(dbs.connection),
    await createTestCollabMessageReactionsRepo(dbs.connection), await createTestCollabNotesRepo(dbs.connection), await createTestCollabPollsRepo(dbs.connection),
    await createTestCollabPollVotesRepo(dbs.connection), await createTestCollabLinksRepo(dbs.connection), await createTestCollabMessagesRepo(dbs.connection),
    await createTestTripsRepo(dbs.connection),
  );
  const vacay = new VacayService(
    await createTestVacayPlansRepo(dbs.connection), await createTestVacayPlanMembersRepo(dbs.connection),
    await createTestVacayYearsRepo(dbs.connection), await createTestVacayUserYearsRepo(dbs.connection),
    await createTestVacayUserColorsRepo(dbs.connection), await createTestVacayEntriesRepo(dbs.connection),
    await createTestVacayCompanyHolidaysRepo(dbs.connection), await createTestVacayHolidayCalendarsRepo(dbs.connection),
    await createTestVacaySharesRepo(dbs.connection), await createTestVacayUserSettingsRepo(dbs.connection),
    await createTestSchoolHolidayRegionsRepo(dbs.connection),
    realtime, notificationsStub(), await createTestUnitOfWork(dbs.connection),
  );
  const days = new DaysService(
    dbs,
    permissions,
    realtime,
    queryHelpers,
    await createTestUnitOfWork(dbs.connection),
    await createTestDaysRepo(dbs.connection),
    await createTestDayAssignmentsRepo(dbs.connection),
    await createTestDayNotesRepo(dbs.connection),
    await createTestTripsRepo(dbs.connection),
    await createTestReservationsRepo(dbs.connection),
    await createTestReservationEndpointsRepo(dbs.connection),
    await createTestDayAccommodationsRepo(dbs.connection),
  );
  const photoCache = new PlacePhotoCacheService(dbs, makeStorageFixture('photos/google/').storage, await createTestGooglePlacePhotoMetaRepo(dbs.connection), await createTestPlacesRepo(dbs.connection));
  const unsplash = new UnsplashService(appSettings, usersRepo, new RuntimeEnvService(), generalStorage);
  const journey = new JourneyDomainService(
    dbs, realtime, new TrekPhotoRegistrationService((await sharedTestOrm(dbs.connection)).repo(TrekPhotos), (await sharedTestOrm(dbs.connection)).repo(TripPhotos), await createTestJourneyPhotosRepo(dbs.connection), dbs), await createTestUnitOfWork(dbs.connection),
    // Plan 3g Task 1 — the constructor-ripple fix (R9): four journey-owned
    // repositories + the already-shared `TripsRepository` (AP1/`getTitle`).
    await createTestJourneysRepo(dbs.connection), await createTestJourneyContributorsRepo(dbs.connection),
    await createTestJourneyTripsRepo(dbs.connection), await createTestJourneyEntriesRepo(dbs.connection),
    await createTestTripsRepo(dbs.connection),
    // Plan 3g Task 2 — a genuine follow-up constructor-ripple (git status
    // confirmed this file clean before editing, per the task brief's own
    // allowance): `JourneyPhotosRepository`/`JourneyEntryPhotosRepository`
    // (the photos surface, JG19/JG87-116) + `PlacesRepository` (JG44's
    // `findRaw`, already imported above for `PlacePhotoCacheService`).
    await createTestJourneyPhotosRepo(dbs.connection), await createTestJourneyEntryPhotosRepo(dbs.connection),
    await createTestPlacesRepo(dbs.connection),
  );
  const collections = new CollectionsService(
    permissions, realtime, notificationsStub(), generalStorage, await createTestUnitOfWork(dbs.connection),
    // Plan 3h Task 1 — the constructor-ripple fix: collections part A's own
    // repositories, first cut (`CollectionMembersRepository` extended by
    // Task 2), plus the already-DONE `CategoriesRepository` (CL21 reuse).
    await createTestCollectionsRepo(dbs.connection), await createTestCollectionMembersRepo(dbs.connection),
    await createTestCollectionLabelsRepo(dbs.connection), await createTestCategoriesRepo(dbs.connection),
    // Plan 3h Task 2 — part B's own repositories: `DatabaseService` dropped
    // entirely (this service's last use of it), the trip/place/tag/user
    // repositories AP1-AP6's `TripsRepository.findAccessible` calls and the
    // cross-domain writes need, injected directly.
    await createTestCollectionPlacesRepo(dbs.connection), await createTestCollectionPlaceRatingsRepo(dbs.connection),
    await createTestTripsRepo(dbs.connection), await createTestTripMembersRepo(dbs.connection),
    await createTestPlacesRepo(dbs.connection), await createTestPlaceRatingsRepo(dbs.connection),
    await createTestTagsRepo(dbs.connection), usersRepo,
  );
  const atlas = new AtlasService(
    await createTestBucketListRepo(dbs.connection), await createTestHiddenCountriesRepo(dbs.connection),
    await createTestHiddenRegionsRepo(dbs.connection), await createTestVisitedCountriesRepo(dbs.connection),
    await createTestVisitedRegionsRepo(dbs.connection), await createTestPlaceRegionsRepo(dbs.connection),
    await createTestTripsRepo(dbs.connection), await createTestPlacesRepo(dbs.connection),
    await createTestReservationEndpointsRepo(dbs.connection), await createTestUnitOfWork(dbs.connection),
  );
  const dayNotes = new DayNotesService(dbs, permissions, realtime);
  const assignments = new AssignmentsService(
    dbs, permissions, realtime, queryHelpers, journey, await createTestUnitOfWork(dbs.connection),
    await createTestDayAssignmentsRepo(dbs.connection),
    await createTestAssignmentParticipantsRepo(dbs.connection),
    await createTestDaysRepo(dbs.connection),
    await createTestPlacesRepo(dbs.connection),
    await createTestTripMembersRepo(dbs.connection),
    await createTestRoadtripViasRepo(dbs.connection),
  );
  const membership = new TripMembershipService(await createTestTripsRepo(dbs.connection), await createTestTripMembersRepo(dbs.connection));
  const notifications = await makeNotificationsService(dbs, realtime);
  const llmConfig = new LlmConfigResolver(new SettingsService(await createTestUnitOfWork(dbs.connection), appSettings, await createTestSettingsRepo(dbs.connection)), dbs, addons);
  const oauth = new PluginOAuthService(dbs);
  const accommodations = new AccommodationsService(
    dbs, permissions, realtime, assignments, await createTestUnitOfWork(dbs.connection),
    await createTestDayAccommodationsRepo(dbs.connection),
    await createTestDayAssignmentsRepo(dbs.connection),
    await createTestPlacesRepo(dbs.connection),
    await createTestDaysRepo(dbs.connection),
    await createTestRoadtripViasRepo(dbs.connection),
    await createTestReservationsRepo(dbs.connection),
    await createTestBudgetItemsRepo(dbs.connection),
  );
  // After it: deleting a place cancels the nights booked at it through this one.
  const places = new PlacesService(
    dbs, permissions, realtime, new MapsService(dbs, photoCache, appSettings, usersRepo), queryHelpers, unsplash, photoCache, journey, generalStorage, accommodations, await createTestUnitOfWork(dbs.connection),
    await createTestPlacesRepo(dbs.connection),
    await createTestTagsRepo(dbs.connection),
    await createTestPlaceRatingsRepo(dbs.connection),
    await createTestTripMembersRepo(dbs.connection),
    await createTestDayAssignmentsRepo(dbs.connection),
    await createTestCategoriesRepo(dbs.connection),
  await createTestTripsRepo(dbs.connection),
  await createTestBudgetItemsRepo(dbs.connection),
  );
  // After accommodations: a hotel booking writes the stay's day stop through it.
  const reservations = new ReservationsService(dbs, permissions, budget, realtime, notificationsStub(), new ReservationsReadService(await createTestReservationsRepo(dbs.connection), await createTestReservationEndpointsRepo(dbs.connection), await createTestReservationTravelersRepo(dbs.connection)), accommodations, await createTestUnitOfWork(dbs.connection), await createTestReservationsRepo(dbs.connection), await createTestReservationEndpointsRepo(dbs.connection), await createTestReservationTravelersRepo(dbs.connection), await createTestReservationDayPositionsRepo(dbs.connection), await createTestDayAccommodationsRepo(dbs.connection), await createTestDaysRepo(dbs.connection), await createTestPlacesRepo(dbs.connection), await createTestDayAssignmentsRepo(dbs.connection), await createTestTripMembersRepo(dbs.connection), await createTestUsersRepo(dbs.connection), await createTestTripsRepo(dbs.connection), await createTestBudgetItemsRepo(dbs.connection));
  const trips = new TripsService(dbs, reservations, days, permissions, budget, vacay, realtime, unsplash, generalStorage, await createTestUnitOfWork(dbs.connection), (await sharedTestOrm(dbs.connection)).em);
  const members = new TripMembersService(dbs, budget, new UserCleanupService(dbs, budget, await createTestUnitOfWork(dbs.connection), usersRepo, await createTestBudgetItemsRepo(dbs.connection), await createTestJourneyShareTokensRepo(dbs.connection), await createTestJourneysRepo(dbs.connection), await createTestJourneyEntriesRepo(dbs.connection), await createTestJourneyContributorsRepo(dbs.connection)), permissions, realtime, notificationsStub(), await createTestUnitOfWork(dbs.connection), await createTestTripsRepo(dbs.connection), await createTestTripMembersRepo(dbs.connection), usersRepo);
  const guards = new PluginGuards(dbs, permissions, addons);

  const registry = createTestPluginRegistry([
    new TagsRpc(new TagsService(await createTestTagsRepo(dbs.connection))),
    new CategoriesRpc(new CategoriesService(await createTestCategoriesRepo(dbs.connection))),
    new WeatherRpc(new WeatherService()),
    new ExchangeRatesRpc(exchangeRates),
    new TodoRpc(todos, realtime, guards),
    new DayNotesRpc(dayNotes, realtime, guards),
    new PackingRpc(packing, realtime, guards),
    new FilesRpc(files, realtime, usersRepo, guards, generalStorage),
    new PlacesRpc(places, journey, realtime, guards),
    new DaysRpc(days, realtime, guards),
    new AccommodationsRpc(accommodations, realtime, guards),
    new ItineraryRpc(assignments, realtime, guards),
    new TripsRpc(trips, reservations, days, membership, realtime, guards, accommodations, members, (await sharedTestOrm(dbs.connection)).em),
    new CostsRpc(budget, dbs, realtime, guards, membership),
    new ReservationsRpc(reservations, realtime, guards),
    new CollabRpc(collab, realtime, guards),
    new AtlasRpc(atlas, guards),
    new VacayRpc(vacay, guards),
    // The photo half needs storage plus the allowed-types setting and the EXIF
    // backfill; none of the tests on this harness write bytes, so they are stubs.
    // Plan 3g Task 3 — the constructor-ripple fix: `JournalRpc`'s demo-mode
    // gate (JR1) now injects `UsersRepository.getEmail`, not `DatabaseService`.
    new JournalRpc(journey, guards, generalStorage, { get: () => '*' } as never, { schedule: () => {} } as never, usersRepo),
    new CollectionsRpc(collections, guards),
    new DbRpc(new PluginUserSettingsService(dbs)),
    new MetaRpc(dbs, guards),
    new HostSurfaceRpc(dbs, realtime, notifications, llmConfig, oauth, guards),
    new PluginHooks(undefined as never),
  ]);
  return new PluginRpcHostFactory(dbs, registry as unknown as PluginRpcRegistryService);
}

/** A PluginRuntimeService constructed the way Nest would: with a real host factory. */
export async function createPluginRuntime(dbs: DatabaseService, registry?: PluginRegistryService): Promise<PluginRuntimeService> {
  // The SAME shared ORM `createPluginRpcHostFactory` builds `permissions` from
  // (via createTestAppSettingsRepo/createTestUnitOfWork) — one MikroORM.init
  // per handle (task-1-2-rereview.md M-A), not a second one just for
  // AuditService. Passing this ORM as PluginRuntimeService's last arg is what
  // makes D6's request-context wrapper (task-2-review.md C3) fork from the em
  // PermissionsService's repository actually resolves through.
  const orm = await sharedTestOrm(dbs.connection);
  return new PluginRuntimeService(
    dbs,
    new AuditService(orm.repo(AuditLog), orm.repo(Users)),
    await createTestAddonsService(dbs.connection, dbs),
    new PluginUserSettingsService(dbs),
    registry,
    await createPluginRpcHostFactory(dbs),
    await createTestUnitOfWork(dbs.connection),
    orm.orm,
  );
}
