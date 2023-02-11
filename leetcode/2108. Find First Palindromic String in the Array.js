/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    for(i of words){
      if(i === i.split('').reverse().join('')){
        return i;
      }

    }
    return '';
};

firstPalindrome(["abc","car","ada","racecar","cool"]);


// Example 1:

// Input: words = ["abc","car","ada","racecar","cool"]
// Output: "ada"
// Explanation: The first string that is palindromic is "ada".
// Note that "racecar" is also palindromic, but it is not the first.
// Example 2:

// Input: words = ["notapalindrome","racecar"]
// Output: "racecar"
// Explanation: The first and only string that is palindromic is "racecar".
// Example 3:

// Input: words = ["def","ghi"]
// Output: ""
// Explanation: There are no palindromic strings, so the empty string is returned.
