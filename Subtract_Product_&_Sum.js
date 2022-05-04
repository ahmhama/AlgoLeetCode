var subtractProductAndSum = function (n) {
    let sum = 0
    let mult = 1
    let splitArr = Array.from(String(n), Number)
    for (let index = 0; index < splitArr.length; index++) {
        sum+=splitArr[index]
        mult*=splitArr[index]
    }
    return mult-sum

};
console.log(subtractProductAndSum(234));
