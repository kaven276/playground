module.exports = {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: '天津联通二次预约时间修改审核平台',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '各个渠道意向单全流程大屏监控' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },
  css: [
    'animate.css/animate.min.css',
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        });
      }
    },
  },
  router: {
    // base: '/experiment/',
  },
  modules: [
    '@nuxtjs/font-awesome',
    'bootstrap-vue/nuxt',
  ],
  plugins: [
    '~/plugins/spost',
    '~/env',
  ],
};
