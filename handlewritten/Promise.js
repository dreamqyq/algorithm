/**
 * Promise/A+ ===> https://promisesaplus.com/
 *
 * const fn = new Promise2((resolve,reject)=>{
 * 	console.log('hi')
 * 	if (Math.random()>0.5){
 * 		resolve('success')
 * 	} else {
 * 		reject('fail')
 * 	}
 * })
 *
 * fn.then(res=>{
 * 	console.log('then success res', res)
 * }, err => {
 *	console.log('then fail err', err)
 * }).then(()=>{
 * 	console.log('then success 2')
 * }, ()=>{
 * 	console.log('then fail 2')
 * })
 */

class Promise2 {
  state = "pending";
  eventQueue = [];
  constructor(fn) {
    if (typeof fn !== "function") {
      throw new Error("Promise only receive function");
    }
    fn(this.resolve.bind(this), this.reject.bind(this));
  }
  resolve(result) {
    setTimeout(() => {
      if (this.state !== "pending") return;
      this.state = "fulfilled";
      this.eventQueue.forEach((handles) => {
        if (typeof handles[0] === "function") {
          handles[0].call(undefined, result);
        }
      });
    });
  }
  reject(reason) {
    setTimeout(() => {
      if (this.state !== "pending") return;
      this.state = "rejected";
      this.eventQueue.forEach((handles) => {
        if (typeof handles[1] === "function") {
          handles[1].call(undefined, reason);
        }
      });
    });
  }
  then(resolve, reject) {
    const handles = [];
    if (typeof resolve === "function") {
      handles[0] = resolve;
    }
    if (typeof reject === "function") {
      handles[1] = reject;
    }
    this.eventQueue.push(handles);
    return this;
  }
}

const fn = new Promise2((resolve, reject) => {
  const n = Math.random();
  console.log("hi");
  if (n > 0.5) {
    resolve(`success--${n}`);
  } else {
    reject(`fail--${n}`);
  }
});

fn.then(
  (res) => {
    console.log("then success res", res);
  },
  (err) => {
    console.log("then fail err", err);
  }
).then(
  () => {
    console.log("then success 2");
  },
  () => {
    console.log("then fail 2");
  }
);
