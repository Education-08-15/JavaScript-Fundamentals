// expression is a piece of code that produces a value
let a = 3 + 4;
console.log(a);

//statement is a bigger piece of code that is executed and whcich does not produce a value on itself i.e sequence of actions

if (23 > 10) {
  const str = '23 is bigger';
  console.log(str);
}

// In template literal we can only insert expresions but not statements
const fname = 'Shikshya';
console.log(`I'm ${fname} and  i'm ${2021 - 1998} years old.`);
