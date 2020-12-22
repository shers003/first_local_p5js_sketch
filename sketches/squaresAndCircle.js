var canvasW = window.innerWidth;
var canvasH = window.innerHeight;
var direc = true;
var count = 1;

var theCircle = {
  x:0,
  y:0,
  s:0
}

var theSquares = {
  x:0,
  y:10,
  s:10
}

function setup() {
  createCanvas(canvasW, canvasH);
  noCursor();

  theCircle.s = 60;
  theCircle.x = 26;
  theCircle.y = canvasH/2;
}

function draw() {
  background(220);

  //squares
  theSquares.y = 10;
  for(theSquares.x = 0; theSquares.x <= canvasW; theSquares.x += 15){
    fill(random(0,255))
    square(theSquares.x, 10, theSquares.s)
    for(theSquares.y = 10; theSquares.y <= (canvasH/2)-30; theSquares.y += 15){

      fill(random(0,255))
      square(theSquares.x, theSquares.y, theSquares.s)
    }
  }

  theSquares.y = (canvasH/2)+30
  for(theSquares.x = 0; theSquares.x <= canvasW; theSquares.x += 15){
    fill(random(0,255))
    square(theSquares.x, theSquares.y, theSquares.s)
    for(theSquares.y = (canvasH/2)+30; theSquares.y <=canvasH; theSquares.y += 15){
      fill(random(0,255))
      square(theSquares.x, theSquares.y, theSquares.s)
    }
  }

  //This is bouncing circle
  if(theCircle.x  >= canvasW-30){
    direc = !direc;
    count++;
  }
  else if(theCircle.x < 26){
    direc = !direc;
    count++;
  }

  if(direc){
    theCircle.x += 30;
  }
  else{
    theCircle.x -= 30;
  }


  fill(0);
  circle(theCircle.x,theCircle.y,theCircle.s);
}
