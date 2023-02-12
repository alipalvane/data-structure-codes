//queue مانند استک ها و لینکدلیست ها هم آرایه هستند
// دقیقا مانند استک هاست با این تفاوت که فرآیند اضافه کردن از ابتدای لیست و فرآیند حذف از انتهای لیست انجام میشود

class Queue {
    constructor(){
        this.items = []
    }

    // افزودن به ابتدای لیست
    enqueue(value){
        this.items.unshift(value)
    }

    // حذف از انتهای لیست
    dequeue(){
        return this.items.pop()
    }

    toArray(){
        return this.items
    }

}

const queue = new Queue()

queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(8)

console.log(queue.toArray())

console.log(queue.dequeue())

console.log(queue.toArray())