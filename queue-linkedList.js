//Create Queue with LikedList | ساخت کیو با استفاده از لینکیدلیست ها | ترکیب هر دو

import { LinkedList} from './linked-list.js'

class Queue{
    constructor(){
        this.list = new LinkedList()
    }

    enqueue(){
        this.list.append(value)
    }

    dequeue(){
        this.list.deleteHead()
    }

    toArray(){
        return this.list.toArray()
    }

}

queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(8)

console.log(queue.toArray())

console.log(queue.dequeue())

console.log(queue.toArray())