const convas = document.getElementById('canvas');
canvas.width = 800;
canvas.height = 600;

const context = canvas.getContext('2d');

context.beginPath();

const drawRectBorder = (ctx, data) => {
  const { x, y, width, height, borderColor } = data;

  ctx.beginPath();
  ctx.rect(x, y, width, height);

  ctx.lineWidth = 5;
  ctx.strokeStyle = borderColor;

  ctx.stroke();
}

for (let i = 0; i < 20; i++) {
  drawRectBorder(context, {
    x: 200 + 10 * i,
    y: 100 + 10 * i,
    width: 400 - 20 * i,
    height: 400 - 20 * i,
    borderColor: '#fff',
  });
  drawRectBorder(context, {
    x: 205 + 10 * i,
    y: 105 + 10 * i,
    width: 390 - 20 * i,
    height: 390 - 20 * i,
    borderColor: '#000',
  });
}



