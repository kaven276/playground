<docs>
## container
* display: grid
* grid-template-rows grid-template-columns
* repeat(6, 100px)
* grid-template-area grid-area
* grid-area: rs / cs / re / ce
## items
* grid-row-start grid-row-end
* grid-column-start grid-column-end
* grid-row grid-column
* start / span n
* item margin will shrink its width/height

reference
===========
* [CSS3 Grid Layout](https://kb.cnblogs.com/page/178444/)
</docs>

<template>
  <div id="grid">
    <div id="title">game1</div>
    <div id="score"></div>
    <div id="stats"></div>
    <div id="board">
      <div v-for="i in 200" :key="i">{{i}}</div>
    </div>
    <div id="controls">controls</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
#grid {
  width: 100%;
  height: 100%;
  display: grid;
  background-color: orange;

  /* 分为两列:
   * 第一列尺寸由内容大小控制
   * 第二列使用剩余空间，但大小从不会小于游戏主机板和控制区域最小宽度
   * 游戏主面板和游戏控制区域占在第二列
   */
  grid-template-columns: 30% minmax(min-content, 1fr);

  /* 三行:
   * 第一行和最后一行的大小根据内容决定
   * 中间一行可以使用剩余空间，但从来不会小于游戏主面板的最小高度
   */
  grid-template-rows: auto minmax(min-content, 1fr) auto;

  grid-column-gap: 10px;
  grid-row-gap: 10px;
}

/*游戏的每一部分都是通过网格线来定义的，每个部分都在其占的行中，如果哪个部分占有的行数多于一行，需要使用跨行来决定*/
#title {
  grid-column: 1;
  grid-row: 1;
  background-color: red;
  padding: 1em;
}
#score {
  grid-column: 1;
  grid-row: 3;
  background-color: green;
}
#stats {
  grid-column: 1;
  grid-row: 2;
  justify-self: start;
  background-color: #e9f;
}
#board {
  grid-column: 2;
  grid-row: 1 / span 2;
  background-color: #ccc;
}
#controls {
  grid-column: 2;
  grid-row: 3;
  align-self: center;
  background-color: yellow;
}

#board {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(5vw, 1fr));
  > div {
    margin: 0.5em 0.5em;
    // height: 10vh;
    // line-height: calc(height);
    text-align: center;
    border: 1px solid;
    border-radius: 1em;
  }
}
</style>
