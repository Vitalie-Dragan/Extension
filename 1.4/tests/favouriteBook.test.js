const {
	expect,
	jest: { spyOn },
	test
} = require("@jest/globals");
const favouriteBook = require("../favouriteBook");

test("favouriteBook", () => {
	const spy = spyOn(console, "log");
	const book = "Alice in Wonderland";
	favouriteBook(book);
	expect(spy).toHaveBeenCalledWith(`My favourite book is '${book}'.`);
});
