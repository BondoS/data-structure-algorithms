import { Stack } from './stack.mjs';
import { test } from './test.mjs';

export const testStack = () => {
  // Stack
  let books = new Stack();
  books.push('Book 1');
  books.push('Book 2');
  books.push('Book 3');
  test('Stack top item is Book 3', () => books.peek() === 'Book 3');
  books.pop();
  test('One item removed from Stack, now top item is Book 2', () =>
    books.peek() === 'Book 2');
  test('Stack length is 2', () => books.length === 2);
};
