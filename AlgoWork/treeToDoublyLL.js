// 21. Tree to Doubly Linked List
// ● Question : Given a tree, write a function to convert it into a circular doubly linked
// list from left to right by only modifying the existing pointers.

//       1
//     /   \
//    2     3
//   / \   / \
//  4   5 6   7

// ● Eg.
// <‑ 4 <‑> 2 <‑> 5 <‑> 1 <‑> 6 <‑> 3 <‑> 7 ‑>

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
const bst = new BST(1);
bst.root.left = new Node(2);
bst.root.right = new Node(3);
bst.root.left.left = new Node(4);
bst.root.left.right = new Node(5);
bst.root.right.left = new Node(6);
bst.root.right.right = new Node(7);

// will use dfs's inOrder tranversal
const treeToDLL = (tree) => {



  return tree;
}

function dfs(node, parent = null) {
  if (!node) return;
  const left = dfs(node.left, node);
  console.log(`left is ${left}`);
  // console.log(`currNode is ${node.value}`);  
  // console.log(`parent is ${parent ? parent.value : null}`);  
  console.log(node.value)
  
  const right = dfs(node.right, node);
  console.log(`right is ${right}`);

  // return node;
}
console.log(dfs(bst.root));

// console.log(treeToDLL(bst)); // <‑ 4 <‑> 2 <‑> 5 <‑> 1 <‑> 6 <‑> 3 <‑> 7 ‑>