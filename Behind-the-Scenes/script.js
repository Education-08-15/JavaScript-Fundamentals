//scope
/*
const myName = 'Jonas';

function first() {
  const age = 30;
  if (age >= 30) {
    const decade = 3;
    var millenial = true;
  }
  function second() {
    const job = 'teacher';
    console.log(`${myName} is ${age} years old ,and ${job} is her job`);
  }
  console.log(second());
}
console.log(first());
*/
/*const a = 'Jonas';
function first() {
  const b = 'Hello';
  second();

  function second() {
    const c = 'Hi';
    third();
  }
}
function third() {
  const d = 'Hey';
  console.log(a);
  console.log(d + c + b + a); //refrence error
}

console.log(third());
*/

function calcAge(birthYear) {
  const age = 2021 - birthYear;
  console.log(firstName);
  function printAge() {
    let output = `${firstName}  You are ${age},born in ${birthYear}`;
    console.log(output);
    if (birthYear >= 1981 && birthYear <= 1996) {
      const firstName = 'Steven  ';
      const str = `Oh, you are a millenial,${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
      output = 'Hello';
      console.log(output);
    }
    console.log(add(2, 3));
    console.log(output);
  }
  printAge();
  return age;
}
const firstName = 'Shikshya';
calcAge(1993);
