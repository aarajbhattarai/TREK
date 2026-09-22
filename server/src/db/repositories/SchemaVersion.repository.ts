import type { SchemaVersion } from '../entities/SchemaVersion.entity';
import { EntityRepository } from '@mikro-orm/sql';

export class SchemaVersionRepository extends EntityRepository<SchemaVersion> {}
