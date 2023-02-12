//Create Stack with LikedList | ساخت استک با استفاده از لینکیدلیست ها | ترکیب هر دو

import {LinkedList} from './linked-list.js'

class Stack{
    constructor(){
        this.list = new LinkedList()
    }

    push(value){
        this.list.prepend(value)
    }

    pop(){
        return this.list.deleteHead()
    }

    toArray(){
        return this.list.toArray()
    }

}

const stack = new Stack();

stack.push("book 1")
stack.push("book 2")
stack.push("book 3")

console.log(stack.toArray())
console.log(stack.pop())
console.log(stack.toArray())
  
  
  