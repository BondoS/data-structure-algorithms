import { test } from '../test.mjs';
import BinaryTree from './binaryTree.mjs';

export const testBinaryTree = () => {
  const tree = new BinaryTree();

  test('BinaryTree, root node added successfully', () => {
    tree.addChild(7);
    return tree.root.value === 7;
  });

  test('BinaryTree, left child added successfully', () => {
    tree.addChild(5);
    return tree.root.leftChild.value === 5;
  });

  test('BinaryTree, right child added successfully', () => {
    tree.addChild(10);
    return tree.root.rightChild.value === 10;
  });

  test('BinaryTree, remove Node that is not in the tree', () => {
    const res = tree.removeChild(20);
    return res === 'Node not found';
  });

  test('BinaryTree, remove Node that is a leaf node', () => {
    tree.addChild(20);
    /*
           7
        5     10
                  20
    */
    const childAdded = tree.root.rightChild.rightChild.value === 20;
    tree.removeChild(20);
    const childRemoved = tree.root.rightChild.rightChild === null;
    return childAdded && childRemoved;
  });

  test('BinaryTree, remove Node that has only right sub tree', () => {
    tree.addChild(20);
    /*
           7
        5     10 <- remove this
                  20
    */
    tree.removeChild(10);
    /*
           7
        5     20
    */
    return tree.root.rightChild.value === 20;
  });

  test('BinaryTree, remove Node that has only left sub tree', () => {
    tree.addChild(9);
    /*
            7
        5        20  <- remove this
              8
    */
    tree.removeChild(20);
    /*
           7
        5     8
    */
    return tree.root.rightChild.value === 9;
  });

  test('BinaryTree, remove Node that has right and left sub trees', () => {
    tree.addChild(11);
    tree.addChild(8);
    tree.addChild(6);
    tree.addChild(4);
    /*
               7
         5           9  <- remove this
      4     6     8    11
    */
    const nodesAddedSuccessfully =
      JSON.stringify(tree.root) ===
      `{"value":7,"leftChild":{"value":5,"leftChild":{"value":4,"leftChild":null,"rightChild":null},"rightChild":{"value":6,"leftChild":null,"rightChild":null}},"rightChild":{"value":9,"leftChild":{"value":8,"leftChild":null,"rightChild":null},"rightChild":{"value":11,"leftChild":null,"rightChild":null}}}`;

    tree.removeChild(9);
    /*
               7
         5           11
      4     6     8    
    */
    const nodeRemovedSuccessfully =
      tree.root.rightChild.value === 11 &&
      tree.root.rightChild.leftChild.value === 8;

    return nodesAddedSuccessfully && nodeRemovedSuccessfully;
  });
};
