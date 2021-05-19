var Bgimg;
var boy,boyImg
function preload()
{
Bgimg = loadImage("snow2.jpg");
boyImg = loadImage("sprite_0.png");
}
function setup() {
  createCanvas(800,400);
  boy = createSprite(100, 340, 50, 50);
  boy.addImage(boyImg);
  boy.scale = 0.4;
}

function draw() {
  background(Bgimg);  

  drawSprites();
}