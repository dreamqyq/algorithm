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
  if (x < 0) return false;
  var str = x.toString();
  var len = str.length;
  if (len === 0) return true;
  for (let i = 0; i < (len - (len % 2)) / 2; i++) {
    if (str.charAt(i) !== str.charAt(len - 1 - i)) {
      return false;
    }
  }
  return true;
};
// @lc code=end

module.exports = isPalindrome;
