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
console.log(util.apikey);
console.log(util.abc);

//!this funciton doesn't do anything until called
function greet() {
  console.log("Hello");
}
//! this is calling the function to perform it's action.
greet();

/**
 * This function is used to greet a user with their name and a message
 * @param {string} userName - The name of the user to greet
 * @param {string} message - The message to include in the greeting
 */
function greetWithParams(userName, message) {
  console.log("Hello " + userName + " " + message);
}
greetWithParams("Sal", "World");
