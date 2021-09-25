/**
 * 事件节流：一定时间内，某一个事件只执行一次
 * 用途：resize, scroll, mousermove, touchmove
 */

function throttle(fn, delay) {
  let timer = null;
  const start = new Date().getTime();
  return function () {
    const args = arguments;
    const current = new Date().getTime();
    clearTimeout(timer);
    if (current - start >= delay) {
      fn.apply(this, args);
      start = current;
    } else {
      timer = setTimeout(() => {
        fn.apply(this, args);
      }, delay);
    }
  };
}
