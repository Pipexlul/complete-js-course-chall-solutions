let bill, tip, tipPercent;

//Test data 1 case 1
console.log("Test data 1 case 1");

bill = 275;
tipPercent = bill >= 50 && bill <= 300 ? 0.15 : 0.2;
tip = bill * tipPercent;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);

//Test data 1 case 2
console.log("Test data 1 case 2");

bill = 40;
tipPercent = bill >= 50 && bill <= 300 ? 0.15 : 0.2;
tip = bill * tipPercent;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);

//Test data 1 case 3
console.log("Test data 1 case 3");

bill = 430;
tipPercent = bill >= 50 && bill <= 300 ? 0.15 : 0.2;
tip = bill * tipPercent;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);