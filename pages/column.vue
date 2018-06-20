<template>
  <div id="cols">
    <h2>column-span:all; column-span:all; column-span:all;</h2>
    <span v-for="i in 50" :key="i">{{i}}. {{i.toString().repeat(Math.random()*10)}}</span>
    <h2>column-span:all; column-span:all; column-span:all;</h2>
    <span v-for="i in 50" :key="i">{{i}}. {{i.toString().repeat(Math.random()*10)}}</span>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
#cols {
  padding: 20px 20px;
  column-count: 3;
  // column-width: 100px;
  column-fill: balance;
  column-gap: 10%;
  column-rule: solid 1px silver;
  > h2 {
    column-span: all;
    margin-top: 1em;
  }
  > span {
    padding: 3px 0.5em;
  }
}
</style>
