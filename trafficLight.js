
// traffic light block definition

Blockly.Blocks['light'] = {
		init: function() {
				this.appendValueInput("NAME")
						.setCheck("Boolean")
						.appendField("🚥")
						.appendField(new Blockly.FieldDropdown([["0", "0"],
																										["1", "1"],
																										["2", "2"],
																										["3", "3"]]),
												 "index")
						.appendField(new Blockly.FieldDropdown([["🔴", "red"],
																										["🟡", "yellow"],
																										["🟢", "green"]]),
												 "light");
				this.setPreviousStatement(true, null);
				this.setNextStatement(true, null);
				this.setColour(65);
		}
};

// traffic light block generator 

javascript.javascriptGenerator.forBlock['light'] = function(block, generator) {
		var dropdown_index = block.getFieldValue('index');
		var dropdown_light = block.getFieldValue('light');
		var value_name = generator.valueToCode(block,
																					 'NAME',
																					 javascript.Order.ATOMIC);
		var code = "myTrafficLights[" + dropdown_index + "]";
		code = code + "['" + dropdown_light + "']";
		code = code + "=" + value_name;
		code = code + ';';
		return code;
};
