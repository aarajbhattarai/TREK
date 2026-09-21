import { EntitySchema } from '@mikro-orm/core';
import fs from 'node:fs';
import path from 'node:path';
import { describe, expect, it } from 'vitest';
import { ALL_ENTITIES } from '../../../src/db/entities';

const ENTITIES_DIR = path.join(__dirname, '../../../src/db/entities');

describe('ALL_ENTITIES', () => {
  it('ENT-001: lists exactly one schema per *.entity.ts file', () => {
    const files = fs.readdirSync(ENTITIES_DIR).filter((f) => f.endsWith('.entity.ts')).sort();
    const names = ALL_ENTITIES.map((s) => s.name).sort();
    const expected = files.map((f) => f.replace(/\.entity\.ts$/, '')).sort();
    expect(names).toEqual(expected);
  });

  it('ENT-002: every entry is an EntitySchema with a class', () => {
    for (const schema of ALL_ENTITIES) {
      expect(schema).toBeInstanceOf(EntitySchema);
      expect(typeof schema.meta.class).toBe('function');
    }
  });
});
