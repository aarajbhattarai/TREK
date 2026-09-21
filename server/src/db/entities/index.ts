import type { EntitySchema } from '@mikro-orm/core';
import { AddonsSchema } from './Addons.entity';
import { AppSettingsSchema } from './AppSettings.entity';
import { AssignmentParticipantsSchema } from './AssignmentParticipants.entity';
import { AuditLogSchema } from './AuditLog.entity';
import { BucketListSchema } from './BucketList.entity';
import { BudgetCategoryOrderSchema } from './BudgetCategoryOrder.entity';
import { BudgetItemMembersSchema } from './BudgetItemMembers.entity';
import { BudgetItemPayersSchema } from './BudgetItemPayers.entity';
import { BudgetItemsSchema } from './BudgetItems.entity';
import { BudgetSettlementsSchema } from './BudgetSettlements.entity';
import { CategoriesSchema } from './Categories.entity';
import { CollabLinksSchema } from './CollabLinks.entity';
import { CollabMessageReactionsSchema } from './CollabMessageReactions.entity';
import { CollabMessagesSchema } from './CollabMessages.entity';
import { CollabNotesSchema } from './CollabNotes.entity';
import { CollabPollsSchema } from './CollabPolls.entity';
import { CollabPollVotesSchema } from './CollabPollVotes.entity';
import { CollectionLabelsSchema } from './CollectionLabels.entity';
import { CollectionMembersSchema } from './CollectionMembers.entity';
import { CollectionPlaceRatingsSchema } from './CollectionPlaceRatings.entity';
import { CollectionPlacesSchema } from './CollectionPlaces.entity';
import { CollectionsSchema } from './Collections.entity';
import { DawarichConnectionsSchema } from './DawarichConnections.entity';
import { DawarichVisitSuggestionsSchema } from './DawarichVisitSuggestions.entity';
import { DayAccommodationsSchema } from './DayAccommodations.entity';
import { DayAssignmentsSchema } from './DayAssignments.entity';
import { DayNotesSchema } from './DayNotes.entity';
import { DaysSchema } from './Days.entity';
import { FileLinksSchema } from './FileLinks.entity';
import { GooglePlacePhotoMetaSchema } from './GooglePlacePhotoMeta.entity';
import { HiddenCountriesSchema } from './HiddenCountries.entity';
import { HiddenRegionsSchema } from './HiddenRegions.entity';
import { IdempotencyKeysSchema } from './IdempotencyKeys.entity';
import { InviteTokensSchema } from './InviteTokens.entity';
import { JourneyBooksSchema } from './JourneyBooks.entity';
import { JourneyContributorsSchema } from './JourneyContributors.entity';
import { JourneyEntriesSchema } from './JourneyEntries.entity';
import { JourneyEntryPhotosSchema } from './JourneyEntryPhotos.entity';
import { JourneyPhotosSchema } from './JourneyPhotos.entity';
import { JourneysSchema } from './Journeys.entity';
import { JourneyShareTokensSchema } from './JourneyShareTokens.entity';
import { JourneyTripsSchema } from './JourneyTrips.entity';
import { McpTokensSchema } from './McpTokens.entity';
import { MigrationsSchema } from './Migrations.entity';
import { NotificationChannelPreferencesSchema } from './NotificationChannelPreferences.entity';
import { NotificationsSchema } from './Notifications.entity';
import { OauthClientsSchema } from './OauthClients.entity';
import { OauthConsentsSchema } from './OauthConsents.entity';
import { OauthTokensSchema } from './OauthTokens.entity';
import { PackingBagsSchema } from './PackingBags.entity';
import { PackingCategoryAssigneesSchema } from './PackingCategoryAssignees.entity';
import { PackingItemContributorsSchema } from './PackingItemContributors.entity';
import { PackingItemsSchema } from './PackingItems.entity';
import { PackingTemplateCategoriesSchema } from './PackingTemplateCategories.entity';
import { PackingTemplateItemsSchema } from './PackingTemplateItems.entity';
import { PackingTemplatesSchema } from './PackingTemplates.entity';
import { PasswordResetTokensSchema } from './PasswordResetTokens.entity';
import { PhotoProviderFieldsSchema } from './PhotoProviderFields.entity';
import { PhotoProvidersSchema } from './PhotoProviders.entity';
import { PhotosSchema } from './Photos.entity';
import { PlaceDetailsCacheSchema } from './PlaceDetailsCache.entity';
import { PlaceRatingsSchema } from './PlaceRatings.entity';
import { PlaceRegionsSchema } from './PlaceRegions.entity';
import { PlacesSchema } from './Places.entity';
import { PlaceShadowPicksSchema } from './PlaceShadowPicks.entity';
import { PluginActionsSchema } from './PluginActions.entity';
import { PluginCapabilityAuditSchema } from './PluginCapabilityAudit.entity';
import { PluginEgressHostsSchema } from './PluginEgressHosts.entity';
import { PluginEntityMetadataSchema } from './PluginEntityMetadata.entity';
import { PluginErrorLogSchema } from './PluginErrorLog.entity';
import { PluginMetaMigrationsSchema } from './PluginMetaMigrations.entity';
import { PluginOauthStateSchema } from './PluginOauthState.entity';
import { PluginOauthTokensSchema } from './PluginOauthTokens.entity';
import { PluginScheduledTasksSchema } from './PluginScheduledTasks.entity';
import { PluginsSchema } from './Plugins.entity';
import { PluginSettingsFieldsSchema } from './PluginSettingsFields.entity';
import { PluginUserConfigSchema } from './PluginUserConfig.entity';
import { PluginUserErasureQueueSchema } from './PluginUserErasureQueue.entity';
import { ReservationDayPositionsSchema } from './ReservationDayPositions.entity';
import { ReservationEndpointsSchema } from './ReservationEndpoints.entity';
import { ReservationsSchema } from './Reservations.entity';
import { ReservationTravelersSchema } from './ReservationTravelers.entity';
import { RoadtripDayBoundariesSchema } from './RoadtripDayBoundaries.entity';
import { RoadtripDayTracksSchema } from './RoadtripDayTracks.entity';
import { RoadtripPreferencesSchema } from './RoadtripPreferences.entity';
import { RoadtripViasSchema } from './RoadtripVias.entity';
import { RouteUsageDailySchema } from './RouteUsageDaily.entity';
import { SchemaVersionSchema } from './SchemaVersion.entity';
import { SchoolHolidayCountriesSchema } from './SchoolHolidayCountries.entity';
import { SchoolHolidayPeriodsSchema } from './SchoolHolidayPeriods.entity';
import { SchoolHolidayRegionsSchema } from './SchoolHolidayRegions.entity';
import { SettingsSchema } from './Settings.entity';
import { ShareTokensSchema } from './ShareTokens.entity';
import { TagsSchema } from './Tags.entity';
import { TodoCategoryAssigneesSchema } from './TodoCategoryAssignees.entity';
import { TodoItemsSchema } from './TodoItems.entity';
import { TrekPhotoCacheMetaSchema } from './TrekPhotoCacheMeta.entity';
import { TrekPhotosSchema } from './TrekPhotos.entity';
import { TripAlbumLinksSchema } from './TripAlbumLinks.entity';
import { TripFilesSchema } from './TripFiles.entity';
import { TripInviteTokensSchema } from './TripInviteTokens.entity';
import { TripMembersSchema } from './TripMembers.entity';
import { TripPhotosSchema } from './TripPhotos.entity';
import { TripsSchema } from './Trips.entity';
import { UserNoticeDismissalsSchema } from './UserNoticeDismissals.entity';
import { UsersSchema } from './Users.entity';
import { VacayCompanyHolidaysSchema } from './VacayCompanyHolidays.entity';
import { VacayEntriesSchema } from './VacayEntries.entity';
import { VacayHolidayCalendarsSchema } from './VacayHolidayCalendars.entity';
import { VacayPlanMembersSchema } from './VacayPlanMembers.entity';
import { VacayPlansSchema } from './VacayPlans.entity';
import { VacaySharesSchema } from './VacayShares.entity';
import { VacayUserColorsSchema } from './VacayUserColors.entity';
import { VacayUserSettingsSchema } from './VacayUserSettings.entity';
import { VacayUserYearsSchema } from './VacayUserYears.entity';
import { VacayYearsSchema } from './VacayYears.entity';
import { VisitedCountriesSchema } from './VisitedCountries.entity';
import { VisitedRegionsSchema } from './VisitedRegions.entity';
import { WebauthnChallengesSchema } from './WebauthnChallenges.entity';
import { WebauthnCredentialsSchema } from './WebauthnCredentials.entity';

