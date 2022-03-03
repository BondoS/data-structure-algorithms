import { test } from '../test.mjs';
import { mergeSort } from './mergeSort.mjs';

export const testMergeSortTest = () => {
  test('MergeSort', () => {
    return (
      JSON.stringify(mergeSort([7, 5, 2, 1, 10, 4, 3, 1, 23])) ===
      '[1,1,2,3,4,5,7,10,23]'
    );
  });
};
