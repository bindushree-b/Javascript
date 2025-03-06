// Date

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString())
// console.log(typeof myDate) //object

// let myCreatedDate = new Date(2025, 2, 6 )
// let myCreatedDate = new Date(2025, 2, 6, 5, 3 )
// let myCreatedDate = new Date("2025-03-06")
let myCreatedDate = new Date("03-06-2025")
// console.log(myCreatedDate.toLocaleString())

let myTimeStamp = Date.now()
// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime())
console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth()+1)
console.log(newDate.getDay())


newDate.toLocaleString('default',{
    weekday: "long"
})


// toDateString         =>  Fri Sep 06 2024
// toISOString          =>  2024-09-06T10:45:46.999Z

// toJSON                =>  2024-09-06T10:45:46.999Z
// toLocaleDateString   =>  06/09/2024

// toLocaleString       =>  06/09/2024, 4:45:46 pm
// toLocaleTimeString   =>  4:45:46 pm

// toString             =>  Fri Sep 06 2024 16:45:46 GMT+0600 (Bangladesh Standard Time)
// toTimeString         =>  16:45:46 GMT+0600 (Bangladesh Standard Time)

// toUTCSting           =>  Fri, 06 Sep 2024 10:45:46 GMT