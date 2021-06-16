//AND operator , OR operator , ! OPerator

const hasDriverLicense = true;
const hasGoodVison = false;

console.log(hasDriverLicense && hasGoodVison); //false
console.log(hasDriverLicense || hasGoodVison); //true
console.log(!hasDriverLicense); //false

const drive = hasDriverLicense && hasGoodVison;

if (drive) {
  console.log('Sarah should drive');
} else {
  console.log('Someone else should drive');
}
// someone else should drive
