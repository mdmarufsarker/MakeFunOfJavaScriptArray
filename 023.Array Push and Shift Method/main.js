const Queue = require("./Queue.js");
const queue = new Queue();

console.log("Before dequeue");
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);

queue.print();

queue.dequeue();
console.log("After dequeue");
queue.print();


// JS Built-in Array Queue Methods
const arr = [1,2,3,4];
console.log("Before dequeue");
arr.push(5);
arr.push(6);
arr.push(7);

console.log(arr);

arr.shift();
console.log("After dequeue");
console.log(arr);
