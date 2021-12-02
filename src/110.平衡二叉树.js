/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  return height(root) >= 0;
};

function height(root) {
  if (root == null) {
    return 0;
  }
  let leftHeight = height(root.left);
  let rightHeight = height(root.right);
  if (
    leftHeight == -1 ||
    rightHeight == -1 ||
    Math.abs(leftHeight - rightHeight) > 1
  ) {
    return -1;
  } else {
    return Math.max(leftHeight, rightHeight) + 1;
  }
}

// @lc code=end
