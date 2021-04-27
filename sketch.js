var fixedRect,movingRect;





function setup() {
  createCanvas(800,400); 
  fixedRect = createSprite(400,200,50,50);
  fixedRect.debug=true;
  fixedRect.shapeColor="red" ;
  movingRect = createSprite(200,200,50,50);
  movingRect.debug=true;
  movingRect.shapeColor="yellow";
}

function draw() {
  background(0); 
  movingRect.x=mouseX;
  movingRect.y=mouseY;
  if(fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2
    &&movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2
    &&fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2
    &&movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2){
    fixedRect.shapeColor="pink";
    movingRect.shapeColor="pink";
  }
  else{
    fixedRect.shapeColor="red";
    movingRect.shapeColor="yellow";
  }
  drawSprites();
}