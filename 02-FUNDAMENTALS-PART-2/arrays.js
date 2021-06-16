//ways of creating arrays
const friends = ['Michel', 'John', 'Sarah'];
console.log(friends);

const years = new Array(1991, 1995, 1998);
console.log(years);

const days = new Array('Sunday', 'Wednesday', 'Friday');
console.log(days);

// finding elements
console.log(friends[0]);
console.log(years[2]);

//length
console.log(years.length);

//finding last index
console.log(friends.length - 1);
//finding last index element
console.log(friends[friends.length - 1]);

// mutating array or changing the value of any index
friends[2] = 'Jay';
console.log(friends);

//Array can contain different types of values
const fName = 'Shikshya';
const nanu = [
  fName,
  'Gautam',
  2021 - 1998,
  true,
  friends,
  { data: 21, value: 'data' },
];
console.log(nanu);
console.log(nanu.length);

const calcAge = function (birthYear) {
  return 2021 - birthYear;
};

const year = [1998, 2002, 2003, 1996];
const age1 = calcAge(year[0]);
const age2 = calcAge(year[1]);
console.log(age1, age2);

// we can also use function calls inside an array
const ages = [
  calcAge(year[0]),
  calcAge(year[1]),
  calcAge(year[2], calcAge(year[year.length - 1])),
];
console.log(ages);

// Basic Array OPerations(Methods)

// adding  element at the end of the array
friends.push('Mahi');
console.log(friends);

//adding element at the begining of array
friends.unshift('Brian');
console.log(friends);

//removing element from end of array
friends.pop();
console.log(friends);
//removing element at the begining of the array
friends.shift();
console.log(friends);

//find the index of elements
console.log(friends.indexOf('Jay'));
//if we try to find the index of element that does not exists it gives -1

let months = ['Janauary', 'Feburary', 'March', 'April', 'May'];
console.log(months.includes('May'));
console.log(months.includes('August'));

if (months.includes('April')) {
  console.log('April is in the array');
}
