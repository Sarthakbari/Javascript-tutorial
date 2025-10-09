// filter means jo true hoga vahi pass hoga
// const coding = ["js", "ruby", "py", "Java"]

// const value = coding.forEach( (item) => {
//     // console.log(item);
//     return item 
// } )
// console.log(value);

const myNum  = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNum = myNum.filter( (num)=> num > 4 )

// const newNum = myNum.filter( (num)=> {
//     return num > 4   // {} this is scope here u have to use return 
// } )

// const newNum = []
// myNum.forEach( (num) => {
//     if (num > 4) {
//         newNum.push(num)
//     }
// })

// console.log(newNum);


const book = [
    { title: 'book one', genre: 'Maths', publish: 1981, edition: 2004},
    { title: 'book two', genre: 'Physics', publish: 1991, edition: 1995},
    { title: 'book three', genre: 'History', publish: 1999, edition: 1998},
    { title: 'book four', genre: 'Geo', publish: 1975, edition: 2000},
    { title: 'book five', genre: 'Chem', publish: 2000, edition: 2012},
    { title: 'book six', genre: 'Bio', publish: 1985, edition: 2017},
    { title: 'book seven', genre: 'Science', publish: 2005, edition: 2020},
    { title: 'book eight', genre: 'Hindi', publish: 1999, edition: 2023},
    { title: 'book nine', genre: 'Marathi', publish: 2010, edition: 2024},
]    

// let userbook = book.filter( (bk)=> bk.genre === 'Maths')

// userbook = book.filter( (bk) => {
//     return bk.publish > 2000  && bk.title === 'book seven'
// })
// console.log(userbook);

 // maps Method

 const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//  const newNumber = number.map( (num) => num + 10)
//  const newNumber = number.map( (num) => {return num + 10})
//  console.log(newNumber);
 
const newNumber = number
                  .map( (num) => num * 10)
                  .map( (num) => num + 1)
                  .filter( (num) => num >= 40)
                  
// console.log(newNumber);

// Reduce Method

const Number1 = [1, 2, 3, 4, 5]

// const Total = Number1.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
    
//     return acc + currval
// }, 3)

const Total = Number1.reduce( (acc, currval) => acc + currval, 0)

console.log(Total);

const ShoppingCard = [
    {
        itemName: "JS",
        price: 2000
    },
    {
        itemName: "PY",
        price: 1500
    },
    {
        itemName: "Data science",
        price: 2500
    },
    {
        itemName: "Mobile",
        price: 1900
    },
]
const pricePay = ShoppingCard.reduce((acc, item) => acc + item.price, 0)
console.log(pricePay);
