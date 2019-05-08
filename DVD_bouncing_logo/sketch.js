var x;
var y;

var x_length;
var y_width;

var x_speed;
var y_speed;

var r,g,b;

function preload() {
  dvd = loadImage('dvdlogo-00.png');
}

function change_color() {
  r = random(10,255);
  g = random(10,255);
  b = random(10,255);
}
function setup() {
  createCanvas(800, 600);
  x = random(499);
  y = random(499);
  x_length = 200;
  y_width = 150;
  x_speed = 1;
  y_speed = 1;
  change_color();
  
}



function draw() {
  background(0);
  
  // rect(x,y,x_length,y_width);
  tint(r,g,b);
  image(dvd,x,y);
  // print (dvd.length)
  x += x_speed;
  y += y_speed;
 
  //right corner
  if (x+dvd.width>799)
  {
    x_speed = -1;
    change_color();
  
  }
  //bottom corner
  else if (y+dvd.height>599){
    y_speed = -1;
    change_color() ;
  }
  //left corner
  else if (x<2) {
   x_speed = 1;
   change_color();
  
  }
  //top corner
  else if (y<2) {
   y_speed = 1;
   change_color()
  
  }
  
  
  
  

}
