import type { PackingBags } from '../entities/PackingBags.entity';
import { TrekRepository } from './_shared/trek-repository';

export class PackingBagsRepository extends TrekRepository<PackingBags> {}
