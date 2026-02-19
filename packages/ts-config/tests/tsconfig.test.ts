import { testBuild } from "./fixure";

describe("TSConfig Build Testing", () => {
	test("should return the string when input is a string", () => {
		expect(testBuild("hello")).toBe("hello");
	});

	test("should return the number plus 5 when input is a number", () => {
		expect(testBuild(10)).toBe(15);
	});

	test("should return an object with key when input is an object", () => {
		expect(testBuild({ name: "test" })).toEqual({ key: { name: "test" } });
	});

	test("should return an array with undefined when input is undefined", () => {
		expect(testBuild()).toEqual([undefined]);
	});
});
