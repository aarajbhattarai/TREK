/**
 * trek/no-promise-as-value — the blind spot the compiler cannot see.
 *
 * Phase 1 of the ORM migration turns hundreds of DB-touching methods `async`.
 * TypeScript catches a missed `await` only when the promise is used in a way it
 * can type-check: `promise.foo` (TS2339), a floating statement
 * (no-floating-promises), a condition (no-misused-promises). It catches NOTHING
 * when the promise is used as a plain value, because this project compiles with
 * `strict: false` / `noImplicitAny: false`:
 *
 *     settings['metric']            // element access on a promise -> `any`
 *     if (svc.get(id) === 'x')      // always false, no error
 *     `${svc.count(id)}`            // "[object Promise]"
 *     Object.keys(svc.all())        // []
 *     JSON.stringify(svc.row(id))   // "{}"
 *     for (const r of svc.rows())   // not iterable, at runtime only
 *
 * This rule reports those shapes. It is DELIBERATELY CONSERVATIVE and has no
 * fixer: it fires only when the resolved type is the global `Promise`/
 * `PromiseLike` itself (never a merely-thenable library type such as MikroORM's
 * QueryBuilder or supertest's Test, both of which are chained on purpose), only
 * when every non-nullish member of a union is one, and never inside
 * `Promise.all`/`allSettled`/`race`/`any`, on `.then`/`.catch`/`.finally`, on
 * `expect(p).resolves`/`.rejects`, or in an existence/identity check
 * (`p === undefined`, `p === null`, `p ?? q`, `a === b` between two promises) —
 * see isExistenceOrIdentityCheck below. A finding is a bug: add the `await`.
 */
import ts from 'typescript';

const NULLISH_FLAGS = ts.TypeFlags.Null | ts.TypeFlags.Undefined | ts.TypeFlags.Void;
const PASSTHROUGH_PROPS = new Set(['then', 'catch', 'finally', 'resolves', 'rejects']);
const COMBINATORS = new Set(['all', 'allSettled', 'race', 'any']);
const EQUALITY_OPERATORS = new Set(['==', '!=', '===', '!==']);
// Callbacks whose result is consumed as a value, where a promise is always a bug
// (every promise is truthy, so the predicate degenerates). `.map`/`.reduce` are
// excluded on purpose: returning promises there feeds Promise.all legitimately.
const PREDICATE_METHODS = new Set([
  'filter',
  'find',
  'findLast',
  'findIndex',
  'findLastIndex',
  'some',
  'every',
  'sort',
]);
const OBJECT_CONSUMERS = new Set(['keys', 'values', 'entries', 'assign', 'fromEntries']);

/** `String(p)` / `Number(p)` / `Object.keys(p)` / `JSON.stringify(p)` / `Array.isArray(p)`. */
function isValueConsumerCall(callee) {
  if (callee.type === 'Identifier') return callee.name === 'String' || callee.name === 'Number';
  if (callee.type !== 'MemberExpression' || callee.computed) return false;
  const { object, property } = callee;
  if (object.type !== 'Identifier' || property.type !== 'Identifier') return false;
  if (object.name === 'Object') return OBJECT_CONSUMERS.has(property.name);
  if (object.name === 'JSON') return property.name === 'stringify';
  if (object.name === 'Array') return property.name === 'isArray';
  return false;
}

function isCombinatorCall(node) {
  const callee = node.callee;
  return (
    callee.type === 'MemberExpression' &&
    !callee.computed &&
    callee.object.type === 'Identifier' &&
    callee.object.name === 'Promise' &&
    callee.property.type === 'Identifier' &&
    COMBINATORS.has(callee.property.name)
  );
}

/** Inside `Promise.all([...])` a promise IS the value; stop at the function boundary. */
function isInsideCombinator(node) {
  for (let cur = node.parent; cur; cur = cur.parent) {
    if (cur.type === 'CallExpression' && isCombinatorCall(cur)) return true;
    if (cur.type.includes('Function')) return false;
  }
  return false;
}

function isNullLiteral(node) {
  return (node.type === 'Literal' && node.value === null) || (node.type === 'Identifier' && node.name === 'undefined');
}

