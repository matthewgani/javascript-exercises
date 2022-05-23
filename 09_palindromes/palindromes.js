const palindromes = function (string) {
    let replaced = string.replace(/[^a-z0-9]/gi, '');
    replaced = replaced.toLowerCase();
    console.log(replaced);
    // was thinking of doing 2 pointer but we can just reverse and compare
    const result = replaced.split("").reverse().join("");
    return replaced == result;
};

// Do not edit below this line
module.exports = palindromes;
