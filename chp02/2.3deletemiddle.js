// Return Kth to Last: Implement an algorithm to find the kth to last element of a singly linked list. 
// same as 2.2
// ////////////////
// set up classes for reuse
// ////////////////

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.start = null;
    this.tail = null;
  }
  add(value, node = this.start) {
    this.tail = value;
    // for start
    if (!this.start) return this.start = new Node(value);
    if (!node.next) return node.next = new Node(value);
    this.add(value, node.next);
  }

  kthToLast(position, node = this.start) {
    if (!node) {
      return; 
    }
    else if (position > 1) {
      this.kthToLast(position - 1, node.next);
    }
    else if (position === 1) {
      console.log(node.value);
      this.kthToLast(position, node.next);
    }
  }
  deleteMiddleNode(node = this.start, position = 0) {
    if (!node.next) {
      this._lengthToMiddle(position + 1);
      return console.log(position)
    };
    this.deleteMiddleNode(node.next, ++position);
  }
  _lengthToMiddle(length) {
    let middlePos = length / 2;
    if (length % 2 === 0) {
      middlePos--;
      this._delete(this.start, middlePos)
    }
    else {
      middlePos += .5;
      this._delete(this.start, middlePos);
    }
  };
  _delete(node, position, counter = 0, previousNode = null) {
    if (counter < position) {
      if (counter === position - 1) {
        previousNode = node;
      }
      return this._delete(node.next, position, ++counter, previousNode)
    };
    console.log(node);
    const newNext = node.next;
    previousNode.next = newNext;
  }

}

const linkedList = new LinkedList();
linkedList.add(20);
linkedList.add(40);
linkedList.add(1);
linkedList.add(6);
linkedList.add(9);
linkedList.add(999);
linkedList.add(8);
// linkedList.kthToLast(2);
linkedList.deleteMiddleNode();
console.log(JSON.stringify(linkedList));