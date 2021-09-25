/**
 * 事件防抖：把多个事件合并成一个事件
 * 用途：搜索栏输入，提交按钮
 */

function debounce(fn, delay) {
  let timer = null;
  return function () {
    const args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}
