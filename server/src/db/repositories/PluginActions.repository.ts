import type { PluginActions } from '../entities/PluginActions.entity';
import { EntityRepository } from '@mikro-orm/sql';

export class PluginActionsRepository extends EntityRepository<PluginActions> {}
