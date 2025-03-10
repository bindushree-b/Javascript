
// var c = 200
let a = 300
if (true) {
    let a = 10;
    const b = 20;
    console.log("INNER: " ,a)
}
// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }

// console.log(a)
// console.log(b)
// console.log(c)

//child function can access parent variable

function one(){
    const username = "Bindu"

    function two(){
        const website = "youtube"
        // console.log(username);
    }

    // console.log(website)

    two()
}

// one()

if(true) {
    const username = "Bindu"
    if (username === "Bindu"){
        const website = " youtube"
        // console.log(username + website)
    }
    // console.log(website)
}
// console.log(username)

//********************** Intresting ********************
console.log(addone(5))
function addone(num){
    return num +1
}

addone(5)

const addTwo = function(num){
    return num + 1

}

addTwo()