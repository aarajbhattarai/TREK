import { type Opt, type Ref, defineEntity, p, EntityRepository } from '@mikro-orm/core';
import { Days } from './Days.js';

export class RoadtripVias {
  id?: number | null;
  day!: Ref<Days>;
  afterOrderIndex!: number;
  sequence: number & Opt = 0;
  lat!: unknown;
  lng!: unknown;
  createdAt?: string | null;
}

export class RoadtripViasRepository extends EntityRepository<RoadtripVias> {}

export const RoadtripViasSchema = defineEntity({
  class: RoadtripVias,
  repository: () => RoadtripViasRepository,
  indexes: [
    {
      name: 'idx_roadtrip_vias_day',
      properties: ['day', 'afterOrderIndex', 'sequence'],
    },
  ],
  properties: {
    id: p.integer().primary().autoincrement(),
    day: () => p.manyToOne(Days).ref().deleteRule('cascade'),
    afterOrderIndex: p.integer(),
    sequence: p.integer(),
    lat: p.double(),
    lng: p.double(),
    createdAt: p.text().nullable().onCreate(() => new Date()),
  },
});
