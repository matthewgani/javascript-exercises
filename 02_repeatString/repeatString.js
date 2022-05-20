const repeatString = function(string, count) {
    finalString = "";
    for (let i = 0; i < count; i++) {
        finalString += string;
    }
    if (count < 0) {
        return "ERROR";
    }
    return finalString;
};

// Do not edit below this line
module.exports = repeatString;
