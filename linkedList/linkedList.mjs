class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  isEmpty() {
    return this.length === 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  pop() {
    // Empty list, return null
    if (this.isEmpty()) {
      return null;
    } else if (this.length === 1) {
      // Only one node in the list
      const removedNode = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return removedNode;
    } else {
      // Multiple nodes in list
      // Save a pointer to the head
      let currentNode = this.head;
      // Loop until we reach Node before the tail
      while (currentNode.next !== this.tail) {
        currentNode = currentNode.next;
      }
      const nodeToRemove = currentNode.next;
      currentNode.next = null;
      this.tail = currentNode;
      this.length--;
      return nodeToRemove;
    }
  }

  get(index) {
    if (index < 0 || index > this.length || this.isEmpty()) {
      return null;
    }
    if (index === 0) {
      return this.head;
    }
    if (index === this.length - 1) {
      return this.tail;
    }
    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  delete(index) {
    if (index < 0 || index > this.length || this.isEmpty()) {
      return null;
    } else if (index === 0) {
      // Delete the head condition
      const nodeToRemove = this.head;
      if (this.length > 1) {
        // There is more than one item in list, then just move the head forward
        this.head = this.head.next;
      } else {
        // There is only one item in list, then remove head and tail
        this.head = null;
        this.tail = null;
      }
      this.length--;
      return nodeToRemove;
    } else {
      // Get pointers to the item needed to be deleted and the item before it.
      let currentNode = this.head;
      let previousNode;
      for (let i = 0; i < index; i++) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      const nodeToDelete = currentNode;
      previousNode.next = currentNode.next;
      /* 
       Check if we are deleting the tail,
       then set the tail to item before the one we are deleting 
       */
      if (currentNode.next === null) {
        this.tail = previousNode;
      }
      this.length--;
      return nodeToDelete;
    }
  }

  traverse() {
    let result = [];
    let currentNode = this.head;
    while (currentNode) {
      result.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return result.join(' => ');
  }

  reverse() {
    // Switch head and tail locations
    var currentNode = this.head;
    this.head = this.tail;
    this.tail = currentNode;
    // Previous node to the current head is null, then prevNode should be initiated with null.
    let prevNode = null;
    // Loop until currentNode === null
    while (currentNode) {
      // CurrentNode.next should be looking to previous node instead of next node,
      // but before we override it, we need to save it for the next loop iteration.
      const next = currentNode.next;
      // Now currentNode.next is point to the previous item, it is now > "REVERSED" <.
      currentNode.next = prevNode;
      // We'll need save prevNode for the next iteration.
      prevNode = currentNode;
      // Move currentNode pointer to the next node in line for the next iteration.
      currentNode = next;
    }
    // Return this to enable chaining
    return this;
  }
}
