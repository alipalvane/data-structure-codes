// اسلک ها نزدیکترین ساختار به آرایه ها هستن که فقط دو عملیات حذف و اضافه را انجام میدهند
class Stack {
  constructor() {
    this.items = [];
  }

  // در اسلک ها متدهای اضافه و حذف فقط و فقط و فقط مقادیر را از بالای لیست اضافه و حذف میکنند
  push(value) {
    this.items.push(value)
  }
  pop() {
    return this.items.pop()
  }


  //خروجی
  toArray(){
    return this.items
  }

}

const stack = new Stack();

stack.push("book 1")
stack.push("book 2")
stack.push("book 3")

console.log(stack.toArray())
console.log(stack.pop())
console.log(stack.toArray())


