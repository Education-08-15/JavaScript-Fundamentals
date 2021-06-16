//Coding Challange #1

/* Mark and John are trying to compare their BMI (Body Mass Index) , which is calculates using the formula : BMI =mass /height**2 = mass/(height*height). (mass in kg and height in meter)

1. Store Marks and johns mass and hight in variables
2. Calcuate both their BMIs using the formula
3. Create a boolean Variable 'markHigherBMI' containing information about twhether Mark has a higher BMI than John

Test Data : Marks weights 78kg and is 1.69m tall.
John weights 92kg and is 1.95m tall */

//solution
let marksWeight = 78;
let marksHeight = 1.69;
const marksBMI = marksWeight / (marksHeight * marksHeight);
console.log('marksBMI ', marksBMI); // 27.309968138370508

let johnWeight = 92;
let johnHeight = 1.95;
const johnBMI = johnWeight / (johnHeight * johnHeight);
console.log('johnBMI', johnBMI); //24.194608809993426

let markHigherBMI = marksBMI > johnBMI;
console.log(markHigherBMI); // true
