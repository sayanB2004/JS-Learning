// PRIMITIVE

// 7 Types : Strings, Number, Boolean, null, undefined, Symbol, BigInt

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId); // false
//const bigNumber = 1234567986588n;  #TYPE OF = bigInt
const data = null;  // Type of = OBJECT


// Dynamically typed

// Reference (Non primitive)

// Array, Objects, Functions


const sports = ["Cricket", "MMA", "Tennis"]

let myObj = {
    name : "Sayan",
    age : "22"
}


const myFunction = function () {
    console.log("hello world");
}  // Type of = Object Function 

console.log(typeof bigNumber);
console.log(typeof data);
console.log(typeof myFunction);




