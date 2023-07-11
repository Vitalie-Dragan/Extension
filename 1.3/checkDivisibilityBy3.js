"use strict";

// Write a JavaScript function that takes in a number as input and returns
// "Divisible by 3" if the number is divisible by 3 and "Not divisible by 3"
// otherwise.

/**
 * Returns "Divisible by 3" if the number is divisible by 3 and
 * "Not divisible by 3" otherwise.
 *
 * @param {number} number A number.
 * @returns {"Divisible by 3" | "Not divisible by 3"} "Divisible by 3" or "Not divisible by 3".
 */
function checkDivisibilityBy3(number) {
	// Your code here...
	if(number / 3 === 0){
		return "Not divisible by 3";
	}
	return "Divisible by 3";
}

module.exports = exports = checkDivisibilityBy3;
