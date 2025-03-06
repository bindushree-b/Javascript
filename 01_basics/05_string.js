const name = "Bindu"
const repoCount = 20

// console.log(name + repoCount + " value") not recomended

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);


const gameName = new String('Bindu sajjan')

console.log(gameName[0])
console.log(gameName.__proto__)

console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.toLowerCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('n'))

const newString = gameName.substring(0,4)
console.log(newString)

const anotherString = gameName.slice(-2,4)
console.log(anotherString);

const newStringOne = "   Bindu   "
console.log(newStringOne)
console.log(newStringOne.trim())
console.log(newStringOne.trimEnd())

const url = "https://bindu.com/bindu%20sajjan"

console.log(url.replace('%20','-'))

console.log(url.includes('binduu'))

console.log(gameName.split('-'))