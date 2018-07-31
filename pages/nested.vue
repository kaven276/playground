<template>
  <Nested :list="tree" />
</template>

<script>
import Nested from '~/components/Nested.vue';

export default {
  components: {
    Nested,
  },
  data() {
    return {
      tree: [
        1,
        [31, 32, 33],
        2,
        [41, 42, 43],
      ],
    };
  },
};
</script>

<style>

</style>
