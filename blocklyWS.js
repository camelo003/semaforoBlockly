var toolbox = {
		"kind": "categoryToolbox",
		"contents": [
				{
						"kind": "category",
						"name": "Lógica",
						"colour": "%{BKY_LOGIC_HUE}",
						"contents": [
								{"kind": "block", "type": "controls_if"},
								{"kind": "block", "type": "logic_compare"},
								{"kind": "block", "type": "logic_operation"},
								{"kind": "block", "type": "logic_negate"},
								{"kind": "block", "type": "logic_boolean"}
						]
				},
				{
						"kind": "category",
						"name": "Loops",
						"colour": "%{BKY_LOOPS_HUE}",
						"contents": [
								{
										"kind": "block",
										"type": "controls_repeat_ext",
										"inputs":  {
												"TIMES": {
														"block": {
																"type": "math_number",
																"fields": {
																		"NUM": 10
																}
														}
												}
										}
								},
								{
										"kind": "block", "type": "controls_whileUntil"
								},
								{
										"kind": "block",
										"type": "controls_for",
										"inputs": {
												"FROM": {
														"block": {
																"type": "math_number",
																"fields": {
																		"NUM": 1
																}
														}
												},
												"TO": {
														"block": {
																"type": "math_number",
																"fields": {
																		"NUM": 10
																}
														}
												},
												"BY": {
														"block": {
																"type": "math_number",
																"fields": {
																		"NUM": 1
																}
														}
												},
										}
								},
						]
				},
				{
						"kind": "category",
						"name": "Matemática",
						"colour": "%{BKY_MATH_HUE}",
						"contents": [
								{
										"kind": "block",
										"type": "math_number",
										"fields": {
												"NUM": 5
										}
								},
								{
										"kind": "block", "type": "math_arithmetic"
								},
								{
										"kind": "block", "type": "math_single"
								}
						]
				},
				{
						"kind": "category",
						"name": "Cruzamento",
						"colour": 95,
						"contents": [
								{
										"kind": "block",
										"type": "light"
								},
								{
										"kind": "block",
										"type": "clock"
								}
						]
				}
		]
};

var options = {
		// collapse: false,
		// comments: 	true,
		// css: 	false,
		// disable: true,
		grid: {
				spacing: 25,
        length: 4,
        colour: '#ccc',
        snap: false
		},
		// horizontalLayout: false,
		// maxBlocks: Infinity,
		// maxInstances: {},
		media: "./package/media/",
		move:{
        scrollbars: {
						horizontal: true,
						vertical: true
        },
        drag: true,
        wheel: false
		},
		// oneBasedIndex: false,
		// readOnly: false,
		// renderer: "geras",
		// rtl: false,
		// scrollbars: false,
		// sounds: true,
		// theme: "",
		toolbox: toolbox,
		// toolboxPosition: "start",
		// trashcan: true,
		// maxTrashcanContents: 0,
		// plugins: {},
		zoom: {
				controls: false,
        wheel: false,
        startScale: 1.2,
        maxScale: 3.0,
        minScale: 0.5,
        scaleSpeed: 0.5,
        pinch: true
		}
};

var ws = Blockly.inject("blocklyDiv", options);
