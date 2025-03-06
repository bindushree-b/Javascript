const score = 400
// console.log(score)

const balance = new Number(100)
// console.log(balance)

// console.log(balance.toString().length)
// console.log(balance.toFixed(4));

const otherNumber = 123.8766
// console.log(otherNumber.toPrecision(4))

const hunderds = 100000
// console.log(hunderds.toLocaleString('en-IN'))

// ****************** Maths ************************

// console.log(Math)
// console.log(Math.abs(-9))
// console.log(Math.round(6.4))
// console.log(Math.ceil(4.2))
// console.log(Math.floor(5.9))
// console.log(Math.min(2,4,7))
// console.log(Math.max(67,3,4))

console.log(Math.random()) //between 0-1
console.log((Math.random()*10)+1) // 1 to 11
console.log(Math.floor(Math.random()*10)+1) // 1to 10

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1) )+ min)

// Math.random()	                       0 to 1 (exclusive)	Decimal
// (Math.random() * 10) + 1	               1 to 11 (exclusive)	Decimal
// Math.floor(Math.random() * 10) + 1	   1 to 10 (inclusive)	Integer