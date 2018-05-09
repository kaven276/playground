# 光明顶 

> 沃津拓地图大屏展示业务统计数据

# 设计原则

* 全部在前端持久存在的数据都放到 this.env 中，所有组件都不负责状态(暂时数据除外)，方便这些展示组件的更新和替换

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

# 备忘 todo (没乘6版本)

## 基础工作
* 搭建项目环境，样式库，图表库，地图库，组件库，API网关服务调用库，做基本集成测试 (中等1天)
* 配置代码规范，自动检测，自动修正，集成到开发构建过程；根据开发过程的需要不断调整 (中等1天)
* 配置多套配置用于各种环境部署，模拟服务测试，测试环境，生产环境，支持连接各种后端环境 (简单1天)
* 配置打包过程，开发自动化部署脚本 (中等1天)
* h5proxy(API gateway) 升级开发，扩展支持后台非艾扑后台格式，增加到本应用后台接口的转发路由策略 (极难1天)

## 非地图部分界面设计
* 设计总体布局，顶部集中 brand, 查询，筛选条件，导航；主体地图，侧边栏可切换各种信息，无间距，自适应屏幕 (中等2天)
* topbar 设置返回按钮；隐藏用户管理 (普通1天)
* 标题栏 banner 文字调整，背景调成蓝色调 (前台普通新增1天)
* 侧边栏区局列表和店铺列表支持按名称和指标数值排序 (普通1天)
* env.bureauList 用在地图，侧边栏用的是 env.bureauStats，当前 hover 需要同步
* env.buruauList[].stats 需要同步，当不是全部 bureau stats 时，需要补足
* 全屏按钮 (前台普通新增1天) 
* 美工总体配色设计

## 导航路由各部分同步设计
* 设计总体导航，分分公司，店铺，店铺列表，店铺详情，订单详情 (中等1天)
* 根据导航目标自动设置地图显示模式 （极难2天)
* 根据地图缩放级别自动导航到相应侧边栏页面和地图显示模式 (极难1天)
* 店铺地图展示：某某某(n) 鼠标移动，显示所有指标，同时侧边栏active跟随，图标颜色大小可自动调
* 分公司，店铺的 hover 和侧边栏 active 状态完全同步 (中等1天)
* 导航，浏览器导航栏可用；导航自动配置缩放
* 当处于分公司统计模式下，topbar选择分公司直接能跳转到辖区(普通1天)

## 数据集成
* 全量加载全市店铺数据，按视野展示
* 按视野渐进实加载店铺数据
* 加载店铺的数据提前算好级别

## 指标统计分级支持
* 支持指标口径模型，按日均值和个指标类别相对扫码量占比统计，并落入优良中差区间，适用各自的色彩展示方式 (中等2天)
* 分级从5级改成好中差三级

## 地图标准设计
* 自定义地图 overlay 层，并实现根据经纬坐标转 css 定位，按需自动同步。默认 overlay 几个类不能满足要求。(极难1天)
* 支持分公司统计模式，店铺 mapv 模式，店铺点阵模式三种地图展现方式 (done)
* 按照不同的颜色显示分公司，店铺指标 (普通1天)
* 店铺 popover 中显示可扫码的二维码，按需动态生成，用过销毁节约资源 (中等1天)
* 区局统计地图标准按照当前指标切换数字 (中等1天)
* 店铺标注按照当前指标钱换数字(中等1天)
* 店铺列表项新增店铺渠道类别，店铺地图标注支持新展示类型，类型一个字，上面是数字 (前台较难新增1天)
* 分公司定位支持名称后面添加中心店地名，按照实际店铺分布，具体调整相关分公司中心点到相应地名，验证(普通1天)
* 区县轮廓: 获取天津市和各个区县的轮廓数据，使用多边形遮罩描绘轮廓，配置美化填充和边线，透明度，随机分配颜色(较难1天)
* 热力图：原始数据到热力图入参数据转换，热力图参数配置，预加载预计算，离线缓存提速，渐变颜色梯度半径透明度据实际数据配置，感知当前缩放级别，只在合适的缩放级别自动显示，其他缩放级别自动隐藏，随地图位置移动动态增量增加数据重绘(极难2天)

