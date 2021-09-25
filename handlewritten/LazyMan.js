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

class LazyManClass {
  constructor(name) {
    this.name = name;
    this.say = this.say.bind(this);
    this.next = this.next.bind(this);
    this.queue = [this.say];
    setTimeout(this.next, 0);
  }
  next() {
    const first = this.queue.shift();
    first?.();
  }
  say() {
    console.log(`你好，我是${this.name}`);
    this.next();
  }
  eat(type) {
    this.queue.push(() => {
      const map = {
        launch: '午餐',
        supper: '晚餐'
      };
      console.log(`吃${map[type]}`);
      this.next();
    });
    return this;
  }
  commonSleep(second) {
    setTimeout(() => {
      console.log(`我醒了，我刚睡了 ${second} 秒`);
      this.next();
    }, second * 1000);
  }
  sleep(second) {
    this.queue.push(() => {
      this.commonSleep(second);
    });
    return this;
  }
  sleepFirst(second) {
    this.queue.unshift(() => {
      this.commonSleep(second);
    });
    return this;
  }
}

const LazyMan2 = name => new LazyManClass(name);

module.exports = LazyMan2;
