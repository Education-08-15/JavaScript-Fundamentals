const age = 15;
const isEligibleTOVote = age >= 18;

if (isEligibleTOVote) {
  console.log('You are eligible to vote');
} else {
  const yearsLeft = 18 - age;
  console.log(` Too young wait ${yearsLeft} years to vote`);
}

const birthYear = 1998;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(`Born in ${century}th century`);
