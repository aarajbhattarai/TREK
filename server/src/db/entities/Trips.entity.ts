import { Collection, type Ref, defineEntity, p } from '@mikro-orm/core';
import { TripsRepository } from '../repositories/Trips.repository';
import { DbTimestampType } from '../types';
import { BudgetCategoryOrder } from './BudgetCategoryOrder.entity';
import { BudgetItems } from './BudgetItems.entity';
import { BudgetSettlements } from './BudgetSettlements.entity';
import { CollabLinks } from './CollabLinks.entity';
import { CollabMessages } from './CollabMessages.entity';
import { CollabNotes } from './CollabNotes.entity';
import { CollabPolls } from './CollabPolls.entity';
import { DawarichVisitSuggestions } from './DawarichVisitSuggestions.entity';
import { DayAccommodations } from './DayAccommodations.entity';
import { DayNotes } from './DayNotes.entity';
import { Days } from './Days.entity';
import { InviteTokens } from './InviteTokens.entity';
import { JourneyEntries } from './JourneyEntries.entity';
import { JourneyTrips } from './JourneyTrips.entity';
import { PackingBags } from './PackingBags.entity';
import { PackingCategoryAssignees } from './PackingCategoryAssignees.entity';
import { PackingItems } from './PackingItems.entity';
import { Photos } from './Photos.entity';
import { Places } from './Places.entity';
import { Reservations } from './Reservations.entity';
import { RoadtripDayBoundaries } from './RoadtripDayBoundaries.entity';
import { RoadtripPreferences } from './RoadtripPreferences.entity';
import { ShareTokens } from './ShareTokens.entity';
import { TodoCategoryAssignees } from './TodoCategoryAssignees.entity';
import { TodoItems } from './TodoItems.entity';
import { TripAlbumLinks } from './TripAlbumLinks.entity';
import { TripFiles } from './TripFiles.entity';
import { TripInviteTokens } from './TripInviteTokens.entity';
import { TripMembers } from './TripMembers.entity';
import { TripPhotos } from './TripPhotos.entity';
import { Users } from './Users.entity';

export class Trips {
  id?: number | null;
  user!: Ref<Users>;
  user_id!: number;
  title!: string;
  description?: string | null;
  start_date?: string | null;
  end_date?: string | null;
  currency?: string | null = 'EUR';
  cover_image?: string | null;
  is_archived?: number | null = 0;
  reminder_days?: number | null = 3;
  feed_token?: string | null;
  created_at?: string | null;
  updated_at?: string | null;
  budget_category_order_collection = new Collection<BudgetCategoryOrder>(this);
  budget_items_collection = new Collection<BudgetItems>(this);
  budget_settlements_collection = new Collection<BudgetSettlements>(this);
  collab_links_collection = new Collection<CollabLinks>(this);
  collab_messages_collection = new Collection<CollabMessages>(this);
  collab_notes_collection = new Collection<CollabNotes>(this);
  collab_polls_collection = new Collection<CollabPolls>(this);
  dawarich_visit_suggestions_collection = new Collection<DawarichVisitSuggestions>(this);
  day_accommodations_collection = new Collection<DayAccommodations>(this);
  day_notes_collection = new Collection<DayNotes>(this);
  days_collection = new Collection<Days>(this);
  invite_tokens_collection = new Collection<InviteTokens>(this);
  journey_entries_collection = new Collection<JourneyEntries>(this);
  journey_trips_collection = new Collection<JourneyTrips>(this);
  packing_bags_collection = new Collection<PackingBags>(this);
  packing_category_assignees_collection = new Collection<PackingCategoryAssignees>(this);
  packing_items_collection = new Collection<PackingItems>(this);
  photos_collection = new Collection<Photos>(this);
  places_collection = new Collection<Places>(this);
  reservations_collection = new Collection<Reservations>(this);
  roadtrip_day_boundaries_collection = new Collection<RoadtripDayBoundaries>(this);
  roadtrip_preferences_collection = new Collection<RoadtripPreferences>(this);
  share_tokens_collection = new Collection<ShareTokens>(this);
  todo_category_assignees_collection = new Collection<TodoCategoryAssignees>(this);
  todo_items_collection = new Collection<TodoItems>(this);
  trip_album_links_collection = new Collection<TripAlbumLinks>(this);
  trip_files_collection = new Collection<TripFiles>(this);
  trip_invite_tokens_collection = new Collection<TripInviteTokens>(this);
  trip_members_collection = new Collection<TripMembers>(this);
  trip_photos_collection = new Collection<TripPhotos>(this);
}

