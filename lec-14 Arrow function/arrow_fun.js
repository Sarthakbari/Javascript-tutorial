const useer = {
    Username: "Riy",
    Price: 12,

    welcomeMessage: function(){
        console.log(`${this.Username} Welcome to Website.`);
        console.log(this);
        
    }
}
useer.welcomeMessage()
// useer.Username = "Riya"
// useer.welcomeMessage()

// console.log(this);
function Chai (){
    let userName = "Sarthak"
    // console.log(this.userName);
}
// Chai()

// ************************Arrow fun ***************************
const ChaiAurCode = () => {
    let USERNAME = "SARTHAK"
    // console.log(this);
}
// ChaiAurCode()

// () => {}     this is Arrow function


// const addTwo = (num1, num2) => {
//     return num1 + num2         
// }
// console.log(addTwo(2, 4));


// const addTwo = (num1, num2) => num1 + num2 
// console.log(addTwo(2, 4));

const addTwo = (num1, num2) => (num1 + num2) 
console.log(addTwo(2, 4));

// const addTwo = (num1, num2) => ({username: "SARTHAK"} )

