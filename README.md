### Implementation of most famous Data Structures and Algorithms using JavaScript

## Data structures

1. Stacks <br />
   A stack is a LIFO “last-in-first-out” data structure which means that the newest element (the element which was added last) in the stack will be the first one removed.

2. Queues <br />
   Queues are very similar to stacks however they use the FIFO “first-in-first- out” paradigm. Which means that the oldest element (the element that was added first) is the next item to be removed.

3. Linked Lists <br />
   Linked lists are a series of linked nodes where each node points to the next node in the list. Each node has a value and a pointer to the next node. There are also doubly-linked lists in which each node also points to the previous node in the list.

   Linked lists use the LIFO“last-in-first-out” method (similar to a stack) where nodes are added to and deleted from the same end.

4. Graphs <br />
   A graph is a data structure composed of a collection of nodes and edges. Graphs are a non-linear data structure (as opposed to a linked list, stack, or queue). You may also hear nodes referred to as vertices.

5. Trees <br />
   A tree is a data structure where a node can have zero or more children. Each node contains a value, and similar to graphs each node can have a connection between other nodes called an edge. A tree is a type of graph but not all graphs are trees.
   In this repo we will demonstrate Binary search trees.

---

## Algorithms

1. Bubble sort <br />
   Sometimes referred to as sinking sort, is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.
   Bubble sort is famous for being non-performant, with a runtime of **O(n^2)**.

2. Merge sort <br />
   The MergeSort is a _divide and conquer_ algorithms, it repeatedly divides the array into two halves until we reach a stage where we try to perform MergeSort on a sub-array of **size 1**.
   The time complexity of merge sort is **O(n log n)**.

3. Quick sort <br />
   Like Merge Sort, QuickSort is a Divide and Conquer algorithm. It picks an element as pivot and partitions the given array around the picked pivot. and it will keep recursively iterating until we reach a sub-array of size **size 1**. <br />
   On average quick sort has a runtime of **O(n log n)**. <br />
   There are many different versions of quickSort that pick pivot in different ways.

   1. Always pick first element as pivot.
   2. Always pick last element as pivot.
   3. Pick a random element as pivot.
   4. Pick median as pivot.

4. Insertion sort <br />
   Insertion sort picks an element in an array and inserts it in its correct position between 0 and the element preceding it.<br />
   The worst case run-time for insertion sort is **O(n^2)**,

---

#### To run the project, please use this command `node ./index.mjs`

---

[Reference1](https://technicalinterviews.dev/)
[Reference2](https://www.geeksforgeeks.org/)
