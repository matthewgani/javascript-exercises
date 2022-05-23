const findTheOldest = function(arr) {
    const result = arr.reduce(
        (oldest, currObject) => {
        let oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        let currAge = getAge(currObject.yearOfBirth, currObject.yearOfDeath);
        return oldestAge < currAge ? currObject : oldest;
        });
    return result;

};

function getAge(yearOfBirth, yearOfDeath) {
    if (!yearOfDeath) {
        yearOfDeath = new Date().getFullYear();
    }
    return yearOfDeath - yearOfBirth;
}

// Do not edit below this line
module.exports = findTheOldest;
