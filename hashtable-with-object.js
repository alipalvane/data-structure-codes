 //TODO: Create Hashtable with Objets

const message = "hello world";
// پیدا کردن اولین حرفی که "تکرار"میشود در پیغام بالا
// این فانکشن با دستورات معمولی جاوا اسکریپت نوشته شده است
// پیچیگی زمانی این تابع O به توان 2 است
function findRepeatChar(string) {
  for (let i = 0; i < string.length; i++) {
    for (let j = i + 1; j < string.length; j++) {
      if (string[i] === string[j]) {
        return string[i];
      }
    }
  }
}
console.log(findRepeatChar(message)) //خروجی => l


// پیاده سازی تابع بالا با استفاده از hash table
// یعنی نوشتن بصورت آبجکتی
// پیچدگی زمانی O(n)
function findRepeatCharHash(string){
    const table = {}

    for(let char of string){
        if(table[char]){
            return char
        }

        table[char] = 1
    }
}
console.log(findRepeatCharHash(message)) //خروجی => l






