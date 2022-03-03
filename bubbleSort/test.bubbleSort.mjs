import { test } from '../test.mjs';
import { bubbleSort } from './bubbleSort.mjs';

export const testBubbleSort = () => {
  test('BubbleSort', () => {
    return (
      JSON.stringify(bubbleSort([5, 7, 4, 3, 8, 2, 9, 1])) ===
      '[1,2,3,4,5,7,8,9]'
    );
  });
};
