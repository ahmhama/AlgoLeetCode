
var countOdds2 = function (low, high) {
    const c = Math.round((high - low) / 2);
    console.log(c); //9
    return low % 2 === 1 && high % 2 === 1 ? c + 1 : c; //true && true => true
    // 1 3 5 7 9 11 13 15 17 19
}


// it will be very slow
var countOdds = function (low, high) {
    let oddNum = []
    for (let index = low; index <= high; index++) {
        if (index % 2 == 1) {
            oddNum.push(index)
        }
    }
    return oddNum.length
};



console.log(countOdds2(1, 19));