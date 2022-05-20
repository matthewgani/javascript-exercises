const ftoc = function(f) {
  // let converted = ((temp - 32) * (5/9));
  // return Math.round((converted* 10 )/10 , 1);
  // wrong bc the /10 is outside of the math.round


  return Math.round((f - 32) * (5/9) * 10) / 10;
};

const ctof = function(c) {
  // let converted = ((temp*(9/5)) +32);
  // return Math.round((converted * 10) / 10 , 1);
  return Math.round(((c * 9/5) + 32) * 10) / 10;

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
