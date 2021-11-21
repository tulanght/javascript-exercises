const sumAll = function (a, b) {
  let sum = 0;
  if (Number.isInteger(a) && Number.isInteger(b) && a >= 0 && b >= 0) {
    if (a < b) {
      let i = 0;
      do {
        sum = sum + a + i;
        i += 1;
      } while (i <= b - a);
    } else if (a > b) {
      let i = a - b;
      do {
        sum = sum + a - i;
        i -= 1;
      } while (i >= 0);
    }
    return sum;
  } else {
    return "ERROR";
  }
};
sumAll(4, 1);
// Do not edit below this line
module.exports = sumAll;
