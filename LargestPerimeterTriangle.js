// check if any 2 Sides larger than the third slide 
var largestPerimeter = function (nums) {
    const sortArr = nums.sort((a, b) => a - b).reverse();
    let maximam = 0
    for (let i = 0; i <= 2; i++) {
        if (sortArr[i] < sortArr[i + 1] + sortArr[i + 2]) {
            maximam = Math.max(maximam,sortArr[i]+ sortArr[i + 1] + sortArr[i + 2])
        }
    }
    return maximam
};
console.log(largestPerimeter([1,2,2,4,18,8]));
