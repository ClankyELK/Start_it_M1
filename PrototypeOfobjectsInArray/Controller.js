function component(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;
    this.update = function() {
      ctx = myGameArea.context;
      ctx.fillStyle = color;
      ctx.fillRect(this.x, this.y, this.width, this.height);
      playerHP();
}
this.newPos = function() {
    this.x += this.speedX;
    this.y += this.speedY;
  }
}
function updateGameArea() {
    myGameArea.clear();
    myGamePiece.newPos();
    myGamePiece.update();
}

window.onkeypress = function (event) {
let keyPress = event.keyCode ? event.keyCode : event.which;
       if (keyPress === 119){
    myGamePiece.speedY -= 1;
} else if (keyPress === 115){
    myGamePiece.speedY += 1; 
} else if (keyPress === 97) {
    myGamePiece.speedX -= 1; 
} else if (keyPress === 100){
    myGamePiece.speedX += 1;
}
if (myGamePiece.speedX == 3 || myGamePiece.speedY == 3 || myGamePiece.speedX == -3 || myGamePiece.speedY == -3) {
    myGamePiece.speedX = 0;
    myGamePiece.speedY = 0;
}
console.log(myGamePiece, 'keyPress');
updateGameArea();
}
function playerHP() {
    img = new Image();
    img.src = charHP[0];

}