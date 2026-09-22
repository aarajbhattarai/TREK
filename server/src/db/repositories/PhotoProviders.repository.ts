import type { PhotoProviders } from '../entities/PhotoProviders.entity';
import { EntityRepository } from '@mikro-orm/sql';

export class PhotoProvidersRepository extends EntityRepository<PhotoProviders> {}
