import type { IdempotencyKeys } from '../entities/IdempotencyKeys.entity';
import { TrekRepository } from './_shared/trek-repository';

export class IdempotencyKeysRepository extends TrekRepository<IdempotencyKeys> {}
