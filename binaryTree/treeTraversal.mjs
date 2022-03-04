export const BINARY_TREE_TRAVERSAL = {
  IN_ORDER: (node, visitFunction) => {
    if (node !== null) {
      BINARY_TREE_TRAVERSAL.IN_ORDER(node.leftChild, visitFunction);
      visitFunction(node);
      BINARY_TREE_TRAVERSAL.IN_ORDER(node.rightChild, visitFunction);
    }
  },
  PRE_ORDER: (node, visitFunction) => {
    if (node !== null) {
      visitFunction(node);
      BINARY_TREE_TRAVERSAL.PRE_ORDER(node.leftChild, visitFunction);
      BINARY_TREE_TRAVERSAL.PRE_ORDER(node.rightChild, visitFunction);
    }
  },
  POST_ORDER: (node, visitFunction) => {
    if (node !== null) {
      BINARY_TREE_TRAVERSAL.POST_ORDER(node.leftChild, visitFunction);
      BINARY_TREE_TRAVERSAL.POST_ORDER(node.rightChild, visitFunction);
      visitFunction(node);
    }
  },
};
