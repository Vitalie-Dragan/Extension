"use strict";

// Write a JavaScript function that takes in a number as input and returns
// "Prime" if the number is prime and "Not prime" otherwise.

/**
 * Returns "Prime" if the number is prime and "Not prime" otherwise.
 * @param {number} number A number.
 * @returns {"Prime" | "Not prime"} "Prime" or "Not prime".
 */
function checkPrime(number) {
	// Your code here...
	if (number % 2 === 0) {
		return "Not prime"
	}
	return "Prime"
}

module.exports = exports = checkPrime;
