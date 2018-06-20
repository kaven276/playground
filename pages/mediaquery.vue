<docs>
媒体查询，响应式布局
* viewport(视窗) 的宽度与高度
* 设备的宽度与高度
* 朝向 (智能手机横屏，竖屏) 。
* 分辨率
</docs>

<template>
  <div id="mq">hello media query {{width}}*{{height}}</div>
</template>

<script>
export default {
  data() {
    return {
      width: 0,
      height: 0,
    };
  },
  mounted() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
  },
};
</script>

<style lang="less">
#mq {
  @media screen and (max-width: 768px) {
    color: red;
  }
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    color: orange;
  }
  @media screen and (min-width: 1025px) and (min-device-pixel-ratio: 1) {
    color: green;
  }
  @media screen and (min-width: 1025px) and (min-device-pixel-ratio: 2) {
    color: blue;
  }
}
</style>
