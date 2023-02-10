const maxSubArraySum = (arr, num) => {
  if (arr.length === 0) {
    return null;
  }
  let maxSum = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++) {
    let temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > maxSum) {
      maxSum = temp;
    }
  }
  return maxSum;
};
let a = maxSubArraySum(
  [
    1, 2, 3, 4, 5, 5, 4, 1, 5, 3, 2, 3, 4, 5, 5, 4, 1, 5, 3, 2, 3, 4, 5, 5, 4,
    1, 5, 3, 2, 2, 3, 4, 5, 5, 4, 1, 5, 3, 2, 6, 5, 4, 8, 7, 98, 6, 5, 4, 75,
    43, 6, 7,
  ],
  5
);
console.log(a);

//solution in O(n)
