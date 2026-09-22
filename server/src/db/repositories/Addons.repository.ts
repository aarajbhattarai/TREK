import type { Addons } from '../entities/Addons.entity';
import { EntityRepository } from '@mikro-orm/sql';

export class AddonsRepository extends EntityRepository<Addons> {}
