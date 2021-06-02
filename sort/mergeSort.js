/**
 * 归并排序：O(nlogn)
 */
function mergeSort(arr) {
  var merge = function (left, right) {
    var result = [];
    while (left.length && right.length) {
      result.push(left[0] <= right[0] ? left.shift() : right.shift());
    }
    return result.concat(left.concat(right));
  };
  if (arr.length < 2) return arr;
  var mid = arr.length >> 1;
  return merge(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid)));
}
