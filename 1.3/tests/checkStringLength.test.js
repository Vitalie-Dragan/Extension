"use strict";

const { expect, test } = require("@jest/globals");
const checkStringLength = require("../checkStringLength");

test("Check String Length", () => {
	expect(checkStringLength("Hello World")).toBe("Long");
	expect(checkStringLength("Hi")).toBe("Short");
	expect(checkStringLength("JavaScript")).toBe("Medium");
});
