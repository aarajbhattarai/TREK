import type { PluginEgressHosts } from '../entities/PluginEgressHosts.entity';
import { EntityRepository } from '@mikro-orm/sql';

export class PluginEgressHostsRepository extends EntityRepository<PluginEgressHosts> {}
