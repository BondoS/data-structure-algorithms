import { Queue } from './queue.mjs';
import { test } from '../test.mjs';

export const testQueue = () => {
  const orders = new Queue();
  orders.enqueue('Order 1');
  orders.enqueue('Order 2');
  orders.enqueue('Order 3');
  orders.enqueue('Order 4');
  test('Queue length is 4', () => orders.length === 4);
  test('Queue, next order is Order 1', () => orders.peek() === 'Order 1');
  orders.dequeue();
  test('Queue, next order is Order 2', () => orders.peek() === 'Order 2');
  orders.dequeue();
  orders.dequeue();
  orders.dequeue();
  test('Orders Queue is empty', () => orders.length === 0);
};
