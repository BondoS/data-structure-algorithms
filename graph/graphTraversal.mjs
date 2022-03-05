import { Queue } from '../queue/queue.mjs';

export const graphDFS = (graph, startValue) => {
  let startNode = graph.getNode(startValue);
  let visitedNodesHash = graph.nodes.reduce((accumulator, currentNode) => {
    accumulator[currentNode.value] = false;
    return accumulator;
  }, {});

  let result = '';
  const exploreNode = (node) => {
    if (visitedNodesHash[node.value]) return;
    result += ` ${node.value} =>`;
    visitedNodesHash[node.value] = true;
    node.edges.forEach((node) => {
      exploreNode(node);
    });
    // remove first space character and last 3 characters ' =>'
    return result.slice(1).slice(0, -3);
  };
  return exploreNode(startNode);
};

export const graphBFS = (graph, value) => {
  const startNode = graph.getNode(value);
  const visitedNodesHash = graph.nodes.reduce((accumulator, currentNode) => {
    accumulator[currentNode.value] = false;
    return accumulator;
  }, {});

  let result = '';
  const queue = new Queue();
  queue.enqueue(startNode);
  while (!queue.isEmpty()) {
    let currentNode = queue.dequeue();
    if (!visitedNodesHash[currentNode.value]) {
      result += ` ${currentNode.value} =>`;
      visitedNodesHash[currentNode.value] = true;
    }
    currentNode.edges.forEach((node) => {
      if (!visitedNodesHash[node.value]) queue.enqueue(node);
    });
  }

  // remove first space character and last 3 characters ' =>'
  return result.slice(1).slice(0, -3);
};
