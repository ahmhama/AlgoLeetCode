var licenseKeyFormatting = function (S, K) {

    const newStr = S.replace(/-/g, '').toUpperCase(); // Remove existing dashes and convert any lowercase letters to uppercase
    arr = newStr.split(''); // Convert string to an array so we can manipulate it
    for (let i = arr.length - 1 - K; i >= 0; i -= K) { // Loop through array backwards and decrement by value of K
        arr[i] = arr[i] + '-';
    }

    return arr.join('');
};

console.log(licenseKeyFormatting("2-5g-3-J", 2));
