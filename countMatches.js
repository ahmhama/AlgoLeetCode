var countMatches = function (items, ruleKey, ruleValue) {
    const rule = {
        type: 0,
        color: 1,
        name: 2,
    }

    let count=0

    for (let i = 0; i < items.length; i++) {
        if (items[i][rule[ruleKey]] === ruleValue) {
            count++
        }
    }
    return count
};
console.log(countMatches([["phone", "blue", "pixel"], ["computer", "silver", "lenovo"], ["phone", "gold", "iphone"]], "color", "silver"));
