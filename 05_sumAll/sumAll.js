const sumAll = function(a, b) {
    if (a  < 0 || b < 0) {
        return 'ERROR';
    }
    else if (isNaN(a) || isNaN(b)) {
        return 'ERROR';
    }
    else if (typeof a === 'string' || typeof b === 'string') {
        return 'ERROR';
    }
    max = Math.max(a, b);
    min = Math.min(a,b);
    ans = 0;
    for (let i = min; i <= max; i++) {
        ans += i;
    }

    return ans;

    

};

// Do not edit below this line
module.exports = sumAll;
