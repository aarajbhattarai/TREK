import type { Migrations } from '../entities/Migrations.entity';
import { EntityRepository } from '@mikro-orm/sql';

export class MigrationsRepository extends EntityRepository<Migrations> {}
