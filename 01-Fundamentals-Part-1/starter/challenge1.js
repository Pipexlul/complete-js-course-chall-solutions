/*
Coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
*/

let markMass, markHeight, markBMI;
let johnMass, johnHeight, johnBMI;

let markHigherBMI;

//Test case 1
console.log("Test Case 1")

markMass = 78;
markHeight = 1.69;
markBMI = markMass / (markHeight ** 2)
console.log(`Mark has a BMI of: ${markBMI}`)

johnMass = 92;
johnHeight = 1.95
johnBMI = johnMass / (johnHeight * johnHeight)
console.log(`John has a BMI of: ${johnBMI}`)

markHigherBMI = markBMI > johnBMI;
console.log(`Does Mark have a a higher BMI than John? ${markHigherBMI}`)

console.log("----------")

//Test case 2
console.log("Test Case 2")

markMass = 95;
markHeight = 1.88;
markBMI = markMass / (markHeight ** 2)
console.log(`Mark has a BMI of: ${markBMI}`)

johnMass = 85;
johnHeight = 1.76
johnBMI = johnMass / (johnHeight * johnHeight)
console.log(`John has a BMI of: ${johnBMI}`)

markHigherBMI = markBMI > johnBMI;
console.log(`Does Mark have a a higher BMI than John? ${markHigherBMI}`)

