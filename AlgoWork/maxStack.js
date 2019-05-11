// Max Stacks
// ● Question : Implement a LIFO stack that has a push(), pop(), and max() function,
// where max() returns the maximum value in the stack. All of these functions
// should run in O(1) time.
// ● Eg.
// push(1)
// max() = 1
// push(2)
// max() = 2
// push(1)
// max() = 2
// pop() = 1
// max() = 2
// pop() = 2
// max() = 1

class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
  }
}

class Stack {
  constructor() {
    this.stack = null;
    
  }
  push(value) {
    const newNode = new Node(value);
    if (!this.stack) {
      this.tail = newNode;
      this.head = newNode;
    }
    if (value > this.max) this.max = value;
    this.tail.next(newNode);
    this.tail = this.tail.next;
  }
  pop() {
    if (this.isEmpty()) return false;
    const returnVal = this.tail.value;
    return this.body.pop();
  }
  peek() {
    return this.body[this.body.length - 1];
  }
  isEmpty() {
    return this.body.length === 0 ? true : false;
  }
  max() {
    if (this.isEmpty()) return false;
    return this.max;
  }
}