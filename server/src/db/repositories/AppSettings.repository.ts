import type { AppSettings } from '../entities/AppSettings.entity';
import { EntityRepository } from '@mikro-orm/sql';

export class AppSettingsRepository extends EntityRepository<AppSettings> {}
