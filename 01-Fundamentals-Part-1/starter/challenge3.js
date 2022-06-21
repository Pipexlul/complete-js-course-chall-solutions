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
