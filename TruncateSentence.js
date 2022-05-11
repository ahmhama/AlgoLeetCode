var truncateSentence = function (s, k) {
    let splitSentence = s.split(" ");
    let newStr=[]
    for (let index = 0; index < k; index++) {
        newStr.push(splitSentence[index])
    }

    return newStr.join(" ")
};

console.log(truncateSentence("Hello how are you Contestant", 4));