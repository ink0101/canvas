## canvas 学习笔记

### 重点
* 基于状态绘制

### 绘制画布
```
<canvas id="#canvas"> </canvas>
```
### 获取画布
> 根据id获取

### 获取画笔
```
const context = canvas.getContext('2d');
```

#### canvas 画笔 常用方法

```
context.moveTo(x, y) // 移动画笔
context.lineTo(x, y) // 画笔停点
context.lineWidth = 5 // 设置线条宽度
context.strokeStyle = '#666' // 设置线条颜色

contest.stroke(); // 描边
contest.fill(); // 填充

context.beginPath(); //设置绘制的起始处
context.closePath(); //
```

