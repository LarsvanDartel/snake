class Snake {
  constructor(onWallDie) {
    this.x = floor(cols / 2);
    this.y = floor(rows / 2);
    this.prevFacing = 'north';
    this.facing = 'north';
    this.head = new Block(this.x, this.y, 'lime');
    this.tail = [];
    this.queue = [];
    this.onWallDie = onWallDie;
  }

  show() {
    if(this.tail.length == 0) this.head.show();
    else this.head.show(this.tail[this.tail.length-1])
    for (let i = 0; i < this.tail.length; i++) {
      if(i == this.tail.length-1 && i == 0) {
        // console.log(i, this.tail.length, 'head', 'null')
        this.tail[0].show(this.head, null);
      } else if(i == this.tail.length-1) {
        // console.log(i, this.tail.length, 'head', 'i-1')
        this.tail[i].show(this.head, this.tail[i-1])
      } else if(i == 0) {
        // console.log(i, this.tail.length, 'i+1', 'null')
        this.tail[i].show(this.tail[i+1], null)
      } else {
        // console.log(i, this.tail.length, 'i+1', 'i-1')
        this.tail[i].show(this.tail[i+1], this.tail[i-1])
      }
    }
  }
  
  update() {
    if(this.queue.length > 0){
      this.facing = this.queue[0]
      this.queue.shift()
    }
    this.move();
    this.prevFacing = this.facing;
    this.tail.push(new Block(this.head.x, this.head.y, 'lime'));

    if (!this.head.posEquals(world.apple)) {
      this.tail.splice(0, 1);
    } else {
      world.eat();
    }
    this.head.update(this.x, this.y);

    if (this.collideTail(this.head)) {
      die();
    }
    if (this.x < 0) {
      if(!this.onWallDie) this.x = cols;
      else die();
    } else if (this.x >= cols) {
      if(!this.onWallDie) this.x = -1;
      else die();
    }
    if (this.y < 0) {
      if(!this.onWallDie) this.y = rows;
      else die();
    } else if (this.y >= rows) {
      if(!this.onWallDie) this.y = -1;
      else die();
    }
  }

  collideTail(b) {
    for (let block of this.tail) {
      if (block.posEquals(b)) {
        return true;
      }
    }
    return false;
  }


  move() {
    if (this.opposites(this.facing, this.prevFacing)) {
      this.facing = this.prevFacing;
    }
    switch (this.facing) {
      case 'north': {
        this.x += 0;
        this.y += -1;
        break;
      }
      case 'south': {
        this.x += 0;
        this.y += 1;
        break;
      }
      case 'east': {
        this.x += 1;
        this.y += 0;
        break;
      }
      case 'west': {
        this.x += -1;
        this.y += 0;
        break;
      }
    }
  }
  
  enqueue(dir){
    if(this.queue.length < 5){
      this.queue.push(dir)
    }
  }
  
  opposites(a, b) {
    if (a == 'north' && b == 'south') {
      return true;
    }
    if (b == 'north' && a == 'south') {
      return true;
    }
    if (a == 'east' && b == 'west') {
      return true;
    }
    if (b == 'east' && a == 'west') {
      return true;
    }


    return false;
  }

}