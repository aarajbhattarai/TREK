import type { PluginOauthTokens } from '../entities/PluginOauthTokens.entity';
import { EntityRepository } from '@mikro-orm/sql';

export class PluginOauthTokensRepository extends EntityRepository<PluginOauthTokens> {}
