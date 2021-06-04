const rows = 18;
const cols = 18;
const size = 20;

let world;

let score = 0;
let highscore = 0;
const onWallDie = true;
function setup() {
  frameRate(60);
  createCanvas((cols+2)*size, (rows+2)*size);
  world = new World(onWallDie);
}

function draw() {
  if (frameCount % 10 == 0) {
    world.update();
    background(255);
    
    for (let i = 1; i < rows+2; i++) {
      line(size, i * size, width-size, i * size);
    }
    for (let i = 1; i < cols+2; i++) {
      line(i * size, size, i * size, height-size);
    }

    world.show();

    stroke(100, 100, 100, 100);
    strokeWeight(1);
  }

}

function keyPressed() {
  if (key == 'a') {
    world.snake.enqueue('west');
  } else if (key == 'd') {
    world.snake.enqueue('east');
  } else if (key == 'w') {
    world.snake.enqueue('north')
  } else if (key == 's') {
    world.snake.enqueue('south');
  } /*else if (key == 'p') {
    noLoop();
  } else if (key == 'o') {
    loop();
  }*/
  return false;
}


function die() {
  world = new World(onWallDie);
}
