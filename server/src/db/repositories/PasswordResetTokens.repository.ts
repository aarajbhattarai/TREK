import type { PasswordResetTokens } from '../entities/PasswordResetTokens.entity';
import { EntityRepository } from '@mikro-orm/sql';

export class PasswordResetTokensRepository extends EntityRepository<PasswordResetTokens> {}
