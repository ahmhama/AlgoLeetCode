var nearestValidPoint = function (x, y, points) {
    let minPoint = Infinity
    let idxTarget = -1

    for (let i = 0; i < points.length; i++) {
        if (points[i][0] == x || points[i][1] == y) {
            let manhattanPoint = Math.abs((x - points[i][0]) + (y - points[i][1])) //calc manhattan point
            
            if (manhattanPoint < minPoint) {
                idxTarget = i
                minPoint = manhattanPoint

            }

        }
    }
    return idxTarget

};

console.log(nearestValidPoint(3, 4, [[1, 2], [3, 1], [2, 4], [2, 3], [4, 4]]));