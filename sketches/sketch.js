//circle object
var circles = {
  rX:0,
  rY:0,
  size:0,
  rColors:[]
}
var count = 0;
const canvasX = window.innerWidth;
const canvasY = window.innerHeight;
const midX = canvasX/2
const midY = canvasY/2

var setup = ()=>{
  console.log(canvasX);
  createCanvas(canvasX, canvasY);
  background(255)

  for (var i=0;i<1000;i++){
     //can use p5 random function
     circles.rX = random(0,canvasX);
     circles.rY = Math.floor(Math.random()*canvasY);
     circles.size = 25;

     fill(220,220,220,50)
     stroke(200,100)
     circle(circles.rX,circles.rY,50);
   }
}

var draw = ()=>{
  count++;

  circles.rColors = [random(0,255),
                 random(0,255),
                 random(0,255)];

  if(count==1000){
    for(var x=0;x!=canvasX;x++){
      fill(0)
      square(x,canvasY/2,0.5,0.5)
    }
    for(var y=0;y!=canvasY;y++){
      fill(0)
      square(canvasX/2,y,0.5,0.5)
    }
  }

  fill(circles.rColors[0],circles.rColors[1],
       circles.rColors[2])
  noStroke()

  if(count%2 == 0){

    //top right
    fill(250,250,0,155)
    circles.rX = random(midX,canvasX);
    circles.rY = random(0,midY);
    circle(circles.rX,circles.rY,circles.size);

    //bottom right
    fill(250,50,50,155)
    circles.rX = random(midX,canvasX);
    circles.rY = random(midY,canvasY);
    circle(circles.rX,circles.rY,circles.size);
  }
  else if(count%2 == 1){
    //Bottom left
    fill(50,50,250,155)
    circles.rX = random(0,midX);
    circles.rY = random(midY,canvasY);
    circle(circles.rX,circles.rY,circles.size);
    //top left
    fill(50,250,50,155)
    circles.rX = random(0,midX);
    circles.rY = random(0,midY);
    circle(circles.rX,circles.rY,circles.size);
  }



}
