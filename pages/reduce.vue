<template>
  <div>reduce demo</div>
</template>

<script>

const src = [1, 4, 6, 3, 3, 7];
const r = src.reduce(
  (p, c, idx) => {
    console.log(p, c, idx);
    return p + c;
  },
  0,
);
console.log(r);
const r2 = src.reduce(
  (p, c, idx) => {
    console.log(p, c, idx);
    if (c <= 5) {
      p.small.push(c);
    } else {
      p.big.push(c);
    }
    return p;
  },
  {
    small: [],
    big: [],
  },
);
console.log(r2);

export default {
};
</script>

<style>

</style>
