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