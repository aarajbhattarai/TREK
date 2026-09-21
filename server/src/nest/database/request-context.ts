import { RequestContext, type MikroORM } from '@mikro-orm/core';

/**
 * A request-scoped EntityManager for work that no HTTP request wraps.
 *
 * `@mikro-orm/nestjs` forks an EntityManager per HTTP request through its
 * middleware; everything else — an MCP tool call, a plugin RPC dispatch, a
 * WebSocket message, a cron job, the boot-time seeders, a backup restore — has
 * no such wrapper, and with `allowGlobalContext` left at its safe default the
 * ORM refuses to run a query there. This is the one helper those entrypoints
 * call. It is deliberately a function and not a decorator so a call site can
 * pass the ORM it was given rather than reach for a global.
 */
export function withRequestContext<T>(orm: MikroORM, fn: () => T): T {
  return RequestContext.create(orm.em, fn);
}
