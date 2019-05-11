// Stack from Queues
// ● Question : Implement a LIFO stack with basic functionality (push and pop) using
// FIFO queues to store the data.

class Queue {
  constructor() {
    this.body = [];
  }
  enqueue(value) {
    this.body.push(value);
  }
  dequeue() {
    if (this.isEmpty()) return false;
    return this.body.shift();
  }
  peek() {
    return this.body[this.body.length - 1];
  }
  isEmpty() {
    return this.body.length === 0 ? true : false;
  }
}
class Stack {
  constructor() {
    this.body = [];
  }
  push(value) {
    this.body.push(value);
  }
  pop() {
    if (this.isEmpty()) return false;
    return this.body.pop();
  }
  peek() {
    return this.body[this.body.length - 1];
  }
  isEmpty() {
    return this.body.length === 0 ? true : false;
  }
}

const qToS = q => {
  const ans = new Stack();
  while (!q.isEmpty()) {
    ans.push(q.dequeue());
  }
  return ans;
}

const test1 = new Queue();
test1.enqueue(3);
test1.enqueue(5);
test1.enqueue(9);
test1.enqueue(8);
test1.enqueue(2);
console.log(test1);

console.log(qToS(test1)); 