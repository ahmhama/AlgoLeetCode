var balancedStringSplit = function (s) {

    let count = 0;
    let left = 0;
    let right = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "L") {
            left++;
        } else {
            right++;
        }
    
        if (left === right) {
            count++;
            left = 0;
            right = 0;
        }
    }
    return count;

};
console.log(balancedStringSplit("RLRRLLRLRL"))
