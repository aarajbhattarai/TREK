import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@mikro-orm/nestjs';
import type { Tag } from '@trek/shared';
import { Tags } from '../../db/entities/Tags.entity';
import type { TagsRepository } from '../../db/repositories/Tags.repository';

/**
 * Tags domain service — owns the tag business rules (moved off
 * `DatabaseService`/raw SQL onto `TagsRepository`, Plan 3a Task 3): the
 * `#10b981` default and the COALESCE-via-`assign` update semantics stay
 * here, exactly as they did over raw SQL, while the SQL itself lives in the
 * repository. All consumers are in-container — the plugin RPC surface
 * injects this class into TagsRpc.
 */
@Injectable()
export class TagsService {
  constructor(@InjectRepository(Tags) private readonly tags: TagsRepository) {}

  // `TagRow`'s `color`/`created_at` are nullable (the DB columns carry no NOT
  // NULL constraint); the `@trek/shared` `Tag` contract narrows them to
  // non-nullable/optional. The legacy code trusted the same gap unchecked
  // (`this.db.all<Tag>(...)`'s generic parameter is not a runtime check
  // either) — these casts keep that same trust boundary at the service layer
  // instead of inside a raw-SQL call.
  async list(userId: number): Promise<Tag[]> {
    return (await this.tags.listByUser(userId)) as unknown as Tag[];
  }

  async getByIdAndUser(id: string | number, userId: number): Promise<Tag | undefined> {
    const tag = await this.tags.findByIdAndUser(Number(id), userId);
    return (tag as unknown as Tag | null) ?? undefined;
  }

  async create(userId: number, name: string, color?: string): Promise<Tag> {
    const tag = await this.tags.createTag({
      user_id: userId,
      name,
      color: color || '#10b981',
    });
    return tag as unknown as Tag;
  }

  async update(id: string | number, name?: string, color?: string): Promise<Tag> {
    // `|| null` fed a `COALESCE(?, col)` bind parameter in the legacy
    // statement, so any falsy value (undefined or an empty string) meant
    // "keep the existing column" — reproduced here by omitting the key from
    // `changes` entirely, which is what `TagsRepository.patch`'s `assign`
    // needs to leave that column untouched.
    const changes: { name?: string; color?: string } = {};
    if (name) changes.name = name;
    if (color) changes.color = color;
    return (await this.tags.patch(Number(id), changes)) as unknown as Tag;
  }

  async remove(id: string | number): Promise<void> {
    await this.tags.remove(Number(id));
  }
}
