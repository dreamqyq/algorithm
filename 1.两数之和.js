/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const hash = new Map();
  hash.set(nums[0], 0);
  for (let i = 1; i < nums.length; i++) {
    const others = target - nums[i];
    if (hash.get(others) !== undefined) {
      return [hash.get(others), i];
    }
    hash.set(nums[i], i);
  }
};
// @lc code=end
