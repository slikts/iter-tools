/**
 * @generated-from ./$starts-with-any.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { asyncIterableCurry } from '../../internal/async-iterable';
import { asyncStartsWith_ } from '../$starts-with_/async-starts-with_';
const config = {
  any: true,
  subseq: false,
};
export function asyncStartsWithAny(iterable, value) {
  return asyncStartsWith_(iterable, config, value);
}
export default asyncIterableCurry(asyncStartsWithAny, {
  reduces: true,
});
