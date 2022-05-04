var finalValueAfterOperations = function (operations) {
    let counter = 0
    for (let i = 0; i < operations.length; i++) {
        operations[i] == "--X" || operations[i] == "X--" ? counter-- : counter++
    }
    return counter
};
const finalValueAfterOperations = (operations) => operations.reduce((acc, curr) => curr[1] === "+" ? ++acc : --acc, 0)

console.log(finalValueAfterOperations(["--X", "X++", "X++"]));