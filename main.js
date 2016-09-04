var bglmg = document.createElement("img")
bglmg.src = "images/map.png";
var canvas = document.getElementByid("game-canvas");
var ctx = canvas.getContext("2d");
function draw(){
  ctx.drawimage(bgimg,0,0);
}
setTimeout(draw,1000);
