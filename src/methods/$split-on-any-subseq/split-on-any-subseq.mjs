/**
 * @generated-from ./$split-on-any-subseq.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { iterableCurry } from '../../internal/iterable';
import internalSplitOn from '../$split-on_/split-on';
const config = {
  any: true,
  subseq: true,
};

function splitOnAnySubseq(iterable, subseqs) {
  return internalSplitOn(iterable, config, subseqs);
}

export default iterableCurry(splitOnAnySubseq);