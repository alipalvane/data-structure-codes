//TODO: Create Hashtable With pure javascript

class HashTable {
  constructor() {
    this.size = 1000;
    this.items = Array(this.size).fill(null);
  }

  //hashing method convert "key" to "index"
  hash(key) {
    let hash = 0;
    for (const char of key) {
      hash += char.charCodeAt(0);
    }
    return hash % this.size;
  }

  // set value for the key
  set(key, value) {
    const keyHash = this.hash(key)
    this.items[keyHash] = value
  }


  get(key){
    const keyHash = this.hash(key)
    return this.items[keyHash]
  }
}

const hashTable = new HashTable();


// Run with Example
const message = "hello world !"
function findRepeatCharHash(string){
    const table = new HashTable()

    for(let char of string){
        if(table.get(char)){
            return char
        }

        table.set(char, 1)
    }
}
console.log(findRepeatCharHash(message))
