class Queue {
    constructor() {
        this.arr = [];
    }

    enqueue(item) {
        this.arr.push(item);
    }

    dequeue() {
        return this.arr.shift();
    }

    size() {
        return this.arr.length;
    }

    peek() {
        return this.arr[0];
    }
}

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
queue.enqueue(6);
queue.enqueue(7);

console.log(queue);
console.log("size", queue.size());

console.log("dequeue", queue.dequeue());
console.log("dequeue", queue.dequeue());
console.log("dequeue", queue.dequeue());

console.log(queue);
console.log("size", queue.size());

console.log("peek", queue.peek());

console.log(queue);
console.log("size", queue.size());