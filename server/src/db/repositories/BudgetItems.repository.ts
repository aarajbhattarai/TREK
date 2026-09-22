import type { BudgetItems } from '../entities/BudgetItems.entity';
import { TrekRepository } from './_shared/trek-repository';

export class BudgetItemsRepository extends TrekRepository<BudgetItems> {}
