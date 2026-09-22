import type { JourneyContributors } from '../entities/JourneyContributors.entity';
import { EntityRepository } from '@mikro-orm/sql';

export class JourneyContributorsRepository extends EntityRepository<JourneyContributors> {}
