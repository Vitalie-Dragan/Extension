const {
	expect,
	jest: { spyOn },
	test
} = require("@jest/globals");
const message = require("../displayMessage");

test("displayMessage", () => {
	const spy = spyOn(console, "log");
	message();
	expect(spy).toHaveBeenCalledWith("I am learning about functions today.");
});
