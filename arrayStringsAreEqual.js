
var arrayStringsAreEqual = function (word1, word2) {
    let fWord = word1.join("") //O nlog(n)
    let sWord = word2.join("")
    return fWord ==sWord
};

console.log(arrayStringsAreEqual(["ab", "c"], ["a", "bc"]));