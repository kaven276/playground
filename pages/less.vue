<docs>
less css 特性示范
</docs>

<template>
  <div id="lessmain">
    <h1>hello less</h1>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
@import "~assets/css/base_vars.less";
@bgcolor: lighten(@maincolor, 40%);

#lessmain {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: @maincolor;
  background-color: @bgcolor;
  & > h1 {
    padding: 1em;
    border: 3px solid darken(@maincolor, 10%);
    @media (max-width: 768px) {
      font-size: 1.5em;
    }
    @media (max-width: 1024px) {
      font-size: 2em;
    }
    @media (max-width: 3840px) {
      font-size: 3em;
    }
  }
}
</style>
