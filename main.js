var bglmg = document.createElement("img");
bglmg.src = "images/map.png";
var canvas = document.getElementById("game-canvas");
var ctx = canvas.getContext("2d");
function draw(){
  ctx.drawImage(bglmg,0,0);
  ctx.drawImage(slimeImg,slime.x,slime.y);
}
setTimeout(draw,1000);
var slimeImg = document.createElement("img");
slimeImg.src = "images/slime.gif";
var slime{
  X:0,//x座標
  y:0.//y座標
};
