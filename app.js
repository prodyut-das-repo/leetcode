/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  if (num < 5) return;
  let res = [];
  let obj = {
    1: "I",
    4: "IV",
    5: "V",
    9: "IX",
    10: "X",
    40: "XL",
    50: "L",
    90: "XC",
    100: "C",
    400: "CD",
    500: "D",
    900: "CM",
    1000: "M",
  };
  const keys = Object.keys(obj).reverse();
  for (let index = 0; index < keys.length; index++) {
    let floor = Math.floor(num / keys[index]);
    if (floor > 0) {
      for (let j = 0; j < floor; j++) {
        res.push(obj[keys[index]]);
      }
    }
    console.log(num);
    num -= floor * keys[index];
  }
  console.log(res.join(""));
};

intToRoman(3999);

// Example 1:
// Input: num = 3
// Output: "III"
// Explanation: 3 is represented as 3 ones.
// Example 2:

// Input: num = 58
// Output: "LVIII"
// Explanation: L = 50, V = 5, III = 3.
// Example 3:

// Input: num = 1994
// Output: "MCMXCIV"
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
