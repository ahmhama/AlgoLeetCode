var toLowerCase = function (s) {
    let lowerWord = [] //or u can use string and += in string
    for (let i of s) {
        let asciiCode = i.charCodeAt(0)
        asciiCode < 65 || asciiCode > 90 ? lowerWord.push(i) : lowerWord.push(String.fromCharCode(asciiCode + 32))
    }
    return lowerWord.join("")
};


console.log(toLowerCase("Hello"));