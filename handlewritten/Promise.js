/**
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
  successQueue = [];
  failQueue = [];
  constructor(fn) {
    const resolve = res => {
      setTimeout(() => {
        this.successQueue.forEach(cb => cb(res));
      });
    };
    const reject = err => {
      setTimeout(() => {
        this.failQueue.forEach(cb => cb(err));
      });
    };
    fn(resolve, reject);
  }
  then(resolve, reject) {
    this.successQueue.push(resolve);
    this.failQueue.push(reject);
    return this;
  }
}

const fn = new Promise2((resolve, reject) => {
  const n = Math.random();
  console.log('hi');
  if (n > 0.5) {
    resolve(`success--${n}`);
  } else {
    reject(`fail--${n}`);
  }
});

fn.then(
  res => {
    console.log('then success res', res);
  },
  err => {
    console.log('then fail err', err);
  }
).then(
  () => {
    console.log('then success 2');
  },
  () => {
    console.log('then fail 2');
  }
);