export default {
  meta: {
    type: 'problem',
    docs: {
      description:
        'Disallow using a Promise as a plain value (element access, comparison, interpolation, spread, iteration) — the missing-await shapes the compiler cannot see with strict mode off.',
    },
    schema: [],
    messages: {
      promiseAsValue: 'Promise used as a value (missing await?): {{ text }}',
    },
  },

  create(context) {
    const services = context.sourceCode.parserServices;
    if (!services?.program || !services.esTreeNodeToTSNodeMap) return {};
    const checker = services.program.getTypeChecker();
    const reported = new WeakSet();

    const isNullish = (type) => (type.flags & NULLISH_FLAGS) !== 0;

    function isPromiseType(type, tsNode) {
      if (!type) return false;
      if (type.isUnion()) {
        const parts = type.types.filter((t) => !isNullish(t));
        return parts.length > 0 && parts.every((t) => isPromiseType(t, tsNode));
      }
      const symbol = type.getSymbol() ?? type.aliasSymbol;
      const name = symbol?.getName();
      if (name !== 'Promise' && name !== 'PromiseLike') return false;
      const then = type.getProperty('then');
      if (!then) return false;
      return checker.getTypeOfSymbolAtLocation(then, tsNode).getCallSignatures().length > 0;
    }

    function typeOf(node) {
      if (!node || node.type === 'AwaitExpression' || node.type === 'PrivateIdentifier') return null;
      const tsNode = services.esTreeNodeToTSNodeMap.get(node);
      return tsNode ? { type: checker.getTypeAtLocation(tsNode), tsNode } : null;
    }

    function isPromise(node) {
      const resolved = typeOf(node);
      return !!resolved && isPromiseType(resolved.type, resolved.tsNode);
    }

    function report(node) {
      if (!node || reported.has(node) || isInsideCombinator(node)) return;
      reported.add(node);
      const raw = context.sourceCode.getText(node).replace(/\s+/g, ' ');
      const text = raw.length > 60 ? `${raw.slice(0, 57)}...` : raw;
      context.report({ node, messageId: 'promiseAsValue', data: { text } });
    }

    function check(node) {
      if (isPromise(node)) report(node);
    }

    /**
     * `p === undefined` / `p === null` is how this codebase asks whether an
     * in-flight promise is already parked in a map — a truthiness test there is
     * what no-misused-promises rejects, so the explicit comparison IS the
     * correct idiom (weather, collab, maps, exchange-rates, idempotency, the
     * plugin drain, atlas). `chains.get(userId) === next` likewise asks whether
     * the promise it stored is still the current one. Neither can be told apart
     * from a missing await by type alone — with strictNullChecks off `Map.get()`
     * is not even typed as nullable — so equality against nullish, and equality
     * between two promises, are both exempt. `p === 'x'` still reports.
     */
    function isExistenceOrIdentityCheck(node) {
      if (isNullLiteral(node.left) || isNullLiteral(node.right)) return true;
      return isPromise(node.left) && isPromise(node.right);
    }

    return {
      MemberExpression(node) {
        const key =
          node.property.type === 'Identifier' && !node.computed
            ? node.property.name
            : node.property.type === 'Literal'
              ? node.property.value
              : undefined;
        if (typeof key === 'string' && PASSTHROUGH_PROPS.has(key)) return;
        check(node.object);
      },

      BinaryExpression(node) {
        // `p instanceof Promise` is the legitimate way to ask.
        if (node.operator === 'instanceof') return;
        if (EQUALITY_OPERATORS.has(node.operator) && isExistenceOrIdentityCheck(node)) return;
        check(node.left);
        check(node.right);
      },

      LogicalExpression(node) {
        // `p ?? x` is the same existence check as `p === undefined`, and with
        // strictNullChecks off the type cannot say whether it is a real one.
        if (node.operator === '??') return;
        // Only the left operand of `&&`/`||`: it is the one evaluated as a test,
        // where a promise is unconditionally truthy. The right operand IS the
        // expression's value and gets caught at whatever consumes it.
        check(node.left);
      },

      TemplateLiteral(node) {
        node.expressions.forEach(check);
      },

      SpreadElement(node) {
        check(node.argument);
      },

      UnaryExpression(node) {
        if (node.operator === 'typeof') check(node.argument);
      },

      ForOfStatement(node) {
        if (!node.await) check(node.right);
      },

      ForInStatement(node) {
        check(node.right);
      },

      CallExpression(node) {
        if (isValueConsumerCall(node.callee)) {
          node.arguments.forEach((arg) => {
            if (arg.type !== 'SpreadElement') check(arg);
          });
          return;
        }
        const callee = node.callee;
        if (
          callee.type !== 'MemberExpression' ||
          callee.computed ||
          callee.property.type !== 'Identifier' ||
          !PREDICATE_METHODS.has(callee.property.name)
        ) {
          return;
        }
        for (const arg of node.arguments) {
          if (arg.type !== 'ArrowFunctionExpression' && arg.type !== 'FunctionExpression') continue;
          const resolved = typeOf(arg);
          if (!resolved) continue;
          const signatures = resolved.type.getCallSignatures();
          if (
            signatures.length > 0 &&
            signatures.every((sig) => isPromiseType(checker.getReturnTypeOfSignature(sig), resolved.tsNode))
          ) {
            report(arg.body.type === 'BlockStatement' ? arg : arg.body);
          }
        }
      },
    };
  },
};
