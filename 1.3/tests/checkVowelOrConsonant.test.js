"use strict";

const { expect, test } = require("@jest/globals");
const checkVowelOrConsonant = require("../checkVowelOrConsonant");

test("Check Vowel or Consonant", () => {
	expect(checkVowelOrConsonant("a")).toBe("Vowel");
	expect(checkVowelOrConsonant("b")).toBe("Consonant");
	expect(checkVowelOrConsonant("e")).toBe("Vowel");
});
