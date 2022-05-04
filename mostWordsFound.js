var mostWordsFound = function (sentences) {
    let temp = 0
    let count = 0

    for (let i = 0; i < sentences.length; i++) {
        temp = sentences[i].split(" ").length
        if (count < temp) count = temp
    }
    return count

};
console.log(mostWordsFound(["t qnnbpqul iuzejkwniruscnvkdwgmvdajbgmbytioldkixld", "uqcnehvw nn idofvpqwrmsnygsgyijxearenslmbbsxxqykhnwbavkhszazrvuywtubispckkymswtdgpfloqjdtx"]));