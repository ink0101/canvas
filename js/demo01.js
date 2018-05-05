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
// 笔画宽度
context.lineWidth = 5;
// 描边颜色
context.strokeStyle = "#aa394c";

context.stroke();
