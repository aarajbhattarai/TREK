import type { BudgetItems } from '../entities/BudgetItems.entity';
import { EntityRepository } from '@mikro-orm/sql';

export class BudgetItemsRepository extends EntityRepository<BudgetItems> {}
