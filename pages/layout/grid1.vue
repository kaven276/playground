<template>
  <div id="grid1">
    <div v-for="i in 16" :key="i"
      :style="makeCss()"
    >{{i}}</div>
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
#grid1 {
  display: grid;
  grid-template-rows: repeat(5, minmax(120px, auto));
  grid-template-columns: repeat(5, 1fr);
  grid-row-gap: 10px;
  grid-column-gap: 10px;
  justify-items: stretch;
  align-items: stretch;
  outline: 1px solid rgb(23, 21, 21);

  > div {
   // border: 1px solid red;
  }
}
</style>
