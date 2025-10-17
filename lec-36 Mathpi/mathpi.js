// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descripter);

const Chai = {
    name: "ginger Chai",
    price: 200,
    isAvailable: true,

    orderChai: function(){
        console.log("Chai Nahi Bani");
        
    }
}

// console.log(chai);
console.log(Object.getOwnPropertyDescriptor(Chai, "name"));

Object.defineProperty(Chai, "name", {
    // writable: false,
    // enumerable: false
    enumerable: true
})
console.log(Object.getOwnPropertyDescriptor(Chai, "name"));

for (let [key, value] of Object.entries(Chai)) {
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);
    }
}