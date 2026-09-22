import type { TodoCategoryAssignees } from '../entities/TodoCategoryAssignees.entity';
import { EntityRepository } from '@mikro-orm/sql';

export class TodoCategoryAssigneesRepository extends EntityRepository<TodoCategoryAssignees> {}
