调用亚信艾扑反向代理服务端的 ajax 封装

# 特色功能支持

## nuxt 集成

作为 nuxt plugin

## 灵活的服务端地址配置

### 外置配置文件

通过在 nuxt app.html 引入静态配置 javascript 文件配置 window.config 配置数据实现。

###  支持多套环境。

通过网址的查询串来指定加载哪个配置脚本文件，可以分别对模拟环境，测试环境，生产环境写不同的配置文件。

将 app.html 放到 nuxt 项目根下即可使用  ~/static/deploy-cfg/deploy-cfg-${env}.js 的配置文件

## 可以进行 vue 跟踪

this.spost(this.ts, '/path', request, response);

ts 通过 this.newStore() 生成，可以

* 跟踪 ajax 请求进行中，失败，成功的状态
* 跟踪发起和结束时间
* 跟踪调用了第几次

## 多类 ajax 调用追踪 UI 组件

* 内置基于 bootstrap v3/v4 的 ajax 状态追踪组件
* 集成 icon，颜色代表请求中，失败，成功
* 可以配置动作名称
* 可以配置进行中，成功，失败的固定提示文字，服务端返回的结果覆盖写死配置
* 三下点击可以展开全部跟踪信息，方便真机开发和后台联调调测，方便用户截屏保障

## 登录会话集成

* 检测到会话失效，集成 vue-router 进入登录页面
* 自动将 vuex 的登录成功信息加入每个请求中，做有会话服务端调用

需要 vuex store 定义 session 模块来认为 ajax 是带会话的，每个请求会追加 state.session.cookies 的内容。

范例 vuex mudule:

```javascript
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
```
