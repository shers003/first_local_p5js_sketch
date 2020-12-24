var canvasW = window.innerWidth;
var canvasH = window.innerHeight;

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
}

function setup() {
  createCanvas(canvasW, canvasH);
  noCursor();
  board = new Board(30, 0, canvasH/2, 50)
}

function draw() {
  background(220);

  if(!board.vert){

    board.makeTunnel(board.circleX,board.circleY)
    board.makeCircle(board.circleX,board.circleY)

    if(board.circleX <= canvasW){
      board.direc = !board.direc
    }
    if(board.circleX >= 0){
      board.direc = !board.direc
    }
    if(board.direc){
      board.circleX += board.speed;
    }
    else{
      board.circleX -= board.speed;
    }
  }
  else{
    board.makeTunnel(board.circleX,board.circleY)
    board.makeCircle(board.circleX,board.circleY)

    if(board.circleY <= canvasH){
      board.direc = !board.direc
    }
    if(board.circleY >= 0){
      board.direc = !board.direc
    }
    if(board.direc){
      board.circleY += board.speed;
    }
    else{
      board.circleY -= board.speed;
    }
  }

}

var keyReleased = ()=>{
  if(keyCode == 32){
    board.vert = !board.vert
  }
}
