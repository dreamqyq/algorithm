/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
function check(l, item) {
  for (let i = 0; i < l.length; i++) {
    if (l[i] === item) {
      return true;
    }
  }
  return false;
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    if (result.length === 0) {
      result.push(nums[i]);
    } else {
      if (!check(result, nums[i])) {
        result.push(nums[i]);
      }
    }
  }
  const length = result.length;
  nums.length = length;
  for (let j = 0; j < length; j++) {
    nums[j] = result[j];
  }
  return result.length;
};
// @lc code=end
