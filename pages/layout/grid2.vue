<template>
  <div id="grid2">
    <div></div>
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
#grid2 {
  padding: 10px;
  display: grid;
  grid-template-rows: repeat(5, minmax(120px, auto));
  grid-template-columns: repeat(5, 1fr);
  grid-row-gap: 10px;
  grid-column-gap: 10px;
  justify-items: stretch;
  align-items: stretch;
  outline: 1px solid rgb(23, 21, 21);

  > div {
   border: 1px solid red;
   grid-column-start: 3;
   grid-column-end: 6;
   grid-row-start: 3;
   grid-row-end: 5;
  }
}
</style>
