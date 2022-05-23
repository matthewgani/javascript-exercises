const add = function(a, b) {
  return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(arr) {
	let start = 0;
  let result = arr.reduce((previousValue, currentValue) => 
    previousValue + currentValue
    ,start);
  return result;
};

const multiply = function(arr) {
  let start = 1;
  let result = arr.reduce((previousValue, currentValue) => 
    previousValue * currentValue
    ,start);
  return result;
};

const power = function(a,b) {
	return Math.pow(a,b);
};

const factorial = function(a) {
  let result = 1;
  while (a !== 1) {
    result = result * a;
    a--;
  } 
  return result;
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
