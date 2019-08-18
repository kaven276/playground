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

说明
- 在 vue 项目中可以比较容易生产数据，做事件处理范例
- 在 vue 项目中自带 webpack css 处理，css 不用写 vender 前缀
</docs>

<template>
  <div id="toplayout">
    <div id="leftside" @click="show.slideRight=!show.slideRight">
      <p>左右两侧排列<br/>上下居中对齐</p>
      <div v-for="i in 9" :key="i" class="sides">
        <div>{{i}}</div>
        <div style="font-size:2em;" :style="{order: Math.random()>0.5?1:-1}">{{i}}</div>
      </div>
      <div style="display:flex;align-items:flex-start;justify-content:center;height:100px;background-color:green;">
        <span style="background-color:blue;align-self:center;">only item</span>
      </div>
    </div>
    <div id="right">
      <div id="topbar">
        <a href="http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html" target="_blank">flex学习参考</a>
        <br/>
        display:flex; flex-direction; flex-wrap; justify-content; align-self; align-content;
        <br/>
        align-self; order; flex-basis; flex-grow; flex-shrink
      </div>
      <div style="display:flex;justify-content:space-between;flex-direction:row;align-items:center;">
        <hr style="flex-grow:1;"/>
        <h5 style="text-align:center;padding:0em 1ex;">title</h5>
        <hr style="flex-grow:1;"/>
      </div>
      <div id="mainarea">
        <div id="content">
          <p v-for="i in 20" :key="i">{{i.toString().repeat(Math.random()*10)}}</p>
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
  flex-direction: row; // 在这里可以左右交换
  justify-content: flex-end; // stretch 模式下，该配置不起作用
  align-items: stretch;
}
#leftside {
  // width: 20vw;
  min-width: 100px; // 能保证最小宽度
  flex-basis: 200px; // 固定总宽度 20%
  flex-grow: 0;
  flex-shrink: 0;
  color: white;
  background-color: darkblue;
  // align-self: flex-start;
}
#right {
  // order: -1;
  // width: 800px;
  flex-basis: 600px;
  flex-grow: 1;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: stretch;
}
#topbar {
  flex-basis: 3em;
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
.sides {
  padding-left: 1em;
  padding-right: 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid silver;
}
#content {
  display: flex;
  flex-wrap: wrap;
  align-content: stretch;
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
