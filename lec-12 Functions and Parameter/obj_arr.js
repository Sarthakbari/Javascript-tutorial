//******************************** objects And Arrays **********************************************

// this is for Object
// ... this means rest operator and spread operator 
function calculateCartPrice (val1, val2, ...num1){
    return num1     
}

// console.log(calculateCartPrice(200, 400, 100, 300));

const user = {
    username: "heyBuddy",
    age: 18
}

// backtick ``
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} & his age is ${anyObject.age}`);
}
// handleObject(user)

// This is also way 
// handleObject({
//     username: "heybuddy",
//     age: 18
// })

// this is for Array

const myArray = [1000, 2000, 3000, 4000]

function AnyArray(Arr){
    return Arr[1]
}
// console.log(AnyArray(myArray));
// console.log(AnyArray([100, 200, 300, 400]));

const mySecArray = [1000, 2000, 3000, 4000];

function SecArraysValue(arr) {
    console.log(`This is your Array: ${arr[1]}`);
}

// SecArraysValue(mySecArray);
