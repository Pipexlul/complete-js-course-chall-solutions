const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

function checkWinner(avgDolphins, avgKoalas) {
    let winner;
    let winnerScore, loserScore;

    if (avgDolphins >= avgKoalas * 2) {
        winner = "Dolphins";
        winnerScore = avgDolphins;
        loserScore = avgKoalas;
    } else if (avgKoalas >= avgDolphins * 2) {
        winner = "Koalas";
        winnerScore = avgKoalas;
        loserScore = avgDolphins
    } else {
        winner = "None";
    }

    if (winner !== "None") {
        console.log(`${winner} win! (${winnerScore} vs. ${loserScore})`);
    } else {
        console.log("No team wins");
    }
}

let dolphinAvg, koalaAvg;

//Test case 1
console.log("Test case 1");

dolphinAvg = calcAverage(44, 23, 71);
koalaAvg = calcAverage(65, 54, 49);

checkWinner(dolphinAvg, koalaAvg);

console.log("----------");

//Test case 2
console.log("Test case 2");

dolphinAvg = calcAverage(85, 54, 41);
koalaAvg = calcAverage(23, 34, 27);

checkWinner(dolphinAvg, koalaAvg);