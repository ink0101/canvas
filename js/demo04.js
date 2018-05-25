const canvas = document.getElementById('canvas');

canvas.width = 1200;
canvas.height = 800;

const ctx = canvas.getContext("2d");

ctx.lineWidth = 50;
ctx.strokeStyle = "#1baaaa";

ctx.beginPath();
ctx.moveTo(100, 100);
ctx.lineTo(400, 100);
ctx.lineCap = "butt";
ctx.stroke();

ctx.beginPath();
ctx.moveTo(100, 300);
ctx.lineTo(400, 300);
ctx.lineCap = "round";
ctx.stroke();

ctx.beginPath();
ctx.moveTo(100,500);
ctx.lineTo(400,500);
ctx.lineCap = "square";
ctx.stroke();

ctx.lineWidth = 3;
ctx.strokeStyle = 'black';

ctx.beginPath();
ctx.moveTo(100, 0);
ctx.lineTo(100, 600);
ctx.moveTo(400, 0);
ctx.lineTo(400, 600);
ctx.stroke();

// 线条的连接
ctx.beginPath();
ctx.moveTo(700, 100);
ctx.lineTo(900, 300);
ctx.lineTo(700, 500);
ctx.lineJoin = 'miter';
ctx.lineWidth = 20;
ctx.strokeStyle = 'red';
ctx.stroke();

ctx.beginPath();
ctx.moveTo(800, 100);
ctx.lineTo(1000, 300);
ctx.lineTo(800, 500);
ctx.lineJoin = 'bevel';
ctx.lineWidth = 20;
ctx.strokeStyle = 'blue';
ctx.stroke();

ctx.beginPath();
ctx.moveTo(900, 100);
ctx.lineTo(1100, 300);
ctx.lineTo(900, 500);
ctx.lineJoin = 'round';
ctx.lineWidth = 20;
ctx.strokeStyle = 'green';
ctx.stroke();