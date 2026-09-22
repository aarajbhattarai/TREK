import type { DocumentConnections } from '../entities/DocumentConnections.entity';
import { EntityRepository } from '@mikro-orm/sql';

export class DocumentConnectionsRepository extends EntityRepository<DocumentConnections> {}
