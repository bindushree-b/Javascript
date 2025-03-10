const user = {
    username: "Bindu",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`)
        console.log(this)
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this)

//global object is window object in browser

// function chai() {
//     let username = "Bindu"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "Bindu"
//     console.log(this.username)
// }

const chai = () => {
    let username = "Bindu"
    console.log(this)
}

// chai()

// basic arrow function
// const addTwo =  (num1 , num2) => {
//     return num1 + num2 
// }

// {} ==> return keyword necessary ==> explicit
// () ==> return keyword not neceaasary ==> implicit
//implicit return
// const addTwo =  (num1 , num2) =>   num1 + num2 

// const addTwo =  (num1 , num2) =>   (num1 + num2) 

const addTwo =  (num1 , num2) =>  ({username:"Bindu"})

console.log(addTwo(3,4))

// const myArray= [2,5, 3, 7, 8]
//  myArray.forEach()