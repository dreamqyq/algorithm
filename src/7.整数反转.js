/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  var max = Math.pow(2, 31);
  var str = x.toString();
  var result, index;
  if (x < 0) {
    result = "-";
    index = 1;
  } else {
    result = "";
    index = 0;
  }
  for (let i = str.length - 1; i >= index; i--) {
    result += str[i];
  }
  var resNum = parseInt(result);
  return resNum < -max || resNum > max - 1 ? 0 : resNum;
};
// @lc code=end

module.exports = reverse;
