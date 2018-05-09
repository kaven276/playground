# 客户意向单二次预约修改审核平台前端项目

# 项目技术环境概述 

* 使用 vscode 开发环境
* 本项目集成了 eslint 代码规范，vscode 中使用 setting 中 autoFixOnSave": true，确保保存文件时自动按指定 eslint rule 进行自动修复
* 本项目基础前端框架采用 vue/nuxt
* UI组件库使用 vuestrap，内置了 boostrap4 样式表；本项目无需 jquery 和 bootstrap.js
* 服务端调用引用的 plugins/spost，和沃行销，沃津眼调用方法完全一致

## Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).
