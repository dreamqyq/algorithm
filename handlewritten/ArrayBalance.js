/**
 * 求数组的相对平衡点
 * 一个数组中的元素，如果其前面的部分等于后面的部分，那么这个点的位序就是平衡点。
 * 相对平衡点：前面的部分的和 和 后面的部分的和，差值最小，则这个点就是相对平衡点
 */

const array = [2, 3, 1, 5, 6];

const result = getBalance2(array);
// result => 5
console.log(result);

/** 暴力求解 */
function getBalance(array) {
  const list = [];
  const length = array.length;
  let all = array[0] + array[length - 1];
  for (let i = 1; i < length - 1; i++) {
    const left = sum(array, 0, i - 1);
    const right = sum(array, i + 1, length - 1);
    all += array[i];
    list.push(Math.abs(left - right));
  }
  let min = all;
  let resultIndex = -1;
  for (let i = 1; i < list.length; i++) {
    if (list[i] <= min) {
      min = list[i];
      resultIndex = i;
    }
  }
  return array[resultIndex + 1];
}

function sum(array, start, end) {
  let result = 0;
  for (let i = start; i <= end; i++) {
    result += array[i];
  }
  return result;
}

/**
 * 算法优化
 * 思路：首先我们定义两个变量 leftSum 和 rightSum， 其初始值分别为 0 和 该列表第一个元素以后的所有元素的和。
 * 遍历第二个元素至倒数第二个元素，每一次遍历，left_sum加上该元素前的一个元素，right_sum减去该元素
 * 如果left_sum 和 right_sum 的差值最小，则返回该元素。
 */
function getBalance2(array) {
  const length = array.length;
  if (length < 3) return null;
  let leftSum = 0;
  let rightSum = 0;
  let balanceIndex = -1;
  for (let i = 1; i < length; i++) {
    rightSum += array[i];
  }

  let minDiff = rightSum;
  for (let i = 1; i < length - 1; i++) {
    leftSum += array[i - 1];
    rightSum -= array[i];
    const diff = Math.abs(leftSum - rightSum);
    if (diff < minDiff) {
      minDiff = diff;
      balanceIndex = i;
    }
  }
  return array[balanceIndex];
}
