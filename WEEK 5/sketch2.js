function setup () {
	create canvas (600, 400) ;
	}

function draw () {
	background (66, 241, 244);
	strokeWeight(6);
	fill (x, y, 100);
	
	var x = 0;
	var y = 0;
	var speed = 3;

	while (x > width) 
		while (y > height) {
		fill (x, y, 100)
		ellipse(x, y, 100, 100);
		x = x + 50;
		y = y + 50;
	}

	
	for (var x = 0; x <= width; x += 100)
		for (var y = 0; y <= mouseY; y += 100) {
		fill (random(255), 0, random(255));
		ellipse(x, y, 100, 100);
	}

	if (y > height || y <0) {
		speed = speed * -2;
	}

	if (x > width || x < 0) {
		speed = speed * -2;
	}
	
	y = y + speed;

	x = x + speed;
}
