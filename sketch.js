var box1,box2 

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  box1=createSprite(300,300,100,50);
  box2=createSprite(200,200,50,100);
  box1.shapeColor="green";
  box2.shapeColor="green";
  box2.debug=true;
  box1.debug=true;

}

function draw() {
  background(0,0,0);  
  box1.x=World.mouseX;
  box1.y=World.mouseY;
  fill("white") ;
  text("box1"+box1.x,100,100)
  text("box2"+box2.x,100,200);
  if(box1.x-box2.x<box1.width/2+box2.width/2
    && box2.x-box1.x<box1.width/2+box2.width/2
    &&box1.y-box2.y<box1.height/2+box2.height/2
    &&box2.y-box1.y<box2.height/2+box1.height/2){

  box1.shapeColor="red"
  box2.shapeColor="red"
  }
  else{
    box1.shapeColor="green";
    box2.shapeColor="green";
  }
  drawSprites();

}