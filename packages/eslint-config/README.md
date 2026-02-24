<div align="center">

# @fantacovid-19/eslint-config

**ESLint configuration for Fantacovid-19 projects**

[![GitHub](https://img.shields.io/github/license/fantacovid-19/utilities?style=for-the-badge)](https://github.com/fantacovid-19/utilities/blob/main/LICENSE.md)
[![Npm](https://img.shields.io/npm/v/@fantacovid-19/eslint-config?style=for-the-badge&color=crimson&logo=npm)](https://www.npmjs.com/package/@fantacovid-19/eslint-config)

</div>

**Table of Contents**

- [Installation](#installation)
- [Usage](#usage)

## Installationz

You can install the package using npm or pnpm:

npm:

```bash
npm install --save-dev @fantacovid-19/eslint-config
```

pnpm:

```bash
pnpm add --save-dev @fantacovid-19/eslint-config
```

---

## Usage

After installing the package, you can extend the ESLint configuration in your project's `eslint.config.js`, `eslint.config.cjs` or `eslint.config.mjs` file. Here's how to do it:

Using ESM Module:

```js
import eslintConfig from "@fantacovid-19/eslint-config";

export default [...eslintConfig];
```

Using CommonJS Module:

```js
const eslintConfig = require("@fantacovid-19/eslint-config");

module.exports = [...eslintConfig];
```
