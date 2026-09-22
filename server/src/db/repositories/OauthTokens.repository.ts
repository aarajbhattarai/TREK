import type { OauthTokens } from '../entities/OauthTokens.entity';
import { EntityRepository } from '@mikro-orm/sql';

export class OauthTokensRepository extends EntityRepository<OauthTokens> {}
