var bglmg = document.createElement("img");
bglmg.src = "images/map.png";
var canvas = document.getElementById("game-canvas");
var ctx = canvas.getContext("2d");
var isBuilding = false

var FPS = 60;
var cursor={x:0,y:0};
var towerimg = document.createElement("img");
towerimg.src = "images/tower.png";

var tower_btn = document.createElement("img");
tower_btn.src = "images/tower-btn.png";

function draw(){
  ctx.drawImage(bglmg,0,0);
  ctx.drawImage(slimeimg,slime.x,slime.y);
  slime.move();
  ctx.drawImage(tower_btn,640-64,480-64,64,64);
  ctx.drawImage(towerimg,towerimg.x,towerimg.y);
  if(isBuilding == true){
    ctx.drawImage(towerimg,cursor.x,cursor.y);
    }
};

setInterval(draw,64/FPS);
var slimeimg = document.createElement("img");
slimeimg.src = "images/slime.gif";
var slime = {
  x:96,//x座標
  y:448,//y座標
  speedx:0,
  speedy:-64,
  move:function(){
  this.x = this.x+htis.speed.x/FPS
  this.y = this.y+this.speed.y/FPS  
  }
};



$("#game-canvas").on("mousemove",
function(event){
  console.log("x:"+event.offsetX+",y"+event.offsetY);
  cursor.x=event.offsetX;
  cursor.y=event.offsetY;
});

$("#game-canvas").on("click",function(){
  if(cursor.x >= 640-64 && cursor.y >= 480-64){
    if(isBuilding == false){
      isBuilding = true;
    }else
    if(isBuilding == true){
      isBuilding = false;
    }
  }else
    if(isBuilding==true){
      tower.x = cursor.x, 
      tower.y = cursor.y
    }
  })

