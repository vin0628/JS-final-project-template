var bglmg = document.createElement("img");
bglmg.src = "images/map.png";
var canvas = document.getElementById("game-canvas");
var ctx = canvas.getContext("2d");
var isBuilding = false
var enemyPath=[
  {x:96,y:64},
  {x:384,y:64},
  {x:384,y:192},
  {x:224,y:192},
  {x:224,y:320},
  {x:544,y:320},
];

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
  speedy:64,
  pathDes:0
   move:function(){
        if(isCollided(
          enemyPath[this.pathDes].x,
          enemyPath[this.pathDes].y,
          this.x,this.y,
          this.speed/FPS;
          this.speed/FPS;
  )){
  this.x = enemyPath[this.pathDes].x;
  this.y = enemyPath[this.pathDes].y;
  
  if(this.x == enemyPath[this.pathDes+1].x){
    if(this.y > enemyPath[this.pathDes+1].y){
      this.speedY = -64;
      this.speedX = 0;
    } else {
      this.speedY = 64;
      this.speedX = 0;
    }
}else if(this.y == enemyPath[this.PathDes+1].y) {
  if(this.x > enemyPath[this.pathDes+1].x) {
    this.speedY = 0;
      
      this.x = this.x+this.speedx/FPS;
      this.y = this.y+this.speedy/FPS;
}


function isCollided(
  pointX,pointY,
  targetX,targetY,
  targetWidth,
  targetHeight,
  ){
    if( pointX >= targetX
       && pointX <= targetX + targetWidth
       && pointY >= targetY
       && pointY <= targetY + targetHeight
       ){
      return true;
    }else{
      return false;
    }
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
    } else {
    if(isBuilding == true){
      isBuilding = false;
    }
  } else {
    if(isBuilding==true){
      tower.x = cursor.x; 
      tower.y = cursor.y;
      
      isBuiding = fallse
      }
    }
  })

