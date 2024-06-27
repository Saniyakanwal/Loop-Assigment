var myWork = [];
for (var L = 1; L <= 10; L++) {
    var lesson = {
        name: "lesson".concat(L),
        status: L % 2 !== 0
    };
    myWork.push(lesson);
}
console.log(myWork);
//----------------------------------------------------------------------------//
/*2. Guessing Game (Using while loop )
Objective: Create a simple number guessing game where the user tries to guess a randomly
generated number between 1 and a specified maximum value using a predefined set of guesses.
Steps to Follow:
1. Set a maximum value: Create a variable to store the maximum value for the number
guessing game.
2. Generate a random number: Use Math.random() and Math.floor() to generate a
random number between 1 and the maximum value. Log this value to the console for
development purposes.
3. Track the guess status: Create a variable to track whether the user's guess is correct. Set
it to false initially.
4. Simulate user guesses: Use an array to store a series of predefined guesses.
5. Iterate over guesses: Use a while loop to iterate over the predefined guesses until the
correct guess is made.

6. Check the user's guess: Inside the loop, check if the current guess matches the random
number. Provide feedback if the guess is too high or too low.*/
var max = 10;
var random = Math.floor(Math.random() * max) + 1;
console.log(random);
var guessStatus = false;
var guesses = [1, 2, 3, 4, 5, 6, 7, 8];
var i = 0;
while (!guessStatus && i < guesses.length) {
    var currentGuess = guesses[i];
    if (currentGuess === random) {
        console.log(guessStatus);
        guessStatus = true;
    }
    else if (currentGuess < random) {
        console.log("Too low!");
    }
    else {
        console.log("Too high!");
    }
    i++;
}
//------------------------------------------------------------------------------//
/*3. Counter Incrementer (Using do while loop )
Objective: Create a program that increments a counter by a specified step value using a
do...while loop and prints the counter value to the console until it reaches or exceeds 100.
Steps to Follow:
1. Set the starting counter to 0: Create a variable counter and initialize it to 0.
2. Create a variable, step, to increase your counter by: Define a variable step to hold
the value by which the counter will be incremented.
3. Add a do...while loop: In the loop, print the counter to the console and increment it by
the step amount each iteration.
4. Continue to loop until the counter is equal to or more than 100: The loop should run
as long as the counter is less than 100.*/
var counter = 0;
var step = 5;
do {
    console.log(counter);
    counter += step;
} while (counter < 100);