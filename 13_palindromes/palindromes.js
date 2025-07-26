const palindromes = function (string) {
    let cleanedString = string.toLowerCase().replace(/[^a-z0-9]/g, '');
    for (let i = 0; i < cleanedString.length / 2; i++) {
        if (cleanedString[i] !== cleanedString[cleanedString.length - 1 - i]) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
