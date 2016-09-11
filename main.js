var bglmg = document.createElement("img");
bglmg.src = "images/map.png";
var canvas = document.getElementById("game-canvas");
var ctx = canvas.getContext("2d");
function draw(){
  ctx.drawImage(bglmg,0,0);
  ctx.drawImage(slimeimg,slime.x,slime.y);
   ctx.drawImage(tower,640-64,480-64,64,64);
};
setInterval(draw,16);
var slimeimg = document.createElement("img");
slimeimg.src = "images/slime.gif";
var slime = {
  x:0,//x座標
  y:0//y座標
};
setInterval(draw,16);
var tower = document.createElement("img");
tower.src = "images/tower-btn.png";

$("#canvas").on("mousemove",function(event){
  console.log("x:"+event.offsetX+",y"+event.offsetY)
});
