// zoom out to 67%


var con =[]
var max_connections = 15
var white_true = false



function setup() {
  createCanvas(800, 820);
  
  for (let i = 0; i<8; i++)
  { 
  con.push(new Connection(random(width), random(height), random(10,100), [random(255),random(255),random(255)], random(-5,5), random(-5,5)))
  }
  }

function draw() {
  if (white_true)
  {
    backgr =  200;
    str_backgr = 0
  }
  else if (!white_true) {
    backgr = 0
    str_backgr = 255
  }
  
  
  background(backgr);
  
  for (let i = 0; i<con.length; i++)
  {
  con[i].move()
  con[i].display()
  con[i].dont_leave()
  }
  
  for (let i = 0; i<con.length-1; i++)
  {
    for (let j = 1; j < con.length; j++)
    {
      line(con[i].x, con[i].y, con[j].x, con[j].y)
      // stroke(random(255),random(255),random(255))
      stroke(str_backgr)
    }
  }
  
  
  
  if (frameCount % 250 == 0 && con.length<max_connections)
  {
    con.push((new Connection(random(width), random(height), random(10,100), [random(255),random(255),random(255)], random(-5,5), random(-5,5))))
  }
  
  if (con.length == max_connections - 1) {
    remove_quant = random(6,10)
    con.splice(random(max_connections - remove_quant), remove_quant)
  }
  
  if (frameCount % 2000 == 0)
  {
    if (white_true)
      white_true = false
    else {
      white_true = true 
    }
  
  }
  if (frameCount % 5000 == 0)
  {
    str_backgr = [255,0,255] 
    white_true = "banana"
  }
}


  


class Connection {
  constructor(x, y, size, col, xspeed, yspeed) {
    this.x = x
    this.y = y
    this.size = size
    this.col = col
    this.xspeed = xspeed
    this.yspeed = yspeed
  }
  
  move()
  {
    this.x += this.xspeed
    this.y += this.yspeed
  }
  
  
  dont_leave() {
  if (this.x > width) 
  {
    this.x = 0
    this.xspeed = random(-5,5)
  }  else if (this.x<0)
  {
    this.x = width
    this.xspeed = random(-5,5)
  }
    else if (this.y>height)
    {
    this.y = 0
    this.yspeed = random(-5,5)  
    }
    else if (this.y<0)
    {
    this.y = height
    this.xspeed = random(-5,5)
    }
  
}
  
  display()
  {
    fill(this.col)
    ellipse(this.x, this.y, this.size, this.size)
  }
}



 