let r = 0;

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES); //set angle mode to degrees
  rectMode(CENTER); // set x value to be center;

}

function draw() {
  background(10, 200, 180);

  //make sure that the roation is within 360 degrees
  if (r < 360) {
    r += 1;
    } else if (r == 360){
      r = 0
    }
  
  translate(mouseX, mouseY);
  rotate(r)
  rect(0, 0, 50, 50);

  circle(100, 0, 50);

 
}


