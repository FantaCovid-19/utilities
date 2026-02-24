import prettierConfig from "../src/index";

describe("Prettier Configuration", () => {
	test("should have the correct configuration properties", () => {
		expect(prettierConfig.useTabs).toBe(true);
		expect(prettierConfig).toMatchSnapshot();
	});
});
