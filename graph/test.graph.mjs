import { test } from '../test.mjs';
import { Graph } from './graph.mjs';
import { graphBFS, graphDFS } from './graphTraversal.mjs';

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

  test('GraphTraversal DFS', () => {
    const graph2 = new Graph();

    graph2.addNode('a');
    graph2.addNode('b');
    graph2.addNode('c');
    graph2.addNode('d');
    graph2.addNode('e');
    graph2.addNode('f');

    graph2.addEdge('a', 'c');
    graph2.addEdge('a', 'b');
    graph2.addEdge('a', 'f');
    graph2.addEdge('b', 'd');
    graph2.addEdge('b', 'e');
    graph2.addEdge('c', 'f');
    graph2.addEdge('d', 'e');
    graph2.addEdge('e', 'b');

    return graphDFS(graph2, 'a') === 'a => c => f => b => d => e';
  });

  test('GraphTraversal BFS', () => {
    const graph3 = new Graph();

    graph3.addNode('a');
    graph3.addNode('b');
    graph3.addNode('c');
    graph3.addNode('d');
    graph3.addNode('e');
    graph3.addNode('f');

    graph3.addEdge('a', 'c');
    graph3.addEdge('a', 'b');
    graph3.addEdge('a', 'f');
    graph3.addEdge('b', 'd');
    graph3.addEdge('b', 'e');
    graph3.addEdge('c', 'f');
    graph3.addEdge('d', 'e');
    graph3.addEdge('e', 'b');

    return graphBFS(graph3, 'a') === 'a => c => b => f => d => e';
  });
};
