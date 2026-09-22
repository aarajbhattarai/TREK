import type { DawarichConnections } from '../entities/DawarichConnections.entity';
import { EntityRepository } from '@mikro-orm/sql';

export class DawarichConnectionsRepository extends EntityRepository<DawarichConnections> {}
