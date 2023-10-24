class Collision{
		static lines;
		static canvasSide;
		static low;
		static high;
		static hitSize;
		static lines;
		static init(canvasSide, carSize, lines){
				Collision.canvasSide = canvasSide;
				Collision.low = canvasSide * 0.32;
				Collision.high = canvasSide * 0.68;
				Collision.hitSize = carSize - 10;
				Collision.lines = lines;
		}

		static forCollision(){
				if(!Collision.lines)
						return([]);
				var elegible = [];
				for(var i = 0; i < Collision.lines.length; i = i + 1){
						for(var j = 0; j < Collision.lines[i].cars.length; j = j + 1){
								var prog = Collision.lines[i].cars[j].progress;
								if(prog > Collision.low && prog < Collision.high)
										elegible.push(Collision.lines[i].cars[j]);
						}
				}
				return(elegible);
		}

		static dist(car1, car2){
				var car1X = car1.progress;
				var car1Y = car1.line.constPos;
				if(car1.line.returning)
						car1X = Collision.canvasSide - car1X;
				if(car1.line.vertical)
						[car1X, car1Y] = [car1Y, car1X];
				var car2X = car2.progress;
				var car2Y = car2.line.constPos;
				if(car2.line.returning)
						car2X = Collision.canvasSide - car2X;
				if(car2.line.vertical)
						[car2X, car2Y] = [car2Y, car2X];
				return(Math.sqrt(
						Math.pow(Math.abs(car1X - car2X), 2) +
						Math.pow(Math.abs(car1Y - car2Y), 2)));
		}

		static check(elegible){
				if(elegible.length == 0)
						return;
				var len = elegible.length;
				for(var i = 0; i < len; i = i + 1){
						var actCar = elegible[i];
						if(actCar.touchAnother)
								continue;
						for(var j = 0; j < len; j = j + 1){
								if(i == j)
										continue;
								var checkCar = elegible[j];
								if(actCar.line.vertical == checkCar.line.vertical)
										continue;
								if(Collision.dist(actCar, checkCar) < Collision.hitSize){
										actCar.touchAnother = true;
										checkCar.touchAnother = true;
								}
						}
				}
		}
		
}
