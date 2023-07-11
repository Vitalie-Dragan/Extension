"use strict";

// Write a JavaScript function that takes in a number as input and returns
// "Positive" if the number is positive, "Negative" if the number is negative,
// and "Zero" if the number is zero.

/**
 * Returns "Positive" if the number is positive, "Negative" if the number is
 * negative, and "Zero" if the number is zero.
 *
 * @param {number} number A number.
 * @returns {"Positive" | "Negative" | "Zero"} "Positive", "Negative", or "Zero".
 */
function checkNumberSign(number) {
	// Your code here...
	if (number < 0 ) {
		return "Negative";
	} else if(number > 0){
		return "Positive"
	}
	return "Zero";
}

module.exports = exports = checkNumberSign;
