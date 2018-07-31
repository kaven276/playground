<template>
  <ul>
    <template v-for="(v,idx) in list">
      <Nested :list="v" v-if="v.length" :key="idx"/>
      <li v-else :key="idx">{{v}}</li>
    </template>
  </ul>
</template>

<script>
import Nested from '~/components/Nested.vue';

export default {
  components: {
    Nested,
  },
  name: 'Nested',
  props: {
    list: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style>

</style>
