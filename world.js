class World {
  constructor(onWallDie) {
    this.snake = new Snake(onWallDie);
    this.apple = new Block(0, 0, 'red');
    this.apple.randomize();
    this.score = 0;
  }

  show() {

    this.apple.show();
    this.snake.show();
  }
  
  eat() {
    this.score++;
    this.apple.randomize();

    while (this.snake.collideTail(this.apple)) {
      this.apple.randomize();
    }
  }
  update(){
    this.snake.update();
  }


}