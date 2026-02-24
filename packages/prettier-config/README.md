<div align="center">

# @fantacovid-19/prettier-config

**Prettier configuration for Fantacovid-19 projects**

[![GitHub](https://img.shields.io/github/license/fantacovid-19/utilities?style=for-the-badge)](https://github.com/fantacovid-19/utilities/blob/main/LICENSE.md)
[![Npm](https://img.shields.io/npm/v/@fantacovid-19/prettier-config?style=for-the-badge&color=crimson&logo=npm)](https://www.npmjs.com/package/@fantacovid-19/prettier-config)

</div>

**Table of Contents**

- [Installation](#installation)
- [Usage](#usage)
  - [Using package.json](#using-packagejson)
  - [Using ESM Module](#using-esm-module)
  - [Using CommonJS Module](#using-commonjs-module)

## Installation

You can install the package using npm or pnpm:

npm:

```bash
npm install --save-dev @fantacovid-19/prettier-config
```

pnpm:

```bash
pnpm add --save-dev @fantacovid-19/prettier-config
```

---

## Usage

After installing the package, you can extend the Prettier configuration in your project's `prettier.config.js`, `prettier.config.cjs` or `prettier.config.mjs` and `package.json` file. Here's how to do it:

### Using package.json:

```json
{
  "prettier": "@fantacovid-19/prettier-config"
}
```

### Using ESM Module:

```js
import prettierConfig from "@fantacovid-19/prettier-config";

export default prettierConfig;
```

### Using CommonJS Module:

```js
const prettierConfig = require("@fantacovid-19/prettier-config");

module.exports = prettierConfig;
```
