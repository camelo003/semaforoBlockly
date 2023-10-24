function drawCrossroad(width, height){
		with(crossroad){
				rectMode(CORNERS);
				var roadWidth = 150;
				var gap = 8;
				noStroke();
				background(50,150,0);
				fill(50,50,50);
				rect(width / 2 - roadWidth / 2, 0, width / 2 + roadWidth / 2, height);
				rect(0, height / 2 - roadWidth / 2, width, height / 2 + roadWidth / 2);
				noFill();
				stroke(200, 200, 10);
				strokeWeight(2);
				var sqSide = roadWidth - gap * 2;
				var sqX1 = width  / 2 - roadWidth / 2 + gap;
				var sqY1 = height / 2 - roadWidth / 2 + gap;
				var sqX2 = sqX1 + sqSide;
				var sqY2 = sqY1 + sqSide;
				rect(sqX1, sqY1, sqX2, sqY2);
				sqStep = sqSide / 3;
				for(var i = 1; i <= 3; i = i + 1){
						line(sqX1, sqY2 - i * sqStep, sqX1 + i * sqStep, sqY2);
						line(sqX1, sqY1 + i * sqStep, sqX1 + i * sqStep, sqY1);
						line(sqX1 + i * sqStep, sqY1, sqX2, sqY2 - i * sqStep);
						line(sqX2, sqY1 + i * sqStep, sqX1 + i * sqStep, sqY2);
				}
				line(0,
						 height / 2,
						 width / 2 - roadWidth / 2 - sqStep - 10,
						 height / 2);
				line(width,
						 height / 2,
						 width / 2 + roadWidth / 2 + sqStep + 10,
						 height / 2);
				line(width / 2,
						 0,
						 width / 2,
						 height / 2 - roadWidth / 2 - sqStep - 10,);
				line(width / 2,
						 height,
						 width / 2,
						 height / 2 + roadWidth / 2 + sqStep + 10,);
				stroke(200, 200, 200);
				strokeWeight(8);
				strokeCap(SQUARE);
				for(var i = 0; i < 10; i = i + 1){
						line(width / 2 - roadWidth / 2 - sqStep,
								 height / 2 - roadWidth/ 2 + gap + i * roadWidth / 10,
								 width / 2 - roadWidth / 2,
								 height / 2 - roadWidth/ 2 + gap + i * roadWidth / 10);
						line(width / 2 + roadWidth / 2 + sqStep,
								 height / 2 - roadWidth/ 2 + gap + i * roadWidth / 10,
								 width / 2 + roadWidth / 2,
								 height / 2 - roadWidth/ 2 + gap + i * roadWidth / 10);
						line(height / 2 - roadWidth/ 2 + gap + i * roadWidth / 10,
								 width / 2 - roadWidth / 2 - sqStep,
								 height / 2 - roadWidth/ 2 + gap + i * roadWidth / 10,
								 width / 2 - roadWidth / 2);
						line(height / 2 - roadWidth/ 2 + gap + i * roadWidth / 10,
								 width / 2 + roadWidth / 2 + sqStep,
								 height / 2 - roadWidth/ 2 + gap + i * roadWidth / 10,
								 width / 2 + roadWidth / 2);
				}
				line(width / 2 - roadWidth / 2 - sqStep - 10,
						 height / 2,
						 width / 2 - roadWidth / 2 - sqStep - 10,
						 height / 2 + roadWidth / 2);
				line(width / 2 + roadWidth / 2 + sqStep + 10,
						 height / 2,
						 width / 2 + roadWidth / 2 + sqStep + 10,
						 height / 2 - roadWidth / 2);
				line(width / 2,
						 height / 2 - roadWidth / 2 - sqStep - 10,
						 width / 2 - roadWidth / 2,
						 height / 2 - roadWidth / 2 - sqStep - 10);
				line(width / 2,
						 height / 2 + roadWidth / 2 + sqStep + 10,
						 width / 2 + roadWidth / 2,
						 height / 2 + roadWidth / 2 + sqStep + 10);
		}
}
