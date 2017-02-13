var x = 200;
var y = 200;
var xspeed = 8;
var yspeed = 7;


function setup() {
  createCanvas(windowWidth, windowHeight);
  background (25);

}

function draw() {

	//distance from center of the screen
	var d = dist(windowWidth/2, windowHeight/2, mouseX, mouseY);

  	fill (random(180, 230), random(180, 230), random(180, 230));
  	ellipse (x, y, d, d);

  	//bouncing horizontally
 	 x = x + xspeed;
  	
  	 if (x > windowWidth || x < 0)  {
     	xspeed = -xspeed;
  	}

  	//bouncing veritcally
  	y = y + yspeed;

  	if (y > windowHeight || y < 0) {
	 	  yspeed = -yspeed;
  	}

}