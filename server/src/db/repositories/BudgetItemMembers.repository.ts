import type { BudgetItemMembers } from '../entities/BudgetItemMembers.entity';
import { EntityRepository } from '@mikro-orm/sql';

export class BudgetItemMembersRepository extends EntityRepository<BudgetItemMembers> {}
