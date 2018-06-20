<docs>
## 两个子元素情形
* 左右左固定右占其余空间布局
* 上下上固定下占其余空间布局
* 很容易就能调整排列顺序
* 副轴用 align-items: stretch 占满空间
## 一个子元素情形
* 内容在通过 flex 布局在上下左后都居中
## 容器和子元素 padding,margin 影响
* 测试 flex 排列是容器内容区(不包含padding)中分布的
* 容器中项目的 margin 也计算在项目空间中
## 多行 wrap 下的情形
* 可以整体拉伸，前中后，带边不带边均分
</docs>

<template>
  <div id="toplayout">
    <div id="leftside" @click="show.slideRight=!show.slideRight">abc</div>
    <div id="right">
      <div id="topbar"></div>
      <div id="mainarea">
        <div id="content">
          <p v-for="i in 60" :key="i">{{i.toString().repeat(Math.random()*10)}}</p>
        </div>
      </div>
    </div>
    <div class="slideside rightside" v-if="show.slideRight"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: {
        slideRight: false,
      },
    };
  },
};
</script>

<style lang="less">
#toplayout {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: stretch;

}
#leftside {
  width: 20vw;
  min-width: 100px;
  flex-grow: 0;
  background-color: darkblue;
  // align-self: flex-start;
}
#right {
  // order: -1;
  width: 0;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: stretch;
}
#topbar {
  height: 3em;
  flex-grow: 0;
  background-color: darkcyan;
}
#mainarea {
  flex-grow: 1;
  // height: 0;
  background-color: darkgoldenrod;
  padding: 2vh;
  overflow: scroll;
  display: flex;
  justify-content: center;
  align-items: stretch;
}
#content {
  display: flex;
  flex-wrap: wrap;
  align-content: space-around;
  > p {
    margin-top: 1em;
    margin-left: 0.5em;
    margin-right: 0.5em;
    padding: 0.5em;
    border: 1px solid;
    border-radius: 0.5rem;
    &:hover {
      background-color: darkkhaki;
      color: darkred;
    }
  }
}

@keyframes slideInRight {
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
}

.slideInRight {
  animation-name: slideInRight;
}
.slideside {
  position: fixed;
  z-index: 1;
}
.rightside {
  animation-name: slideInRight;
  animation-duration: 0.5s;
  top: 0;
  bottom: 0;
  right: 0;
  min-width: 100px;
  background-color:fade(darkorange, 90%);
}

</style>
