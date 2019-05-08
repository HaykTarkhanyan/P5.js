let bird;
var mic;

let score = 0;
var pipes = [];

function preload () {
  // fon = loadImage('background.png');
  pig = loadImage('pixil-frame-0 (2).png');
  walp = loadImage('436.jpg')
}            
 
function setup() { 
  // frameRate(13);
 
  createCanvas(900,700)
  rectwidth = width/8;
  rectheight = height/8;
  
  mic = new p5.AudioIn()
  mic.start()
  
  birdx = width/4-rectwidth/2;
  
  bird1 = new Bird(height/2, 0, 0.3);
  // bird2 = new Bird(10, 4, 0.0008);
  
  pipes.push(new Pipe(width/6, width/2, 2))
  
  
  // pipe1 = new Pipe(width/6, width/2, 2)
  // pipe2 = new Pipe(width/6, width/2 , 2)
}

function draw() {
  // background(fon);
  background(walp)
  // background(255)

  
  
  bird1.fall();
  bird1.display();
  bird1.die();
  bird1.non_smooth_move();
  
  if (frameCount % 250 ==0)
  {
   pipes.push(new Pipe(width/6, width/2, 2))
  }

  for (let j = pipes.length-1; j>-1; j--)
  {
  pipes[j].display()  
  pipes[j].move()
    //  geting inputs for neuroevulution  
//   stroke(23,123,3)  
//    line(birdx + rectwidth, bird1.ycord, pipes[j].xcord, bird1.ycord)
    // print (abs(pipes[j].xcord - birdx- rectwidth ))
//   stroke(63,1,248)
  
  if (pipes[j].xcord < -pipes[j].pipe_width)
  {
   // print("hello")
   pipes.splice(0,1)
  }
  
  
  }
  if ((frameCount-20) % 310 == 0)
  {
   score++;
    
  }
  
  
  
  // score = pipes.length-1
  fill('orange');
  textSize(150)    
  textAlign(CENTER);
  text(score-1,width/2,200);
  
  
  // print (pipes.length)
  
  
  var volume = mic.getLevel();
  var vol = map(volume, 0, 1, 0, 1000)
  fill('cyan')
  rect(width-60, height-vol*10 ,50,vol*10) 
  // print (vol)
  
  if (vol> 10)
  {
   bird1.ai_move() 
  }
  
}


class Bird {
  constructor(ycord, speed, velocity)
  {
    this.ycord = ycord;
    this.speed = speed;
    this.velocity = velocity;   
    this.initial_speed = this.speed;
  }
  
  
  
  fall () {
    this.ycord += this.speed;
    this.speed += this.velocity;
    this.speed *= 0.9;
    if (this.ycord < 0) {
       this.ycord = 0;
      }
  
   }
  
  die() {
    if (this.ycord + rectheight  >= height)
    {
      this.ycord = height-rectheight;
      // noLoop(); 
    }
    // if ()
    // else if (this.ycord < 0)
    // {
    //  // this.ycord = 500;
    //  noLoop(); 
    // }
  }
  smooth_move() { 
     if (keyIsPressed === true) {
      if (key == " ") {
        this.speed = this.initial_speed;
        this.ycord -= 4.5;

        // keyIsPressed = false;
      }
    }
  }
    
  
   non_smooth_move() {
   if (keyIsPressed)
   {
     if (key==" ")
     { 
       this.speed += -10;
  
       // this.ycord -= 100;
       // this.speed = this.initial_speed;
       keyIsPressed = false;
     }
     
   }
   }
   ai_move () {
     this.speed += -5;
   }

  

  display() {
    fill('orange');
    image(pig,width/4-rectwidth/2, this.ycord, rectwidth, rectheight);
    // rect(width/4-rectwidth/2, this.ycord, rectwidth, rectheight);
  }
  
}


var k = 0;
class Pipe {
  constructor(pipe_width, dist,speed) {
    this.pipe_width = pipe_width;
    this.dist = dist;
    this.speed = speed;
    this.xcord = width;
    this.random_height = random(height*0.2,height*0.6)

  }
  move () {
    this.xcord -= this.speed;
    
  }
    
  
  display() {
    fill(145,231,21);
    
    // stroke('blue')
    // line(this.xcord-30, height, this.xcord-30, this.random_height +height/3     )
    // line(this.xcord- 30, 0, this.xcord-30, this.random_height)
    
      
      if ((this.xcord <=  birdx + rectwidth && this.xcord + this.pipe_width  >= birdx )&& (this.random_height > bird1.ycord || bird1.ycord + rectheight > this.random_height +height/3 ))
      {
       fill(255,0,0) 
       // noLoop()
      
      }
      
      stroke(0)
      // line (this.xcord+40, this.random_height, this.xcord + 40 , height-this.random_height +  height/3)
        
      rect(this.xcord, 0,  this.pipe_width , this.random_height);
      rect(this.xcord, this.random_height + height/3 , this.pipe_width , height-this.random_height);  
       
      
      // line(birdx + rectwidth, bird1.ycord, this.xcord, bird1.ycord)
     
    }
  } 


 