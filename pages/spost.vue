<template>
  <div>
    <b-button variant="primary" @click="doPost">do post</b-button>
    <pre v-if="ts.o">{{JSON.stringify(ts.d,null,2)}}</pre>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ts: this.newStore(),
    };
  },
  methods: {
    doPost() {
      this.spost(this.ts, '/ms/checkscope/', {
        tele: '15620001781',
      });
    },
  },
};
</script>

<style>

</style>
