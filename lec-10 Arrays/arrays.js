// Array Part 1

// const myArr = [1, 2, 3, 4, 5]
// console.log(myArr[1]);


// Array Method 
// myArr.push(6)
// myArr.pop(7)
// myArr.unshift(9)
// myArr.unshift(1)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// console.log(myArr);


// Slice & Splice

// console.log("A", myArr);
// const newArr = myArr.slice(1, 3)

// const secArr = myArr.splice(1, 3)
// console.log(newArr);
// console.log(secArr);


//  Array Part 2

const Marvel_heros = ["Thor", "Ironman", "Spiderman"]
const dc_heros = ["Superman", "batman", "Flash"]

// Marvel_heros.push(dc_heros)

// console.log(Marvel_heros);

// concat and spread are same now we use spread

// const allHeros = Marvel_heros.concat(dc_heros)
// console.log(allHeros);

// const newAllHeros = [...Marvel_heros, ...dc_heros]
// console.log(newAllHeros);

const anotherArr = [1, 2, 3, [4, 5, 6], 13, 14, 28, [7, 8]]

// const realAnotherArr = anotherArr.flat(Infinity)
// console.log(realAnotherArr);

console.log(Array.isArray("sarthak"));
console.log(Array.from("sarthak"));
console.log(Array.from({name: "Sarthak"}));  // interesting

let score1 = 13
let score2 = 14
let score3 = 28

console.log(Array.of(score1, score2, score3));