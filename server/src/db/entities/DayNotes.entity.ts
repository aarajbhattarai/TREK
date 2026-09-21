import { type Ref, defineEntity, p } from '@mikro-orm/core';
import { DayNotesRepository } from '../repositories/DayNotes.repository';
import { DbTimestampType } from '../types';
import { Days } from './Days.entity';
import { Trips } from './Trips.entity';

export class DayNotes {
  id?: number | null;
  day!: Ref<Days>;
  day_id!: number;
  trip!: Ref<Trips>;
  trip_id!: number;
  text!: string;
  time?: string | null;
  icon?: string | null = '📝';
  sort_order?: number | null;
  created_at?: string | null;
  color?: string | null;
}

export const DayNotesSchema = defineEntity({
  class: DayNotes,
  repository: () => DayNotesRepository,
  properties: {
    id: p.integer().primary().autoincrement(),
    day: () => p.manyToOne(Days).ref().hidden().deleteRule('cascade').index('idx_day_notes_day_id'),
    day_id: p.integer().persist(false),
    trip: () => p.manyToOne(Trips).ref().hidden().deleteRule('cascade'),
    trip_id: p.integer().persist(false),
    text: p.text(),
    time: p.text().nullable(),
    icon: p.text().nullable(),
    sort_order: p.double().nullable().default(0),
    created_at: p.type(DbTimestampType).nullable().defaultRaw('CURRENT_TIMESTAMP'),
    color: p.text().nullable(),
  },
});
