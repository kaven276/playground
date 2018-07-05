<template>
  <div></div>
</template>

<script>
const Promise = require('bluebird');

console.log(Promise);

((f) => { // 证明异步 reduce 是不行的
  if (!f) return;
  const arr = [1, 2, 3];
  const total = arr.reduce(async (sum, item) => {
    const added = await new Promise((resolve) => {
      setTimeout(() => resolve(item), 1000);
    });
    sum += added;
    console.log(item, sum);
    return sum;
  }, 0);
  console.log(`total=${total}`);
})(0);

((f) => {
  if (!f) return;
  try {
    const a = 1 / 0;
    console.log(a);
  } catch (e) {
    console.error(e);
  }
})(0);

function mockPromise(i) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(i), 3000);
  });
}

((f) => {
  if (!f) return;
  Promise.reduce(
    [1, 2, 3],
    (total, i) => {
      console.log('i =', i);
      return mockPromise(i).then((i) => {
        console.log(i, total);
        total += i;
        return total;
      });
    }, 0,
  ).then(console.log);
})(1);

((f) => {
  if (!f) return;
  const p1 = this.spost({}, 'path1');
  const p2 = this.spost({}, 'path2');
  const p3 = this.spost({}, 'path3');
  Promise.all([p1, p2, p3]).then(([ts1, ts2, ts3]) => {
    console.log(ts1, ts2, ts3);
  });
})(1);

(async (f) => {
  if (!f) return;
  const p1 = this.spost({}, 'path1');
  const p2 = this.spost({}, 'path2');
  const p3 = this.spost({}, 'path3');

  await Promise.all([p1, p2, p3]);
})(1);

export default {

};
</script>

<style>
</style>
