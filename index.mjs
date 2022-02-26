import { testBinaryTree } from './binaryTree/test.binaryTree.mjs';
import { testGraph } from './graph/test.graph.mjs';
import { testLinkedList } from './linkedList/test.linkedList.mjs';
import { testQueue } from './queue/test.queue.mjs';
import { testStack } from './stack/test.stack.mjs';

(function () {
  testStack();
  testQueue();
  testLinkedList();
  testGraph();
  testBinaryTree();
})();
