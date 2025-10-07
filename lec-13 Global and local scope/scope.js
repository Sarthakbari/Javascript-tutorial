// Global And Local Scope
// Starting From Let, var and const
var c = 300  // Global scope

if (true){
    let a = 10
    const b = 20     // block scope
    var c = 30
}


// console.log(a); 
// console.log(b);
// console.log(c); 

// That's why we are not use  var.

// {}  // this is scope


// ****************************Scope Level And Mini Hoisting*********************
function one(){
    const username = "Sarthak"

    function two(){
        const website = "Youtuber"
        // console.log(username);
    }
    // console.log(website);
    
    // two()
}
// one()


function one(){
    const username = "Sarthak"

    function two(){
        const website = "Youtuber"
        console.log(username);
    }
    // console.log(website);
    
    // two()
}
// one()



if (true) {
    const userName = "Hey Buddy"
    if (true) {
        const onlineWebsite = " GitHub"
        // console.log(userName + onlineWebsite);
    }
    // console.log(onlineWebsite);
}
// console.log(userName);

// **************************** Interesting *******************************
// Hoisting

// console.log(addOne(5));

function addOne (Num){  // decelaration 
    return Num + 1
}

// this will not run 

// console.log(addTwo(5));

const addTwo = function (Num){   // variable decelaration 
    return Num + 2
}