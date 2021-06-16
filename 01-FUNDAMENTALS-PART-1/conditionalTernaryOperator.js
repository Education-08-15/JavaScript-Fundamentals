const age = 23;
age >= 18 ? console.log('I am eligible to vote ') : 'I am young';

birthyear = 1550;
const century =
  birthyear <= 2000 && birthyear > 1900
    ? console.log('20th century')
    : birthyear > 2000
    ? console.log('21th century')
    : console.log('Should calculate');

// using ternary oprator in template literal

console.log(
  `${
    birthyear <= 2000 && birthyear > 1900
      ? console.log('20th century')
      : birthyear > 2000
      ? console.log('21th century')
      : console.log('oops wrong')
  }`,
);
