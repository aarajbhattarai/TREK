import { type Opt, type Ref, defineEntity, p } from '@mikro-orm/core';
import { VacayCompanyHolidaysRepository } from '../repositories/VacayCompanyHolidays.repository';
import { VacayPlans } from './VacayPlans.entity';

export class VacayCompanyHolidays {
  id!: number & Opt;
  plan!: Ref<VacayPlans>;
  plan_id!: number;
  date!: string;
  note?: string | null = '';
}

export const VacayCompanyHolidaysSchema = defineEntity({
  class: VacayCompanyHolidays,
  repository: () => VacayCompanyHolidaysRepository,
  properties: {
    id: p.integer().primary(),
    plan: () => p.manyToOne(VacayPlans).ref().deleteRule('cascade').hidden(),
    plan_id: p.integer().persist(false),
    date: p.text(),
    note: p.text().nullable(),
  },
});
