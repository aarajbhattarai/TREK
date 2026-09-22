import type { IdempotencyKeys } from '../entities/IdempotencyKeys.entity';
import { EntityRepository } from '@mikro-orm/sql';

export class IdempotencyKeysRepository extends EntityRepository<IdempotencyKeys> {}
