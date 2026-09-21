import { Injectable } from '@nestjs/common';
import type { Tag } from '@trek/shared';
import { DatabaseService } from '../database/database.service';

/**
 * Tags domain service — owns the tag SQL (moved 1:1 from the legacy
 * services/tagService.ts: identical statements, the #10b981 default and the
 * COALESCE update semantics). All consumers are in-container now — the plugin
 * RPC surface injects this class into TagsRpc.
 */
@Injectable()
export class TagsService {
  constructor(private readonly db: DatabaseService) {}

  async list(userId: number): Promise<Tag[]> {
    return this.db.all<Tag>('SELECT * FROM tags WHERE user_id = ? ORDER BY name ASC', userId);
  }

  async getByIdAndUser(id: string | number, userId: number): Promise<Tag | undefined> {
    return this.db.get<Tag>('SELECT * FROM tags WHERE id = ? AND user_id = ?', id, userId);
  }

  async create(userId: number, name: string, color?: string): Promise<Tag> {
    const result = this.db.run(
      'INSERT INTO tags (user_id, name, color) VALUES (?, ?, ?)',
      userId,
      name,
      color || '#10b981',
    );
    return this.db.get<Tag>('SELECT * FROM tags WHERE id = ?', result.lastInsertRowid) as Tag;
  }

  async update(id: string | number, name?: string, color?: string): Promise<Tag> {
    this.db.run(
      'UPDATE tags SET name = COALESCE(?, name), color = COALESCE(?, color) WHERE id = ?',
      name || null,
      color || null,
      id,
    );
    return this.db.get<Tag>('SELECT * FROM tags WHERE id = ?', id) as Tag;
  }

  async remove(id: string | number): Promise<void> {
    this.db.run('DELETE FROM tags WHERE id = ?', id);
  }
}
