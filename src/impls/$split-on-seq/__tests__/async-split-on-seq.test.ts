/**
 * @generated-from ./$split-on-seq.test.ts
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { asyncSplitOnSeq, asyncToArray } from 'iter-tools-es';
import { asyncWrap, asyncUnwrapDeep } from '../../../test/async-helpers.js';

describe('asyncSplitOnSeq', () => {
  describe('when source is empty', () => {
    it('yields no parts', async () => {
      expect(await asyncToArray(asyncSplitOnSeq(asyncWrap([]), null))).toEqual([]);
      expect(await asyncToArray(asyncSplitOnSeq(asyncWrap([]), undefined))).toEqual([]);
      expect(await asyncToArray(asyncSplitOnSeq(asyncWrap([]), asyncWrap([])))).toEqual([]);
    });
  });

  describe('when sequence is empty', () => {
    it('yields a single part with values from source', async () => {
      expect(await asyncUnwrapDeep(asyncSplitOnSeq(null, asyncWrap([1, 2, 3])))).toEqual([
        [1, 2, 3],
      ]);
      expect(await asyncUnwrapDeep(asyncSplitOnSeq(undefined, asyncWrap([1, 2, 3])))).toEqual([
        [1, 2, 3],
      ]);
      expect(await asyncUnwrapDeep(asyncSplitOnSeq(asyncWrap([]), asyncWrap([1, 2, 3])))).toEqual([
        [1, 2, 3],
      ]);
    });
  });

  describe('when sequence is not present in source', () => {
    it('yields a single part containing the values from source', async () => {
      expect(
        await asyncUnwrapDeep(asyncSplitOnSeq(asyncWrap([undefined]), asyncWrap([1, 2, 3]))),
      ).toEqual([[1, 2, 3]]);
    });
  });

  describe('when sequence is equal to source', () => {
    it('yields two empty parts', async () => {
      expect(await asyncUnwrapDeep(asyncSplitOnSeq(asyncWrap([0, 0]), asyncWrap([0, 0])))).toEqual([
        [],
        [],
      ]);
    });
  });

  describe('when sequence overlaps with itself in source', () => {
    it('only a single split is created', async () => {
      expect(
        await asyncUnwrapDeep(asyncSplitOnSeq(asyncWrap([0, 0]), asyncWrap([1, 0, 0, 0, 2]))),
      ).toEqual([[1], [0, 2]]);
    });
  });

  describe('when sequence is present s times in source', () => {
    it('yields s+1 parts', async () => {
      expect(
        await asyncUnwrapDeep(asyncSplitOnSeq([1, -1], asyncWrap([1, 1, -1, 2, 1, -1, 3]))),
      ).toEqual([[1], [2], [3]]);
    });
  });

  describe('when same function is specified', () => {
    const same = (a: number, b: number) => Math.abs(a) === Math.abs(b);
    it('uses same value to do comparison', async () => {
      expect(
        await asyncUnwrapDeep(asyncSplitOnSeq(same, asyncWrap([2]), asyncWrap([1, 2, 3]))),
      ).toEqual([[1], [3]]);
      expect(
        await asyncUnwrapDeep(asyncSplitOnSeq(() => false, asyncWrap([2]), asyncWrap([1, 2, 3]))),
      ).toEqual([[1, 2, 3]]);
    });
  });
});