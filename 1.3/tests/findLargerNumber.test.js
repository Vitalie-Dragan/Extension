"use strict";

const { expect, test } = require("@jest/globals");
const findLargerNumber = require("../findLargerNumber");

test("Find Larger Number", () => {
	expect(findLargerNumber(5, 10)).toBe(10);
	expect(findLargerNumber(15, 8)).toBe(15);
});
