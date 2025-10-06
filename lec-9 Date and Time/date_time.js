//  Date and Time...

let myDate = new Date()
// console.log(typeof myDate);
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());

// When we use method we Should () to end of method to run the method...
// Months are start from 0..
// let myCreatedDate = new Date (2024, 0, 9)
// let myCreatedDate = new Date (2024, 2, 9, 5, 3)
// let myCreatedDate = new Date ("2024=03-09")  // (YY /MM /DD)
let myCreatedDate = new Date ("03-09-2024")   // (MM/ DD/ YY) we most use
// console.log(myCreatedDate);
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());
// console.log(myCreatedDate.getTime());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
console.log(Math.floor(Date.now()/1000));


let newDateMyself = new Date()
// console.log(newDateMyself);
// console.log(newDateMyself.getDay());
// console.log(newDateMyself.getMonth() + 1);
// console.log(newDateMyself.getFullYear());


// `${newDateMyself.getDay()} and the time `

// newDateMyself.toLocaleString('default', {
//     weekday: 'long',
//     day: '2-digit',
//     calendar: 'Date',
// })
// console.log(newDateMyself)
