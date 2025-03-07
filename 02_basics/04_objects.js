// const tinderUser = new Object()
const tinderUser = {}
 tinderUser.id = "123abc"
 tinderUser.name = "Sammy"
 tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullnmae:{
            firstname: "Bindu",
            lastname: "Sajjan"
        }
    }
}
// console.log(regularUser.fullname.userfullnmae.firstname)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = {obj1, obj2}
//  const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3)

const users = [
    {
        id: 1,
        email: "b@gmail.com"
    },
    {
        id: 1,
        email: "b@gmail.com"
    },
    {
        id: 1,
        email: "b@gmail.com"
    }
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty('isLoggedIn'))


// let Obj3 = { ...Obj1, ...Obj2 }; //Here I have used spread operator but in order to access I need to use []
// let Obj4 = Object.assign({}, Obj1, Obj2); //Best practice beacause it would not change the source object (Obj1)
// //let Obj4 = Object.assign(Obj1, Obj2); //Bad practice 
// console.log(Obj1); //It make changes in target Object as well.


const course = {
    coursename: "javascript",
    price: "999",
    courseInstructor: "Hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor)
console.log(instructor)

// const navbar = ({company}) => {

// }

// navbar(company = 'bindu')


// {
//     "name":"Bindu",
//     "coursename": "javascript",
//     "price": "free"
// }

// api can be in object or array form

[
    {},
    {},
    {}
]

// javascript object notation  => Json