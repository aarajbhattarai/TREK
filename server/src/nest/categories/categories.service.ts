import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@mikro-orm/nestjs';
import type { Category } from '@trek/shared';
import { Categories } from '../../db/entities/Categories.entity';
import type { CategoriesRepository } from '../../db/repositories/Categories.repository';

/**
 * Categories domain service — owns the category business rules (moved off
 * `DatabaseService`/raw SQL onto `CategoriesRepository`, Plan 3a Task 3): the
 * `#6366f1`/`📍` defaults and the COALESCE-via-`assign` update semantics stay
 * here, exactly as they did over raw SQL, while the SQL itself lives in the
 * repository. All consumers are in-container — the plugin RPC surface
 * injects this class into CategoriesRpc.
 */
@Injectable()
export class CategoriesService {
  constructor(@InjectRepository(Categories) private readonly categories: CategoriesRepository) {}

  // `CategoryRow`'s `color`/`icon`/`created_at` are nullable (the DB columns
  // carry no NOT NULL constraint); the `@trek/shared` `Category` contract
  // narrows them to non-nullable/optional. The legacy code trusted the same
  // gap unchecked (`this.db.all<Category>(...)`'s generic parameter is not a
  // runtime check either) — these casts keep that same trust boundary at the
  // service layer instead of inside a raw-SQL call.
  async list(): Promise<Category[]> {
    return (await this.categories.list()) as unknown as Category[];
  }

  async getById(id: string | number): Promise<Category | undefined> {
    const category = await this.categories.findById(Number(id));
    return (category as unknown as Category | null) ?? undefined;
  }

  async create(userId: number, name: string, color?: string, icon?: string): Promise<Category> {
    const category = await this.categories.createCategory({
      name,
      color: color || '#6366f1',
      icon: icon || '📍',
      user_id: userId,
    });
    return category as unknown as Category;
  }

  async update(id: string | number, name?: string, color?: string, icon?: string): Promise<Category> {
    // `|| null` fed a `COALESCE(?, col)` bind parameter in the legacy
    // statement, so any falsy value (undefined or an empty string) meant
    // "keep the existing column" — reproduced here by omitting the key from
    // `changes` entirely, which is what `CategoriesRepository.patch`'s
    // `assign` needs to leave that column untouched.
    const changes: { name?: string; color?: string; icon?: string } = {};
    if (name) changes.name = name;
    if (color) changes.color = color;
    if (icon) changes.icon = icon;
    // `patch` returns `null` for a non-existent id (Task 3 review, Minor 2);
    // the legacy re-select returned `undefined` for the same case, and every
    // caller pre-checks with a 404 first, so `?? undefined` restores that
    // exact parity for the race-condition path the pre-check doesn't cover.
    return ((await this.categories.patch(Number(id), changes)) ?? undefined) as unknown as Category;
  }

  async remove(id: string | number): Promise<void> {
    await this.categories.remove(Number(id));
  }
}
