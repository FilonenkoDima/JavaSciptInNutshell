"use strict";

console.log(this);

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAge(2003);

const calcAgeArrow = (birthYear) => {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAgeArrow(1990);

const dima = {
  year: 2003,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
dima.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = dima.calcAge;
matilda.calcAge();

const f = dima.calcAge;
f();
