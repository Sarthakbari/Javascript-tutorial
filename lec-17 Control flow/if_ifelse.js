// If-else Statement

// const temp = 40

// if (temp === 50) {
//     console.log("less then 50!");    
// }
// else{
//     console.log("temp is greater then 50")
// }

// this single = means operater assignment
// <, <, <=, >=, == (double == means checking value), !=, === (triple === means checking the type of data)


// this is block scope   here power is not Define  

// here const power = "fly" this is only for if statement if ke bahar nahi jaye ga isliye power is not define aata hai.
// const score = 100

// if (score > 50) {
//     const power = "fly"
//     console.log(`user power: ${power}`);
// }
// console.log(`user power: ${power}`);


// const balance = 1000

// if(balance < 500){
//     console.log("less than 500 ");
// }else if (balance < 750) {
//     console.log("less than 750");
// } else {
//     console.log("less than 1200");   
// }

// this (or)||  
const user = true
const debitCard = true
const loggedInGoogle = false
const loggedInEmail = true

if (user && debitCard) {
    console.log("Allow to buy anything");
}
if (loggedInGoogle || loggedInEmail) {
    console.log("user logged In");
    
}