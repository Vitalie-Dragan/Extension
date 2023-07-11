"use strict";

const { expect, test } = require("@jest/globals");
const checkPrime = require("../checkPrime");

test("Check Prime", () => {
	expect(checkPrime(7)).toBe("Prime");
	expect(checkPrime(10)).toBe("Not prime");
	expect(checkPrime(23)).toBe("Prime");
});
