import type { TodoItems } from '../entities/TodoItems.entity';
import { type AssertRowKeys } from './_shared/rows';
import { TrekRepository } from './_shared/trek-repository';
import { presenceSet } from './_shared/presence-set';

/** A bare `todo_items` row — every scalar column, incl. the two `persist(false)` relation mirrors (`trip_id`, `assigned_user_id`). */
export interface TodoItemRow {
  id: number;
  trip_id: number;
  name: string;
  checked: number | null;
  category: string | null;
  sort_order: number | null;
  due_date: string | null;
  description: string | null;
  assigned_user_id: number | null;
  priority: number | null;
  created_at: string | null;
  reminded_at: string | null;
}

const _todoItemRowKeys: AssertRowKeys<TodoItemRow, TodoItems> = true;

interface TodoItemsKyselyDB {
  todo_items: TodoItemRow;
}

/** The insert-only shape for `insertItem` (TD3) — omits `id`/`created_at`/`reminded_at` (autoincrement / `DEFAULT CURRENT_TIMESTAMP` / never written here). */
interface TodoItemsInsertKyselyDB {
  todo_items: {
    trip_id: number | string; name: string; checked: number; category: string | null; sort_order: number;
    due_date: string | null; description: string | null; assigned_user_id: number | null; priority: number;
  };
}

/** The insert-only shape for `insertCopy` (TP73) — a distinct column set from {@link TodoItemsRepository.insertItem}'s: no `assigned_user_id` parameter at all (always written `NULL`, never taken from the caller). */
interface TodoItemsCopyInsertKyselyDB {
  todo_items: {
    trip_id: number | string; name: string; checked: number; category: string | null; sort_order: number | null;
    due_date: string | null; description: string | null; assigned_user_id: null; priority: number | null;
  };
}

/**
 * `todo_items` — Kysely throughout: `trip_id`/`assigned_user_id` are
 * `persist(false)` relation mirrors (the program-wide bare-`select`/`fields`
 * drop trap — `TripFilesRepository`'s class docstring, restated at Task 2's
 * `BudgetItemsRepository`/Task 6's TC-form), avoided the same way here by
 * going through Kysely for every statement rather than the QueryBuilder.
 */
export class TodoItemsRepository extends TrekRepository<TodoItems> {
  /** TD1 (`listItems`) — `SELECT * FROM todo_items WHERE trip_id = ? ORDER BY sort_order ASC, created_at ASC`. */
  async listForTrip(trip_id: number | string): Promise<TodoItemRow[]> {
    return await this.kysely<TodoItemsKyselyDB>()
      .selectFrom('todo_items')
      .selectAll()
      .where('trip_id', '=', trip_id as number)
      .orderBy('sort_order', 'asc')
      .orderBy('created_at', 'asc')
      .execute();
  }

  /** TD2 (`createItem`) — `SELECT MAX(sort_order) as max FROM todo_items WHERE trip_id = ?`. */
  async maxSortOrder(trip_id: number | string): Promise<number | null> {
    const row = await this.kysely<TodoItemsKyselyDB>().selectFrom('todo_items').select((eb) => eb.fn.max('sort_order').as('max')).where('trip_id', '=', trip_id as number).executeTakeFirst();
    return row?.max ?? null;
  }

  /**
   * TD3 (`createItem`) — `INSERT INTO todo_items (trip_id, name, checked,
   * category, sort_order, due_date, description, assigned_user_id, priority)
   * VALUES (?, ?, 0, ?, ?, ?, ?, ?, ?)`. Returns the new row's id (TD4's
   * re-select key). Named `insertItem`, not `create`/`insert` — both collide
   * with `TrekRepository`/`EntityRepository`'s own same-named methods (a
   * different signature: an unpersisted-entity builder, not an INSERT).
   */
  async insertItem(row: {
    trip_id: number | string; name: string; category: string | null; sort_order: number;
    due_date: string | null; description: string | null; assigned_user_id: number | null; priority: number;
  }): Promise<number> {
    const result = await this.kysely<TodoItemsInsertKyselyDB>()
      .insertInto('todo_items')
      .values({ ...row, checked: 0 })
      .executeTakeFirstOrThrow();
    return Number(result.insertId);
  }

  /** TD4/TD7 (`createItem`/`updateItem`'s post-write re-select) — `SELECT * FROM todo_items WHERE id = ?` (no trip filter — the caller already knows `id` is in-scope, having just written it). */
  async findById(id: number | string): Promise<TodoItemRow | undefined> {
    return await this.kysely<TodoItemsKyselyDB>().selectFrom('todo_items').selectAll().where('id', '=', id as number).executeTakeFirst();
  }

