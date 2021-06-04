const rows = 20;
const cols = 20;
const size = 20;

let world;

let score = 0;
let highscore = 0;

function setup() {
  frameRate(60);
  createCanvas(400, 400);
  world = new World();
}

function draw() {
  if (frameCount % 10 == 0) {
    world.update();
    background(255);
    world.show();

//     stroke(100, 100, 100, 100);
//     strokeWeight(1);

//     for (let i = 0; i < rows; i++) {
//       line(0, i * size, width, i * size);
//     }
//     for (let i = 0; i < cols; i++) {
//       line(i * size, 0, i * size, height);
//     }
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
  } else if (key == 'p') {
    noLoop();
  } else if (key == 'o') {
    loop();
  }
  return false;
}


function die() {
  world = new World();
}
