import { type Ref, defineEntity, p, EntityRepository } from '@mikro-orm/core';
import { BudgetItems } from './BudgetItems.js';
import { DayAssignments } from './DayAssignments.js';
import { Places } from './Places.js';
import { Reservations } from './Reservations.js';
import { TripFiles } from './TripFiles.js';

export class FileLinks {
  id?: number | null;
  file!: Ref<TripFiles>;
  reservation?: Ref<Reservations> | null;
  assignment?: Ref<DayAssignments> | null;
  place?: Ref<Places> | null;
  createdAt?: Date | null;
  budgetItem?: Ref<BudgetItems> | null;
}

export class FileLinksRepository extends EntityRepository<FileLinks> {}

export const FileLinksSchema = defineEntity({
  class: FileLinks,
  repository: () => FileLinksRepository,
  uniques: [
    { name: 'idx_file_links_file_budget', properties: ['file', 'budgetItem'] },
  ],
  properties: {
    id: p.integer().primary().autoincrement(),
    file: () => p.manyToOne(TripFiles).ref().deleteRule('cascade'),
    reservation: () => p.manyToOne(Reservations).ref().deleteRule('cascade').nullable(),
    assignment: () => p.manyToOne(DayAssignments).ref().deleteRule('cascade').nullable(),
    place: () => p.manyToOne(Places).ref().deleteRule('cascade').nullable(),
    createdAt: p.datetime().nullable().onCreate(() => new Date()),
    budgetItem: () => p.manyToOne(BudgetItems).ref().nullable().index('idx_file_links_budget_item_id'),
  },
});
