function reverseString(str) {
    return (str === '') ? '' : reverseString(str.substr(1)) + str.charAt(0);
}
var reverseWords = function (s) {
    let splitStr = s.split(" ")
    let newStr = []
    for (let index = 0; index < splitStr.length; index++) {
        newStr.push(reverseString(splitStr[index]))
    }

    return newStr.join(" ")
};

console.log(reverseWords("Let's take LeetCode contest"));


// "Let's".substr(1);  => et's
// "Let's".charAt(0); // "L"

// reverseString(et's) + L = et'sL
// reverseString(t's) +e =t'se
//reverseString('s) +t ='st
//reverseString(s) +' =s'
//reverseString(s) = s
