import type { PasswordResetTokens } from '../entities/PasswordResetTokens.entity';
import { TrekRepository } from './_shared/trek-repository';

export class PasswordResetTokensRepository extends TrekRepository<PasswordResetTokens> {}
