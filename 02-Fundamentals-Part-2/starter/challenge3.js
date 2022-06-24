/*
Coding Challenge #3
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
implement the calculations! Remember: BMI = mass / height ** 2 = mass
/ (height * height) (mass in kg and height in meter)
Your tasks:
1. For each of them, create an object with properties for their full name, mass, and
height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same
method on both objects). Store the BMI value to a property, and also return it
from the method
3. Log to the console who has the higher BMI, together with the full name and the
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
tall.
*/

const markData = {
    fullName: "Mark Miller",
    mass: undefined,
    height: undefined,
    calcBMI: function() {
        this.BMI = this.mass / (this.height * this.height);
        return this.BMI;
    }
};

const johnData = {
    fullName: "John Smith",
    mass: undefined,
    height: undefined,
    calcBMI: function() {
        this.BMI = this.mass / (this.height * this.height);
        return this.BMI;
    }
};

function CompareBMIs() {
    const markBMI = markData.BMI;
    const johnBMI = johnData.BMI;

    let higherPerson, lowerPerson, higherBMI, lowerBMI;

    if (markBMI > johnBMI) {
        higherPerson = markData.fullName;
        lowerPerson = johnData.fullName;
        higherBMI = markBMI;
        lowerBMI = johnBMI;
    } else if (johnBMI > markBMI) {
        higherPerson = johnData.fullName;
        lowerPerson = markData.fullName;
        higherBMI = johnBMI;
        lowerBMI = markBMI;
    } else {
        higherPerson = "Equal";
        higherBMI = markBMI;
    }

    if (higherPerson !== "Equal") {
        console.log(`${higherPerson}'s BMI (${higherBMI}) is higher than ${lowerPerson}'s (${lowerBMI})`);
    } else {
        console.log(`${markData.fullName} and ${johnData.fullName}'s BMIs are equal (${higherBMI})`);
    }
}

//Test data 1
console.log("Test data 1");

markData.mass = 78;
markData.height = 1.69;
markData.calcBMI();

johnData.mass = 92;
johnData.height = 1.95;
johnData.calcBMI();

CompareBMIs();

console.log("----------")

//My test data 1
console.log("My test data 1");

//Keep Mark's data as is

johnData.mass = markData.mass;
johnData.height = markData.height;
johnData.calcBMI();

CompareBMIs();

console.log("----------")

//My test data 2
console.log("My test data 2");

markData.mass = 92;
markData.height = 1.95;
markData.calcBMI();

johnData.mass = 78;
johnData.height = 1.69;
johnData.calcBMI();

CompareBMIs();