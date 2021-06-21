const myName = 'Nanu';

if (myName === 'Nanu') {
  // console.log(job);// can't access
  const age = 2021 - 1998;
  console.log(age);
  const job = 'teacher';
}

//hoisting with variables
/*console.log(x)
console.log(x);
console.log(y);
console.log(z);
var x = 22;
let y = 'code';
let z = 'Hello World';*/

/*
//hoisting with functions
console.log(addDec(2, 3));
console.log(addExpr(2, 3));
console.log(addArrow(2, 3));
function addDec(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;
*/
console.log(typeof numProducts);
if (!numProducts) {
  deleteShop();
}
var numProducts = 10;
function deleteShop() {
  console.log('All Products are deleted!');
}

console.log(typeof data);
var data = 22;

var u = 1;
let v = 1;
const w = 1;

//variables created with var will create an property in window object but let and const do not
console.log(u === window.u); //true
console.log(v === window.v); //false
console.log(w === window.w); //false
