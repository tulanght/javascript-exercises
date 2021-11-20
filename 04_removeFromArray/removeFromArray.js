const removeFromArray = function (arr, arg) {
  let args = Array.from(arguments).slice(1);
  args.forEach((arg) => {
    if (arr.indexOf(arg) > -1) {
      arr.splice(arr.indexOf(arg), 1);
    }
  });
  return arr;
};
console.log(
  removeFromArray(["r", "es", "af", "aweb", "den"], "af", "ngu", "den", "aweb")
);
// Do not edit below this line
module.exports = removeFromArray;
