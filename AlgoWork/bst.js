class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  add(val) {
    if (!this.root) {
      return this.root = new Node(val);
    }
    _addTo(val, this.root);
  }
  _addTo(val, currNode) {
    if (val === currNode.val) {
      return false;
    }
    else if (val > currNode.val) {
      if (!currNode.right) {
        return currNode.right = val;
      }
      _addTo(val, currNode.right);
    }
    else {
      if (!currNode.left) {
        return currNode.left = val;
      }
      _addTo(val, currNode.left);
    }
  }
  bfs() {
    return {
      levelOrder(currLvl = 0, parents = null) {
        const parentsArr = [];
        if (!currLvl) {
          console.log(this.root.val);
          parentsArr.push(this.root);
        }
        else {
          parents.forEach( parent => {
            if (parent.left.val) {
              console.log(parent.left.val);
              parents.push(parent.left)
            }
            if (parent.right.val) {
              console.log(parent.right.val);
              parents.push(parent.right)
            }
          });
        }
        if (!parentsArr.length) return;
        levelOrder(currLvl++, parentsArr);
      }
    }
  }
  dfs() {
    return {
      preOrder(currNode = this.root) {
        if (!currNode) return;
        console.log(currNode.val);
        preOrder(currNode.left);
        preOrder(currNode.right);
      },
      inOrder(currNode = this.root) {
        if (!currNode) return;
        inOrder(currNode.left);
        console.log(currNode.val);
        inOrder(currNode.right);
      },
      postOrder(currNode = this.root) {
        if (!currNode) return;
        postOrder(currNode.left);
        postOrder(currNode.right);
        console.log(currNode.val);
      }
    }
  }
}
