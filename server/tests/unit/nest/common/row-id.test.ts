import { describe, it, expect } from 'vitest';

import { toRowId } from '../../../../src/nest/common/row-id';

describe('toRowId', () => {
  it('ROWID-001: rejects a non-numeric string', () => {
    expect(toRowId('abc')).toBeNull();
  });

  it('ROWID-002: rejects a hex-shaped string — Number() would accept it, SQLite affinity never would', () => {
    expect(toRowId('0x10')).toBeNull();
  });

  it('ROWID-003: rejects an exponent-shaped string — Number() would accept it, SQLite affinity never would', () => {
    expect(toRowId('1e3')).toBeNull();
  });

  it('ROWID-004: rejects a negative sign', () => {
    expect(toRowId('-1')).toBeNull();
  });

  it('ROWID-005: rejects a leading space', () => {
    expect(toRowId(' 1')).toBeNull();
  });

  it('ROWID-006: rejects a decimal point', () => {
    expect(toRowId('1.0')).toBeNull();
  });

  it('ROWID-007: rejects an empty string', () => {
    expect(toRowId('')).toBeNull();
  });

  it('ROWID-008: rejects undefined', () => {
    expect(toRowId(undefined)).toBeNull();
  });

  it('ROWID-009: accepts a plain digit string', () => {
    expect(toRowId('42')).toBe(42);
  });

  it('ROWID-010: accepts an already-numeric safe integer', () => {
    expect(toRowId(42)).toBe(42);
  });

  it('ROWID-011: rejects a number one past MAX_SAFE_INTEGER (2**53)', () => {
    expect(toRowId(2 ** 53)).toBeNull();
  });
});
