// zoom out to 67%

function setup() {
  createCanvas(800, 800);
  r = random(255)
  g = random(255)
  b = random(255)
  
}
var unicorn_1
var unicorn_2

function preload() {
  unicorn_1 = loadImage("unicorn.jpg")
  unicorn_2 = loadImage("unicorn_1.jpg") 
}

function draw() {
  background(255);
  strokeWeight(10)
  
  if (frameCount % 20 == 0)
  {
    r = random(255)
    g = random(255)
    b = random(255)
    
  }
  
  stroke(r, g, b)
  

  
  // if (mouseIsPressed)
  line(150,550,400,150)
  line(650,550,400,150)
  line(150,550,650,550)
  stroke(255,0,255)
  circle(335,335, 40, 40)  
  circle(450, 335, 40,40)
  
  stroke(0,0,255)
  fill(0,255,0)
  line(268,424,512,424)
  // noFill()
  arc(390, 425, 250, 120, 0,PI)
  textAlign(CENTER)
  textSize(100)
  text("ՇՆՈՐՀԱՎՈՐ",400,700)
  
  image(unicorn_1, 600,100)
  image(unicorn_2, 60,100)
}