const canvas = document.getElementById('canvas');
canvas.width = 800;
canvas.height = 600;
// 获取画笔
const context = canvas.getContext('2d');
console.log(context);

// debugger
// 移动画笔
context.moveTo(100, 100);
// 笔画停点
context.lineTo(300, 300);
context.lineTo(100, 500);
// 笔画宽度
context.lineWidth = 5;
// 描边颜色
context.strokeStyle = "red";

// 描边
// debugger
context.stroke();

// 再次绘制的起始处
context.beginPath();

context.moveTo(200, 100);
context.lineTo(400, 300);
context.lineTo(200, 500);
context.lineWidth = 5;
context.strokeStyle = "blue";

context.stroke();

context.beginPath();
context.moveTo(300, 100);
context.lineTo(500, 300);
context.lineTo(300, 500);
context.lineWidth = 5;
context.strokeStyle = "black";

context.stroke();
