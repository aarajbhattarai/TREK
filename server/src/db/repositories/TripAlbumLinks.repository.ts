import type { TripAlbumLinks } from '../entities/TripAlbumLinks.entity';
import { currentTimestamp } from '../dialect/sql-functions';
import { TrekRepository } from './_shared/trek-repository';

/** MA7/MA8's shared row shape — album_id always needed, passphrase only by the sync path (MA8). */
export interface TripAlbumLinkSyncRow {
  album_id: string;
  passphrase: string | null;
}

export class TripAlbumLinksRepository extends TrekRepository<TripAlbumLinks> {
  /**
   * MA7 (`getAlbumIdFromLink`) / MA8 (`getAlbumLinkForSync`) — same
   * user-scoped WHERE, different SELECT list in the legacy text
   * (`album_id` alone vs. `album_id, passphrase`); one method serving both,
   * per the inventory's own proposal, since MA7's caller simply ignores the
   * extra `passphrase` column. `SELECT album_id, passphrase FROM
   * trip_album_links WHERE id = ? AND trip_id = ? AND user_id = ?` — note
   * this is USER-scoped, not just trip-scoped: a link belongs to the user
   * who created it, not the whole trip.
   */
  async findScoped(id: number, trip_id: number, user_id: number): Promise<TripAlbumLinkSyncRow | null> {
    const row = await this.findOne({ id, trip: trip_id, user: user_id }, { fields: ['album_id', 'passphrase'] });
    return row ? { album_id: row.album_id, passphrase: row.passphrase ?? null } : null;
  }

  /**
   * MA9 — `UPDATE trip_album_links SET last_synced_at = CURRENT_TIMESTAMP
   * WHERE id = ?`. Deliberately unscoped by trip/user, matching the legacy
   * statement: the caller (`syncImmichAlbum`/`syncSynologyAlbum`) has
   * already resolved `linkId` through `findScoped` (MA7/MA8) earlier in the
   * same request, so this write relies entirely on that prior resolution —
   * not a defect to fix here (see the class docstring on `MemoriesAccessService`).
   */
  async touchSyncTime(id: number): Promise<void> {
    const platform = this.getEntityManager().getPlatform();
    await this.nativeUpdate({ id }, { last_synced_at: currentTimestamp(platform) });
  }
}
