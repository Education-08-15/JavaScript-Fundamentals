'use strict';

// function date() {
//   let x = 22;
//   return 20 + this.x; // this is undefined
// }
// console.log(date());

console.log(this);

//this in simple function
const calcAge = function (birthYear) {
  console.log(2021 - birthYear);
  console.log(this);
};
calcAge(1998);

//this in arrow
const calcAgeArrow = (birthYear) => {
  console.log(2021 - birthYear);
  console.log(this);
};
calcAgeArrow(1990);

//this keyword in a method
const info = {
  name: 'Code',
  year: 1998,
  calcAge: function () {
    console.log(this);
    return 2021 - this.year;
  },
};
let output = info.calcAge();
console.log(output);
console.log(info.name);

const matilda = {
  year: 2017,
};

matilda.calcAge = info.calcAge; // method burrowing
console.log(matilda.calcAge());

const f = info.calcAge();
const g = matilda.calcAge();

console.log('-----------');
//regular func vs arrow func
// var firstName = 'Me';
const jonas = {
  firstName: 'Jonas',
  year: 1998,
  calcAge: function () {
    // console.log(this);
    console.log(2021 - this.year);
    //solution  1
    // const self = this;
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);

    // };

    //solution 2
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },
  greet: () => {
    console.log(`Hey ${this.firstName}`);
  },
};
// jonas.greet();
jonas.calcAge();
// console.log(this.firstName);

//arguments
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExpr(2, 5);
addExpr(1, 2, 6);

let addArrow = (a, b) => {
  console.log(arguments); //cannot access arguments using arrow func
  return a + b;
};
addArrow(3, 4);
