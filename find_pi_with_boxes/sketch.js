//  why does it even work?   https://www.youtube.com/watch?v=jsYwFizhncE

// code is unfinished yet, it only works beautiful for first 3 digits

var counter=0;

var speed = 3;

var wall_size = 10;

var number_of_digits;

var small_size = 70;

var initial_small = 0;
var initial_big = 0.7;


function preload () {
  clack = loadSound('clack.wav') 
  big = loadImage('pixil-frame-0 (4).png')
}



function setup() {
  slider = createSlider(1,3, 2, 1)
  
  
  number_of_digits = slider.value();
  number_of_digits--;
 
  
  createCanvas(800, 400);
  small_box = new Box(259, small_size, initial_small, [255,0,0]);
  big_size = Math.cbrt(Math.pow(100, number_of_digits))*small_size;
  
  if (Math.cbrt(Math.pow(100,number_of_digits))*small_size > 200)
  {
  big_box = new Box(500, 200, initial_big,[0,255,0]);
  }
  else
  {
      big_box = new Box(500, big_size, initial_big ,[0,255,0]);
  }


  
}
function draw() {
  background(250);
  frameRate(6524)
  textSize(28)
  text('adjust number of digits by using slaider', 400,30)
  textAlign(CENTER)
  textSize(100)
  fill('magenta')
  text(counter, width/2,140)
  
  
  collision = false;
  
  small_box.move();
  small_box.display();
  small_box.hit_the_wall();
 
  big_box.move();
  big_box.display();
  big_box.hit_the_wall();
  
  stroke('blue');
  strokeWeight(wall_size)
  line(0,0,0,height);
  strokeWeight(0);

  
 if (small_box.x+small_box.size >= big_box.x)
 {
   counter++;
   collision = true;
 }
 
  k = Math.pow(100,number_of_digits);
  
  if (collision)
  {
     clack.play() ;
    
     var p = small_box.speed
     small_box.speed = (small_box.speed-small_box.speed*k+2*big_box.speed*k)/(k+1); 
     big_box.speed =(2*p+big_box.speed*k-big_box.speed)/(k+1);

  }
  // print (small_box.speed)

    

}


class Box {
  constructor(x, size, speed,color) 
  {
    this.x = x;
    this.size = size;
    this.speed = speed;
    this.color = color;

  }
 
  
  move() {
    this.x -= this.speed;
  }
  
  display () {
    fill(this.color)
    image(big,this.x, height - this.size , this.size, this.size);
  }
  
  hit_the_wall() {
    if (this.x <= wall_size/2)
    {
      this.speed = -this.speed;
      counter++;
      clack.play()
    }
  }
  
  
  
}



