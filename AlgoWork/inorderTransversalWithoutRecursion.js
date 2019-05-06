// Inorder Traversal
// ● Question : Given a binary search tree, print out the elements of the tree in order
// without using recursion.
// ● Eg.
// 1
// 2
// 3
// 5
// 6
// 7
// 8

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor(rootValue) {
    this.root = new Node(rootValue);
  }
}
const bst = new BST(5);
bst.root.left = new Node(2);
bst.root.right = new Node(7);
bst.root.left.left = new Node(1);
bst.root.left.right = new Node(3);
bst.root.right.left = new Node(6);
bst.root.right.right = new Node(8);

const inOrderWithoutRecursion = (tree) => {
  let leftTraversed = false;
  let currNode = tree.root;
  const parentLeftNodes = [];
  const answer = [];
  while (!leftTraversed) {
    if (!currNode.left) return leftTraversed = true;
    parentLeftNodes.push(currNode);
    currNode = currNode.left;
  }
  answer.push(currNode.value);
  for (let i = parentLeftNodes.length - 1; i >= 0; i--) {
    const node = array[i];
    answer.push(node.value);
    if (node.right) {
      let rightTransvered = false;
      while (!rightTransvered) {
        
      }
    }
  }
}

console.log(inOrderWithoutRecursion(bst)); // [1,2,3,5,6,7,8]