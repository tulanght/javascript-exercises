const repeatString = function (str, repeatTimes) {
  if (typeof repeatTimes == "number" && repeatTimes >= 0) {
    a = "";
    while (repeatTimes > 0) {
      a += str;
      repeatTimes--;
    }
    return a;
  } else {
    return "ERROR";
  }
};
repeatString("ha", 3);
// Do not edit below this line
module.exports = repeatString;
