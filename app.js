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

decodeMessage(
  "the quick brown fox jumps over the lazy dog",
  "vkbs bs t suepuv"
);

// Example 1:

// Input: s = "leetcode", wordDict = ["leet","code"]
// Output: true
// Explanation: Return true because "leetcode" can be segmented as "leet code".
// Example 2:

// Input: s = "applepenapple", wordDict = ["apple","pen"]
// Output: true
// Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
// Note that you are allowed to reuse a dictionary word.
// Example 3:

// Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
// Output: false
