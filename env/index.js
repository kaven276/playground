import Vue from 'vue';
import params from './getParams.js';

// 在这里描述全局数据
const env = {
  dev: false,
  envType: window.type, // 当前配置环境
  mvd: {}, // map view data
  selected: {
  },
  use: {
  },
  ctl: {
  },
  params,
};

Vue.mixin({
  computed: {
    env() {
      return this.$root.$data;
    },
  },
});

export default ({ app }, inject) => {
  console.log(app, inject);
  // 可以在这里面设计全部全局的数据结构
  // 各个组件使用 this.$root.prop 引用
  app.data = () => env; // eslint-disable-line no-param-reassign
};

export { env };
