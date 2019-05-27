//  why does it even work?   https://www.youtube.com/watch?v=jsYwFizhncE

// code works beautiful for first 5 digits, when we deal with big numbersthat magical clack sound becomes awful

// my hardware resources don't allow me to run this for more digits but if you think your device is capable to do it increase number of timesteps on the 12th row

var number_of_digits = 4;

var counter=0;
var place_to_count;

var timestep = 200;
var wall_size = 10;

var small_size = 100;

var initial_small = 0;
var initial_big = 1/timestep;


function preload () {
  clack = loadSound('clack.wav') 
  big = loadImage('pixil-frame-0 (4).png')
}



function setup() {
  place_to_count = createDiv(counter);
  place_to_count.style('font-size', '80pt')
  place_to_count.style('green')
  // slider = createSlider(1,3, 3, 1)
  
  // number_of_digits = slider.value();
  number_of_digits--;
 
  
  createCanvas(1366, 568);
  fullscreen(true)
  small_box = new Box(259, small_size, initial_small, [255,0,0]);
  // big_size = Math.cbrt(Math.pow(100, number_of_digits))*small_size/(log(number_of_digits)+1);
  
  // if (Math.cbrt(Math.pow(100,number_of_digits))*small_size > 300)
  // {
  // big_box = new Box(500, 350, initial_big,[0,255,0]);
  // }
  // else
  // {
  //     big_box = new Box(500, big_size, initial_big ,[0,255,0]);
  // }
  switch (number_of_digits+1) {
    case 1: big_size = small_size; break;
    case 2: big_size = small_size*1.4; break;
    case 3: big_size = small_size*1.8; break;
    case 4: big_size = small_size*2.3; break;
    case 5: big_size = small_size*3; break;
    default: big_size = small_size * 3.8; break;
  }
  
  big_box = new Box(500, big_size, initial_big ,[0,255,0]);
      
  
  
}
function draw() {
  background(250);
  // frameRate(6524)
  textSize(40)
  text('adjust number of digits on 7th row', width/2,30)
  for (let j = 0; j<timestep; j++) {
  textAlign(CENTER)
  // textSize(200)
  // fill('magenta')
  // text(counter, width/2,120)
  
  
  collision = false;
  
  small_box.move();
  
  small_box.hit_the_wall();
 
  big_box.move();
  
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
  big_box.display();
  small_box.display();
  place_to_count.html(nf(counter,number_of_digits+1))
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
