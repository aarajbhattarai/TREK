import type { WebauthnChallenges } from '../entities/WebauthnChallenges.entity';
import { EntityRepository } from '@mikro-orm/sql';

export class WebauthnChallengesRepository extends EntityRepository<WebauthnChallenges> {}
