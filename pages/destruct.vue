<template>
  <div></div>
</template>

<script>
export default {
  created() {
    this.complex();
  },
  methods: {
    obj() {
      const obj = {
        a: 1,
        b: 2,
        c: {
          c1: 1,
          c2: 10,
        },
      };
      const { a, c: { c2: v2 }, ...restobj } = obj;
      console.log(a, v2, restobj);
    },
    arr() {
      const arr = [3, 5, 8, 3];
      const [v0, v1, ...restarr] = arr;
      console.log(v0, v1, restarr);
    },
    param() {
      function func1({ a, b, ...rest } = { a: -1, b: -2 }) {
        console.log(a, b, rest);
      }
      func1({
        a: 1, b: 2, c: 3, d: 4,
      });
      func1();
    },
    complex() {
      const arr = [{ a: 1, b: 2 }, 3, 5];
      const [{ a }] = arr;
      console.log(a);
    },
  },
};
</script>

<style>

</style>
