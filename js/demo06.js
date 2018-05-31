const canvas = document.getElementById("canvas");
canvas.width = 800;
canvas.height = 1800;
const ctx = canvas.getContext('2d');

ctx.rect(200, 100, 400, 200);

// 添加渐变线
var grd = ctx.createLinearGradient(200, 300, 600, 300);

// 添加颜色断点？
grd.addColorStop(0, 'black');
grd.addColorStop(0.5, 'white');
grd.addColorStop(1, 'black');

ctx.fillStyle = grd;

ctx.fill();


var grd1 = ctx.createLinearGradient(100, 300, 700, 400)

grd1.addColorStop(0, 'olive');
grd1.addColorStop(0.25, 'maroon');
grd1.addColorStop(0.5, 'aqua');
grd1.addColorStop(0.75, 'fuchsia');
grd1.addColorStop(0.25, 'teal');

ctx.fillStyle = grd1;
ctx.strokeStyle = grd1;

ctx.strokeRect(100, 400, 300, 50);
ctx.strokeRect(100, 450, 150, 50);
ctx.strokeRect(100, 500, 450, 50);

ctx.fillRect(100, 600, 300, 50);
ctx.fillRect(100, 650, 150, 50);
ctx.fillRect(100, 700, 450, 50);

ctx.fillRect(0, 800, 800, 50);


// 径向渐变
const grd2 = ctx.createRadialGradient(400, 1200, 100, 400, 1200, 200);

grd2.addColorStop(0, '#CC95C0');
grd2.addColorStop(0.25, '#DBD4B4');
grd2.addColorStop(0.5, '#7AA1D2');
grd2.addColorStop(0.75, '#DBD4B4');
grd2.addColorStop(0.25,"#CC95C0");

ctx.fillStyle = grd2;

ctx.fillRect(100,1000,600,400);