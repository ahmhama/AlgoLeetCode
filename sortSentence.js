var sortSentence = function (s) {
    let words = s.split(' ');
    let newArr = []
    for (let i in words) {

        let getLast = words[i].slice(-1);

        let removeLast = words[i].slice(0, -1);
        
        newArr[getLast] = removeLast
    }
    return newArr.join(' ').trim()
};


console.log(sortSentence("is2 sentence4 This1 a3"))
