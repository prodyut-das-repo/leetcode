/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function (key, message) {
    key = key.split(" ").join("").split("");
    key = key.filter((item, pos) => key.indexOf(item) === pos).join("");
    let occ = {};
    let code = 97;
    let res = "";
    for (i of key) {
      occ[i] = String.fromCharCode(code);
      code++;
    }
    for (i of message) {
      res += occ[i] || " ";
    }
    return res;
  };

//   Example 1:


// Input: key = "the quick brown fox jumps over the lazy dog", message = "vkbs bs t suepuv"
// Output: "this is a secret"
// Explanation: The diagram above shows the substitution table.
// It is obtained by taking the first appearance of each letter in "the quick brown fox jumps over the lazy dog".
// Example 2:


// Input: key = "eljuxhpwnyrdgtqkviszcfmabo", message = "zwx hnfx lqantp mnoeius ycgk vcnjrdb"
// Output: "the five boxing wizards jump quickly"
// Explanation: The diagram above shows the substitution table.
// It is obtained by taking the first appearance of each letter in "eljuxhpwnyrdgtqkviszcfmabo".