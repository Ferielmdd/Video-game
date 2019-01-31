var canvas = document.getElementById("myCanvas");

// --------- ball propriété ---------//
var ctx = canvas.getContext("2d");
var x =  canvas.width/2;
var y = canvas.height-30;
var dx =  - 3;
var dy = -3;
var ballRadius = 10;

// ----- ball fonction ------- //
function drawBall() {
ctx.beginPath();
ctx.arc(x, y, ballRadius , 0, Math.PI*2);
ctx.fillStyle = "blue";
ctx.fill();
ctx.closePath();
}
// ---------- paddle -------//

var paddleHeight = 10 ;
var paddleWidth  = 75 ;
var paddleX = (canvas.width-paddleWidth) / 2 ;
function paddle() {
  ctx.beginPath();
  ctx.rect( paddleX , canvas.height - paddleWidth , paddleWidth , paddleHeight );
  ctx.fillStyle = "blue";
  ctx.fill();
  ctx.closePath();
}


// ------- frames ----------  //
function draw() {
  ctx.clearRect(0 , 0, canvas.width, canvas.height);
  paddle();
  drawBall();
  x += dx;
  y += dy;
  if (y + dy > canvas.height  || y + dy < ballRadius ) {
    dy = -dy
  }
  if (x + dx > canvas.width  || x + dx < ballRadius ) {
    dx = -dx
  }
}


setInterval(draw, 10) ;