//to strings, to numbers, to booleans   (type conversion)

//converting strings to number
const x = '20';
console.log(x + 18); // 2018

let y = Number(x);
console.log(y + 18); //38

let name = 'Shikshya';
console.log(Number(name)); //NaN (invalid number)

//converting number to string
let a = 10;
let b = 20;
console.log(String(a) + String(b)); //1020
console.log(a + b); //30

//  Boolean (truthy or falsy values)
// 5 falsy values in JS --> 0,'',undefined,null,NaN

console.log(Boolean(0)); //false
console.log(Boolean({})); //true
console.log(Boolean(undefined)); //false
console.log(Boolean('')); //false
console.log(Boolean('Shikshya ')); //true

const money = 10;
if (money) {
  // js conerts the value inside condition into boolean to check it truth or faly conditions and executes
  console.log('Dont spend it all');
} else {
  console.log('You should get a job');
}

let height;
if (height) {
  console.log('YAY! height is defined');
} else {
  console.log('Height is undefined');
}
// type coercion

console.log('I am ' + 23 + ' years old'); // only plus operator concatenates by converting numbers to strings

console.log('23' - '10' - '3'); // 23
console.log('23' * '2'); //46
console.log('23' < '33'); //true

let n = '1' + 1; //11
n = n - 1; //11-1
console.log(n); //10
