const canvas = document.getElementById('canvas');

canvas.width = 1200;
canvas.height = 800;

const ctx = canvas.getContext('2d');

// demo1
ctx.beginPath();
ctx.moveTo(5, 5);
ctx.lineTo(200, 5);
ctx.lineTo(200, 200);
ctx.lineJoin = 'bevel';
ctx.lineCap = 'round';
ctx.lineWidth = 10;
ctx.strokeStyle = 'red';
ctx.stroke();

// demo2
ctx.beginPath();
ctx.moveTo(300, 300);
ctx.lineTo(500, 300);
ctx.lineTo(500, 500);
ctx.lineJoin = 'bevel';
ctx.lineCap = 'round';
ctx.lineWidth = 10;
ctx.strokeStyle = 'blue';
ctx.stroke();

// demo2
ctx.beginPath();
ctx.moveTo(600, 600);
ctx.lineTo(800, 600);
ctx.lineTo(800, 800);
ctx.lineJoin = 'round';
ctx.lineCap = 'butt';
ctx.lineWidth = 10;
ctx.strokeStyle = 'green';
ctx.stroke();