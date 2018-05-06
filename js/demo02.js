const convas = document.getElementById('canvas');
canvas.width = 800;
canvas.height = 600;

const context = canvas.getContext('2d');
// context.moveTo(100, 100);
// context.lineTo(400, 100);
// context.lineTo(400, 300);
// context.lineTo(100, 300);
// // 火狐可以明显看到左上角缺角，Chrome正常
// // context.lineTo(100, 100);
// context.closePath();

// context.lineWidth = 3;
// context.strokeStyle = 'red';
// context.fillStyle = 'yellow';

// context.stroke();
// context.fill();


function drawRect(context, params) {
  const {
    x = 100,
    y = 100,
    width = 100,
    height = 100,
    fillColor = 'pink',
    borderWidth = 5,
    borderColor = 'skyBlue',
  } = params;
  context.beginPath();
  context.moveTo(x, y);
  context.lineTo(x + width, y);
  context.lineTo(x + width, y + height);
  context.lineTo(x, y + height);
  context.closePath();

  context.lineWidth = borderWidth;
  context.strokeStyle = borderColor;
  context.fillStyle = fillColor;

  context.stroke();
  context.fill();
}

const params1 = {
  borderColor: 'seagreen',
  x: 300,
  y: 100,
};

drawRect(context, {});
drawRect(context, params1);
