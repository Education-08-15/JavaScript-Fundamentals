// Coding Challenge #4

/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.
1.Use ternary Operator
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). 
TEST DATA: Test for bill values 275
HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2

*/
//soln

const billValue = 275;
const tipValue =
  billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.2;
console.log(
  `The bill was ${billValue}, the tip was ${tipValue}, and the total value ${
    billValue + tipValue
  }`,
);
