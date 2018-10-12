
class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  add(value, node = this.head) {
    this.tail = value;
    // for head
    if (!this.head) return this.head = new Node(value);
    if (!node.next) return node.next = new Node(value);
    this.add(value, node.next);
  }
  partition(value, node = this.head, prevNode = null) {
    prevNode = node.value;
    if (node = this.head) {
      this.partition(value, this.head.next, this.head)
    }
    else if (node.value < value) {
      new Node(value, this.head);
      
    }
    else if (node.value >= value) {

    }
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

console.log(JSON.stringify(linkedList));