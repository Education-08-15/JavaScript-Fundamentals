const info = {
  fName: 'Shikshya',
  lName: 'Gautam',
  age: 23,
  hobby: ['Playing Chess', 'Coding', ['Eating', 'sleeping']],
  friends: {
    fname: 'riya',
    age: 24,
  },
};

console.log(info);
console.log(info.hobby[2][1]);
//getting property from a object
console.log(info['fName']);
console.log(info.lName);
console.log(info.hobby);
console.log(info.friends.fname);

// const Name = prompt('What is your name?'); // if we type fName returns value inside of theinfo.fName i.e Shikshya
// console.log(info[Name]);

// const Name = prompt('What is your name?'); //if we typefName returns undefined
// console.log(info.Name);

// info.location = 'Nepal';
// info['twitter'] = '@Education';
// console.log(info);

// if (info[Name]) {
//   console.log(info[Name]);
// } else {
//   console.log('Property does not exists');
// }

//methods in objects

const details = {
  fName: 'Shikshya',
  lName: 'Gautam',
  birthYear: 1998,
  hobby: ['Playing Chess', 'Coding', ['Eating', 'sleeping']],
  hasDriverLicense: false,
  calcAge: function (birthYear) {
    this.age = 2021 - birthYear;
    return this.age;
  },
};
console.log(details.calcAge(1998));
// console.log(details.calcAge(details.birthYear));
// console.log(details['calcAge'](1996));
console.log(details.age);
console.log(details);
