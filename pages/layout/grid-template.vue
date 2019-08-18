<template>
  <div id="grid3">
    <div style="grid-area:a;">a</div>
    <div style="grid-area:b;">b</div>
    <div style="grid-area:c;">c</div>
  </div>
</template>

<script>
function r(n) {
  return Math.floor(Math.random() * n);
}
export default {
  methods: {
    makeCss() {
      return {
        // order: Math.floor(Math.random() * 20),
        // gridRowStart: r(4) + 1,
        gridColumn: `${r(2) + 1} / ${r(2) + 3}`,
        backgroundColor: `rgb(${r(256)}, ${r(256)}, ${r(256)})`,
      };
    },
  },
};
</script>

<style scoped lang="less">
#grid3 {
  display: grid;
  grid-template:
    "a    a   a"    40px
    "b    c   c"    40px
    "b    c   c"    40px
  / auto auto auto ;
  grid-row-gap: 10px;
  grid-column-gap: 10px;
  justify-items: auto;
  align-items: auto;
  outline: 1px solid rgb(23, 21, 21);

  > div {
   border: 1px solid red;
  }
}
</style>
