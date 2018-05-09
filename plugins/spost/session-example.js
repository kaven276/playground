// 本文件应该放到 nuxt 项目的 store 子目录中，作为登录会话模块
// spost 自动将 vuex 的登录成功信息加入每个请求中，做有会话服务端调用

export const state = () => ({
  cookies: undefined,
});

export const mutations = {
  login(state) {
    state.cookies = {
      SESSION_ID: 'xxx',
      STAFF_ID: 'LTHXY130',
    };
  },
};
