/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let currentSum = 0;
    const sum = nums.reduce((a, b) => a + b);
    for (let i = 0; i < nums.length; i++) {
        if (currentSum === sum - currentSum - nums[i]) return i;
        currentSum += nums[i];
    }
    return -1;
}