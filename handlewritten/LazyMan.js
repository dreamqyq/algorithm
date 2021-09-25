/**
 * > LazyMan("Hank")
 * 		你好，我是 Hank
 * > LazyMan("Hank").sleep(10).eat("lunch")
 * 		你好，我是 Hank
 * 		（沉默10秒）
 * 		我醒了，我刚睡了10秒
 * 		吃午餐
 * > LazyMan("Hank").eat("lunch").eat("supper")
 *    你好，我是 Hank
 * 		吃午餐
 * 		吃晚餐
 * > LazyMan("Hank").sleepFirst(5).eat("supper")
 *		（沉默五秒）
 *		我醒了，我刚睡了 5 秒
 *		你好，我是 Hank
 *		吃晚餐
 */

function LazyMan1(name) {
  const queue = [];
  const task = () => {
    console.log(`你好，我是${name}`);
    next();
  };
  queue.push(task);
  const next = () => {
    const first = queue.shift();
    first?.();
  };

  const api = {
    sleep(second) {
      const task = () => {
        setTimeout(() => {
          console.log(`我醒了，我刚睡了 ${second} 秒`);
          next();
        }, second * 1000);
      };
      queue.push(task);
      return api;
    },
    eat(type) {
      const map = {
        launch: '午餐',
        supper: '晚餐'
      };
      const task = () => {
        console.log(`吃${map[type]}`);
        next();
      };
      queue.push(task);
      return api;
    },
    sleepFirst(second) {
      const task = () => {
        setTimeout(() => {
          console.log(`我醒了，我刚睡了 ${second} 秒`);
          next();
        }, second * 1000);
      };
      queue.unshift(task);
      return api;
    }
  };

  setTimeout(() => {
    console.log(queue);
    next();
  }, 0);
  return api;
}

module.exports = LazyMan1;
