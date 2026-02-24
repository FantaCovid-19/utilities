import type { Config } from "prettier";

const config: Config = {
	endOfLine: "lf",
	printWidth: 200,
	quoteProps: "as-needed",
	semi: true,
	singleQuote: true,
	tabWidth: 2,
	trailingComma: "all",
	useTabs: true,

	overrides: [
		{
			files: "*.{yml,yaml}",
			options: {
				tabWidth: 2,
				useTabs: false,
			},
		},
	],
};

export default config;
