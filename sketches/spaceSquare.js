var canvasH = window.innerHeight;
var canvasW = window.innerWidth;
var canvas2;
var drawCount = 0;
var range;
var mySquare = {
  x:0,
  y:0,
  size:0
};
var star = {
  x:0,
  y:0,
  size:0
}

function setup() {

  noCursor();

  createCanvas(canvasW, canvasH);
  canvas2 = createGraphics(canvasW,canvasH);
  canvas2.clear();

  mySquare.x = canvasW/2;
  mySquare.y = canvasH/2;
  mySquare.size = 20;

  star.size = 5;

  range = [-4, 4];
}

function draw() {

  drawCount++;

  background(0);
  noStroke();
  fill(255)

  star.x = random(0,canvasW);
  star.y = random(0,canvasH);

  mySquare.x += random(range[0],range[1]);
  mySquare.y += random(range[0],range[1]);

  if(drawCount%50 == 0){
    fill(255,80)
    canvas2.ellipse(star.x,star.y,star.size)
  }


  if(drawCount%500== 0){
    if(range[1]>50){
      range[0]--;
      range[1]++;
    }
  }


  //fill(120,120,220)
  square(mySquare.x, mySquare.y, mySquare.size);
  fill(255)
  ellipse(star.x,star.y,star.size);

  image(canvas2,0,0)

  if(mouseIsPressed){
    //canvas2.square(mySquare.x, mySquare.y, mySquare.size )
    mySquare.x = mouseX;
    mySquare.y = mouseY;
  }
}
