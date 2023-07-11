"use strict";

// Write a JavaScript function that takes in three numbers as input and returns
// "Increasing" if the numbers are in increasing order, "Decreasing" if the
// numbers are in decreasing order, and "Neither" if they are neither increasing
// nor decreasing.

/**
 * Returns "Increasing" if the numbers are in increasing order, "Decreasing" if
 * the numbers are in decreasing order, and "Neither" if they are neither
 * increasing nor decreasing.
 *
 * @param {number} num1 The first number.
 * @param {number} num2 The second number.
 * @param {number} num3 The third number.
 * @returns {"Increasing" | "Decreasing" | "Neither"} "Increasing", "Decreasing", or "Neither".
 */
function checkOrder(num1, num2, num3) {
	// Your code here...
	if (num1 > num2 && num2 > num3) {
		return "Decreasing"
	} else if(num1 < num2 && num2 < num3){
		return "Increasing"
	} 
	return "Neither"
}

module.exports = exports = checkOrder;
