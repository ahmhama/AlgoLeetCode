var freqAlphabets = function (s) {
    let freqAlph = { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f', '7': 'g', '8': 'h', '9': 'i', '10#': 'j', '11#': 'k', '12#': 'l', '13#': 'm', '14#': 'n', '15#': 'o', '16#': 'p', '17#': 'q', '18#': 'r', '19#': 's', '20#': 't', '21#': 'u', '22#': 'v', '23#': 'w', '24#': 'x', '25#': 'y', '26#': 'z' }
    let newStr = ""
    for (let index = 0; index < s.length; index++) {
        if (s[index + 2] === '#') {
            index += 2
            newStr += freqAlph[s[index - 2] + s[index - 1] + "#"]
        }
        else {
            newStr += freqAlph[s[index]]
        }
    };
    return newStr
}
console.log(freqAlphabets("10#11#12"))