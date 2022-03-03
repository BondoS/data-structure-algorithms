import { test } from '../test.mjs';
import { quickSort } from './quickSort.mjs';

export const testQuickSort = () => {
  test('QuickSort', () => {
    return (
      JSON.stringify(quickSort([7, 5, 2, 1, 10, 4, 3, 1, 23])) ===
      '[1,1,2,3,4,5,7,10,23]'
    );
  });
};
