// 18. Lowest Common Ancestor
// ● Question : Given two nodes in a binary tree, write a function to find the lowest
// common ancestor.
// ● Eg.
// lcs(4, 3) = 1
// lcs(6, 7) = 3

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

const lowestCommonAncestor = (value1, value2) => {
  if (value1 === value2) return value1;
  const pathToV1 = _pathTo(value1);
  const pathToV2 = _pathTo(value2);
  let prev = null;
  while (pathToV1.length !== 0 && pathToV2.length !== 0) {
    const s = pathToV1.pop();
    const t = pathToV2.pop();
    if (s === t) {
      prev = s;
    }
    else {
      continue;
    }
  }
  return prev;

  function _pathTo(value, currNode = bst.root) {
    if (!currNode) return null;
    if (currNode.value === value) {
      return [currNode.value];
    }

    const left = _pathTo(value, currNode.left);
    const right = _pathTo(value, currNode.right);

    if (left) {
      left.push(currNode.value);
      return left;
    }
    if (right) {
      right.push(currNode.value);
      return right;
    }
    return null;
  }
}

console.log(lowestCommonAncestor(4, 3)); // 1
console.log(lowestCommonAncestor(6, 7)); // 3