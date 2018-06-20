<template>
  <div id="target">
    <button class="btn btn-primary" @click="doAjax2">ajax</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      debug: false,
      ts: this.newStore(),
      aa: this.newStore(),
    };
  },
  methods: {
    doAjax1() {
      this.spost(this.ts, '/push/crm/submitOrder', {
        sysCode: 'BSS', // BSS or CBS
        orderId: '20180510133919209259', // 订单号, BSS/CBS 按各自编码填写
        bureauName: '河西', // 2个汉字的分公司名称，用于按分公司做权限过滤
        shopId: '123', // 天津眼店铺列表接口中的店铺ID
        serialNumber: '15620001781', // 新装的号码，手机号码，或者022开头的宽带或固话
        netType: '手机', // 手机，宽带，固话...
        productName: '99套餐200M宽带融合',
        time: '2018-06-06 12:00:23', // 受理时间，正式提交时间
      });
    },
    doAjax2() {
      this.spost(this.ts, '/ms/checkscope', {
        tele: '18602209968', // BSS or CBS
      });
    },
  },
};
</script>

<style lang="less">
#target {
  width: 20vw;
  height: 20vh;
  background: linear-gradient(red, blue);
}
</style>
