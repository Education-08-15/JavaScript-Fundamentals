console.log(`Hello what's up? 1`);
console.log(`Hello what's up? 2`);
console.log(`Hello what's up? 3`);
console.log(`Hello what's up? 4`);
console.log(`Hello what's up? 5`);

// we can write above code using loop as

for (let i = 1; i <= 5; i++) {
  console.log(`Hello what's up? ${i}`);
}

const nanu = [
  'Shikshya',
  'Gautam',
  2021 - 1998,
  true,
  { data: 21, value: 'data' },
  ['coding', 'sleeping'],
];

//looping backward
for (let i = nanu.length - 1; i >= 0; i--) {
  console.log(i, nanu[i]);
}

//loops in loops
for (let i = 0; i <= 3; i++) {
  console.log(`---------Starting exercise ${i}`);
  for (let j = 0; j <= 5; j++) {
    console.log(`Middle exercise ${j}`);
  }
  for (let k = 1; k <= 1; k++) {
    console.log(`******Finished exercise `);
  }
}

//While loop
let i = 1;
while (i <= 5) {
  console.log('Hello Word');
  i++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);

while (dice !== 6) {
  console.log(`You rolled a dice at ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) {
    console.log('Loop is about to end');
  }
}

console.log('hello');

console.log('again added');
