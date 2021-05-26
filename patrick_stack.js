// Created By: Patrick Gemmell
// Created On: May 2021
// This class creates an integer stack.
/**
 * This function is for throw.
 * @param {String} message
 */
function UserException(message) {
  this.message = message;
  this.name = 'UserException';
}
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
  * shows array.
  */
  showStack() {
    let counter;
    for (counter = 0; counter < this.STACK_AS_ARRAY.length; counter++) {
      console.log('Stack entry: ' + counter +
                  ' is equal to ' + this.STACK_AS_ARRAY[counter]);
    }
  }
  /**
  * peeks array.
  * @return {int}
  */
  peek() {
    if (this.STACK_AS_ARRAY.length <= 0) {
      throw new UserException('ERROR: stack is empty.');
    } else {
      this.peekedNumber = this.STACK_AS_ARRAY[this.STACK_AS_ARRAY.length - 1];
      return this.peekedNumber;
    }
  }
  /**
  * pops array.
  * @return {int}
  */
  pop() {
    if (this.STACK_AS_ARRAY.length <= 0) {
      throw new UserException('ERROR: stack is empty.');
    } else {
      const popElement = this.STACK_AS_ARRAY.shift();
      return popElement;
    }
  }
  /**
  * clears array.
  */
  clearStack() {
    if (this.STACK_AS_ARRAY.length <= 0) {
      throw new UserException('ERROR: stack is empty.');
    } else {
      this.STACK_AS_ARRAY.length = this.STACK_AS_ARRAY.length -
                                   this.STACK_AS_ARRAY.length;
    }
  }
}

// Exporting the class
module.exports = PatrickStack;
