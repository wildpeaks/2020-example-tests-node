/* eslint-env node, mocha */
"use strict";
const {strictEqual, deepStrictEqual} = require("assert");
const MyLibrary = require("../dist/MyLibrary");

describe("Tests Suite 1", function(){
	it("MyLibrary is a function", function(){
		strictEqual(typeof MyLibrary, "function");
	});
	it("MyLibrary returns the expected value", function(){
		const actual = MyLibrary(123);
		const expected = {
			text: "Hello World",
			number: 123
		};
		deepStrictEqual(actual, expected);
	});
});
