import { test } from '../test.mjs';
import { Graph } from './graph.mjs';

export const testGraph = () => {
  // directed graph
  let graph = new Graph(true);
  graph.addNode('x');
  graph.addNode('y');
  graph.addNode('z');
  graph.addNode('w');
  graph.addNode('m');
  graph.addNode('o');
  test('Graph contains 6 nodes', () => {
    return graph.nodes.length === 6;
  });
  test(`Graph node 'x' is connected with node 'y' with one way 'directed'`, () => {
    graph.addEdge('x', 'y');
    return (
      graph.getNode('x').edges.some((edge) => edge.value === 'y') &&
      graph.getNode('y').edges.every((edge) => edge.value !== 'x')
    );
  });
  test(`Graph node 'x' is connected with node 'o' with one way 'directed'`, () => {
    graph.addEdge('x', 'o');
    return (
      graph.getNode('x').edges.some((edge) => edge.value === 'o') &&
      graph.getNode('o').edges.every((edge) => edge.value !== 'x')
    );
  });
  test(`Graph node 'y' is removed and all it's edges has been removed too`, () => {
    graph.removeNode('y');
    return (
      // removed from all nodes
      graph.nodes.every((node) => node.value !== 'y') &&
      // removed from all edges
      graph.nodes.every((node) =>
        node.edges.every((edge) => edge.value !== 'y')
      )
    );
  });
};
