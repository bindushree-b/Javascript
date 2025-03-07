function sayMyname(){
    console.log("B");
    console.log("i");
    console.log("n");
    console.log("d");
    console.log("u");
}

// sayMyname()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2)
// }

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
}

// addTwoNumbers(3,5)
const result = addTwoNumbers(3,5)

// console.log("Result:", result)


function loginUserMessage(username = "Sam"){
    if(!username){  //username === undefined
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`

}

console.log(loginUserMessage("Bindu"))
// console.log(loginUserMessage())

// Key takeaways:
// 1. Use of functions and also difference b/w parameter and arguments  
// 2. Concept of returning a function, which can accessed while declaring the function call as a variable outside of the function
// 3. If a function having parameters and in the function call we don't pass any arguments then it's says undefined and Not NULL since, its not defined yet.
// 4. To avoid the above situation we also can pass a default value in the parameter itself.

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "Bindu",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 299
}) 

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray)
{
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200, 400, 100, 600]))