import { PrimaryKeyProp, type Ref, defineEntity, p } from '@mikro-orm/core';
import { RoadtripPreferencesRepository } from '../repositories/RoadtripPreferences.repository';
import { Trips } from './Trips.entity';

export class RoadtripPreferences {
  [PrimaryKeyProp]?: ['trip', 'key'];
  trip!: Ref<Trips>;
  trip_id!: number;
  key!: string;
  value!: string;
}

export const RoadtripPreferencesSchema = defineEntity({
  class: RoadtripPreferences,
  repository: () => RoadtripPreferencesRepository,
  properties: {
    trip: () => p.manyToOne(Trips).primary().ref().deleteRule('cascade').hidden(),
    trip_id: p.integer().persist(false),
    key: p.text().primary(),
    value: p.text(),
  },
});
