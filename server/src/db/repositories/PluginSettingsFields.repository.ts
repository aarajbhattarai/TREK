import type { PluginSettingsFields } from '../entities/PluginSettingsFields.entity';
import { EntityRepository } from '@mikro-orm/sql';

export class PluginSettingsFieldsRepository extends EntityRepository<PluginSettingsFields> {}
