import type { JourneyShareTokens } from '../entities/JourneyShareTokens.entity';
import { EntityRepository } from '@mikro-orm/sql';

export class JourneyShareTokensRepository extends EntityRepository<JourneyShareTokens> {}
