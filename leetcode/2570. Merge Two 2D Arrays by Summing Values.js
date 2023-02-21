/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
var mergeArrays = function (nums1, nums2) {
    let res = [];
    let nums = [...nums1, ...nums2];
    nums.sort((a, b) => a[0] - b[0]);
    for (let i = 0; i < nums.length; i++) {
      if (i !== nums.length - 1 && nums[i][0] === nums[i + 1][0]) {
        res.push([nums[i][0], nums[i][1] + nums[i + 1][1]]);
        i = i + 1;
      } else {
        res.push(nums[i]);
      }
    }
    return res;
  };
  