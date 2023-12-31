const MAX_SIZE = 30;

class Queue{
    constructor(){
        this.list = new Array(MAX_SIZE);
        this.front = -1;
        this.rear = -1;
    }

    isEmpty(){
        return this.front === -1 && this.rear === -1;
    }

    isFull(){
        return this.rear === MAX_SIZE - 1;
    }

    enqueue(item){
        if(this.isFull()){
            console.log("Queue is full");
            return;
        }
        if(this.isEmpty()){
            this.front = 0;
        }
        this.list[++this.rear] = item;
    }

    dequeue(){
        if(this.isEmpty()){
            console.log("Queue is empty");
            return;
        }
        if(this.front === this.rear){
            this.front = -1;
            this.rear = -1;
            return;
        }
        this.front++;
    }

    peek(){
        if(this.isEmpty()){
            console.log("Queue is empty");
            return;
        }
        return this.list[this.front];
    }

    print(){
        if(this.isEmpty()){
            console.log("Queue is empty");
            return;
        }
        for(let i = this.front; i <= this.rear; i++){
            console.log(this.list[i]);
        }
    }
}

module.exports = Queue;