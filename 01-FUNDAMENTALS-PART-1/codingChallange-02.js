// Coding Challange 2
/* Mark and John are trying to compare their BMI (Body Mass Index) , which is calculates using the formula : BMI =mass /height**2 = mass/(height*height). (mass in kg and height in meter)

1. Store Marks and johns mass and hight in variables
2. Calcuate both their BMIs using the formula
3. Use a template string to include BMI values in Output and print using If else statement

Test Data : Marks weights 78kg and is 1.69m tall.
John weights 92kg and is 1.95m tall */

let marksWeight = 78;
let marksHeight = 1.69;
const marksBMI = marksWeight / (marksHeight * marksHeight);
console.log('marksBMI ', marksBMI); // 27.309968138370508

let johnWeight = 92;
let johnHeight = 1.95;
const johnBMI = johnWeight / (johnHeight * johnHeight);
console.log('johnBMI', johnBMI); //24.194608809993426

if (marksBMI > johnBMI) {
  console.log(`Marks BMI (${marksBMI}) is higher than johnBMI (${johnBMI})`);
} else {
  console.log(` johnBMI is higher (${johnBMI})than marksBMI  (${marksBMI})`);
}
