///////////////////////////////////////
// Using Google, StackOverflow and MDN// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."
const temperatures = [3, -2, -6, -1, 9, 'error', 13, 17, 15, 14, 9, 5];
// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what do do?
// 2) Breaking up into sub-problems
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

const calcTempAmplitude = (arr) => {
  let maxValue = arr[0];
  let minValue = arr[0];
  for (let i = 1; i < arr.length; i++) {
    const currTemp = arr[i];
    if (typeof currTemp !== 'number') {
      continue;
    } else if (arr[i] > maxValue) {
      maxValue = arr[i];
    } else if (arr[i] < minValue) {
      minValue = arr[i];
    }
  }
  console.log(maxValue, minValue);
  return maxValue - minValue;
};
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

// PROBLEM 2:
// Function should now receive 2 arrays of temps
// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? NO! Just merge two arrays
// 2) Breaking up into sub-problems
// - Merge 2 arrays

const calcTempAmplitudeNew = function (arr1, arr2) {
  const newTemp = arr1.concat(arr2);
  return newTemp;
};

let temps = calcTempAmplitudeNew([2, 4, 1, -6], [6, 8, -2, 3]);
// console.log(temps);
const amplitude1 = calcTempAmplitude(temps);
console.log(amplitude1);

///////////////////////////////////////
// Debugging with the Console and Breakpoints

const measurmentKelvin = function () {
  const measurment = {
    type: 'temp',
    unit: 'celsius',
    // value: prompt('Degrees celcius:'),
    value: 10,
  };
  const kelvin = Math.trunc(measurment.value) + 273; // we use Mth.trunc bcz prompt alawys return an string but we need a number
  // console.table(measurment);
  return kelvin;
};
console.log(measurmentKelvin());

//Coding Challange

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.
Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."
Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.
Use the problem-solving framework: Understand the problem and break it up into sub-problems!
TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

const printForecast = (arr) => {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str = str + arr[i] + `ºC ` + 'in ' + (i + 1) + ' days... ';
  }
  return str;
};
let DATA1 = [17, 21, 23];
let DATA2 = [12, 5, -5, 0, 4];
console.log(printForecast(DATA1));
console.log(printForecast(DATA2));
