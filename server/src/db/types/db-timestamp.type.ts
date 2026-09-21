import { Type, type EntityProperty, type Platform, type TransformContext } from '@mikro-orm/core';

/** The text every DATETIME column holds and every API response emits. */
export const DB_TIMESTAMP_RE = /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/;

/**
 * `CURRENT_TIMESTAMP` as SQLite renders it, produced in JS so it is the same on
 * every dialect: UTC, seconds precision, a space between date and time.
 */
export function dbNow(now: Date = new Date()): string {
  return now.toISOString().slice(0, 19).replace('T', ' ');
}

type TimestampValue = string | null | undefined;

/**
 * A DATETIME column whose JS value is the stored text, not a `Date`.
 *
 * The stock `DateTimeType` maps to `Date`, and on SQLite the platform then
 * writes `+date` — an integer of milliseconds — next to the `'YYYY-MM-DD
 * HH:MM:SS'` text the schema's `DEFAULT CURRENT_TIMESTAMP` produces and every
 * consumer (the client, `ORDER BY created_at`, `date(created_at)`) expects.
 * This type keeps the wire format the app has always had and stays dialect
 * neutral: a driver that returns a `Date` (Postgres) is formatted to the same
 * text on the way in, and text is written as text on the way out.
 */
export class DbTimestampType extends Type<TimestampValue, TimestampValue> {
  override convertToDatabaseValue(value: TimestampValue, platform: Platform, context?: TransformContext): TimestampValue {
    if (value == null) {
      return value;
    }
    // At runtime, the ORM may pass a Date; handle it
    if ((value as unknown) instanceof Date) {
      return dbNow(value as unknown as Date);
    }
    if (typeof value === 'string') {
      return value;
    }
    // Default: convert to string
    return String(value);
  }

  override convertToJSValue(value: TimestampValue, platform: Platform, context?: TransformContext): TimestampValue {
    if (value == null) {
      return value;
    }
    // At runtime, database drivers may return a Date; handle it
    if ((value as unknown) instanceof Date) {
      return dbNow(value as unknown as Date);
    }
    // Handle millisecond integers (legacy format)
    if (typeof value === 'number' || (value as unknown) instanceof Number) {
      const numValue = typeof value === 'number' ? value : (value as unknown as number);
      return dbNow(new Date(numValue));
    }
    if (typeof value === 'string') {
      return value;
    }
    // Default: convert to string
    return String(value);
  }

  override getColumnType(prop: EntityProperty, platform: Platform): string {
    return platform.getDateTimeTypeDeclarationSQL({ length: prop.length });
  }

  override compareAsType(): string {
    return 'string';
  }

  override get runtimeType(): string {
    return 'string';
  }
}
