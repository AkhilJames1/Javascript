console.clear()
let user = {
    firstName: "John",
    sayHi(a) {
      console.log(`Hello, ${this.firstName}!`);
      return a;
    },
    sayBye() {
        console.log(`Hello, ${this.firstName},${this.sayHi('Hai')} !`);
      }
  };
  
//   setTimeout(function(){ 
//     user.sayHi()}, 1000);
user.sayHi()


let newUser = {...user}

newUser.firstName = "Tony"
console.log(newUser)
newUser.sayHi()
user.sayHi()
user.sayBye() 