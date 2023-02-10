var replaceDigits = function (s) {
  let ans = '';
  for (let i = 0; i < s.length; i++) {
    if (i % 2 !== 0) ans += shift(s[i-1], Number(s[i]));
    else ans += s[i];
  }
  console.log(ans);
};
const shift = (string, number) => {
  return String.fromCharCode(string.charCodeAt() + number);
};

replaceDigits("a1b2c3d4e");


// Input: s = "a1c1e1"
// Output: "abcdef"
// Explanation: The digits are replaced as follows:
// - s[1] -> shift('a',1) = 'b'
// - s[3] -> shift('c',1) = 'd'
// - s[5] -> shift('e',1) = 'f'

// Input: s = "a1b2c3d4e"
// Output: "abbdcfdhe"
// Explanation: The digits are replaced as follows:
// - s[1] -> shift('a',1) = 'b'
// - s[3] -> shift('b',2) = 'd'
// - s[5] -> shift('c',3) = 'f'
// - s[7] -> shift('d',4) = 'h'
