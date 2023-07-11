"use strict";

// Write a JavaScript function that takes in a string as input and returns
// "Long" if the string has more than 10 characters, "Short" if the string has
// fewer than 10 characters, and "Medium" if the string has exactly 10
// characters.

/**
 * Returns "Long" if the string has more than 10 characters, "Short" if the
 * string has fewer than 10 characters, and "Medium" if the string has exactly
 * 10 characters.
 *
 * @param {string} str A string.
 * @returns {"Long" | "Short" | "Medium"} "Long", "Short", or "Medium".
 */
function checkStringLength(str) {
	// Your code here...
	if (str.length > 10) {
		return "Long";
	} else if(str.length == 10){
		return "Medium";
	}
	return "Short";

}

module.exports = exports = checkStringLength;
