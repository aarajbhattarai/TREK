import type { CollectionLabels } from '../entities/CollectionLabels.entity';
import { TrekRepository } from './_shared/trek-repository';

/** `collection_labels` — `loadLabelsByCollection`'s (CL7) shape. */
export interface CollectionLabelRow {
  id: number;
  collection_id: number;
  name: string;
  color: string | null;
  sort_order: number | null;
}

interface CollectionLabelsKyselyDB {
  collection_labels: {
    id: number;
    collection_id: number;
    name: string;
    color: string | null;
    sort_order: number | null;
    created_at: string | null;
  };
}

/** CL20's own `INSERT INTO collection_labels (collection_id, name, color, sort_order)` column list, exactly — no `id`/`created_at`, the `BucketListInsertKyselyDB` narrower-insert-interface precedent. */
interface CollectionLabelsInsertKyselyDB {
  collection_labels: { collection_id: number; name: string; color: string; sort_order: number };
}

/**
 * `collection_labels` — Plan 3h Task 1's first cut. Owns Part A's own
 * label reads/insert (CL7, `labelIdsForFile`'s CL18/CL19, `insertImportedLabel`'s
 * CL20). Task 2 extends this repository with `createLabel`/`updateLabel`/
 * `deleteLabel`/`collectionIdOfLabel`/`getLabelById` (CL71-77, beyond this
 * task's CL1-36 range).
 */
export class CollectionLabelsRepository extends TrekRepository<CollectionLabels> {
  private db_() {
    return this.kysely<CollectionLabelsKyselyDB>();
  }

  /** CL7 (`loadLabelsByCollection`) — `SELECT id, collection_id, name, color, sort_order FROM collection_labels WHERE collection_id=? ORDER BY sort_order, id`. */
  async listByCollection(collectionId: number): Promise<CollectionLabelRow[]> {
    return await this.db_()
      .selectFrom('collection_labels')
      .select(['id', 'collection_id', 'name', 'color', 'sort_order'])
      .where('collection_id', '=', collectionId)
      .orderBy('sort_order')
      .orderBy('id')
      .execute();
  }

  /** CL18 (`labelIdsForFile`) — `SELECT id, name FROM collection_labels WHERE collection_id=?`. */
  async idNameByCollection(collectionId: number): Promise<{ id: number; name: string }[]> {
    return await this.db_()
      .selectFrom('collection_labels')
      .select(['id', 'name'])
      .where('collection_id', '=', collectionId)
      .execute();
  }

  /** CL19 (`labelIdsForFile`) — `SELECT COALESCE(MAX(sort_order),-1) AS m FROM collection_labels WHERE collection_id=?`. Dup text also `createLabel` (Task 2's own call site, CL73's neighbor). */
  async maxSortOrder(collectionId: number): Promise<number> {
    const row = await this.db_()
      .selectFrom('collection_labels')
      .select((eb) => eb.fn.coalesce(eb.fn.max('sort_order'), eb.val(-1)).as('m'))
      .where('collection_id', '=', collectionId)
      .executeTakeFirstOrThrow();
    return Number(row.m);
  }

  /** CL20 (`insertImportedLabel`) — `INSERT INTO collection_labels (collection_id, name, color, sort_order) VALUES (?,?,?,?)`. Returns the new row's id. Dup text also `createLabel` (Task 2's own call site). */
  async insertLabel(row: { collection_id: number; name: string; color: string; sort_order: number }): Promise<number> {
    const result = await this.kysely<CollectionLabelsInsertKyselyDB>().insertInto('collection_labels').values(row).executeTakeFirstOrThrow();
    return Number(result.insertId);
  }
}
