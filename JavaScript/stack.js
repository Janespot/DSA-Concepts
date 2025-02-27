class Stack {
    constructor() {
        this.arr = [];
    }

    push(value) {
        this.arr.push(value);
    }

    peek() {
        return this.arr[this.arr.length - 1];
    }

    pop() {
        return this.arr.pop(this.arr[this.arr.length - 1]);
    }

    size() {
        return this.arr.length;
    }
}

const stack = new Stack();
stack.push(5);
stack.push(4);
stack.push(3);
stack.push(2);
stack.push(1);

console.log(stack);
console.log("size", stack.size());

console.log("pop", stack.pop());
console.log("pop", stack.pop());


console.log(stack);
console.log("size", stack.size());

console.log("peek", stack.peek());

console.log(stack);
console.log("size", stack.size());