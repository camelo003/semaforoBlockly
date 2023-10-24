var myTrafficLights = [];

var crossroad;

var lines = [];

var spawn = false;
var lastSecond;

function setup(){
		rectMode(CORNERS);

		var p5Canvas = createCanvas(500, 500);
		p5Canvas.parent("horCont");
		var button = createButton('Play!');

		var tempTLPosX = [width / 2 - 75,
											width / 2 - 75,
											width / 2 + 75,
											width / 2 + 75];
		var tempTLPosY = [height / 2 + 75,
											height / 2 - 75,
											height / 2 - 75,
											height / 2 + 75];
		for(var i = 0; i <= 3; i = i + 1){
				myTrafficLights.push(new TrafficLights(
						createGraphics(
								TrafficLights.width,
								TrafficLights.height),
						i * Math.PI / 2,
						tempTLPosX[i],
						tempTLPosY[i]
				));
		}

		button.mousePressed(function(){
				var blocksCode = javascript.javascriptGenerator.workspaceToCode(ws);
				var encapsulate = "async function runBlocks(){" + blocksCode;
				encapsulate = encapsulate + "}runBlocks();";
				eval(encapsulate);
		});

		Car.sprite = createGraphics(Car.sizeX + 20, Car.sizeY + 20);
		Car.drawSprite();

		crossroad = createGraphics(width, height);
		drawCrossroad(width, height);

		lines.push(new Line(false, false, height / 2 + 75 / 4 * 3, 0));
		lines.push(new Line(false, false, height / 2 + 75 / 4    , 0));
		lines.push(new Line(true , false, height / 2 - 75 / 4    , Math.PI));
		lines.push(new Line(true , false, height / 2 - 75 / 4 * 3, Math.PI));
		lines.push(new Line(false, true , width / 2 - 75 / 4 * 3 , Math.PI / 2));
		lines.push(new Line(false, true , width / 2 - 75 / 4     , Math.PI / 2));
		lines.push(new Line(true , true , width / 2 + 75 / 4     , -Math.PI / 2));
		lines.push(new Line(true , true , width / 2 + 75 / 4 * 3 , -Math.PI / 2));

		Collision.init(width, Car.sizeX, lines);

		lastSecond = second();
}

function draw() {
		// background
		imageMode(CORNER);
		image(crossroad, 0, 0);

		// spawn new cars
		if(spawn && second() != lastSecond){
				if(second() % 3 == 0){
						var randomLinesIndex = Math.floor(random(4));
						if(lines[randomLinesIndex].cars.length == 0 ||
							 lines[randomLinesIndex].cars[0].progress > 30)
								lines[randomLinesIndex].cars.unshift(
										new Car(lines[randomLinesIndex]));
						randomLinesIndex = 4 + Math.floor(random(4));
						if(lines[randomLinesIndex].cars.length == 0 ||
							 lines[randomLinesIndex].cars[0].progress > 30)
								lines[randomLinesIndex].cars.unshift(
										new Car(lines[randomLinesIndex]));
				}
				lastSecond = second();
		}
		
		// update cars
		for(var i = 0; i < lines.length; i = i + 1){
				for(var j = 0; j < lines[i].cars.length; j = j + 1){
						lines[i].cars[j].update();
				}
		}

		// check collisions
		Collision.check(Collision.forCollision());
		
		// draw cars
		imageMode(CENTER);
		for(var i = 0; i < lines.length; i = i + 1){
				for(var j = 0; j < lines[i].cars.length; j = j + 1){
						lines[i].cars[j].draw();
				}
		}

		// draw traffic lights
		for(var i = 0; i < myTrafficLights.length; i = i + 1)
				myTrafficLights[i].draw();
}

function keyPressed(){
		/* if(isLooping())
				noLoop();
		else
		loop();*/
		if(keyCode==32)
				spawn = !spawn;
}
