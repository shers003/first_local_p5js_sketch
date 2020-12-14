const canvasW = window.innerWidth;
const canvasH = window.innerHeight;
const colors = ['#ED5925','#2568ED',
                '#C6ED25','#FFFFFF','#ED25CC',0];
var index=Math.floor(Math.random()*colors.length);


function setup() {
  createCanvas(canvasW, canvasH);
  background(50,50,255);
}

function draw() {

  var color =colors[index]

  if(mouseIsPressed){
   fill(color);
   ellipse(mouseX,mouseY,80,80);
  }

  if(keyIsDown(SHIFT)){
      index = 3
  }

  if(keyIsDown(32)){
    index = colors.length-1;
  }

  if(keyIsDown(87)){
    if(index != colors.length-1){
      index++;
    }else{
      index = 0;
    }
  }

  if(keyIsDown(83)){
    if(index != 0){
      index--;
    }else{
      index = colors.length-1;
    }
  }
}