/**
 * Every entity the ORM knows, listed explicitly so discovery never depends on a
 * filesystem glob (which fails under Node's ESM resolver in the vitest global
 * setup and would silently drop an entity a build forgot to emit).
 * `tests/unit/db/entities-index.test.ts` refuses a file this list misses.
 */
export const ALL_ENTITIES: readonly EntitySchema[] = [
  AddonsSchema,
  AppSettingsSchema,
  AssignmentParticipantsSchema,
  AuditLogSchema,
  BucketListSchema,
  BudgetCategoryOrderSchema,
  BudgetItemMembersSchema,
  BudgetItemPayersSchema,
  BudgetItemsSchema,
  BudgetSettlementsSchema,
  CategoriesSchema,
  CollabLinksSchema,
  CollabMessageReactionsSchema,
  CollabMessagesSchema,
  CollabNotesSchema,
  CollabPollsSchema,
  CollabPollVotesSchema,
  CollectionLabelsSchema,
  CollectionMembersSchema,
  CollectionPlaceRatingsSchema,
  CollectionPlacesSchema,
  CollectionsSchema,
  DawarichConnectionsSchema,
  DawarichVisitSuggestionsSchema,
  DayAccommodationsSchema,
  DayAssignmentsSchema,
  DayNotesSchema,
  DaysSchema,
  FileLinksSchema,
  GooglePlacePhotoMetaSchema,
  HiddenCountriesSchema,
  HiddenRegionsSchema,
  IdempotencyKeysSchema,
  InviteTokensSchema,
  JourneyBooksSchema,
  JourneyContributorsSchema,
  JourneyEntriesSchema,
  JourneyEntryPhotosSchema,
  JourneyPhotosSchema,
  JourneysSchema,
  JourneyShareTokensSchema,
  JourneyTripsSchema,
  McpTokensSchema,
  MigrationsSchema,
  NotificationChannelPreferencesSchema,
  NotificationsSchema,
  OauthClientsSchema,
  OauthConsentsSchema,
  OauthTokensSchema,
  PackingBagsSchema,
  PackingCategoryAssigneesSchema,
  PackingItemContributorsSchema,
  PackingItemsSchema,
  PackingTemplateCategoriesSchema,
  PackingTemplateItemsSchema,
  PackingTemplatesSchema,
  PasswordResetTokensSchema,
  PhotoProviderFieldsSchema,
  PhotoProvidersSchema,
  PhotosSchema,
  PlaceDetailsCacheSchema,
  PlaceRatingsSchema,
  PlaceRegionsSchema,
  PlacesSchema,
  PlaceShadowPicksSchema,
  PluginActionsSchema,
  PluginCapabilityAuditSchema,
  PluginEgressHostsSchema,
  PluginEntityMetadataSchema,
  PluginErrorLogSchema,
  PluginMetaMigrationsSchema,
  PluginOauthStateSchema,
  PluginOauthTokensSchema,
  PluginScheduledTasksSchema,
  PluginsSchema,
  PluginSettingsFieldsSchema,
  PluginUserConfigSchema,
  PluginUserErasureQueueSchema,
  ReservationDayPositionsSchema,
  ReservationEndpointsSchema,
  ReservationsSchema,
  ReservationTravelersSchema,
  RoadtripDayBoundariesSchema,
  RoadtripDayTracksSchema,
  RoadtripPreferencesSchema,
  RoadtripViasSchema,
  RouteUsageDailySchema,
  SchemaVersionSchema,
  SchoolHolidayCountriesSchema,
  SchoolHolidayPeriodsSchema,
  SchoolHolidayRegionsSchema,
  SettingsSchema,
  ShareTokensSchema,
  TagsSchema,
  TodoCategoryAssigneesSchema,
  TodoItemsSchema,
  TrekPhotoCacheMetaSchema,
  TrekPhotosSchema,
  TripAlbumLinksSchema,
  TripFilesSchema,
  TripInviteTokensSchema,
  TripMembersSchema,
  TripPhotosSchema,
  TripsSchema,
  UserNoticeDismissalsSchema,
  UsersSchema,
  VacayCompanyHolidaysSchema,
  VacayEntriesSchema,
  VacayHolidayCalendarsSchema,
  VacayPlanMembersSchema,
  VacayPlansSchema,
  VacaySharesSchema,
  VacayUserColorsSchema,
  VacayUserSettingsSchema,
  VacayUserYearsSchema,
  VacayYearsSchema,
  VisitedCountriesSchema,
  VisitedRegionsSchema,
  WebauthnChallengesSchema,
  WebauthnCredentialsSchema,
];
