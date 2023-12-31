const MAX_SIZE = 30;

class Stack{
    constructor(){
        this.list = new Array(MAX_SIZE);
        this.top = -1;
    }

    push(value){
        if(this.top >= MAX_SIZE - 1){
            console.log("Stack Overflow");
            return;
        }
        this.top++;
        this.list[this.top] = value;
    }

    pop(){
        if(this.top < 0){
            console.log("Stack Underflow");
            return;
        }
        let value = this.list[this.top];
        this.top--;
        return value;
    }

    peek(){
        if(this.top < 0){
            console.log("Stack Underflow");
            return;
        }
        return this.list[this.top];
    }

    isEmpty(){
        return this.top < 0;
    }

    isFull(){
        return this.top >= MAX_SIZE - 1;
    }

    size(){
        return this.top + 1;
    }

    print(){
        let i = this.top;
        while(i >= 0){
            console.log(this.list[i]);
            i--;
        }
    }
}
