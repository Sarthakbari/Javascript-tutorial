// Important topic for js how to js Code Execution And Call Stack use  
// Java Script Code Execution And Call Stack 

// Java Script Code Execution best Example  

let val1 = 10
let val2 = 5
function addNum(num1, num2){
    let total = num1 + num2 
    return total
}
let result1 = addNum(val1, val2)
let result2 = addNum(10, 2)
console.log(result1);
console.log(result2);

// Call Stack 

// function one(){
//     console.log("one");
// }
// function two(){
//     console.log("Two");
// }
// function three(){
//     console.log("three");
// }
// one()
// two()
// three()

function one(){
    console.log("one");
    two()
}
function two(){
    console.log("Two");
    three()
}
function three(){
    console.log("three");
}
one()
two()
three()