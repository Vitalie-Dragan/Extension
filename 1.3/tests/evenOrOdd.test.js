"use strict";

const { expect, test } = require("@jest/globals");
const evenOrOdd = require("../evenOrOdd");

test("Even or Odd", () => {
	expect(evenOrOdd(4)).toBe("Even");
	expect(evenOrOdd(7)).toBe("Odd");
});
