import type { Users } from '../entities/Users.entity';
import { EntityRepository } from '@mikro-orm/sql';

export class UsersRepository extends EntityRepository<Users> {}
