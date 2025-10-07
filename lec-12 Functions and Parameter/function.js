// Functions And Parameter

// return ke baad console.log or something code to run voo print nahi hoga  

function myName() {
    console.log("Hey");
}
// myName()

// number1 and number2 are parameters
// addTwoNumbers(2, 4) 2 and 4 are arguments

// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2);
// }
// addTwoNumbers(2, 4)

function addTwoNumbers(number1, number2) {
    let result = number1 + number2 
    // console.log("Sarthak");  // this will print
    return result
    // console.log("Sarthak");  // this will not print because of this line of code is below the return function. return ke niche nahi chalta code .

    // return number1 + number2
}

const result = addTwoNumbers(13, 2)
// console.log("Result:", result);

// if(!Username){} this also same meaning.
function LogInUser(Username = "Sarthak") {
    if(Username=== undefined){
        console.log("Please enter a Username!");
        return
    }
    else{
        console.log("Correct Username thank you for logIn.");

    }
    return `${Username} your logged In`
}
// LogInUser("Sarthak")  // this will give nothing output we use return then we have to use console.log
// console.log(LogInUser("Sarthak"));
console.log(LogInUser());