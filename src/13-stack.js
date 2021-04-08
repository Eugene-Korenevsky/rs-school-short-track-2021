/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  push(element) {
    if (!this.size) {
      this.size = 0;
      this.last = {};
    }
    if (this.size === 0) {
      this.last = { value: element, next: null };
      this.size++;
    } else {
      this.size++;
      const next = this.last;
      this.last = { value: element, next };
    }
  }

  pop() {
    if (this.size > 0) {
      const res = this.last.value;
      this.size--;
      this.last = this.last.next;
      return res;
    }
    return undefined;
  }

  peek() {
    if (this.size > 0) {
      return this.last.value;
    }
    return undefined;
  }
}

module.exports = Stack;
