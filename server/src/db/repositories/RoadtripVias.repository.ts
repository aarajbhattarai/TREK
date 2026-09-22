import type { RoadtripVias } from '../entities/RoadtripVias.entity';
import { EntityRepository } from '@mikro-orm/sql';

export class RoadtripViasRepository extends EntityRepository<RoadtripVias> {}
