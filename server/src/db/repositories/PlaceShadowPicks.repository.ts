import type { PlaceShadowPicks } from '../entities/PlaceShadowPicks.entity';
import { EntityRepository } from '@mikro-orm/sql';

export class PlaceShadowPicksRepository extends EntityRepository<PlaceShadowPicks> {}
