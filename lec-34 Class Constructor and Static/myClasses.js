// * ES6

class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }
  encryptPassword() {
    return `${this.password}abc`;
  }
  changedUserName() {
    return `${this.username.toUpperCase()}`;
  }
}

const sarthak = new User("Sarthak", "barisarthak@gmail.com", "123");

console.log(sarthak.encryptPassword());
console.log(sarthak.changedUserName());

//* behind the scene

// function User(username, email, password) {
//   this.username = username;
//   this.email = email;
//   this.password = password;
// }

// User.prototype.encryptPassword = function () {
//   return `${this.password}1234`;
// };

// User.prototype.changedUserName = function(){
//     return `${this.username.toUpperCase()}`;
// }

// const hey = new User("Sarthak","barisarthak@gmail.com", "abcd" )

// console.log(hey.encryptPassword())
// console.log(hey.changedUserName())