/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0 || (x !== 0 && x % 10 === 0)) return false;
  var revertNum = 0;
  while (x > revertNum) {
    revertNum = revertNum * 10 + (x % 10);
    x = Math.floor(x / 10);
  }
  return x === revertNum || x === Math.floor(revertNum / 10);
};
// @lc code=end

module.exports = isPalindrome;
