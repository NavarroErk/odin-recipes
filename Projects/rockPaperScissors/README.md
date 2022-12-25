# Rock-Paper-Scissors

This project will consist of a grade-school classic game called Rock Paper Scissors. The project will demonstrate a basic level of JavaScript.

Steps:

1. Create function called getComputerChoice() that will randomly return "rock", "paper", or "scissors".
   a. Declare variable to store array of choices.
   b. Declare variable to store random computer choice.
   c. Utilize math.random against choices array to grab random value from the array.
   d. Invoke getComputerChoice() function.

2. Create function that plays a single round of rock paper scissors. The function will take 2 parameters (playerSelection, computerSelection) and return a string that declares the winner of the round. (Make playerSelection param case-insensitive. User can input "rock", "ROCK", "rOcK").
   a. Create function called playRound(playerSelection, computerSelection).
   b. Upon invokation, prompt user to select a choice and store the choice in a variable playerSelection.
   c. Create if else statements that will store and return a different result based on playerSelection and computerSelection values.

3. Write new function called game(). Call playRound() inside of this function to play a 5 round game that keeps score and reports a winner or loser at the end.
   a. Create a for loop that will invoke playRound() each time it loops. This should loop 5 times to get 5 playthroughs of rock paper scissors.
   b. At the end of each loop, the player win-count and/or computer win-count should increment based on who the winner is of each round.
   c. After the final loop, output the winner to the console.
