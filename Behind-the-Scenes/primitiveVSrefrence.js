//primitive types
let age = 22;
let oldAge = age;
age = 23;
console.log(age);
console.log(oldAge);
console.log('--------------');
// refrence types
const me = {
  name: 'Shikshya',
  age: 23,
};

const friend = me;
friend.age = 27;
console.log('Friend:', friend);
console.log('Me:', me);
console.log('--------------');
//primitive types
let lastName = 'Gautam';
let oldLastName = lastName;
lastName = 'Sharma';
console.log(lastName, oldLastName);
console.log('--------------');
// refrence types
const info = {
  fName: 'Shikshya',
  lName: 'Gautam',
  age: 23,
};

const newInfo = info;
newInfo.lName = 'Sharma';

console.log('Before ', info);
console.log('After', newInfo);

console.log('--------------');
//copying object
const info2 = {
  fName: 'Shikshya',
  lName: 'Gautam',
  age: 23,
  hobby: ['coding', 'sleeping', 'eating'],
};

const infoCopy = Object.assign({}, info2);
infoCopy.lName = 'Sharma';
infoCopy.hobby.push('plying with dogs');

console.log(info2);
console.log(infoCopy);
