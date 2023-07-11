"use strict";

const { expect, test } = require("@jest/globals");
const isLeapYear = require("../isLeapYear");

test("Leap Year", () => {
	expect(isLeapYear(2020)).toBe("Leap year");
	expect(isLeapYear(2022)).toBe("Not a leap year");
});
