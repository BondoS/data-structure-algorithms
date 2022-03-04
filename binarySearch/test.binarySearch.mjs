import { test } from '../test.mjs';
import { binarySearch } from './binarySearch.mjs';

export const testBinarySearch = () => {
  test('BinarySearch, search for item inside an array', () => {
    return binarySearch([1, 3, 6, 8, 24, 15, 2], 8) === true;
  });
  test('BinarySearch, search for item NOT inside an array', () => {
    return binarySearch([1, 3, 6, 24, 15, 2], 8) === false;
  });
};
