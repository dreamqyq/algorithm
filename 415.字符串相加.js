/*
 * @lc app=leetcode.cn id=415 lang=javascript
 *
 * [415] 字符串相加
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  var len1 = num1.length;
  var len2 = num2.length;
  var maxLength = len1 > len2 ? len1 : len2;
  var result = "";
  for (let i = 0; i < maxLength; i++) {
    var s1 = parseInt(num1[len1 - 1 - i]) || 0;
    var s2 = parseInt(num2[len2 - 1 - i]) || 0;
    if (result.length > i) {
      result = s1 + s2 + 1 + result.substr(1);
    } else {
      result = s1 + s2 + result;
    }
  }
  return result;
};
// @lc code=end
