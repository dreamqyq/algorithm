/**
 * 希尔排序：O(nlog2n)
 */
function shellSort(arr) {
  var temp;
  var len = arr.length;
  for (var gap = len >> 1; gap > 0; gap = gap >>= 1) {
    for (var i = gap; i < len; i++) {
      temp = arr[i];
      for (j = i - gap; j >= 0 && arr[j] > temp; j -= gap) {
        arr[j + gap] = arr[j];
      }
      arr[j + gap] = temp;
    }
  }
}
