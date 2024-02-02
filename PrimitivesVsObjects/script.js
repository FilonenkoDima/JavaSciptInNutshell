"use strict";

/*
let age = 20;
let oldAge = age;
age = 21;
console.log(age);
console.log(oldAge);

const me = {
  name: "Dima",
  age: 20,
};

const friend = me;
friend.age = 27;
console.log("Me", me);
console.log("Friend", friend);
*/

// Primitive types
let lastName = "Williams";
let oldLastName = lastName;
lastName = "Davis";
console.log(lastName, oldLastName);

// Reference types
const jessica = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = "Davis";
console.log("Before marriage: ", jessica);
console.log("After marriage: ", marriedJessica);
// marriedJessica = {};

// Copying objects
const jessica2 = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
  family: ["Alice", "Bob"],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = "Davis";
console.log("Before marriage: ", jessica2);
console.log("After marriage: ", jessicaCopy);

jessicaCopy.family.push("Mary");
jessicaCopy.family.push("John");

console.log("Before marriage: ", jessica2);
console.log("After marriage: ", jessicaCopy);
