import type { BudgetSettlements } from '../entities/BudgetSettlements.entity';
import { EntityRepository } from '@mikro-orm/sql';

export class BudgetSettlementsRepository extends EntityRepository<BudgetSettlements> {}
