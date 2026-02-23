import eslintConfig from "../src";
import { describe, it, expect } from "vitest";

describe("ESLint Configuration", () => {
	it("should be an array of config objects", () => {
		expect(Array.isArray(eslintConfig)).toBe(true);
		expect(eslintConfig.length).toBeGreaterThan(0);
	});

	it("should have files pattern for TypeScript", () => {
		const tsConfig = eslintConfig.find((config) => config.files);
		expect(tsConfig).toBeDefined();
		expect(tsConfig?.files).toContain("**/*.ts");
	});

	it("should have typescript-eslint plugin configured", () => {
		const tsConfig = eslintConfig.find((config) => config.plugins);
		expect(tsConfig?.plugins?.["@typescript-eslint"]).toBeDefined();
	});
});
