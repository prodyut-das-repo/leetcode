/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let array = [];
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < s.length; j++) {
      for (let k = 0; k < s.length; k++) {
        if (i !== j && j !== k && i !== k) {
          if (s[i] + s[j] + s[k] === 0) {
            array.push([s[i], s[j], s[k]].sort((a, b) => a - b));
          }
        }
      }
    }
  }
  return Array.from(new Set(array.map(JSON.stringify)), JSON.parse);
};
lengthOfLongestSubstring([-1, 0, 1, 2, -1, -4]);

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
