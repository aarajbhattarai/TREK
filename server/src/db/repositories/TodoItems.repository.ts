import type { TodoItems } from '../entities/TodoItems.entity';
import { EntityRepository } from '@mikro-orm/sql';

export class TodoItemsRepository extends EntityRepository<TodoItems> {}
