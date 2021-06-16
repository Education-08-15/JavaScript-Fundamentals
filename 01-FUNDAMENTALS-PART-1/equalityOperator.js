console.log(18 == '18'); //true (checks value only)
console.log(18 === '18'); //false (checks both type and value)

const age = 18;
if (age === 18) console.log('You just became an adult');

const fav = Number(prompt(`what's your favourite number?`));
console.log(fav);
console.log(typeof fav);

if (fav === 23) {
  console.log(`Cool 23 is a amazing number`);
} else {
  console.log(`${fav} is also a cool number`);
}
