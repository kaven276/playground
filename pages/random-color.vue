<template>
  <div id="rc">
    <div v-for="c in colors" :key="c"
      :style="{backgroundColor:c}">
      {{c}}
    </div>
  </div>
</template>

<script>
const randomColor = require('randomcolor');
const chroma = require('chroma-js');
const chromatism = require('chromatism');
const distinctColors = require('distinct-colors');

const count = 20;

// const newColour = chromatism.convert('#ff0000');
// const newColour = chromatism.convert('#5300FF').hex;


export default {
  data() {
    return {
      count,
      colors: [],
    };
  },
  created() {
    this.colors_ = randomColor({
      luminosity: 'dark',
      count,
    });
    this.colors_ = chroma.scale().colors(count);
    this.colors_ = (new Array(count)).fill(0)
      .map((v, idx) => chroma('skyblue').set('hsl.h', idx / count));
    this.colors_ = chromatism.adjacent(90, count, '#ff0000').hex;
    this.colors = distinctColors({
      count,
      lightMin: 20,
      lightMax: 100,
      chromaMin: 0,
      chromaMax: 100,
    });
    this.colors = this.colors.sort(() => Math.random() < 0.5);
    this.colors = this.colors.sort(() => Math.random() < 0.5);
    this.colors = this.colors.sort(() => Math.random() < 0.5);
    console.log(this.colors);
  },
};
</script>

<style lang="less">
#rc {
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(4, 20%);
  grid-template-rows: repeat(10, 8vh);
}
</style>
