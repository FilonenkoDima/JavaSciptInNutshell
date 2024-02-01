"use strict";

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;

      // Creating NEW vatiable with same name as outer scope's variable
      const firstName = "Steven";

      // Reassignment outer scope's variable
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }

      output = "NEW OUTPUT";
    }
    //   console.log(str);
    console.log(millenial);
    //  console.log(add(2, 3));

    console.log(output);
  }
  printAge();
  return age;
}

const firstName = "Dima";
calcAge(1990);
// console.log(age);
// printAge();
