<docs>
使用 grid layout 布局表单
</docs>

<template>
  <div id="gridform">
    <textarea v-for="i in 12" :key="i" rows="3" v-text="i"></textarea>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
#gridform {
  display: grid;
  grid-gap: 0px;
  align-items: center;
  justify-items: center;
  // align-content: space-around;
  // justify-content: space-around;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  width: 100%;
  height: 60%;
}
</style>
