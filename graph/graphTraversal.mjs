import { Queue } from '../queue/queue.mjs';

/*
  Time: O(n^2)
  Space: O(1)
*/
export const graphDFS = (graph, startValue) => {
  let startNode = graph.getNode(startValue);
  let visitedNodesHash = graph.nodes.reduce((accumulator, currentNode) => {
    accumulator[currentNode.value] = false;
    return accumulator;
  }, {});

  let result = [];
  const exploreNode = (node) => {
    if (visitedNodesHash[node.value]) return;
    result.push(node.value);
    visitedNodesHash[node.value] = true;
    node.edges.forEach((node) => {
      exploreNode(node);
    });

    return result.join(' => ');
  };
  return exploreNode(startNode);
};

/*
  Time: O(n^2)
  Space: O(1)
*/
export const graphBFS = (graph, value) => {
  const startNode = graph.getNode(value);
  const visitedNodesHash = graph.nodes.reduce((accumulator, currentNode) => {
    accumulator[currentNode.value] = false;
    return accumulator;
  }, {});

  let result = [];
  let currentNode;
  const queue = new Queue();
  queue.enqueue(startNode);

  while (!queue.isEmpty()) {
    currentNode = queue.dequeue();
    if (!visitedNodesHash[currentNode.value]) {
      result.push(currentNode.value);
      visitedNodesHash[currentNode.value] = true;
    }
    currentNode.edges.forEach((node) => {
      if (!visitedNodesHash[node.value]) queue.enqueue(node);
    });
  }

  return result.join(' => ');
};
