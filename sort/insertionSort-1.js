/**
 * 插入排序：O(n^2)
 */
function insertionSort(array) {
  let temp = null;
  for (let i = 1; i < array.length; i++) {
    temp = array[i];
    for (var j = i; j >= 0 && temp < array[j - 1]; j--) {
      array[j] = array[j - 1];
    }
    array[j] = temp;
  }
  return array;
}