export const TripsSchema = defineEntity({
  class: Trips,
  repository: () => TripsRepository,
  uniques: [
    {
      name: 'idx_trips_feed_token',
      where: 'feed_token IS NOT NULL',
      properties: ['feed_token'],
    },
  ],
  properties: {
    id: p.integer().primary().autoincrement(),
    user: () => p.manyToOne(Users).ref().hidden().deleteRule('cascade').index('idx_trips_user_id'),
    user_id: p.integer().persist(false),
    title: p.text(),
    description: p.text().nullable(),
    start_date: p.text().nullable(),
    end_date: p.text().nullable(),
    currency: p.text().nullable(),
    cover_image: p.text().nullable(),
    is_archived: p.integer().nullable(),
    reminder_days: p.integer().nullable(),
    feed_token: p.text().nullable(),
    created_at: p.type(DbTimestampType).nullable().index('idx_trips_created_at').defaultRaw('CURRENT_TIMESTAMP'),
    updated_at: p.type(DbTimestampType).nullable().defaultRaw('CURRENT_TIMESTAMP'),
    budget_category_order_collection: () => p.oneToMany(BudgetCategoryOrder).hidden().mappedBy('trip'),
    budget_items_collection: () => p.oneToMany(BudgetItems).hidden().mappedBy('trip'),
    budget_settlements_collection: () => p.oneToMany(BudgetSettlements).hidden().mappedBy('trip'),
    collab_links_collection: () => p.oneToMany(CollabLinks).hidden().mappedBy('trip'),
    collab_messages_collection: () => p.oneToMany(CollabMessages).hidden().mappedBy('trip'),
    collab_notes_collection: () => p.oneToMany(CollabNotes).hidden().mappedBy('trip'),
    collab_polls_collection: () => p.oneToMany(CollabPolls).hidden().mappedBy('trip'),
    dawarich_visit_suggestions_collection: () => p.oneToMany(DawarichVisitSuggestions).hidden().mappedBy('trip'),
    day_accommodations_collection: () => p.oneToMany(DayAccommodations).hidden().mappedBy('trip'),
    day_notes_collection: () => p.oneToMany(DayNotes).hidden().mappedBy('trip'),
    days_collection: () => p.oneToMany(Days).hidden().mappedBy('trip'),
    invite_tokens_collection: () => p.oneToMany(InviteTokens).hidden().mappedBy('trip'),
    journey_entries_collection: () => p.oneToMany(JourneyEntries).hidden().mappedBy('sourceTrip'),
    journey_trips_collection: () => p.oneToMany(JourneyTrips).hidden().mappedBy('trip'),
    packing_bags_collection: () => p.oneToMany(PackingBags).hidden().mappedBy('trip'),
    packing_category_assignees_collection: () => p.oneToMany(PackingCategoryAssignees).hidden().mappedBy('trip'),
    packing_items_collection: () => p.oneToMany(PackingItems).hidden().mappedBy('trip'),
    photos_collection: () => p.oneToMany(Photos).hidden().mappedBy('trip'),
    places_collection: () => p.oneToMany(Places).hidden().mappedBy('trip'),
    reservations_collection: () => p.oneToMany(Reservations).hidden().mappedBy('trip'),
    roadtrip_day_boundaries_collection: () => p.oneToMany(RoadtripDayBoundaries).hidden().mappedBy('trip'),
    roadtrip_preferences_collection: () => p.oneToMany(RoadtripPreferences).hidden().mappedBy('trip'),
    share_tokens_collection: () => p.oneToMany(ShareTokens).hidden().mappedBy('trip'),
    todo_category_assignees_collection: () => p.oneToMany(TodoCategoryAssignees).hidden().mappedBy('trip'),
    todo_items_collection: () => p.oneToMany(TodoItems).hidden().mappedBy('trip'),
    trip_album_links_collection: () => p.oneToMany(TripAlbumLinks).hidden().mappedBy('trip'),
    trip_files_collection: () => p.oneToMany(TripFiles).hidden().mappedBy('trip'),
    trip_invite_tokens_collection: () => p.oneToMany(TripInviteTokens).hidden().mappedBy('trip'),
    trip_members_collection: () => p.oneToMany(TripMembers).hidden().mappedBy('trip'),
    trip_photos_collection: () => p.oneToMany(TripPhotos).hidden().mappedBy('trip'),
  },
});