  /** TD5 (`updateItem`'s trip-scoping guard) — `SELECT * FROM todo_items WHERE id = ? AND trip_id = ?`. */
  async findInTrip(id: number | string, trip_id: number | string): Promise<TodoItemRow | undefined> {
    return await this.kysely<TodoItemsKyselyDB>().selectFrom('todo_items').selectAll().where('id', '=', id as number).where('trip_id', '=', trip_id as number).executeTakeFirst();
  }

  /** TD8 (`deleteItem`'s trip-scoping guard) — `SELECT id FROM todo_items WHERE id = ? AND trip_id = ?`. */
  async existsInTrip(id: number | string, trip_id: number | string): Promise<{ id: number } | undefined> {
    return await this.kysely<TodoItemsKyselyDB>().selectFrom('todo_items').select('id').where('id', '=', id as number).where('trip_id', '=', trip_id as number).executeTakeFirst();
  }

  /**
   * TD6 (`updateItem`) — the 7-column presence-sentinel `UPDATE` (R11's
   * helper — {@link presenceSet}, copying Task 2's `BudgetItemsRepository
   * .update` shape). `name`/`category` keep the legacy `COALESCE(?, col)`
   * truthy-wins semantics (the caller passes `present = !!value`, matching
   * `data.name || null` / `data.category || null`'s fall-through-on-falsy
   * exactly); every other column is a true presence sentinel bound off the
   * legacy `bodyKeys` array (`present = bodyKeys.includes('<col>')`).
   */
  async update(id: number | string, write: {
    name?: readonly [present: boolean, value: string];
    checked?: readonly [present: boolean, value: number];
    category?: readonly [present: boolean, value: string | null];
    due_date?: readonly [present: boolean, value: string | null];
    description?: readonly [present: boolean, value: string | null];
    assigned_user_id?: readonly [present: boolean, value: number | null];
    priority?: readonly [present: boolean, value: number];
  }): Promise<void> {
    const data = presenceSet<{
      name: string; checked: number; category: string | null; due_date: string | null;
      description: string | null; assigned_user_id: number | null; priority: number;
    }>(write);
    if (Object.keys(data).length === 0) return;
    await this.kysely<TodoItemsKyselyDB>().updateTable('todo_items').set(data).where('id', '=', id as number).execute();
  }

  /** TD9 (`deleteItem`) — `DELETE FROM todo_items WHERE id = ?` (no trip scoping in the statement itself — relies on the caller's prior {@link existsInTrip} gate, matching legacy). */
  async deleteById(id: number | string): Promise<void> {
    await this.kysely<TodoItemsKyselyDB>().deleteFrom('todo_items').where('id', '=', id as number).execute();
  }

  /** TD10 (`reorderItems`, looped) — `UPDATE todo_items SET sort_order = ? WHERE id = ? AND trip_id = ?`. */
  async setSortOrder(id: number | string, trip_id: number | string, sort_order: number): Promise<void> {
    await this.kysely<TodoItemsKyselyDB>().updateTable('todo_items').set({ sort_order }).where('id', '=', id as number).where('trip_id', '=', trip_id as number).execute();
  }

  /** TP72 (`TripsService.copy`) — `SELECT * FROM todo_items WHERE trip_id = ?`. */
  async listAllForTrip(trip_id: number | string): Promise<TodoItemRow[]> {
    return await this.kysely<TodoItemsKyselyDB>().selectFrom('todo_items').selectAll().where('trip_id', '=', trip_id as number).execute();
  }

  /**
   * TP73 (`TripsService.copy`) — `INSERT INTO todo_items (trip_id, name,
   * checked, category, sort_order, due_date, description, assigned_user_id,
   * priority) VALUES (?, ?, 0, ?, ?, ?, ?, NULL, ?)`. `assigned_user_id` is
   * hard-coded `NULL` here, never taken from the caller — the copy
   * deliberately does not carry the old assignee across, since the new trip
   * has no roster yet (`TripsService.copy`'s own comment, kept exactly).
   */
  async insertCopy(row: {
    trip_id: number | string; name: string; category: string | null; sort_order: number | null;
    due_date: string | null; description: string | null; priority: number | null;
  }): Promise<number> {
    const result = await this.kysely<TodoItemsCopyInsertKyselyDB>()
      .insertInto('todo_items')
      .values({ ...row, checked: 0, assigned_user_id: null })
      .executeTakeFirstOrThrow();
    return Number(result.insertId);
  }
}
