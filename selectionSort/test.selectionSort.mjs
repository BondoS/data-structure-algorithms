import { test } from '../test.mjs';
import { selectionSort } from './selectionSort.mjs';

export const testSelectionSort = () => {
  test('SelectionSort', () =>
    '[11,12,22,25,64]' === JSON.stringify(selectionSort([64, 25, 12, 22, 11])));
};
