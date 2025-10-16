class User {
    constructor(userName){
        this.userName = userName
    }
    logMe(){
        console.log(`USERNAME is ${this.userName}`);   
    }
}

class teacher extends User{
    constructor(userName, email, password){
        super(userName)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`New course was add by ${this.userName}`);
    }
}

const newOne = new teacher("Riya", "riya@google.copm", "123456")
console.log();
newOne.addCourse()
newOne.logMe()

const newTwo = new User("Sarthak")
// newTwo.addCourse()  // access is not there 
newTwo.logMe()

console.log(newOne === newTwo);
console.log(newOne === teacher);
console.log(newOne instanceof User);
console.log(newOne instanceof teacher);
