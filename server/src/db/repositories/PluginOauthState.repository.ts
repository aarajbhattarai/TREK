import type { PluginOauthState } from '../entities/PluginOauthState.entity';
import { EntityRepository } from '@mikro-orm/sql';

export class PluginOauthStateRepository extends EntityRepository<PluginOauthState> {}
