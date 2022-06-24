/*
Coding Challenge #4
Steven wants to build a very simple tip calculator for whenever he goes eating in a
restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
300. If the value is different, the tip is 20%.
Your tasks:
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
this. It's not allowed to use an if/else statement � (If it's easier for you, you can
start with an if/else statement, and then try to convert it to a ternary
operator!)
2. Print a string to the console containing the bill value, the tip, and the final value
(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
316.25”
Test data:
§ Data 1: Test for bill values 275, 40 and 430
*/

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