/**
 * @generated-from ./$split.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { asyncMap } from '../$map/async-map.js';

function* iterableOf(value) {
  yield value;
}

export function asyncSplit(source) {
  return asyncMap(source, (value) => iterableOf(value));
}

export default asyncSplit;