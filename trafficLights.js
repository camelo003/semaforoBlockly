class TrafficLights{
		static width = 40;
		static height = 70;
		static grey = "#4B4B4B";
		static redOn = "#FF0000";
		static redOff = "#400000";
		static greenOn = "#00FF00";
		static greenOff = "#004000";
		static yellowOn = "#FFFF00";
		static yellowOff = "#404000";

		constructor(canvas, rot, posX, posY){
				this.canvas = canvas;
				this.facing = rot;
				this.red = false;
				this.yellow = false;
				this.green = false;
				this.posX = posX;
				this.posY = posY;
				canvas.rectMode(CORNERS);
		}

		draw(){
				var r, y, g;
				r = color(TrafficLights.redOff);
				if(this.red)
						r = color(TrafficLights.redOn);
				y = color(TrafficLights.yellowOff);
				if(this.yellow)
						y = color(TrafficLights.yellowOn);
				g = color(TrafficLights.greenOff);
				if(this.green)
						g = color(TrafficLights.greenOn);
				this.canvas.clear();
				this.canvas.strokeWeight(2);
				this.canvas.fill(r);
				this.canvas.ellipse(9, 20, 15, 15);
				this.canvas.fill(y);
				this.canvas.ellipse(9, 35, 15, 15);
				this.canvas.fill(g);
				this.canvas.ellipse(9, 50, 15, 15);
				this.canvas.fill(color(TrafficLights.grey));
				this.canvas.rect(12, 10, this.canvas.width - 15, this.canvas.height - 10);
				push();
				translate(this.posX, this.posY);
				rotate(this.facing);
				image(this.canvas, 0, 0);
				pop();
		}
}
