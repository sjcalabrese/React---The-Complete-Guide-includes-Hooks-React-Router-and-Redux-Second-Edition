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

// const user = {
//   name: "Max",
//   age: 34,
//   greet() {
//     console.log("Hello");
//   },
// };
// console.log(user);
// console.log(user.name);
// user.greet();

// class User {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   greet() {
//     console.log("Hi from class");
//   }
// }

// //! to use a class it needs to be instantiated
// const user1 = new User("Manuel", 35);
// console.log(user1);
// user1.greet();

//? Arrays*******************************************************

// const hobbies = ["sports", "cooking", "Reading"];
// console.log(hobbies[1]);

// hobbies.push("Working");
// console.log(hobbies);
// const index = hobbies.findIndex((item) => {
//   return item === "sports";
// });
// console.log(index);
// const indexShortened = hobbies.findIndex((item) => item === "sports");
// console.log(indexShortened);

// //! this will return a new array with the "!" mapped to it
// let editedHobbies = hobbies.map((item) => item + "!");
// console.log(editedHobbies);

// let editedHobbiesObjects = hobbies.map((item) => ({ text: item }));
// console.log(editedHobbiesObjects);

//? Destructuring arrays***************************************************

// const userNameData = ["max", "Schwarzmuller"];
// //! This is one way to separate the names
// const firstName = userNameData[0];
// const lastName = userNameData[1];
//! this is the other way to do it
// const [firstName, lastName] = ["max", "Schwarzmuller"];
// console.log(firstName);
// console.log(lastName);

// //! you can either use the same name as the property name, or you can create an aliase using ":"
// const { name: userName, age } = {
//   name: "max",
//   age: 35,
// };

// console.log(userName);
// console.log(age);

//? Spread Operator***************************************************

// const hobbies = ["Sports", "Cooking"];
// const user = {
//   name: "Max",
//   age: 53,
// };

// const newHobbies = ["Reading"];
// //! Spread operator is 3 dots
// const mergedHobbies = [...hobbies, ...newHobbies];
// console.log(mergedHobbies);
// //! Can also be used on objects
// const extendedUser = {
//   isAdmin: true,
//   ...user,
// };
// console.log(extendedUser);

//? control Stuctures**************************************************************

//const password = prompt("Your Password");

// if (password === "Hello") {
//   //TODO
//   console.log("Hello Works");
// } else if (password === "hello") {
//   console.log("hello works");
// } else {
//   console.log("Access not granted");
// }

// const hobbies = ["Sports", "Cooking"];
// for (const hobby of hobbies) {
//   console.log(hobby);
// }

//? Using function as value ***********************************************

// function handleTimeout() {
//   console.log("Timed Out!");
// }

// const handleTimeout2 = () => {
//   console.log("Timed Out Again!");
// };

// // pass the function withough the () at the end to pass is as a value and not to execute
// setTimeout(handleTimeout, 2000);
// setTimeout(handleTimeout2, 3000);
// setTimeout(() => {
//   console.log("more timeouts ");
// }, 4000);

//! Can also create functions that take in functions
// function greeter(greetFn) {
//   greetFn();
// }

// greeter(() => {
//   console.log("hi");
// });

//? function inside a function*******************************************************

// function init() {
//   function greetings() {
//     console.log("hi");
//   }
//   greetings();
// }
// init();


//? Reference vs Primitive Values

/* Strings and numbers are primitives and cannot be edited however when changes
changes are made a new string will be created */

let userMessage= 'hello';
userMessage = userMessage.concat('!!!');

//! Arrays are references, so they can be edited.
//! this is what allows you to change hobbies even though it's const
//! You are not editing the place in memory, const just prevents a variable 
//! from being overwritten like what happens when updating a string
const hobbies = ["Sports", "Swimming"]
//! trying to overwrite the variable doesn't work.
hobbies = [];
hobbies.push("Working")
console.log(hobbies);
