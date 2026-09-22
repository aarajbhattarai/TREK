import type { FileLinks } from '../entities/FileLinks.entity';
import { EntityRepository } from '@mikro-orm/sql';

export class FileLinksRepository extends EntityRepository<FileLinks> {}
