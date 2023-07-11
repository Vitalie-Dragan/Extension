const {
	expect,
	test
} = require("@jest/globals");
const makeAlbum = require("../makeAlbum");

test("makeAlbum", () => {
	const artistName = "Aqua";
	const albumTitle = "Aquarium";
    const expected = {artistName: "Aqua", albumTitle: "Aquarium"};
	let actual = makeAlbum(artistName, albumTitle);
    expect(actual).toMatchObject(expected);
});