## 动效类
* 地图标注进入方式，依次进入效果，地图进入后保持 pause
* hover 区局和店铺 marker，右侧列表 hover 状态联动
* 发展好的使用新绿色，发展差的使用枯黄色；文字对应上述背景调整成对比色 (前台普通新增1天)
* 发展好的使用跳跃，发展差的使用慢新跳 (前台极难2天)
* 发展好的位于发展差的前面(前台较难新增1天)
* 发展最好的大一点，最差的缩小到一半并且不显示0(前台较难新增1天)
* 喘气喘的大一点(前台较难新增1天)
* 分公司地图标注物使用半透明渐变效果，上下边能透看到地图，文字使用背景对比色，hover态做反转色彩(前台较难新增1天)
* 分公司地图标注物指标数字动画到达目标数据，切换指标类从0重新动画到达新指标，切换时间范围从原有值动画到达目标值(前台极难新增1天)
* 店铺标注物当指标或者时间范围切换时，数字使用切换特效，向上微放大淡出

## 信息推送
* 行销接收任务推送

## bug
* exclude 和 include 一样
* 百度地图移动会连续产生3此 centerAndZoom，需要控制成连续事件相当于一次事件 (前台极难新增1天)
* 地图缩放平移拖拽后会连续产生大量的 centerAndZoom
* custom overlay 随地图可能不移动固定在屏幕特定位置，而且可能在地图外显示

## 库的技术问题
* vuebootstrap b-table sort nested 字段不好使
* vue-baidu-map 组件不和根组件放到一个模块中不好使
* mapv 地图特效库报错，this.show 未定义问题
* animated.css 和自定义 transform 冲突问题
* 地图缩放后，店铺标注有时固定到了屏幕而不是地图，地图缩放标注也缩放了，地图移动标注不随地图移动，标注会跑到地图外面的界面上

## 模拟服务
* 模拟各种指标，适配时间段，适配地理区域大小，自动随机生成中国人名 (普通后台2天)
* 按照地理范围，缩放级别自适应产生合适数量的店铺 (普通后台1天)
* 各个统计指标参考扫码量指标百分比随机生成数量 (普通后台1天)

## 运营维护类
* 分级指标动态调整
* 地图店铺散点展示方式根据各个缩放比例尺实际数据点密度动态调整展示方式 (极难3天)

z-index 规划
=============
baidu-map relative 0
  mb-view absolute z-index:0
2 分公司标注

特性总结
========

## 联动类
* 地图缩放级别到地图展示模式，分公司，热点，散点三大类；
  - 分公司再分全市，市区两级；
  - 散点再分只指标数，带店铺名，全部指标三类展示
* 指标切换，地图标注中的指标值和侧边栏的指标值都跟随切换
* 导航切换，自动根据当前路由切换地图到相应缩放级别和模式；地图上点击店铺看详情，采用 replace 方式

局方提出问题

1、缩小地图要回到缩放图标。
答: 导航还未完整设计开发
2、提升店铺加载速度
答：主要需要提高后台接口返回数据的速度
3、拖拽地图后重新加载
答：
4、图片打点优先级要高于百度 比如 同一个超市  点击应该触发咱们自己的信息，不是点开百度的介绍
答：需要研究下百度地图的机制
5、放大后无法选择条件
答：因为更新店铺标注列表过程中，出现javascript异常，使用模拟服务没发现此问题，正在研究中
6、从分公司列表点调到分公司地域

吕总
* 把互联网类的数据刨除
* 店铺详情 trade 列表只要在途的
* 18 个区划出来
* 大量点收敛
* 在途订单（已下单到为工毕）指标数据
* 区局中心放到店铺密级的地方
* 小地图体现当天

* 预警
* 英文提示
* 报错
* 性能

