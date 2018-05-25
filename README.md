## canvas 学习笔记

[toc]

### 重点
* 基于状态绘制
* 将状态设置与确定绘制的代码分隔开，增强可读性

### 绘制画布
``` html
<canvas id="#canvas"> </canvas>
```
### 获取画布
> 根据id获取

### 获取画笔
``` js
const context = canvas.getContext('2d');
```

#### canvas 画笔 常用方法

``` js
context.moveTo(x, y) // 移动画笔
<!--也可以完成图形的闭合，但是火狐可以明显看到左上角缺角，Chrome正常-->
context.lineTo(x, y) // 画笔停点
context.lineWidth = 5 // 设置线条宽度
context.strokeStyle = '#666' // 设置线条颜色

// 确定绘制
contest.stroke(); // 描边
contest.fill(); // 填充

//包裹规划路径
context.beginPath(); // 设置绘制的起始处
context.closePath(); // 设置绘制结束点，闭合图形

// 绘制矩形
context.rect(x, y, width, height);

```

#### 线条的属性

##### lineCap 属性
	定义上下文中线的端点。
	
* butt: 默认值，平直边缘
* round： 以线宽为直径的半圆
* square： 以线宽为长，一半线宽为宽的矩形

##### lineJoin 属性
	两条线相交产生的拐点，可将其称为连接。

* miter：默认值，在连接处边缘延长相接。
	* miterLimit： 规定自动填充连接点的极限，如果超过这个值，会导致lineJoin值失效。
* bevel：连接处是一个对角线斜角。
* round：连接处是一个圆。

##### 线宽 lineWidth

##### 笔触样式 strokeStyle 
