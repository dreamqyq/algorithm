/*
 * @lc app=leetcode.cn id=338 lang=javascript
 *
 * [338] 比特位计数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function (num) {
  let result = [];
  for (let i = 0; i <= num; i++) {
    let binary = i.toString(2);
    let n = 0;
    for (let j = 0; j < binary.length; j++) {
      if (binary[j] === "1") {
        n++;
      }
    }
    result[i] = n;
  }
  return result;
};
// @lc code=end
