import { testBinaryTree } from './binaryTree/test.binaryTree.mjs';
import { testBubbleSort } from './bubbleSort/test.bubbleSort.mjs';
import { testGraph } from './graph/test.graph.mjs';
import { testInsertionSort } from './insertionSort/test.insertionSort.mjs';
import { testLinkedList } from './linkedList/test.linkedList.mjs';
import { testMergeSortTest } from './mergeSort/test.mergeSort.mjs';
import { testQueue } from './queue/test.queue.mjs';
import { testQuickSort } from './quickSort/test.quickSort.mjs';
import { testStack } from './stack/test.stack.mjs';

(function () {
  testStack();
  testQueue();
  testLinkedList();
  testGraph();
  testBinaryTree();
  testBubbleSort();
  testMergeSortTest();
  testQuickSort();
  testInsertionSort();
})();
