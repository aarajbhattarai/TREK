import type { TodoItems } from '../entities/TodoItems.entity';
import { TrekRepository } from './_shared/trek-repository';

export class TodoItemsRepository extends TrekRepository<TodoItems> {}
