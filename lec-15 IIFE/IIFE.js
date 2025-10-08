// Immediately Tnvoked Function Expressions.

// Two IIFE ek Sath kar na hoga toh ; sysmbol is use

// This is Name IIFE means Chai
(function Chai (){
    // named IIFE
    console.log(`DB CONNECTED`);
})();  // AT the End of the code we have to Do ();

// This is unnamed IIFE means Arrow fun.
( (name) => {
    console.log(`HEY CONNECTED TO ${name}`);
    
})('SARTHAK')