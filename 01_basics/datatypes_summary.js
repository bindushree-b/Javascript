// total => 8
// Primitive   => call by value // we can change only in the copy of variable

// 7 types : String , Number, Boolean, null, undefined, Symbol, bigint

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)

// const bigNumber = 2345567892345678903456n

// Reference (Non primitive 1) references given directly

// Array, Objects, Functions 

const heros = ["shaktiman", "nagaraj", "doga"];
let myObj = {
    name:"Bindu",
    age: 20,
} // inside curly braces => objects

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof anotherId)


// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function object
//        Object  =>  object

/* JavaScript is a dynamically typed language. Because data 
 type will automatically assigned at the time of compilation or code execution.*/


//  *********************** Memory ******************

// Stack(Primitive) we get copy, Heap(Non -primitive) // we get reference

let myName = "Bindu"

let anotherName = myName
anotherName = "bin"
console.log(myName);
console.log(anotherName);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "bindu@google.com"
console.log(userOne.email)
console.log(userTwo.email)

//datatypes are based on memory allocation
// Primitive datatypes->  call by value (string,number,boolean,null,undefined,BigInt,symbol) ->Stack memory

// Reference/Non primitive data types -> call by reference ( array,object, function) -> heap memory

// JavaScript is a dynamically typed language. This means that you don't need to specify the data type of a variable when you declare it.