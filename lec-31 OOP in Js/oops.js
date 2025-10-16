const user = {
    userName: "SarthakBari",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database.");
        console.log(`userName: ${this.userName}`);
        // console.log(this); 
    }
}
console.log(user.userName);
console.log(user.getUserDetails());
// console.log(this);

function User(username, loginCount, isloggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isloggedIn = isloggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`)
    }

    return this
}

const userOne = new User("Sarthak", 13, true)
const usertwo = new User("Bari", 12, false) 
console.log(userOne );
console.log(usertwo);