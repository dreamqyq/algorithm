/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  return intersectionSet(new Set(nums1), new Set(nums2));
};

function intersectionSet(set1, set2) {
  if (set1.length > set2.length) {
    return intersectionSet(set2, set1);
  }
  const result = new Set();
  for (const number of set1) {
    if (set2.has(number)) {
      result.add(number);
    }
  }
  return [...result];
}
// @lc code=end
