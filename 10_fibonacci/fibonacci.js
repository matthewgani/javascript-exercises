const fibonacci = function(index) {
    index = parseInt(index);
    if (isNaN(index) || index < 0) {
        return "OOPS";
    }
    if (index == 1) {
        return 1;
    }
    let target = index;
    // 1, 1, 2, 3
    // we starting at the second 1
    let prev = 1
    let curr = 1;
    let currIndex = 2;
    while (currIndex !== target) {
        temp = curr;
        curr = prev + curr;
        prev = temp;
        currIndex++;
    }
    return curr;

};

// Do not edit below this line
module.exports = fibonacci;
