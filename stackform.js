// Created By: Patrick Gemmell
// Created On: May 2021
// This program pushes a user inputted integer to a stack.

// Importing the class JacobStack from another file
const PatrickStack = require('./patrick_stack');

// Defining prompt for getting user input
const prompt = require('prompt-sync')({sigint: true});

try {
  // User input for an integer for the stack
  const userInput = prompt('Enter an Integer for the Stack: ');
  console.log();

  // Declaring stack by using the JacobStack class
  const stack = new PatrickStack();

  // Placing the inputted integer on the stack
  if (isNaN(userInput) == true) {
    // Output for an error if the user inputs something that is not a number
    console.log('ERROR: Invalid Input');
  } else {
    // Pushing and verifying the inputted number to the top of the stack
    stack.pushNumber(userInput);
    console.log('Pushed to ArrayList:', stack.getPushedNumber());
  }

  // Catches and tells the user that an improper input was entered
} catch (err) {
  console.log('ERROR: Invalid Input');
}
