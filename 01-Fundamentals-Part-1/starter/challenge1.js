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

