import { test } from '../test.mjs';
import { insertionSort } from './insertionSort.mjs';

export const testInsertionSort = () => {
  test('InsertionSort', () => {
    return (
      JSON.stringify(insertionSort([7, 5, 2, 1, 10, 4, 3, 1, 23])) ===
      '[1,1,2,3,4,5,7,10,23]'
    );
  });
};
