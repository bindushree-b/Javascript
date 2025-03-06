// Decleration of objects
// 1 Literal 
// 2 constructor

//Singleton
// created with literal => no singleton
// created with constructor => singleton yes

// objects literals
// Object.create => Constructor

const mySym = Symbol("key1")

const JsUser = {
    name: "Bindu", // by default key is string
    "full name" : "Bindu Shree",
    [mySym] : "mykey1",
    age: 20,
    location: "Bangalore",
    email: "Bindu@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log( typeof  JsUser[mySym])

JsUser.email = "BinduAchatgpt.com"
// Object.freeze(JsUser)
JsUser.email= "bindu@microsoft.com"
// JsUser.name = "bin"
// console.log(JsUser.name)
// console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello Js User");
}

JsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`);
}

console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())

