import eslintConfig from "./packages/eslint-config/dist/esm/index.mjs";

export default [
  {
    ignores: [
      "**/dist/*",
      "node_modules/**",
      "**/*.d.ts",
      "**/docs",
      "**/coverage",
    ],
  },
  ...eslintConfig,
];
