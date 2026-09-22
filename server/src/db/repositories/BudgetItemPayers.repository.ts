import type { BudgetItemPayers } from '../entities/BudgetItemPayers.entity';
import { EntityRepository } from '@mikro-orm/sql';

export class BudgetItemPayersRepository extends EntityRepository<BudgetItemPayers> {}
