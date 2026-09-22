import type { BudgetCategoryOrder } from '../entities/BudgetCategoryOrder.entity';
import { EntityRepository } from '@mikro-orm/sql';

export class BudgetCategoryOrderRepository extends EntityRepository<BudgetCategoryOrder> {}
