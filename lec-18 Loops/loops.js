// For loop
// control +d

for (let i = 0; i < 10; i++) {
    const element = i; 
    if(element == 5){
        // console.log("5 is taken out!");
    }
    // console.log(element);
}
// console.log(element);

for (let i = 0; i <= 10; i++) {
//     // console.log(`Outer loop value: ${i}`);
    for (let j = 0; j <= 10; j++) {
//     // console.log(`Inner loop value: ${j} and Inner loop ${i}`);  
//     // console.log(i + '*' + j + ' = ' + i*j);
    }
}

let myArray = ["Sarthak", "Batman", "IronMan", "Flash"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element); 
}

// break and continue

for (let index = 1; index < 20; index++) {
    if (index == 5) {
        // console.log("5 Number is Detected");
        break
    }
    // console.log(`Value of i is ${index}`);
}

for (let k = 2; k < 13; k++) {
    if(k == 10){
        // console.log("10 number will remained me");
        continue
    }
    // console.log(`Value is ${k}`);
}
