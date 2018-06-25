<template>
  <div>
    <b-button variant="primary" @click="doPost">do post</b-button>
    <pre v-if="ts.o">{{JSON.stringify(ts.d,null,2)}}</pre>
    <pre v-if="ts2.o">{{JSON.stringify(ts2.d,null,2)}}</pre>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ts: this.newStore(),
      ts2: this.newStore(),
    };
  },
  methods: {
    doPost() {
      this.spost(this.ts, '/ms/auth/ipuLogin', {
        staffId: 'LTHXY130', // CBS 工号
        password: 'cbss%1234', // 密码
      }).then((ts) => {
        this.$root.auth = ts.d;
      }).then(() => {
        this.spost(this.ts2, '/mobile/serialNumber/query', {
          sysCode: 'CBSS', // 实际前台没传
          netTypeCode: 45, // 实际前台没传
          pageSize: 20,
          snPrefix: '', // 号段
          minDeposit: 0, // 最小预存款
          maxDeposit: 5000, // 最大预存款
        });
      });
    },
  },
  // Authorization: Bearer <token>
};
</script>

<style>

</style>
