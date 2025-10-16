// let myName = "Sarthak       "

// console.log(myName.truelength);
// console.log(myName.trim().length);

let myHeros = ["thor","spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getspidermanPower: function(){
        console.log(`spidy power is ${this.spiderman}`);
        
    }
}

Object.prototype.Sarthak = function(){
    console.log(`Sarthak is present in all on bject`);
    
}

Array.prototype.heySarthak = function(){
    console.log(`Sarthak Says hello !`);
}

heroPower.Sarthak()
// myHeros.Sarthak()
myHeros.heySarthak()
// heroPower.heySarthak()  // here error will come there is no path because this is array

// Inheritance

const user = {
    name: "Chai",
    email: "Chaitea@gmail.com"
}

const teacher = {
    makeVideo: true
}
const teacherSupport = {
    isAvailable: false
}
const TAsupport = {
    makeAssignment: 'JS assignment',
    fulltime: true, 
    __proto__: teacherSupport
}

teacher.__proto__ = user 

// morden syntax

Object.setPrototypeOf(teacherSupport, teacher)
let anotherUserName = "ChaiAurCode    "

String.prototype.truelength = function(){
    console.log(`${this}`);
    console.log(`true length is : ${this.trim().length}`);
    
}
anotherUserName.truelength()
"Sarthak  ".truelength()