// Singleton
// Object.create

// Object Literals

// const jsUser = {} this is mt Object

const mySym = Symbol("Key1")

const jsUser = {
    name: "Sarthak",
   " full name": "Sarthak Mahesh Bari",
    age: 18,
    [mySym]: "myKey1",
    mySym: "myKey1",
    location: "Mumbai",
    email: "Sarthakbari@google",
    isLoggedIn: false, 
    LastLoginDay: ["Monday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser.full name);  this is not valid
// console.log(jsUser[" full name"]);
// console.log(jsUser[mySym])


// Object.freeze(jsUser)
// jsUser.email = "Sarthak@google.com"
// console.log(jsUser["email"]);

// console.log(jsUser);

// jsUser.greeting = function () {
//     console.log("Hello World");   
// }

// jsUser.greetingTwo = function () {
//     console.log(`Hello World, ${this.age}`);   
// }

// console.log(jsUser.greetingTwo());

// console.log(jsUser.greeting());
// console.log(jsUser.greeting);
