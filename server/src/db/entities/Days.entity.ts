import { Collection, type Ref, defineEntity, p } from '@mikro-orm/core';
import { DaysRepository } from '../repositories/Days.repository';
import { DayAccommodations } from './DayAccommodations.entity';
import { DayAssignments } from './DayAssignments.entity';
import { DayNotes } from './DayNotes.entity';
import { Photos } from './Photos.entity';
import { ReservationDayPositions } from './ReservationDayPositions.entity';
import { Reservations } from './Reservations.entity';
import { RoadtripDayTracks } from './RoadtripDayTracks.entity';
import { RoadtripVias } from './RoadtripVias.entity';
import { Trips } from './Trips.entity';

export class Days {
  id?: number | null;
  trip!: Ref<Trips>;
  trip_id!: number;
  day_number!: number;
  date?: string | null;
  notes?: string | null;
  title?: string | null;
  default_transport_mode?: string | null;
  day_accommodations_collection = new Collection<DayAccommodations>(this);
  day_accommodations_collection1 = new Collection<DayAccommodations>(this);
  day_assignments_collection = new Collection<DayAssignments>(this);
  day_notes_collection = new Collection<DayNotes>(this);
  photos_collection = new Collection<Photos>(this);
  reservation_day_positions_collection = new Collection<ReservationDayPositions>(this);
  reservations_collection = new Collection<Reservations>(this);
  reservations_collection1 = new Collection<Reservations>(this);
  roadtrip_day_tracks: Ref<RoadtripDayTracks> | null = null;
  roadtrip_vias_collection = new Collection<RoadtripVias>(this);
}

export const DaysSchema = defineEntity({
  class: Days,
  repository: () => DaysRepository,
  properties: {
    id: p.integer().primary().autoincrement(),
    trip: () => p.manyToOne(Trips).ref().hidden().deleteRule('cascade').index('idx_days_trip_id'),
    trip_id: p.integer().persist(false),
    day_number: p.integer(),
    date: p.text().nullable(),
    notes: p.text().nullable(),
    title: p.text().nullable(),
    default_transport_mode: p.text().nullable(),
    day_accommodations_collection: () => p.oneToMany(DayAccommodations).hidden().mappedBy('startDay'),
    day_accommodations_collection1: () => p.oneToMany(DayAccommodations).hidden().mappedBy('endDay'),
    day_assignments_collection: () => p.oneToMany(DayAssignments).hidden().mappedBy('day'),
    day_notes_collection: () => p.oneToMany(DayNotes).hidden().mappedBy('day'),
    photos_collection: () => p.oneToMany(Photos).hidden().mappedBy('day'),
    reservation_day_positions_collection: () => p.oneToMany(ReservationDayPositions).hidden().mappedBy('day'),
    reservations_collection: () => p.oneToMany(Reservations).hidden().mappedBy('day'),
    reservations_collection1: () => p.oneToMany(Reservations).hidden().mappedBy('endDay'),
    roadtrip_day_tracks: () => p.oneToOne(RoadtripDayTracks).ref().hidden().mappedBy('day'),
    roadtrip_vias_collection: () => p.oneToMany(RoadtripVias).hidden().mappedBy('day'),
  },
});
