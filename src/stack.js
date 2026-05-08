class Stack {
  constructor() {
    this.items = [];
  }
  push(value) {
    this.items.push(value);
  }
  pop() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items.pop();
  }
  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }
  print() {
    console.log(this.items.slice().reverse().join(" =>"));
  }
}

const stack = new Stack();
stack.push(10);
console.log(stack.peek());
console.log(stack.isEmpty());
stack.push(20);
stack.push(30);
stack.push(40);
stack.push(50);

stack.print();

console.log(stack.pop());
console.log(stack.pop());
