/**
 * @generated-from ./$take.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { asyncIterableCurry } from '../../internal/async-iterable.js';

export async function* __asyncTake(iterable, n) {
  if (n === 0) return;
  let i = 0;
  for await (const value of iterable) {
    yield value;
    if (++i === n) break;
  }
}

export const asyncTake = /*#__PURE__*/ asyncIterableCurry(__asyncTake);
