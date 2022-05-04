var average = function (salary) {
    let min = Math.min(...salary)
    let max = Math.max(...salary)

    let sum = salary.reduce((a, b) => a + b)

    sum -= max
    sum -= min

    return sum / (salary.length - 2)
};

console.log(average([48000, 59000, 99000, 13000, 78000, 45000, 31000, 17000, 39000, 37000, 93000, 77000, 33000, 28000, 4000, 54000, 67000, 6000, 1000, 11000]))