import { test } from '../test.mjs';
import { LinkedList } from './linkedList.mjs';

export const testLinkedList = () => {
  const list = new LinkedList();
  list.push('John');
  list.push('Doe');
  list.push('Lorem');
  list.push('Ipsum');
  test('SingleLinkedList, list length is 4', () => list.length === 4);
  test('SingleLinkedList, list tail value is Ipsum', () =>
    list.tail.value === 'Ipsum');
  list.pop();
  test('SingleLinkedList, remove last item of the list', () => {
    return list.tail.value === 'Lorem' && list.head.next.next.value === 'Lorem';
  });
  list.push('Potato');
  test('SingleLinkedList, get item on index 2', () =>
    list.get(2).value === 'Lorem');
  test('SingleLinkedList, get item on index 1', () =>
    list.get(1).value === 'Doe');
  test('SingleLinkedList, delete last item', () => {
    list.delete(3);
    return list.tail.value === 'Lorem' && list.length === 3;
  });
  test('SingleLinkedList, delete middle item', () => {
    list.delete(1);
    return list.tail.value === 'Lorem' && list.length === 2;
  });
  test('SingleLinkedList, delete head', () => {
    list.delete(0);
    return list.head.value === 'Lorem' && list.length === 1;
  });
};
