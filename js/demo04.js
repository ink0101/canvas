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