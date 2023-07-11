const {
	expect,
	jest: { spyOn },
	test
} = require("@jest/globals");
const makeShirt = require("../makeShirt");

test("makeShirt", () => {
	const spy = spyOn(console, "log");
	const size = "L";
	const text = "Multiverse";
	makeShirt(size, text);
	expect(spy).toHaveBeenCalledWith(`The shirt you have ordered is '${size}' and has the message '${text}' printed on it.`);
});
test("Part 2", () => {
	const spy = spyOn(console, "log");
	const size = "L";
	makeShirt(size);
	expect(spy).toHaveBeenCalledWith(`The shirt you have ordered is '${size}' and has the message 'I love Javascript' printed on it.`);
});
