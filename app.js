/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  let sum = func(n);
  return sum == 1;
};

const func = (n) => {
  let temp = [];
  while (true) {
    let sum = 0;
    let arr = String(n).split("");
    for (let index = 0; index < arr.length; index++) {
      sum += arr[index] * arr[index];
    }
    n = sum;
    if (sum == 1) {
      return true;
    }
    if (temp.includes(sum)) {
      return false;
    }
    temp.push(sum);
  }
};

let a = isHappy(1111111);
console.log(a);
