"use strict";

const { expect, test } = require("@jest/globals");
const checkDivisibilityBy3 = require("../checkDivisibilityBy3");

test("Check Divisibility by 3", () => {
	expect(checkDivisibilityBy3(9)).toBe("Divisible by 3");
	expect(checkDivisibilityBy3(7)).toBe("Not divisible by 3");
	expect(checkDivisibilityBy3(12)).toBe("Divisible by 3");
});
