var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
/* function draw() {
  ctx.beginPath();
  ctx.rect(50, 50, 10, 20);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}
setInterval(draw, 10);

var ninjaSprite = document.getElementById("ninja-sprite");
var ninja = canvas.getContext("2d");
function draw() {
  ctx.beginPath();
  ctx.arc(50, 50, 10, 0, Math.PI * 2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}
setInterval(draw, 10);

var img = new Image(); // Create new img element

img.addEventListener('load', function() {
    drawImage(img,10,10);
  }, false);
  img.src = "ninja-sprite.png"; // Set source path */
  ctx.beginPath();
ctx.rect(20, 40, 50, 50);
ctx.fillStyle = "#FF0000";
ctx.fill();
ctx.closePath();

