const { diceRoll } = require("./index.js");

// Unit tests - testing dice sides from 1 to 100
for (let i = 1; i < 100; i++) {
    let testResult = diceRoll(i);
    if (testResult > i || testResult < 1)
        throw Error("Invalid dice result " + testResult + " for max " + i);
}

console.log("All tests passed!");