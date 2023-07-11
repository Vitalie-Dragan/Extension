const {
	expect,
	jest: { spyOn },
	test
} = require("@jest/globals");
const makeShirt = require("../showMessages");
const showMessages = require("../showMessages");

test("showMessages", () => {
	const spy = spyOn(console, "log");
	const messageArr = ["Hello", "How are you today?"];
	showMessages(messageArr);
    expect(spy).toHaveBeenNthCalledWith(1, messageArr[0]);
    expect(spy).toHaveBeenNthCalledWith(2, messageArr[1]);
});
