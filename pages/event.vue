<template>
  <div>
    <b-button @click="$emit('a',{type:'click'})">emit a</b-button>
  </div>
</template>

<script>
export default {
  created() {
    this.$on('a', ({ type }, p2 = 0) => {
      alert(`a emitted ${type} ${p2}`);
    });
    setTimeout(() => {
      this.$emit('a', { type: 'timeout' }, 123);
    }, 3000);
    this.$root.$on('radar event', ({ x, y }) => {
      // paint
      console.log(x, y);
    });
  },

};
</script>

<style>

</style>
