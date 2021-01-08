var canvasW = window.innerWidth;
var canvasH = window.innerHeight;
var circleSize = 50

class Board {
  constructor(size, x, y, speed){
    this.circleSize = size
    this.circleX = x
    this.circleY = y
    this.vert = false
    this.direc = true
    this.speed = speed
  }

  #makeSection(xs, ys, xe,ye){
    let x, y;
    for(x = xs; x <= xe; x += 10){
      fill(random(0,255))
      square(x, ys, 10)
    for(y = ys;y <= ye;y += 10){
      fill(random(0,255))
      square(x, y, 10)
      }
    }
  }

  makeTunnel(x,y){
    var gap = this.circleSize

    if(!this.vert){

      this.#makeSection(0,0,canvasW,y-(gap/2));
      this.#makeSection(0,y+(gap/2),canvasW,canvasH);

    }
    else{

      this.#makeSection(0,0,x-(gap/2),canvasH)
      this.#makeSection(x+(gap/2),0,canvasW,canvasH)

    }
  }

  makeCircle(x,y){
    fill(0)
    circle(x,y,this.circleSize)
  }

  moveCircle(canvasW, canvasH){

    if(!this.vert){

      if(this.circleX <= canvasW - this.circleSize){
        this.direc = !this.direc
      }
      if(this.circleX >= this.circleSize){
        this.direc = !this.direc
      }
      if(this.direc){
        this.circleX += this.speed;
      }
      else{
        this.circleX -= this.speed;
      }

    }else{

      if(this.circleY <= canvasH - this.circleSize){
        this.direc = !this.direc
      }
      if(this.circleY >= this.circleSize){
        this.direc = !this.direc
      }
      if(this.direc){
        this.circleY += this.speed;
      }
      else{
        this.circleY -= this.speed;
      }

    }

  }

  
}

function setup() {
  createCanvas(canvasW, canvasH);
  noCursor();
  board = new Board(circleSize , circleSize, canvasH/2, 50)
}

function draw() {
  background(220);

  board.makeTunnel(board.circleX,board.circleY);
  board.makeCircle(board.circleX,board.circleY);
  board.moveCircle(canvasW, canvasH);

}

var keyReleased = ()=>{
  if(keyCode == 32){
    board.vert = !board.vert
  }
}
