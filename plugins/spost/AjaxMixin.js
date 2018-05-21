import axios from 'axios';
import qs from 'qs';
import PromiseState from './PromiseState';

const { config } = window; // 本项目依赖于 window.config 的配置，格式参考 deploy-cfg-example.js
const API = axios.create({
  baseURL: config.APIRoot,
});
// API.defaults.headers.common['content-type'] = 'text/plain';
// API.defaults.headers.common['content-type'] = 'application/x-www-form-urlencoded';

// 只有以下三种类型不会发起 Preflighted requests
// application/x-www-form-urlencoded
// multipart/form-data
// text/plain

/* eslint no-param-reassign:0 */
export default {
  methods: {
    newStore() {
      return new PromiseState();
    },
    spost(store, path, data) {
      return new Promise((resolve, reject) => {
        const parts = path.split(':');
        const path0 = parts.pop(); // 部署无关路径
        const prefix = parts.pop();
        const pattern = config.workerPrefixes[prefix || '']; // 特定服务部署的地址模板
        let path2; // 给到后台总代理的路径
        if (!pattern) {
          path2 = path0;
        } else {
          path2 = pattern.replace('@', path0);
          console.log(`path2=${path2}`);
        }

        store.b = new Date();
        store.t = 'ajax';
        store.u = path;
        store.r = data;
        store.p = true;
        store.o = false;
        store.e = false;
        store.m = '';
        store.d = {};
        store.s += 1;
        data = Object.assign({}, data) || {};

        // 没登录，发送 ajax 请求直接按异常处理，不实际发出请求了
        if (this.$store && this.$store.state.session && !this.$store.state.session.cookies) {
          store.o = false;
          store.e = true;
          store.m = '未登录';
          reject(store);
          return;
        }

        if (this.$store && this.$store.state.session) {
          Object.assign(data, this.$store.state.session.cookies);
        }
        let post;
        switch (config.APIFormat) {
          case 'IPU':
            data.__action = path2; // eslint-disable-line no-underscore-dangle
            post = API.post('/mobiledata?action=Interface.call', `data=${encodeURIComponent(JSON.stringify(data))}`);
            break;
          case 'backend':
            post = API.post(path, data, { transformRequest: [d => qs.stringify(d)] });
            break;
          case 'h5proxy':
            data.__action = path2; // eslint-disable-line no-underscore-dangle
            post = API.post(path, `data=${encodeURIComponent(JSON.stringify(data))}`);
            break;
          case 'JSON':
            data.__action = path2; // eslint-disable-line no-underscore-dangle
            post = API.post(path, JSON.stringify(data), {
              headers: { 'Content-Type': 'text/plain' },
            });
            break;
          default:
            alert(`no APIFormat ${config.APIFormat}`);
            return;
        }
        post
          .then((res) => {
            const d = res.data;
            store.f = new Date();
            store.p = false;
            store.c = parseInt(d.respCode, 10);
            store.d = d.data || {};
            // {"X_RESULTINFO":"会话对象为空,请重新登录","X_RECORDNUM":"0","X_RESULTCODE":"-100"}
            if (store.c === 0) {
              store.o = true;
              store.e = false;
              store.m = d.respDesc;
              resolve(store);
            } else {
              store.o = false;
              store.e = true;
              store.m = d.respDesc || '';
              reject(store);
              if (d.X_RESULTCODE === '-100') {
                window.alert(d.X_RESULTINFO);
                this.$root.loginState = false;
              }
            }
            this.$emit(`ajax:${store.u}`, store);
          })
          .catch((d) => {
            store.f = new Date();
            store.p = false;
            store.o = false;
            store.e = true;
            store.c = -2;
            if (d.status === 404) {
              store.m = '后台服务暂未开通';
            } else {
              store.m = '服务调用异常';
            }
            store.d = d;
            this.$emit(`ajax:${store.u}`, store);
            reject(store);
          });
      });
    },
    async sleep(seconds) {
      await new Promise((resolve) => {
        setTimeout(resolve, seconds * 1000);
      });
    },
  },
};
