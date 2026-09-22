import type { OauthConsents } from '../entities/OauthConsents.entity';
import { EntityRepository } from '@mikro-orm/sql';

export class OauthConsentsRepository extends EntityRepository<OauthConsents> {}
