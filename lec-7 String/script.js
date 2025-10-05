const name = "Sarthak "
const Number = 13 

// Another way to right string
const gameName = new String('BGMI')
console.log(gameName);
console.log(gameName[0]);
// console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toLowerCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('G'));
console.log(gameName.substring());

const newString = gameName.substring(0,3)   // here -ve value cannot consider. If u give -ve value then they consider as 0.
console.log(newString);



// console.log(name + Number + 'His Fav no');  This is not much use...

// This is new version to use how we can add multiple content..
console.log(`Hey My Name is ${name} and My Number is ${Number}`);


// const anotherString = gameName.slice(-2, 1)
// console.log(anotherString);

const b = '   HelloWorld   '
console.log(b);
console.log(b.trim());

const url = "https://sarthak.com/Sarthak%20bari"
console.log(url);
console.log(url.replace('%20', '-'));
console.log(url.includes('sarthak'));