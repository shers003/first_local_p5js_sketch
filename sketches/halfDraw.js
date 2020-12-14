var canvasH = window.innerHeight;
var canvasW = window.innerWidth;

function setup() {
  noCursor();
  createCanvas(canvasW, canvasH);
  background(0);
}

function draw() {
  stroke(255);
  line(canvasW/2,0,canvasW/2,canvasH)

  if(mouseX >= canvasW/2){
    background(0);
    fill(255);
    stroke(50)
    rect(canvasW/2,0,canvasW/2,canvasH)

  }else{
    fill(0)
    noStroke()
    rect(canvasW/2,0,canvasW/2,canvasH)
    stroke(100)
  }

  circle(mouseX,mouseY,30);
}
