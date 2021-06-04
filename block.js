class Block {
  constructor(x, y, blockColor) {
    this.x = x;
    this.y = y;
    this.color = color(blockColor);
  }
  show(nb, pb) {
    fill(this.color);
    noStroke();
    rect(this.x * size, this.y * size, size, size);
    stroke('black');
    strokeWeight(2);
    if(!pb && !nb) rect(this.x * size, this.y * size, size, size);
    else if(!pb){
      let pos1;
      if(nb.x < this.x) pos1 = 'west'
      if(nb.x > this.x) pos1 = 'east'
      if(nb.y < this.y) pos1 = 'north'
      if(nb.y > this.y) pos1 = 'south'
      this.drawLinesWithout1(pos1)
      // console.log(pos1)
    } else if(!nb) {
      let pos1;
      if(nb.x < this.x) pos1 = 'west'
      if(nb.x > this.x) pos1 = 'east'
      if(nb.y < this.y) pos1 = 'north'
      if(nb.y > this.y) pos1 = 'south'
      this.drawLinesWithout1(pos1)
      // console.log(pos1)
    } else {
      let pos1;
      if(nb.x < this.x) pos1 = 'west'
      if(nb.x > this.x) pos1 = 'east'
      if(nb.y < this.y) pos1 = 'north'
      if(nb.y > this.y) pos1 = 'south'
      let pos2;
      if(pb.x < this.x) pos2 = 'west'
      if(pb.x > this.x) pos2 = 'east'
      if(pb.y < this.y) pos2 = 'north'
      if(pb.y > this.y) pos2 = 'south'
      this.drawLinesWithout2(pos1, pos2)
      // console.log(pos1, pos2)
    }
  }
  
  drawLinesWithout2(dir1, dir2){
    let dirs = ['north', 'west', 'east', 'south']
    for(let dir_ of dirs){
      if(dir_ != dir1 && dir_ != dir2) this.drawLine(dir_);
    }
  }  
  drawLinesWithout1(dir){
    let dirs = ['north', 'west', 'east', 'south']
    for(let dir_ of dirs){
      if(dir_ != dir) this.drawLine(dir_);
    }
  }
  
  drawLines(dirarr){
    for(let dir of dirarr){
      this.drawLine(dir);
    }
  }
  
  drawLine(dir){
    if     (dir == 'east' ) line((this.x+1) * size,  this.y    * size, (this.x+1) * size, (this.y+1) * size)
    else if(dir == 'south') line( this.x    * size, (this.y+1) * size, (this.x+1) * size, (this.y+1) * size)
    else if(dir == 'west' ) line( this.x    * size,  this.y    * size,  this.x    * size, (this.y+1) * size)
    else if(dir == 'north') line( this.x    * size,  this.y    * size, (this.x+1) * size,  this.y    * size)
  }
  update(x, y) {
    this.x = x;
    this.y = y;
  }

  posEquals(b) {
    if (this.x == b.x && this.y == b.y) {
      return true;
    }
    return false;
  }

  randomize() {

    let x = floor(random(0, cols));
    let y = floor(random(0, rows));



    this.x = x;
    this.y = y;
  }
}