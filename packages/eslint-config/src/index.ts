import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";
import eslintPrettier from "eslint-config-prettier";

/**
 * Shared ESLint configuration
 */
export default defineConfig(
	{
		files: ["**/*.ts"],
		languageOptions: {
			parser: tseslint.parser,
			parserOptions: {
				project: "./tsconfig.eslint.json",
				ecmaVersion: "latest",
				sourceType: "module",
			},
		},
		extends: [
			...tseslint.configs.strictTypeChecked,
			...tseslint.configs.stylisticTypeChecked,
		],
		plugins: {
			"@typescript-eslint": tseslint.plugin,
		},
		rules: {
			"@typescript-eslint/no-explicit-any": "warn",
			"@typescript-eslint/no-unsafe-assignment": "warn",
			"@typescript-eslint/no-unsafe-argument": "off",
			"@typescript-eslint/restrict-template-expressions": [
				"error",
				{
					allowNumber: true,
					allowBoolean: true,
					allowAny: true,
					allowNullish: true,
				},
			],
			"@typescript-eslint/no-floating-promises": [
				"error",
				{
					ignoreVoid: true,
					ignoreIIFE: true,
				},
			],
			"@typescript-eslint/no-extraneous-class": "off",
			"@typescript-eslint/no-use-before-define": "error",
			"@typescript-eslint/no-array-constructor": "error",
			"@typescript-eslint/no-duplicate-enum-values": "error",
			"@typescript-eslint/no-empty-object-type": "error",
			"@typescript-eslint/no-extra-non-null-assertion": "error",
			"@typescript-eslint/no-misused-new": "error",
			"@typescript-eslint/no-namespace": "error",
			"@typescript-eslint/no-non-null-asserted-optional-chain": "error",
			"@typescript-eslint/no-require-imports": "error",
			"@typescript-eslint/no-this-alias": "error",
			"@typescript-eslint/no-unnecessary-type-constraint": "error",
			"@typescript-eslint/no-unsafe-declaration-merging": "error",
			"@typescript-eslint/no-unsafe-function-type": "error",
			"@typescript-eslint/ban-ts-comment": "error",
			"@typescript-eslint/no-unused-vars": [
				"error",
				{ argsIgnorePattern: "^_" },
			],
			"@typescript-eslint/naming-convention": [
				"error",
				{
					selector: "variableLike",
					format: ["camelCase"],
				},
				{
					selector: "typeLike",
					format: ["PascalCase"],
				},
			],
			"@typescript-eslint/consistent-type-imports": "error",
			"@typescript-eslint/no-unused-expressions": "error",
			"@typescript-eslint/no-wrapper-object-types": "error",
			"@typescript-eslint/prefer-as-const": "error",
			"@typescript-eslint/prefer-namespace-keyword": "error",
			"@typescript-eslint/triple-slash-reference": "error",
			"@typescript-eslint/no-unsafe-call": "off",
			"@typescript-eslint/no-unsafe-member-access": "off",
			"@typescript-eslint/no-unnecessary-condition": "off",
		},
	},
	{
		rules: {
			"unicorn/prefer-top-level-await": "off",
			"unicorn/prevent-abbreviations": "off",
			"unicorn/no-null": "off",
			"unicorn/no-useless-undefined": "off",
			"no-unused-vars": "off",
			"no-unused-expressions": "off",
			"no-array-constructor": "off",
			"handle-callback-err": "off",
			"max-nested-callbacks": ["error", { max: 4 }],
			"no-console": "warn",
			"no-empty-function": "warn",
			"no-inline-comments": "warn",
			"no-lonely-if": "warn",
			"no-shadow": ["error", { allow: ["err", "resolve", "reject"] }],
			"no-var": "error",
			"prefer-const": "error",
			"spaced-comment": ["warn", "always", { exceptions: ["-"] }],
			yoda: "error",
		},
	},
	eslintPrettier,
);
