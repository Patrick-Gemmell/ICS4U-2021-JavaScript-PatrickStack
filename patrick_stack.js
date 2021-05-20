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
  */
  showStack() {
    let i;
    for (i = 0; i < this.STACK_AS_ARRAY.length; i++) {
      console.log('Stack entry: ' + i &&
                  + ' is equal to ' + this.STACK_AS_ARRAY[i]);
    }
  }
  /**
  * array.
  */
  peek() {
    console.log('Peeking the array is: ' + this.STACK_AS_ARRAY.slice(0, 1));
  }
  /**
  * array.
  * @return {int}
  */
  pop() {
    const popElement = this.STACK_AS_ARRAY.shift();
    return popElement;
  }
}

// Exporting the class
module.exports = PatrickStack;
