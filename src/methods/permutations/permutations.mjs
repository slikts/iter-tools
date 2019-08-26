import { iterableCurry } from '../../internal/iterable';
import { permutationsSize } from '../../internal/math';
import map from '../$map/map';
import range from '../range/range';
import product from '../product/product';

function permutations(r, iterable) {
  const arr = Array.from(iterable);
  const len = arr.length;
  r = r === undefined ? len : r;
  return {
    *[Symbol.iterator]() {
      if (r > len) return;
      const mapToIndex = map(i => arr[i]);
      for (const indices of product(...map(() => range(len), range(r)))) {
        if (new Set(indices).size === r) {
          yield Array.from(mapToIndex(indices));
        }
      }
    },
    getSize() {
      return permutationsSize(len, r);
    },
  };
}

export default iterableCurry(permutations, {
  reduces: true,
  minArgs: 0,
  maxArgs: 1,
});