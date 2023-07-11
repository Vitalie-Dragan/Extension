"use strict";

const { expect, test } = require("@jest/globals");
const checkTriangleValidity = require("../checkTriangleValidity");

test("Check Triangle Validity", () => {
	expect(checkTriangleValidity(60, 60, 60)).toBe("Valid triangle");
	expect(checkTriangleValidity(90, 45, 45)).toBe("Valid triangle");
	expect(checkTriangleValidity(45, 90, 50)).toBe("Invalid triangle");
});
