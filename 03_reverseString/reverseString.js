const reverseString = function (str) {
  if (typeof str == "string") {
    str = str.split("");
    return str.reverse().join("");
  } else {
    return "ERROR";
  }
};
reverseString("hello there");
// Do not edit below this line
module.exports = reverseString;
