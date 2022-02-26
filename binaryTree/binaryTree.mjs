class Node {
  constructor(value) {
    this.value = value;
    this.leftChild = null;
    this.rightChild = null;
  }
}

export default class BinaryTree {
  constructor() {
    this.root = null;
  }

  addChild(value) {
    if (this.root === null) {
      this.root = new Node(value);
      return;
    } else {
      let currentNode = this.root;
      let added = false;
      while (!added && currentNode) {
        // No duplicates
        if (value === currentNode.value) {
          return 'Cannot be added, same node already exists';
        }
        if (value < currentNode.value) {
          // if the spot is free, add it
          if (currentNode.leftChild === null) {
            currentNode.leftChild = new Node(value);
            added = true;
          } else {
            // otherwise find the next free spot
            currentNode = currentNode.leftChild;
          }
        } else if (value > currentNode.value) {
          if (currentNode.rightChild === null) {
            currentNode.rightChild = new Node(value);
            added = true;
          } else {
            currentNode = currentNode.rightChild;
          }
        }
      }
    }
  }

  removeChild(value) {
    let currentNode = this.root;
    let found = false;
    let nodeToRemove;
    let parentNode = null;

    while (!found) {
      if (currentNode === null || currentNode.value === null) {
        return 'Node not found';
      }
      if (value === currentNode.value) {
        nodeToRemove = currentNode;
        found = true;
      } else if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.leftChild;
      } else {
        parentNode = currentNode;
        currentNode = currentNode.rightChild;
      }
    }

    const removeParentLeftChild = parentNode.leftChild === nodeToRemove;

    // If the Node is a leaf node.
    if (nodeToRemove.leftChild === null && nodeToRemove.rightChild === null) {
      if (removeParentLeftChild) {
        parentNode.leftChild = null;
      } else {
        parentNode.rightChild = null;
      }
    } else if (
      nodeToRemove.leftChild !== null &&
      nodeToRemove.rightChild === null
    ) {
      // if the node has only left child
      if (removeParentLeftChild) {
        parentNode.leftChild = nodeToRemove.leftChild;
      } else {
        parentNode.rightChild = nodeToRemove.leftChild;
      }
    } else if (
      nodeToRemove.rightChild !== null &&
      nodeToRemove.leftChild === null
    ) {
      // if the node has only right child
      if (removeParentLeftChild) {
        parentNode.leftChild = nodeToRemove.rightChild;
      } else {
        parentNode.rightChild = nodeToRemove.rightChild;
      }
    } else {
      // Node has two children
      const rightSubTree = nodeToRemove.rightChild;
      const leftSubTree = nodeToRemove.leftChild;
      // Set parent node's respective child to the right sub tree
      if (removeParentLeftChild) {
        parentNode.leftChild = rightSubTree;
      } else {
        parentNode.rightChild = rightSubTree;
      }
      // Find the lowest free space on the left side of the
      // right sub tree and add the leftSubTree
      let currLeftNode = rightSubTree;
      let currLeftParent;
      let foundSpace = false;
      while (!foundSpace) {
        if (currLeftNode === null) {
          foundSpace = true;
        } else {
          currLeftParent = currLeftNode;
          currLeftNode = currLeftNode.leftChild;
        }
      }
      currLeftParent.leftChild = leftSubTree;
    }
  }
}
