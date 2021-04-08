const ListNode = require('../extensions/list-node');
/**
  * Implement the Queue with a given interface via linked list (use ListNode extension above).
  *
  * @example
  * const queue = new Queue();
  *
  * queue.enqueue(1); // adds the element to the queue
  * queue.enqueue(3); // adds the element to the queue
  * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
  *
  */

class Queue {
  get size() {
    let counter = 0;
    let head = this.first;
    while (head) {
      head = head.next;
      counter++;
    }
    return counter;
  }

  enqueue(element) {
    if (this.size === 0) {
      this.first = {};
      this.last = {};
      const node = new ListNode(element);
      node.value = element;
      this.first = node;
      this.last = this.first;
    } else {
      const next = this.last;
      const node = new ListNode(element);
      node.value = element;
      this.last = node;
      next.next = this.last;
    }
  }

  dequeue() {
    if (this.size > 0) {
      const res = this.first.value;
      this.first = this.first.next;
      return res;
    }
    return undefined;
  }
}

module.exports = Queue;
