const convas = document.getElementById('canvas');
canvas.width = 800;
canvas.height = 600;

const context = canvas.getContext('2d');
context.moveTo(100, 100);
context.lineTo(400, 100);
context.lineTo(400, 300);
context.lineTo(100, 300);
// context.lineTo(100, 100);
context.closePath();

context.lineWidth = 3;
context.strokeStyle = 'red';
context.fillStyle = 'yellow';

context.stroke();
context.fill();
