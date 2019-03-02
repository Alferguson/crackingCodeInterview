class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

class Queue {
  constructor() {
    this.items = [];
  }
  enqueue(val) {
    this.items.unshift(val);
  }
  dequeue() {
    return this.items.shift();
  }
  front() {
    return this.items[0];
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  add(value) {
    if (!this.root) {
      this.root = new Node(value);
    }
    else {
      this.addTo(this.root, value);
    }
  }
  addTo(currNode, value) {
    if (value < currNode.key) {
      if (!currNode.left) {
        currNode.left = new Node(value);
      }
      else {
        this.addTo(currNode.left, value);
      }
    }
    else {
      if (!currNode.right) {
        currNode.right = new Node(value);
      }
      else {
        this.addTo(currNode.right, value);
      }
    }
  }
  findWithParent(value) {
    return this.contains(value);
  }
  contains(value) {
    let currNode = this.root;
    let parentNode = null;
    while (currNode) {
      if (currNode.key > value) {
        parentNode = currNode;
        currNode = currNode.left;
      }
      else if (currNode.key < value) {
        parentNode = currNode;
        currNode = currNode.right;
      }
      else {
        return {
          currNode,
          parentNode
        };
      }
    }
  }
  remove(value) {
    let { currNode, parentNode} = this.findWithParent(value);
    if (!currNode) return false;
    // If currNode has no right child, currNode.left becomes currNode
    if (!currNode.right) {
      if (!parentNode) {
        this.root = currNode.left;
      }
      // promote currNode's left upward
      else {
        if (parentNode.key > currNode.key) {
          parentNode.left = currNode.left;
        }
        else if (parentNode.key < currNode.key) {
          parentNode.right = currNode.left;
        }
      }
    }
    // if current's right child has no left child, then currents right child replaces current 
    else if (!currNode.right.left) {
      // demote currNode left to the currNode's right left child
      currNode.right.left = currNode.left;
      if (!parentNode) {
        this.root = currNode.right;
      }
      else {
        if (parentNode.key > currNode.key) {
          parentNode.left = currNode.right;
        }
        else if (parentNode.key < currNode.key) {
          parentNode.right = currNode.right;
        }
      }
    }
    // if currNode's right child has a left child, replace currNode with currNode's right child's left-most child
    else {
      let leftMost = currNode.right.left;
      let leftMostParent = currNode.right;

      while (leftMost.left) {
        leftMostParent = leftMost;
        leftMost = leftMost.left;
      }      

      // the parent's subtree becomes the leftmost's right subtree
      leftMostParent.left = leftMost.right;

      leftMost.left = currNode.left;
      leftMost.right = currNode.right;

      if (!parentNode) {
        this.root = leftMost;
      }
      else {
        if (parentNode.key > currNode.key) {
          parentNode.left = leftMost;
        }
        else if (parentNode.key < currNode.key) {
          parentNode.right = leftMost;
        }
      }
    }
    return;
  }
  preOrderTraversal(currNode = this.root) {
    if (!currNode) return;
    console.log(currNode.key);
    this.preOrderTraversal(currNode.left);
    this.preOrderTraversal(currNode.right);
  }
  inOrderTraversal(currNode = this.root) {
    if (!currNode) return;
    this.inOrderTraversal(currNode.left);
    console.log(currNode.key);
    this.inOrderTraversal(currNode.right);
  }
  postOrderTraversal(currNode = this.root) {
    if (!currNode) return;
    this.postOrderTraversal(currNode.left);
    this.postOrderTraversal(currNode.right);
    console.log(currNode.key);
  }
  levelOrderTraversal(currNode = this.root) {
    const rootHeight = this.height(currNode);
    
    for (let i = 1; i <= rootHeight; i++) {
      this.levelHelper(currNode, i)
    }
  }
  levelHelper(currNode, level) {
    if (!currNode) {
      return;
    }
    if (level === 1) {
      console.log(currNode.key);
    }
    else if (level > 1) {
      this.levelHelper(currNode.left, level - 1);
      this.levelHelper(currNode.right, level - 1);
    }
  }
  height(currNode) {
    if (!currNode) return 0;
    const leftHeight = this.height(currNode.left);
    const rightHeight = this.height(currNode.right);

    return 1 + Math.max(leftHeight, rightHeight);
  }
}

const bst = new BST();

bst.add(60);
bst.add(45);
bst.add(69);
bst.add(4);
bst.add(2);
bst.add(1);
bst.add(80);
bst.add(700);

// bst.preOrderTraversal();
bst.levelOrderTraversal();
console.log(bst.root);
// bst.remove(60);
// bst.preOrderTraversal();
// console.log(bst.root);
// bst.remove(80);
// bst.preOrderTraversal();
// console.log(bst.root);