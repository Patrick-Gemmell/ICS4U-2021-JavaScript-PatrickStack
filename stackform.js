// Created By: Patrick Gemmell
// Created On: May 2021
// This program pushes a user inputted integer to a stack.

// Importing the class JacobStack from another file
const PatrickStack = require('./patrick_stack');

// Defining prompt for getting user input
const prompt = require('prompt-sync')({sigint: true});
/**
 * checking if userInput is int.
 * @param {int} userInput
 * @return {int}
 * returns input.
 */
function checkint(userInput) {
  return ((userInput % 1) != 0);
}
try {
  // User input for an integer for the stack
  const userInput = prompt('Enter an Integer for the Stack: ');
  console.log();

  // Declaring stack by using the JacobStack class
  const stack = new PatrickStack();

  // Placing the inputted integer on the stack
  if (checkint(userInput)) {
    console.log('Error: Invalid user input, not an integer');
    process.exit(1);
  }
  const newInput = parseInt(userInput);
  if (Number.isInteger(newInput) == false) {
    // Output for an error if the user inputs something that is not a number
    console.log('ERROR: Input is not an Integer');
  } else {
    // Pushing and verifying the inputted number to the top of the stack
    stack.pushNumber(newInput);
    stack.showStack();
    console.log('Final (Peeked) Number in Stack: ' + stack.peek());
    console.log('The value: ' + stack.pop() + ' got popped');
    console.log('Clearing Stack');
    stack.clearStack();
    console.log(stack.currentStack());
  }

  // Catches and tells the user that an improper input was entered
} catch (err) {
  console.log(err.message);
}
