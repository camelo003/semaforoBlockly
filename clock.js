
// clock helperfunctions
//  sleep ref.:
//  https://builtin.com/software-engineering-perspectives/javascript-sleep

const sleep = function (delay){
		var p = new Promise((resolve) => setTimeout(resolve, delay * 1000));
		return p;
}

async function aSleep(delay) {
		await sleep(delay);
}

// clock block definition

Blockly.Blocks['clock'] = {
		init: function() {
				this.appendValueInput("delay")
						.setCheck("Number")
						.appendField("⏰");
				this.setInputsInline(false);
				this.setPreviousStatement(true, null);
				this.setNextStatement(true, null);
				this.setColour(230);
				this.setTooltip("");
				this.setHelpUrl("");
		}
};

// clock block generator

javascript.javascriptGenerator.forBlock['clock'] = function(block, generator) {
		var value_delay = generator.valueToCode(block, 'delay', javascript.Order.ATOMIC);
		return ("await aSleep(" + value_delay + ");");
};
