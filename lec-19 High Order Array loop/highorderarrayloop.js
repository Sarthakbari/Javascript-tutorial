// For of 
// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);   
}

const greetings = "Hello World"
for (const greet of greetings){
    // console.log(`Each char is ${greet}`);
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United State Of America")
map.set('Fr', "france")
map.set('IN', "India")

// console.log(map);

for (const key of map) {
    // console.log(key);
}

for (const key in map) {
    // console.log(key);
}

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

const myObj = {
    'Game1' : 'Cricket',
    'Game2' : 'NFS'
}
// for (const [key, value] of myObj) {
//     console.log(key, ':-', value);  // this is not iterrable
// }

// for in

const myObj1 = {
    'Game1' : 'Cricket1',
    'Game2' : 'NFS2'
}
for (const key in myObj1) {
    // console.log(`${key} games is ${myObj1[key]}`);
}

const programming = ["js", "java", "python", "cpp"]
for (const key in programming) {
    // console.log(key);
    // console.log(programming[key]);
}

// For Each loop
const code = ["js", "ruby", "Py", "cpp"]

// code.forEach( function (val) {
//     console.log(val);
// } )

// code.forEach( (item)=>{
//     console.log(item);
// })

// function printMe (item){
//     console.log(item);
// }
// code.forEach(printMe)

// code.forEach( (item, index, arr)=>{
//     console.log(item, index, arr);
// } )

const MyCode = [
    {
        languageName : "JavaScript",
        languageFileName :"Js"
    },
    {
        languageName : "Python",
        languageFileName : "py"
    },
    {
        languageName : "Java",
        languageFileName : "Java"
    },
]
MyCode.forEach( (item)=>{
    console.log(item.languageName);
} )