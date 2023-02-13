/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let sum = 0, arr = [];
    for (let index = 0; index < nums.length; index++) {
      sum+= nums[index];
      arr[index] = sum;
    }
    return arr;
  };