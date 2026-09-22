import type { RoadtripPreferences } from '../entities/RoadtripPreferences.entity';
import { EntityRepository } from '@mikro-orm/sql';

export class RoadtripPreferencesRepository extends EntityRepository<RoadtripPreferences> {}
