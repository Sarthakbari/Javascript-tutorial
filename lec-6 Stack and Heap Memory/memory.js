// memories: stack and heap

// Stack (Primitive), Heap (Non-Primitive)

// Ex

let myChannel = "Sarthakbaridotcom"

let anotherName = myChannel
anotherName = "Tere-----Channel"
console.log(myChannel);
console.log(anotherName);

let userOne = {
    email: "user@google.com",
    upi: "user@bkl"
}

let userTwo = userOne 
userTwo.email = "Sarthak@google.com"
console.log(userTwo);

console.log(userOne.email);
console.log(userTwo.email);