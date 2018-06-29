<template>
  <div>
    <b-button @click="obj.a=3">change obj.a</b-button>
    <div>{{JSON.stringify(obj,null,2)}}</div>
    <div>{{objA}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      obj: {
        a: 1,
        b: 2,
      },
    };
  },
  computed: {
    objA() {
      return this.obj.a;
    },
  },
  created() {
    this.$watch('obj.a', (newVal) => {
      console.log('obj.a changed ($watch version)', newVal);
    });
  },
  watch: {
    obj() { // watch object as whole
      console.log('obj change', this.obj);
    },
    'obj.a': function _() { // watch object's memeber
      console.log('obj.a change', this.obj.a);
    },
    objA() { // watch a computed value
      console.log('objA change', this.objA);
    },
  },
};
</script>

<style>

</style>
