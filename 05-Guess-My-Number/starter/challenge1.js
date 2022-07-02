/*
Coding Challenge #1
Implement a game rest functionality, so that the player can make a new guess!
Your tasks:
1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the 'score' and
'secretNumber' variables
3. Restore the initial conditions of the message, number, score and guess input
fields
4. Also restore the original background color (#222) and number width (15rem)
*/

/*
Note #1: I am not done yet with all the lessons regarding this project, so I'll
come back to add the missing parts. For now, this is only to solve the challenge.
*/

"use strict";

function getSecretNumber(maxNum) {
	return Math.trunc(Math.random() * maxNum) + 1;
}

const initialScore = 20;
const maxNumber = initialScore;

let secretNumber = getSecretNumber(maxNumber);
let score = initialScore;
let gameFinished = false;

const numberElem = document.querySelector(".number");
const messageElem = document.querySelector(".message");
const buttonCheckElem = document.querySelector(".check");
const inputElem = document.querySelector(".guess");
const scoreElem = document.querySelector(".score");
const againElem = document.querySelector(".again");
const bodyElem = document.querySelector("body");

const origBgColor = bodyElem.style.backgroundColor;
const correctGuessBgColor = "#60b347";

const origMessageText = messageElem.textContent;

const origNumberWidth = numberElem.style.width;

//numberElem.textContent = secretNumber;

function setGameFinished(state) {
	gameFinished = state;

	numberElem.textContent = state ? secretNumber : "?";
}

againElem.addEventListener("click", function (ev) {
	score = initialScore;
	secretNumber = getSecretNumber(maxNumber);
	setGameFinished(false);

	scoreElem.textContent = score;
	//numberElem.textContent = secretNumber;
	messageElem.textContent = origMessageText;
	bodyElem.style.backgroundColor = origBgColor;
	numberElem.style.width = origNumberWidth;
});

buttonCheckElem.addEventListener("click", function (ev) {
	if (gameFinished) {
		return;
	}

	const guess = inputElem.value === "" ? undefined : Number(inputElem.value);

	if (typeof guess === "undefined") {
		messageElem.textContent = "No number";
	} else if (guess === secretNumber) {
		messageElem.textContent = "You Win!";

		bodyElem.style.backgroundColor = correctGuessBgColor;
		numberElem.style.width = "30rem";

		setGameFinished(true);
	} else if (guess < 1 || guess > maxNumber) {
		messageElem.textContent = `Invalid guess. Must be from 1 to ${maxNumber}`;
	} else {
		if (score > 0) {
			score--;
			scoreElem.textContent = score;

			if (score >= 1) {
				if (guess < secretNumber) {
					messageElem.textContent = "Too Low!";
				} else {
					messageElem.textContent = "Too High!";
				}
			} else {
				messageElem.textContent = "You lost!";

				setGameFinished(true);
			}
		}
	}
});
