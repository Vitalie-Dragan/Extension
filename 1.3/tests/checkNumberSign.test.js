"use strict";

const { expect, test } = require("@jest/globals");
const checkNumberSign = require("../checkNumberSign");

test("Check Number Sign", () => {
	expect(checkNumberSign(5)).toBe("Positive");
	expect(checkNumberSign(-3)).toBe("Negative");
	expect(checkNumberSign(0)).toBe("Zero");
});
