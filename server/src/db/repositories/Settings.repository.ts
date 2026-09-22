import type { Settings } from '../entities/Settings.entity';
import { EntityRepository } from '@mikro-orm/sql';

export class SettingsRepository extends EntityRepository<Settings> {}
