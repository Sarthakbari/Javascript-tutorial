// this all are true
// false == 0 , false =='' , 0== ''

const email = "Sarthak@google.com"

if(email){
    console.log("got usre emailId!");
} else{
    console.log("don't have user emailId!");
}

const userEmail = ""

if(userEmail){
    console.log("got usre emailId!");
} else{
    console.log("don't have user emailId!");
}

/*
falsy values:-

false, 0, -0, BigInt 0n, "", null, undefined, NaN

truthy values:-

"0", "false", " ", [], {}, function(){} (empty fun)
*/

// to check empty array

// if(userEmail.length === 0){
//     console.log("Array is empty");
// }

const emptyObj = {}

if(Object.keys(emptyObj).lenght === 0){
    console.log("Object is empty!");   
}

// Nullish Coalescing operator (??): null undefined

let val1; 
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 15 

// console.log(val1);


// ternary Operator

// condition ? true : false

// const iceTeaPrice = 100
// iceTeaPrice <= 80 ? console.log("less then 80") : console.log("more then 80")

