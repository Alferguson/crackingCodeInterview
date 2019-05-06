// Longest Consecutive Branch
// ● Question : Given a tree, write a function to find the length of the longest branch of
// nodes in increasing consecutive order.
// ● Eg.
// length = 3

//       0
//     /   \
//    1     2
//   / \   / \
//  1   2 1   3

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
const bst = new BST(0);
bst.root.left = new Node(1);
bst.root.right = new Node(2);
bst.root.left.left = new Node(1);
bst.root.left.right = new Node(2);
bst.root.right.left = new Node(1);
bst.root.right.right = new Node(3);

// assuming balanced
const longestConBranch = (currNode, length = 1) => {
  let leftLength = length;
  let rightLength = length;
  if (currNode.left && currNode.left.value === currNode.value + 1) {
    leftLength = longestConBranch(currNode.left, leftLength + 1);
  }
  if (currNode.right && currNode.right.value === currNode.value + 1) {
    rightLength = longestConBranch(currNode.right, rightLength + 1);
  }
  console.log(`currNode val is ${currNode.value} and length is ${length}`)

  return leftLength > rightLength ? leftLength : rightLength;
}

console.log(longestConBranch(bst.root));