var myCircle ={
  x:0,
  y:0,
  xspeed: 5,
  yspeed: 5

}
var bg = true;
var r,g,b;

var canvasW = window.innerWidth;
var canvasH = window.innerHeight;

var setup = () =>{
  createCanvas(canvasW, canvasH);

  myCircle.x = random(0, canvasW);
  myCircle.y = random(0, canvasH);

  r = random(0, 255);
  g = random(0, 255);
  b = random(0, 255);
}

var draw = () =>{
  if(bg){
    background(g,b,r);
  }

  drawCircle()
  bounce()
  move()
}

var drawCircle = () =>{
  fill(r,g,b)
  circle(myCircle.x, myCircle.y, 30)
}

var bounce = () =>{
  if(myCircle.x >= canvasW || myCircle.x <= 0){
    myCircle.xspeed = myCircle.xspeed * -1
  }

  if(myCircle.y >= canvasH || myCircle.y <= 0){
    myCircle.yspeed = myCircle.yspeed * -1
  }
}

var move = () =>{
  myCircle.x += myCircle.xspeed;
  myCircle.y += myCircle.yspeed;
}

//Interactiom
var mouseClicked = () =>{
  bg = !bg;
}

var keyReleased = () =>{
  if(bg){
    if(keyCode == 87 || keyCode == 38){
      myCircle.xspeed++;

    }
    if(keyCode == 83 || keyCode == 40){
      myCircle.xspeed++;
    }
    if(keyCode == 65 || keyCode == 37){
      myCircle.yspeed++;
    }
    if(keyCode == 68 || keyCode == 39){
      myCircle.yspeed--;
    }
  }

}
