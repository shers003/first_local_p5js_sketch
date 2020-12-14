//Sections
class section{
  constructor(x,y,w,h,s){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.s = s;
  }
}

var canvasW = window.innerWidth;
var canvasH = window.innerHeight;

s1 = new section(0,0,canvasW/3,canvasH,10);
s2 = new section(canvasW/3,0,canvasW/3,canvasH,10)
s3 = new section((canvasW/3)*2,0,canvasW/3,canvasH,10);

var setup = ()=>{
  createCanvas(canvasW,canvasH)
}

var draw = ()=>{
  noStroke();

  fill(0,255,0)
  circle(random(0,s1.w-5) , random(0,s1.h) ,s1.s)

  fill(255,140,0)
  circle(random(s3.x+5,canvasW) , random(0,s3.h) ,s3.s)
}
