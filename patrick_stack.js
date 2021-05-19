// Created By: Patrick Gemmell
// Created On: May 2021
// This class creates an integer stack.
/**
* array.
*/
class PatrickStack {
  // Constructor that defines stack array
  /**
  * array.
  */
  constructor() {
    this.STACK_AS_ARRAY = [];
  }
  // Method that adds user input to stack
  /**
  * array.
  * @param {int} inputNumber
  */
  pushNumber(inputNumber) {
    this.STACK_AS_ARRAY.push(inputNumber);
  }
  // Getter that tells the user the most recent input
  /**
  * array.
  * @return {int}
  */
  getPushedNumber() {
    return this.STACK_AS_ARRAY[this.STACK_AS_ARRAY.length - 1];
  }
}

// Exporting the class
module.exports = PatrickStack;
