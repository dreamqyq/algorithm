/*
 * @lc app=leetcode.cn id=304 lang=javascript
 *
 * [304] 二维区域和检索 - 矩阵不可变
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 */
var NumMatrix = function (matrix) {
  const rowLength = matrix.length;
  if (rowLength > 0) {
    const colLength = matrix[0].length;
    const sums = new Array(rowLength);
    for (let i = 0; i < rowLength; i++) {
      sums[i] = [0];
      for (let j = 0; j < colLength; j++) {
        sums[i][j + 1] = sums[i][j] + matrix[i][j];
      }
    }
    this.sums = sums;
  }
};

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
  let result = 0;
  for (let i = row1; i <= row2; i++) {
    result += this.sums[i][col2 + 1] - this.sums[i][col1];
  }
  return result;
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
// @lc code=end
