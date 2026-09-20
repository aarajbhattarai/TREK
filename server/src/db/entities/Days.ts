import { Collection, type Ref, defineEntity, p, EntityRepository } from '@mikro-orm/core';
import { DayAccommodations } from './DayAccommodations.js';
import { DayAssignments } from './DayAssignments.js';
import { DayNotes } from './DayNotes.js';
import { Photos } from './Photos.js';
import { ReservationDayPositions } from './ReservationDayPositions.js';
import { Reservations } from './Reservations.js';
import { RoadtripDayTracks } from './RoadtripDayTracks.js';
import { RoadtripVias } from './RoadtripVias.js';
import { Trips } from './Trips.js';

export class Days {
  id?: number | null;
  trip!: Ref<Trips>;
  dayNumber!: number;
  date?: string | null;
  notes?: string | null;
  title?: string | null;
  defaultTransportMode?: string | null;
  dayAccommodationsCollection = new Collection<DayAccommodations>(this);
  dayAccommodationsCollection1 = new Collection<DayAccommodations>(this);
  dayAssignmentsCollection = new Collection<DayAssignments>(this);
  dayNotesCollection = new Collection<DayNotes>(this);
  photosCollection = new Collection<Photos>(this);
  reservationDayPositionsCollection = new Collection<ReservationDayPositions>(this);
  reservationsCollection = new Collection<Reservations>(this);
  reservationsCollection1 = new Collection<Reservations>(this);
  roadtripDayTracks: Ref<RoadtripDayTracks> | null = null;
  roadtripViasCollection = new Collection<RoadtripVias>(this);
}

export class DaysRepository extends EntityRepository<Days> {}

export const DaysSchema = defineEntity({
  class: Days,
  repository: () => DaysRepository,
  properties: {
    id: p.integer().primary().autoincrement(),
    trip: () => p.manyToOne(Trips).ref().deleteRule('cascade').index('idx_days_trip_id'),
    dayNumber: p.integer(),
    date: p.text().nullable(),
    notes: p.text().nullable(),
    title: p.text().nullable(),
    defaultTransportMode: p.text().nullable(),
    dayAccommodationsCollection: () => p.oneToMany(DayAccommodations).mappedBy('startDay'),
    dayAccommodationsCollection1: () => p.oneToMany(DayAccommodations).mappedBy('endDay'),
    dayAssignmentsCollection: () => p.oneToMany(DayAssignments).mappedBy('day'),
    dayNotesCollection: () => p.oneToMany(DayNotes).mappedBy('day'),
    photosCollection: () => p.oneToMany(Photos).mappedBy('day'),
    reservationDayPositionsCollection: () => p.oneToMany(ReservationDayPositions).mappedBy('day'),
    reservationsCollection: () => p.oneToMany(Reservations).mappedBy('day'),
    reservationsCollection1: () => p.oneToMany(Reservations).mappedBy('endDay'),
    roadtripDayTracks: () => p.oneToOne(RoadtripDayTracks).ref().mappedBy('day'),
    roadtripViasCollection: () => p.oneToMany(RoadtripVias).mappedBy('day'),
  },
});
