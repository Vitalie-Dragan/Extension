"use strict";

const { expect, test } = require("@jest/globals");
const checkOrder = require("../checkOrder");

test("Check Order", () => {
	expect(checkOrder(1, 2, 3)).toBe("Increasing");
	expect(checkOrder(3, 2, 1)).toBe("Decreasing");
	expect(checkOrder(1, 3, 2)).toBe("Neither");
});
