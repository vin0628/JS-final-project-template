var bglmg = document.createElement("img");
bglmg.src = "images/map.png";
var canvas = document.getElementById("game-canvas");
var ctx = canvas.getContext("2d");
function draw(){
  ctx.drawImage(bglmg,0,0);
  ctx.drawImage(slime,0,0);
}
setTimeout(draw,1000);
var slime = document.createElement("img");
slime.src = "images/slime.gif";
var slime{
  X:0,//x座標
  y:0.//y座標
}
