// Math OPerations
let currentDate = 2021;
const myAge = currentDate - 1998; // subtraction
console.log(myAge);

console.log(2 * 2); // multiplication
console.log(45 / 3); //division
console.log(2 ** 3); // i.e 2*2*2
console.log(43 % 2); // mod = remainder

console.log(22 + 0.3); // addition

let fName = 'Shikshya';
let lName = 'Gautam';
console.log(fName + ' ' + lName); // string concatenation

// Assingment Operators
let x = 10;
console.log(x);
x += 10; // x= x+10 = 20
x -= 4; // x = x-4 = 16
x *= 3; // x= x*3 = 48
x /= 2; // x = x/2 = 24
x--; // x = x-1 = 23
x++; // x = x+1 = 24
console.log(x);

// Comparision Operators (>,<,>=,<=)

let a = 5;
let b = 3;

console.log(a > b); //true
console.log(a < b); // false
console.log(a >= 5); //true
console.log(a <= 2); // false

//OPerator precedance

let f, g;
f = g = 25 - 10 - 5;
console.log(f, g);

let age1 = 2021 - 1998;
let age2 = 2021 - 2002;

const averageAge = (age1 + age2) / 2;
console.log(age1, age2, averageAge);
