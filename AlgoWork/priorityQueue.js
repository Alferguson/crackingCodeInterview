// Priority Queue
// ● Question : Implement a Priority Queue

class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

// following geeksforgeeks link https://www.geeksforgeeks.org/priority-queue-set-1-introduction/
class PriorityQueueWithArr {
  constructor() {
    this.queue = [];
  }
  isEmpty() {
    if (this.queue.length === 0) return true;
    return false;
  }
  insertWithPriority(value, priority) {
    // O(1) time
    const newNode = new Node(value, priority);
    this.queue.push(newNode);
  }
  pullHighestPriorityElement() {
    // O(n) time where n is length of queue
    let highest = this.queue[0];
    let highestIndex = 0;
    for (let i = 1; i < this.queue.length; i++) {
      if (this.queue[i].priority > highest.priority) {
        highest = this.queue[i];
        highestIndex[i];
      }
    }
    _moveElements(queue, highestIndex);
    return highest.value;
  }
  peakHighestPriorityElement() {
    // O(n) time where n is length of queue
    let highest = this.queue[0];
    for (let i = 1; i < this.queue.length; i++) {
      if (this.queue[i].priority > highest.priority) {
        highest = this.queue[i];
      }
    }
    return highest.value;
  }
  _moveElements(queue, index) {
    if (!queue[index + 1]) {
      queue.pop();
      return;
    }
    queue[index] = queue[index + 1];
    _moveElements(queue, index + 1);
  }
}

class PriorityQueueWithHeap {
  constructor() {
    this.queue = _buildMaxHeap();
  }
  isEmpty() {
    // O(1)
    return this.queue.length === 0;
  }
  insertWithPriority(value, priority) {
    // O(log(n))
    this.queue.push(new Node(value, priority));
    _checkParents();
  }
  pullHighestPriorityElement() {
    // O(log(n))
    _swap(0, this.queue.length - 1);
    const highest = this.queue.pop();
    _heapify();
    return highest;
  }
  peakHighestPriorityElement() {
    // O(1) search time
    return this.queue[0].value;
  }
  _heapify(parent = 0) {
    let leftChild = (parent + 1) * 2;
    let rightChild =  leftChild + 1;
    if (this.queue[leftChild] && this.queue[parent].priority < this.queue[leftChild]) {
      _swap(parent, this.queue[leftChild].priority > this.queue[rightChild].priority ? leftChild : rightChild);
      _heapify(this.queue[leftChild].priority > this.queue[rightChild].priority ? leftChild : rightChild);
    }
    else if (this.queue[rightChild] && this.queue[parent].priority < this.queue[rightChild]) {
      _swap(parent, rightChild);
      _heapify(rightChild);
    }
    else {
      return;
    }
  }
  _checkParents() {
    let current = this.queue.length - 1;
    while (!stopSwapping) {
      let parent = Math.floor((current - 1) / 2);
      if (this.queue[current].priority > this.queue[parent]) {
        _swap(current, parent);
        current = parent;
      }
      else {
        stopSwapping = true;
      }
    }

  }
  _swap(biggerNodeIndex, smallerNodeIndex) {
    let temp = this.queue[biggerNodeIndex];
    this.queue[biggerNodeIndex] = this.queue[smallerNodeIndex];
    this.queue[smallerNodeIndex] = temp;
  }
  _buildMaxHeap() {
    // heap will be represented with array where accessing an index is constant
    // its parent is constant (index/2)
    // from the parent, its lefts child (index * 2) and its right child (index * 2 + 1)
    return [];
  }
}


// [40, 20, 23, 19, 2, 14, 18, 4, 8, 1, 10, 9]

                //         40
                //       /    \
                //     20      23
                //    /  \    /  \
                //   19   2   14  18
                //  / \  /\   /  
                // 4   8 1 10 9
