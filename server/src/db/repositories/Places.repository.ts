import type { Places } from '../entities/Places.entity';
import { EntityRepository } from '@mikro-orm/sql';

export class PlacesRepository extends EntityRepository<Places> {}
