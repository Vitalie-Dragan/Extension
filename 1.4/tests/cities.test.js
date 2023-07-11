const {
	expect,
	jest: { spyOn },
	test
} = require("@jest/globals");
const makeShirt = require("../cities");
const cities = require("../cities");

test("Cities", () => {
	const spy = spyOn(console, "log");
	const city = "Reykjavik";
	const country = "Iceland";
    cities(city, country);
	expect(spy).toHaveBeenCalledWith(`${city} is in ${country}.`);
});
test("Default City", () => {
	const spy = spyOn(console, "log");
	cities();
	expect(spy).toHaveBeenCalledWith(`London is in England.`);
});