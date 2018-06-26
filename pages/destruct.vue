<template>
  <div></div>
</template>

<script>
export default {
  created() {
    this.merge();
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
    assign() {
      const obj = { a: 1, b: 2 };
      const obj2 = { b: -2, c: 3 };
      Object.assign(obj, obj2);
      console.log(obj);
    },
    merge() {
      const obj = { a: 1, b: 2 };
      const obj2 = { b: -2, c: 3 };
      const result = { ...obj, ...obj2 };
      const result2 = { ...obj2, ...obj };
      console.log(result, result2);
    },
  },
};
</script>

<style>

</style>
