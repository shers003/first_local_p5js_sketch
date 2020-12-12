var r, g, b;
const canvasW = window.innerWidth;
const canvasH = window.innerHeight;

function setup() {
  createCanvas(canvasW,canvasH);
  noCursor()
}

function draw() {
  //map() func does the maths for making two ranges
  //equal
  r = map(mouseX,0,canvasW,0,255);
  g = map(mouseY,0,canvasH,0,255);
  b = map(mouseX,0,canvasW,255,0);
  background(r,g,b);

  //cirlce
  fill(g,b,r)
  circle(mouseX,mouseY,10)
}
