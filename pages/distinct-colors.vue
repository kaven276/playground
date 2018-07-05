<template>
  <div id="rc">
    <div v-for="idx in 10" :key="idx"
      class="rc" :class="[`c${idx}`]">
      {{idx}}
    </div>
  </div>
</template>

<script>

const count = 20;
export default {
  data() {
    return {
      count,
    };
  },
};
</script>

<style lang="less">
#rc {
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(5, 10%);
  grid-template-rows: repeat(10, 8vh);
}
</style>

<style src="~/assets/css/colors.less" lang="less"></style>
