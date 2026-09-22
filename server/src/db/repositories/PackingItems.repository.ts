import type { PackingItems } from '../entities/PackingItems.entity';
import { TrekRepository } from './_shared/trek-repository';

export class PackingItemsRepository extends TrekRepository<PackingItems> {}
