import { relative, resolve as resolveDir } from "node:path";
import { defineConfig, type Options } from "tsup";

const baseOptions: Options = {
	clean: true,
	dts: true,
	entry: ["src/index.ts"],
	minify: false,
	target: "es2022",
	tsconfig: relative(
		__dirname,
		resolveDir(process.cwd(), "src", "tsconfig.json"),
	),
	keepNames: true,
	treeshake: true,
};

interface CreateTsupConfigOptions {
	cjsOptions?: Partial<Options>;
	esmOptions?: Partial<Options>;
}

export function createTsupConfig(options: CreateTsupConfigOptions) {
	return [
		defineConfig({
			...baseOptions,
			outDir: "dist/cjs",
			format: "cjs",
			outExtension: () => ({ js: ".cjs" }),
			...options.cjsOptions,
		}),
		defineConfig({
			...baseOptions,
			outDir: "dist/esm",
			format: "esm",
			outExtension: () => ({ js: ".mjs" }),
			...options.esmOptions,
		}),
	];
}
