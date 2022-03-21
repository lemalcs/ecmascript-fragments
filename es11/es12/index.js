const string = "Javascript is wonderfill, with Javascript I can create the future of web."
const replacedString = string.replace("Javascript","Python")

console.log(replacedString)

// Replace all occurrences of a string
const replacedString2 = string.replaceAll("Javascript", "Python")
console.log(replacedString2)

class Message{
    // # makes a private member
    #show(val){
        console.log(val)
    }

    // get #add(val){
    //     "ss"
    // }
}

const message = new Message()
message.show("Hello!")

const promise1 = new Promise((resolve, reject) => reject("1"))
const promise2 = new Promise((resolve, reject) => resolve("2"))
const promise3 = new Promise((resolve, reject) => resolve("3"))

// Execution stops when a promise runs successfully
Promise.any([promise1, promise2, promise3])
    .then(response => console.log(response))

class anyClass{
    constructor(element){
        // Avoid garbage collection with `WealRef`
        this.ref = new WeakRef(element)
    }
}

let isTrue = true
let isFalse = false
console.log(isTrue &&= isFalse)

let isTrue2 = true
let isFalse2 = false
console.log(isTrue2 ||= isFalse2)

let isTrue3 = undefined
let isFalse3 = false
console.log(isTrue3 ??= isFalse)
// Same as
console.log(isTrue3 ??(isTrue3 = isFalse3))

