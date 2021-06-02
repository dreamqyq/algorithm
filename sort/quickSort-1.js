/**
 * 快速排序：O(nlogn)
 * 递归版
 */
function quickSort(array) {
  if (array.length <= 1) {
    return array;
  }
  let leftArray = [];
  let rightArray = [];
  for (let i = 1; i < array.length; i++) {
    if (array[i] >= array[0]) {
      rightArray.push(array[i]);
    } else {
      leftArray.push(array[i]);
    }
  }
  return quickSort(leftArray).concat(array[0]).concat(quickSort(rightArray));
}
