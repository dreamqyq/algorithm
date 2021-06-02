/**
 * 插入排序：O(n^2)
 * 使用 splice
 */
function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    for (var j = 0; j < i; j++) {
      if (array[i] < array[j]) {
        array.splice(j, 0, array[i]);
        array.splice(i + 1, 1);
        break;
      }
    }
  }
  return array;
}
