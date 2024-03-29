//! To import something you need to use keyword import {} and from to designate the pat
//! it came from

//! to import a single variable
//import { apikey } from "./util.js";
//! to import a defaul export
//import apiKey from "./util.js";
//! to import multiple export items there are 2 ways
//import { apikey, abc } from "./util.js";
//! This imports it as a javascript object
import * as util from "./util.js";
//console.log(apiKey);
//! To print out whwen using the javascript object way you will need to call the specific
//! item from the object to log
// console.log(util.apikey);
// console.log(util.abc);

// //!this funciton doesn't do anything until called
// function greet() {
//   console.log("Hello");
// }
// //! this is calling the function to perform it's action.
// greet();

// /**
//  * This function is used to greet a user with their name and a message
//  * @param {string} userName - The name of the user to greet
//  * @param {string} message - The message to include in the greeting
//  */
// function greetWithParams(userName, message) {
//   console.log("Hello " + userName + " " + message);
// }
// greetWithParams("Sal", "World");

// function greetWithReturnValue(userName, message = "Hello!") {
//   return "Hi, I am " + userName + ", " + message;
// }

// let greeting = greetWithReturnValue("Sal", "Hi");
// console.log(greeting);
// //! To impove readability use variable
// const greeting1 = greetWithReturnValue("Sal");
// console.log(greeting1);

//? Arrow functions *****************************************
// let userName = "Sal";
// let message = "Hello";
// let greeting = (userName, message) => "Hello " + userName + " " + message;
// console.log(greeting);

// let hello = "";
// hello = () => {
//   return "Hello World";
// };
// console.log(hello);

//?Objects *****************************************************

const user = {
  name: "Max",
  age: 34,
  greet() {
    console.log("Hello");
  },
};
console.log(user);
console.log(user.name);
user.greet();

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log("Hi from class");
  }
}

//! to use a class it needs to be instantiated
const user1 = new User("Manuel", 35);
console.log(user1);
user1.greet();
