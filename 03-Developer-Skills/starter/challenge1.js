/*
Coding Challenge #1
Given an array of forecasted maximum temperatures, the thermometer displays a
string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1
days ... 21ºC in 2 days ... 23ºC in 3 days ..."
Your tasks:
1. Create a function 'printForecast' which takes in an array 'arr' and logs a
string like the above to the console. Try it with both test datasets.
2. Use the problem-solving framework: Understand the problem and break it up
into sub-problems!
*/

"use strict";

function printForecast(arr) {
	let resultStr;
	const arrLength = arr.length;

	for (let i = 0; i < arrLength; i++) {
		const day = i + 1;

		if (i === 0) {
			resultStr = `... ${arr[i]}°C in ${day} days ...`;
		} else {
			resultStr += ` ${arr[i]}°C in ${day} days ...`;
		}
	}

	console.log(resultStr);
}

//Test data 1
console.log("Test Data 1");

printForecast([17, 21, 23]);

console.log("----------");

//Test data 2
console.log("Test Data 2");

printForecast([12, 5, -5, 0, 4]);
