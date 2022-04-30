let Roman = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
}

var romanToInt = function (s) {
    let result = 0;
    let i = 0;
    while (i < s.length) {
        let current = Roman[s[i]];
        let next = Roman[s[i + 1]];
        if (next && next > current) {
            //  C < M  iter 2
            //  X < C  iter 3
            //  I < V  iter 4
            // (1000-100) + (100-10) + (5-1)
            result += next - current;
            i += 2;
        } else {
            // M > C => iter 1
            // 1000
            result += current;
            i++;
        }
    }
    return result;
};


console.log(romanToInt("MCMXCIV"));