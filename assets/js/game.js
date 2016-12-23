$( document ).ready(function() {

	// DECLARE GLOBAL VARIABLES

	// One object containing all the crystals:
	var crystal = {
		// And a sub-object for each crystal's values:
		blue: {
			name: "Blue",
			value: 0
		},
		green: {
			name: "Green",
			value: 0
		},
		red: {
			name: "Red",
			value: 0
		},
		violet: {
			name: "Violet",
			value: 0
		},
	};

	// Scores
	var currentScore 	= 0;
	var targetScore 	= 0;
	var winCount		= 0;
	var lossCount		= 0;

	// DECLARE FUNCTIONS

	// Random number generator to be used for target score as well as each crystal:
	var getRandom = function(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

});