const score = 400
console.log(score);

const favNumber = new Number(100)
console.log(favNumber);

console.log(favNumber.toString().length);
console.log(favNumber.toFixed(2));

const otherNumber = 1392.41510
console.log(otherNumber.toPrecision(5));

const hundreds = 1000000
console.log(hundreds.toLocaleString());
console.log(hundreds.toLocaleString('en-IN'));

//************************  Maths *************************

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.abs(4));
console.log(Math.round(5.3));
console.log(Math.ceil(5.3));  //upper value taken
console.log(Math.floor(5.9)); // lower value taken
console.log(Math.sqrt(4));
console.log(Math.min(2, 4, 7, 8, 3));
console.log(Math.max(2, 4, 7, 8, 3));

// Most Important Topic From Math Concepts Most Use 
console.log(Math.random());   //This value comes between 0-1
console.log(Math.random()+10);
console.log((Math.random()*10) +1);
console.log(Math.random()*10 +1);  //Here min value will be 1 because of +1. +1 because avoide 0 
console.log(Math.floor(Math.random()*10) +1); // FOR SINGLE VALUE


const min = 10 
const max = 20

//(Math.random()* (max - min + 1)) this is formula for identify the number is min or max
console.log(Math.floor(Math.random()* (max - min + 1)) + min)
