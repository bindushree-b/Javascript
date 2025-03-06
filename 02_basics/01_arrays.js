// Array

const myArr =  [ 0,1, 2, 3, 4, 5]
const myHeros = ["shaktiman","naagraj"]

const myArr2 = new Array(1,2,3,4)
// console.log(myArr[1])

//Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.unshift()

// console.log(myArr.includes(1))
// console.log(myArr.indexOf(19))

// const newArr = myArr.join()

// console.log(myArr)
// console.log(newArr)
// console.log(typeof myArr)
// console.log(typeof newArr)

// slice, splice

console.log("A", myArr);

const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B",myArr)

const myn2 = myArr.splice(1,3)
console.log(myn2)
console.log("C",myArr)


// Use Case	                                           Method to Use
// Extract part of an array without modifying it	   slice()
// Remove elements from an array	                   splice(start, deleteCount)
// Insert elements at a specific position	           splice(start, 0, newElements...)
// Replace elements with new ones	                   splice(start, deleteCount, newElements...)

