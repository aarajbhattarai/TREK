import type { WebauthnCredentials } from '../entities/WebauthnCredentials.entity';
import { EntityRepository } from '@mikro-orm/sql';

/**
 * Plan 3b Task 1 reserves this class (empty stub since Plan 3a) and implements
 * exactly the one method the AUTH cluster's Task 1 needs NOW: `mfa-policy.guard.ts`
 * (MP3) and, cross-service, `AuthService.updateAppSettings` (AU24, Task 5) both
 * read "does this user own at least one passkey" — a passkey satisfies the
 * `require_mfa` policy the same way TOTP does. Task 3 (`PasskeyService`)
 * extends this class with the rest of the WebAuthn ceremony state
 * (`listByUser`, `create`, `findByCredentialId`, `updateCounterAndLastUsed`,
 * `renameOwned`, `deleteOwned`, `deleteAllForUser`) — this method's name and
 * shape are chosen so nothing here needs to change when that lands.
 */
export class WebauthnCredentialsRepository extends EntityRepository<WebauthnCredentials> {
  /**
   * `SELECT 1 FROM webauthn_credentials WHERE user_id = ? LIMIT 1` (MP3/AU24
   * — identical statement, two callers). `count` with an implicit `LIMIT 1`
   * via `findOne` mirrors the legacy existence probe without pulling a row;
   * MikroORM's `count()` has no built-in short-circuit, so `findOne` with a
   * narrow `fields` selection is the closer match to "does one exist" than
   * `count() > 0`, which would still scan/aggregate every matching row.
   */
  async hasAny(userId: number): Promise<boolean> {
    const row = await this.findOne({ user: userId }, { fields: ['id'] });
    return row !== null;
  }
}
