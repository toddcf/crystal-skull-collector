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

	// Starts (or restarts) the game:
	var startGame = function() {
		// Reset currentScore, in case this is a restart game:
		currentScore = 0;
		// Use the random generator to set a new target score between 19 and 120:
		targetScore = getRandom(19, 120);
		// Use the random generator to set a value between 1 and 12 for each crystal object:
		crystal.blue.value 		= getRandom(1, 12);
		crystal.green.value 	= getRandom(1, 12);
		crystal.red.value 		= getRandom(1, 12);
		crystal.violet.value 	= getRandom(1, 12);
		// Update HTML to display the new currentScore and targetScore:
		$("#yourScore").html(currentScore);
		$("#targetScore").html(targetScore);
	}

	// Update scores accordingly when crystals are clicked:
	var updateScores = function() {
		// When a crystal is clicked, add its value to the currentScore and save this as the new currentScore:
		currentScore = currentScore + crystal.value;
		// Update HTML to reflect the new currentScore:
		$("#currentScore").html(currentScore);
		// After each click, check if the player has won (or lost, for that matter):
		checkWin();
	}

	// Checks if the player has won or lost:
	var checkWin = function() {
		// If currentScore is now higher than targetScore, player loses:
		if (currentScore > targetScore) {
			// In next iteration, update these alerts to modal popups:
			alert("You lost -- the walls caved in. Start over.");
			// Tally a loss:
			lossCount++;
			// Update HTML so player sees their score. Note that this must come *after* the lossCount has been increased, or else this change will not be registered.
			$("#lossCount").html(lossCount);
			// Restart game:
			startGame();
		}

		else if (currentScore === targetScore) {
			// In next iteration, update these alerts to modal popups:
			alert("You won! You escaped with the crystals and your life! Let\'s go to another cave and collect some more crystals...");
			// Tally a win:
			winCount++;
			// Update HTML so player sees their score. Note that this must come *after* the lossCount has been increased, or else this change will not be registered.
			$("#winCount").html(winCount);
			// Restart game:
			startGame();
		}
	}

});