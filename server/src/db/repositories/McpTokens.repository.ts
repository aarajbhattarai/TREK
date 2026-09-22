import type { McpTokens } from '../entities/McpTokens.entity';
import { EntityRepository } from '@mikro-orm/sql';

export class McpTokensRepository extends EntityRepository<McpTokens> {}
