// Part 2
// singleton and constructer

// const tinderUser = new Object() // This is singleton Object
const tinderUser = {}  // This is non singleton Object

tinderUser.id = "1234sdr43"
tinderUser.name = "Thor"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regyularUser = {
    email: "riyangoogle.com",
    fullname: {
        userFullname: {
            firstname: "Pitbull",
            lastname: "Dog"
        }
    }
}

// console.log(regyularUser.fullname);
// console.log(regyularUser.fullname.userFullname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {6: "r", 7: "i"}
const obj5 = {8: "y", 9: "a"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign(obj1, obj2)
// const obj3 = Object.assign({}, obj1, obj2, obj4, obj5) //this is another method 

const obj3 = {...obj1, ...obj2, ...obj4, ...obj5}  //... means spread.

// console.log(obj3); 

const User = [
    {
        id: 1,
        emil: "s@google.com"
    },
    {
        id: 1,
        emil: "s@google.com"
    },  
]

User[1].emil

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));