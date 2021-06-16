// syntax:
// function funcName() {}

function fname() {
  console.log('I am Shikshya');
}
fname(); // invoking a function
fname();
fname();

// passing parameters we can reuse a function by passing different argument values

function fName(name) {
  console.log(`I am ${name}`);
}
fName('Sandhya');
fName('Susma');
fName('Muna');

function calcAge(birthYear) {
  const age = 2021 - birthYear;
  return age;
}
const result = calcAge(1998);
console.log(result);

//function expression
const calcAge1 = function (birthYear) {
  return 2021 - birthYear;
};
const result1 = calcAge1(2002);
console.log(result1);

// calling function inside other function

function sum(a, b) {
  return a + b;
}

function result2(cb, num) {
  return cb * num;
}
console.log(result2(sum(3, 3), 5));

function fruitPieces(fruit) {
  return fruit * 3;
}
function fruitJuice(apples, oranges) {
  const applePieces = fruitPieces(apples);
  const orangePieces = fruitPieces(oranges);
  return `I want ${applePieces} apples  and ${orangePieces} oranges to make a mixed juice `;
}

console.log(fruitJuice(2, 4));
