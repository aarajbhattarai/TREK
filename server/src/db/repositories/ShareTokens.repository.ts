import type { ShareTokens } from '../entities/ShareTokens.entity';
import { EntityRepository } from '@mikro-orm/sql';

export class ShareTokensRepository extends EntityRepository<ShareTokens> {}
