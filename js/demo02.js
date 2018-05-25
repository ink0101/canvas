const convas = document.getElementById('canvas');
canvas.width = 800;
canvas.height = 600;

const context = canvas.getContext('2d');

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
  context.rect(x, y, width, height);
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

const num = 10;
for (let i = 0; i < num; i++) {
  drawRect(context, {
    borderColor: '#fff',
    fillColor : '#000',
    x: 500 + i * 5,
    y: 100 + i * 5,
    width: 100 - i * 10,
    height: 100 - i * 10,
  })
}

