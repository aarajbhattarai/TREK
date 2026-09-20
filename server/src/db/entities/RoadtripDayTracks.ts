import { PrimaryKeyProp, type Ref, defineEntity, p, EntityRepository } from '@mikro-orm/core';
import { Days } from './Days.js';
import { Places } from './Places.js';

export class RoadtripDayTracks {
  [PrimaryKeyProp]?: 'day';
  day?: Ref<Days> | null;
  place!: Ref<Places>;
  strayKm?: unknown | null;
  createdAt?: string | null;
}

export class RoadtripDayTracksRepository extends EntityRepository<RoadtripDayTracks> {}

export const RoadtripDayTracksSchema = defineEntity({
  class: RoadtripDayTracks,
  repository: () => RoadtripDayTracksRepository,
  properties: {
    day: () => p.oneToOne(Days).primary().ref().nullable(),
    place: () => p.manyToOne(Places).ref().deleteRule('cascade').index('idx_roadtrip_day_tracks_place'),
    strayKm: p.double().nullable(),
    createdAt: p.text().nullable().onCreate(() => new Date()),
  },
});
