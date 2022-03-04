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
