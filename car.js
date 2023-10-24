class Car{
		static sizeX = 40;
		static sizeY = 20;
		static carColor = "#EE000F";
		static sprite;

		static drawSprite(){
				var carColor = Car.carColor;
				var width = Car.sprite.width;
				var height = Car.sprite.height;
				var sizeX = Car.sizeX;
				var sizeY = Car.sizeY;
				
				Car.sprite.rectMode(CENTER);
				Car.sprite.fill(color(carColor));
				Car.sprite.rect(width / 2, height / 2, sizeX, sizeY, 5);
				Car.sprite.fill(0, 200, 200);
				Car.sprite.rect(width * 0.6, height / 2, 15, sizeY - 6, 3);
				Car.sprite.fill(15);
				Car.sprite.rect(width / 3,    8,          11, 5, 3);
				Car.sprite.rect(width * 0.66, 8,          11, 5, 3);
				Car.sprite.rect(width / 3,    height - 8, 11, 5, 3);
				Car.sprite.rect(width * 0.66, height - 8, 11, 5, 3);
				Car.sprite.noFill();
				// Car.sprite.ellipse(width / 2, height / 2, sizeX, sizeX); // TEMP!
		}

		static maxVel = 75;

		constructor(line){
				this.progress = - Car.sprite.width;
				this.velocity = 0;
				this.acceleration = 30;
				this.touchAnother = false;
				this.line = line;
				var lineIndex = lines.indexOf(line);
				var tlIndexes = [0, 2, 1, 3];
				this.tl = myTrafficLights[tlIndexes[Math.floor(lineIndex / 2)]];
		}

		update(){
				if(this.touchAnother)
						return;

				if(this.progress < 100){
						if(this.tl.yellow && !this.tl.red && !this.tl.green)
								this.acceleration = 90;
						else if(this.tl.red && !this.tl.yellow && !this.tl.green)
								this.acceleration = map(100 - this.progress, 50, 0, 30, -230, true);
						else
								this.acceleration = 30;
				}

				if(this.line.cars.indexOf(this) < this.line.cars.length - 1){
						var index = this.line.cars.indexOf(this)
						var distance = this.line.cars[index + 1].progress - this.progress;
						this.acceleration = map(distance, 100, 10, 30, -230, true); 
				}
				
				this.velocity += this.acceleration * deltaTime / 1000;
				
				if(this.velocity < 0)
						this.velocity = 0;
				if(this.velocity > Car.maxVel)
						this.velocity = Car.maxVel;

				this.progress += this.velocity * deltaTime / 1000;

				if(this.progress > width + Car.sizeX)
						this.line.cars.pop();
		}

		draw(){
				var x = this.progress;
				var y = this.line.constPos;
				var rot = 0;

				if(this.line.returning)
						x = width - x;
				if(this.line.vertical)
						[x, y] = [y, x];
				push();
				translate(x, y);
				rotate(this.line.rot);
				image(Car.sprite, 0, 0)
				pop();
		}
}
