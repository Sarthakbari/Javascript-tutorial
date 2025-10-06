/*       Basics
1)Primitive 

7 types:- String, Number, Boolean, null, undefined, symbol, BigInt.

2)Reference (Non primitive)

Arrays, Objects, FUnctions.

Examples:-
*/

const score = 100 
const scoreValue = 100.13

const logged = false
const outSideTemp = null
let userEmail;

const Id = Symbol('123')
const anotherId = Symbol('123')

console.log(Id == anotherId);
// console.log(Id);
// console.log(anotherId);

// Arrays
const heros = ["shaktiman", "thor", "Iron_man"]


// Functions
const myFunction = function(){
    console.log("Hey buddy!");
}

// to Known Which Data Type we use :-
console.log(typeof myFunction);
console.log(typeof outSideTemp);


// bigInt
const BigNumber = 1234517273623747636476n

console.log(typeof BigNumber);