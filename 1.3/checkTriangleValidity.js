"use strict";

// Write a JavaScript function that takes in three angles (in degrees) as input
// and returns "Valid triangle" if the angles form a valid triangle and
// "Invalid triangle" otherwise (the sum of angles in a triangle should be 180
// degrees).

/**
 * Returns "Valid triangle" if the angles form a valid triangle and
 * "Invalid triangle" otherwise (the sum of angles in a triangle should be 180
 * degrees).
 *
 * @param {number} angle1 The first angle.
 * @param {number} angle2 The second angle.
 * @param {number} angle3 The third angle.
 * @returns {"Valid triangle" | "Invalid triangle"} "Valid triangle" or "Invalid triangle".
 */
function checkTriangleValidity(angle1, angle2, angle3) {
	// Your code here...
	if ((angle1 + angle2 + angle3) <= 180) {
		return "Valid triangle"
	} 
	return "Invalid triangle"

}

module.exports = exports = checkTriangleValidity;
