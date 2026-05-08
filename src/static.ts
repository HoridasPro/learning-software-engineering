class MultipleValue {
  static count: number = 0;
  static name: string = "Haridas";
  static increment() {
    return (this.count = this.count + 1);
  }
  static decrement() {
    return (this.count = this.count - 2);
  }

  static multipy(input: number) {
    return input * input;
  }
}
console.log(MultipleValue.name);
console.log(MultipleValue.multipy(10));
console.log(MultipleValue.increment());
console.log(MultipleValue.increment());
console.log(MultipleValue.increment());
console.log(MultipleValue.decrement());
console.log(MultipleValue.decrement());
