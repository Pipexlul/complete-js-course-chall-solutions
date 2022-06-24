/*
Coding Challenge #3
There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks �
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
*/

let dolphinScore1, dolphinScore2, dolphinScore3;
let koalaScore1, koalaScore2, koalaScore3;

let dolphinScoreAvg;
let koalaScoreAvg;

let winnerScore;
let loserScore;

let winnerTeam;
let loserTeam;

const minimumBonus = 100;

let dolphinScoreMinCheck = false;
let koalaScoreMinCheck = false;

let minCheckWinner = false;

//Test data 1
console.log("Test Data 1");

dolphinScore1 = 96;
dolphinScore2 = 108;
dolphinScore3 = 89;

dolphinScoreAvg = (dolphinScore1 + dolphinScore2 + dolphinScore3) / 3;

koalaScore1 = 88;
koalaScore2 = 91;
koalaScore3 = 110;

koalaScoreAvg = (koalaScore1 + koalaScore2 + koalaScore3) / 3;

if (dolphinScoreAvg > koalaScoreAvg) {
    winnerTeam = "Dolphin";
    loserTeam = "Koala";
    winnerScore = dolphinScoreAvg;
    loserScore = koalaScoreAvg;
} else if (koalaScoreAvg > dolphinScoreAvg) {
    winnerTeam = "Koala";
    loserTeam = "Dolphin";
    winnerScore = koalaScoreAvg;
    loserScore = dolphinScoreAvg;
} else {
    winnerTeam = "Draw";
    winnerScore = dolphinScoreAvg;
}

if (winnerTeam === "Draw") {
    console.log(`It's a draw between Dolphin and Koala teams with an avg score of: ${winnerScore}!`);
} else {
    console.log(`${winnerTeam} team is the winner with an avg score of: ${winnerScore} over the ${loserTeam} team who had an avg score of: ${loserScore}`);
}

console.log("-------------");

//Test Data Bonus 1
console.log("Test Data Bonus 1");

dolphinScore1 = 97;
dolphinScore2 = 112;
dolphinScore3 = 101;

dolphinScoreAvg = (dolphinScore1 + dolphinScore2 + dolphinScore3) / 3;
dolphinScoreMinCheck = dolphinScoreAvg >= minimumBonus;

koalaScore1 = 109;
koalaScore2 = 95;
koalaScore3 = 123;

koalaScoreAvg = (koalaScore1 + koalaScore2 + koalaScore3) / 3;
koalaScoreMinCheck = koalaScoreAvg >= minimumBonus;

if (dolphinScoreAvg > koalaScoreAvg) {
    winnerTeam = "Dolphin";
    loserTeam = "Koala";
    winnerScore = dolphinScoreAvg;
    loserScore = koalaScoreAvg;

    if (dolphinScoreMinCheck) {
        minCheckWinner = true;
    } else {
        minCheckWinner = false;
    }
} else if (koalaScoreAvg > dolphinScoreAvg) {
    winnerTeam = "Koala";
    loserTeam = "Dolphin";
    winnerScore = koalaScoreAvg;
    loserScore = dolphinScoreAvg;

    if (koalaScoreMinCheck) {
        minCheckWinner = true;
    } else {
        minCheckWinner = false;
    }
} else {
    winnerTeam = "Draw";
    winnerScore = dolphinScoreAvg;

    if (dolphinScoreMinCheck) {
        minCheckWinner = true;
    } else {
        minCheckWinner = false;
    }
}

if (winnerTeam === "Draw") {
    if (minCheckWinner) {
        console.log(`It's a draw between Dolphin and Koala teams with an avg score of: ${winnerScore}!`);
    } else {
        console.log(`No team wins because neither had an avg score above or equal to ${minimumBonus}. (Their scores were: ${winnerScore}).`)
    }
} else {
    if (minCheckWinner) {
        console.log(`${winnerTeam} team is the winner with an avg score of: ${winnerScore} over the ${loserTeam} team who had an avg score of: ${loserScore}`);
    } else
    {
        console.log(`No team wins because neither had an avg score above or equal to ${minimumBonus}. (Although ${winnerTeam} team had a higher avg score: ${winnerScore} than ${loserTeam} who had an avg score of: ${loserScore})`);
    }
}

console.log("-------------");

//Test Data Bonus 2
console.log("Test Data Bonus 2");

dolphinScore1 = 97;
dolphinScore2 = 112;
dolphinScore3 = 101;

dolphinScoreAvg = (dolphinScore1 + dolphinScore2 + dolphinScore3) / 3;
dolphinScoreMinCheck = dolphinScoreAvg >= minimumBonus;

koalaScore1 = 109;
koalaScore2 = 95;
koalaScore3 = 106;

koalaScoreAvg = (koalaScore1 + koalaScore2 + koalaScore3) / 3;
koalaScoreMinCheck = koalaScoreAvg >= minimumBonus;

if (dolphinScoreAvg > koalaScoreAvg) {
    winnerTeam = "Dolphin";
    loserTeam = "Koala";
    winnerScore = dolphinScoreAvg;
    loserScore = koalaScoreAvg;

    if (dolphinScoreMinCheck) {
        minCheckWinner = true;
    } else {
        minCheckWinner = false;
    }
} else if (koalaScoreAvg > dolphinScoreAvg) {
    winnerTeam = "Koala";
    loserTeam = "Dolphin";
    winnerScore = koalaScoreAvg;
    loserScore = dolphinScoreAvg;

    if (koalaScoreMinCheck) {
        minCheckWinner = true;
    } else {
        minCheckWinner = false;
    }
} else {
    winnerTeam = "Draw";
    winnerScore = dolphinScoreAvg;

    if (dolphinScoreMinCheck) {
        minCheckWinner = true;
    } else {
        minCheckWinner = false;
    }
}

if (winnerTeam === "Draw") {
    if (minCheckWinner) {
        console.log(`It's a draw between Dolphin and Koala teams with an avg score of: ${winnerScore}!`);
    } else {
        console.log(`No team wins because neither had an avg score above or equal to ${minimumBonus}. (Their scores were: ${winnerScore}).`)
    }
} else {
    if (minCheckWinner) {
        console.log(`${winnerTeam} team is the winner with an avg score of: ${winnerScore} over the ${loserTeam} team who had an avg score of: ${loserScore}`);
    } else {
        console.log(`No team wins because neither had an avg score above or equal to ${minimumBonus}. (Although ${winnerTeam} team had a higher avg score: ${winnerScore} than ${loserTeam} who had an avg score of: ${loserScore})`);
    }
}
