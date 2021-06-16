let age = 22;
console.log(age);
age = 23; // re-assingment
console.log(age);

const PI = 3.1415;
console.log(PI);
// PI = 3; //  throughs an error

// const birthYear  // throughs error missing initializer

// var is the old way of assigning the variables before ES2015 works  like let in most cases but not all it has some differences as well i.e var provides hoisting .  Let is block scope , var is fucntion scope

number = 10;
function math(num) {
  return num * number;
}
console.log(math(10));
var number;
