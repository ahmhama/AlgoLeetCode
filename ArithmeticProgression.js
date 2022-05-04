
var canMakeArithmeticProgression = function (arr) {
    let sortArr = arr.sort((a, b) => a - b)
    let gap = sortArr[1] - sortArr[0]
    for (let i = 1; i < sortArr.length - 1; i++) {
        if (sortArr[i + 1] - sortArr[i] !== gap) {
            return false
        }
    }
    return true

};
console.log(canMakeArithmeticProgression([1,2,4]));