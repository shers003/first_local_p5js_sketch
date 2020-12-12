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
  // background(0,0,255)
  //
  // fill(255)
  // console.log(s1.w)
  // rect(s1.x,s1.y,s1.w,s1.h)
  //
  // fill(255)
  // console.log(s2.w)
  // rect(s2.x,s2.y,s2.w,s2.h)
  //
  // fill(255)
  // rect(s3.x,s3.y,s3.w,s3.h)
}

var draw = ()=>{
  noStroke();

  fill(0,255,0)
  circle(random(0,s1.w-5) , random(0,s1.h) ,s1.s)

  fill(255,140,0)
  circle(random(s3.x+5,canvasW) , random(0,s3.h) ,s3.s)
}
