# Collector of the Crystal Skulls!
Help Indiana Jones collect as many crystal skulls as possible and escape with his life. But be careful -- if you take too many, the walls of the cave will collapse on you!

## How The Code Works
### Global Variables
All the crystals (and their values) are contained inside one object.

All scores (current, target, win counter, and loss counter) are stored in variables and set to zero.
### Declare Functions
A random number generator that will be used to set the value of the target score and each crystal at the start of each game. (Different every time, but within a range of 19 and 120 for the target score, and 1 and 12 for each crystal.)

A "start game" function that resets the current score and uses the random number generator to create new values for each crystal and the target score.

A function to calculate the current score each time a crystal is "collected," and update the score in HTML for the player to see. Also calls the next function, which will check if the player has won or lost on this turn.

A function to check if the player has won or lost on this turn. If they won, they are congratulated and the game is reset (with a "win" added to their tally). If they lost, they are regrettably informed and the game is reset (with a "loss" is added to their tally). If neither, the current game continues.
###Main Processes
This is where the "start game" function is actually called. jQuery click events for each crystal button are also found here.