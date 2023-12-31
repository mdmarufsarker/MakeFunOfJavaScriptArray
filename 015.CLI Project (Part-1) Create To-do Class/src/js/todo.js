/**
 *
 *
 * @param {*} arr
 * @return {*} 
 */
function generateID(arr){
    if(arr.length === 0) return 1;
    return arr[arr.length - 1].id + 1;
}
/**
 *
 *
 * @class Todo
 * @param {*} todoList
 * @return {*}
 * @constructor
 * @method add
 * @method update
 * @method done
 * @method next
 * @method list
 * @method clear
 * @method find
 * @method save
 */
class Todo {
    constructor(todoList = []){
        this.todoList = todoList;
    }

    add(text){
        const todo = {
            text,
            id: generateID(this.todoList),
            created: new Date().toLocaleString(),
        }
        this.todoList.push(todo);
    }

    update(id, text){
        for(let i = 0; i < this.todoList.length; i++){
            if(this.todoList[i].id === id){
                this.todoList[i].text = text;
                break;
            }
        }
    }

    done(){
        return this.todoList.shift();
    }

    next(){
        return this.todoList[0];
    }

    list(){
        return this.todoList;
    }

    clear(){
        this.todoList = [];
    }

    find(id){
        const result = [];
        for(let i = 0; i < this.todoList.length; i++){
            const todo = this.todoList[i];
            if(todo.text.toLowerCase().includes(id.toLowerCase())){
                result.push(todo);
            }
        }

        return result;
    }

    save(){
        return JSON.stringify(this.todoList);
    }
}

module.exports = Todo;