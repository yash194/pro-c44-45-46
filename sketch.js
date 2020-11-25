
var car;
var z,rand,t,gar;
var score=0;

var play=1;
var end=0;
var gamestate=play;
function preload(){
  carimg=loadImage("images/car.png");
  bimg=loadImage("images/background_edited.jpg");

trimg=loadImage("images/track.jpg");


z1=loadImage("images/zombie 1.png");
z2=loadImage("images/zombie 2.png");
z3=loadImage("images/zombie 3.png");
z4=loadImage("images/zombie 4.png");
z5=loadImage("images/zombie 5.png");

g1=loadImage("images/g3.png");
g2=loadImage("images/g6.png");
g3=loadImage("images/garbage1.png");
g4=loadImage("images/waste.png");
bin=loadImage("images/dustbingreen.png");
}









function setup(){

  canvas=createCanvas(1800,600);
car=createSprite(200,440,100,100);
car.addImage(carimg);
car.scale=0.6;

zgroup=createGroup();
tgroup=createGroup();

gargroup=createGroup();
}

function draw(){
  background(bimg);  
  //image(trimg,displayWidth*4,displayHeight-100,displayWidth*5,100);
  image(trimg,-500,550,displayWidth*20,60);


if(gamestate===play){




  if(keyWentDown(RIGHT_ARROW)){
    car.velocityX=10;
     
    
  }
  
  
    
  if(keyWentUp(RIGHT_ARROW)){
    car.velocityX=0;
   
  }


  





  for(var i =0; i< zgroup.length; i++)
  {
     if(zgroup.get(i).isTouching(tgroup))
     {
         zgroup.get(i).destroy();
         score=score+1;
        
         
     }
  }

  for(var i =0; i< gargroup.length; i++)
  {
     if(gargroup.get(i).isTouching(car))
     {
         gargroup.get(i).velocityX=car.velocityX;
        
         
     }
  }
 

  

  garbage();
  bullet();
  zombies();


if(score===1){

  gamestate=end;
}







}
   


if(gamestate===end){

dust=createSprite(car.x+300,520,20,20);
dust.debug=true;
dust.scale=0.7;
dust.addImage(bin);
car.velocityX=0;


}










camera.position.x=car.x;

drawSprites();
textSize(30);
fill("black");
text("score-"+score,car.x,100);

}

function zombies(){

if(frameCount%200===0){
  z=createSprite(car.x+800,450,10,10);
  z.debug=true;
z.velocityX=-1;
var rand = Math.round(random(1,5));
z.scale=0.4;

switch(rand){
    case 1: z.addImage(z2);
    break;
    case 2: z.addImage(z4);
    break;
    case 3: z.addImage(z5);
    break;
    
    default:
    break;
}
zgroup.add(z);
}







} 

function bullet(){
  if(keyDown(UP_ARROW)){
    
    
    t=createSprite(car.x+200,320,10,10);
    t.debug=true;
    t.velocityX=car.velocityX+19;
    t.depth=car.depth;
    tgroup.add(t);
   }

  




}




function garbage(){

if(frameCount%250===0){
  gar=createSprite(car.x+200,540,10,10);
  gar.scale=0.2;
  var rand = Math.round(random(1,3));
  switch(rand){
    case 1: gar.addImage(g1);
    break;
    case 2: gar.addImage(g2);
    break;
    case 3: gar.addImage(g3);
    break;
    
    
    
    default:
    break;
  



  }  

gargroup.add(gar);




}






}






