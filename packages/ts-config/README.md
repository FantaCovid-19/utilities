<div align="center">

# @fantacovid-19/ts-config

**Typescript configuration for Fantacovid-19 projects**

[![GitHub](https://img.shields.io/github/license/fantacovid-19/utilities?style=for-the-badge)](https://github.com/fantacovid-19/utilities/blob/main/LICENSE.md)
[![Npm](https://img.shields.io/npm/v/@fantacovid-19/ts-config?style=for-the-badge&color=crimson&logo=npm)](https://www.npmjs.com/package/@fantacovid-19/ts-config)

</div>

**Table of Contents**

- [Installation](#installation)
- [Usage](#usage)

## Installation

You can install the package using npm or pnpm:

npm:

```bash
npm install --save-dev @fantacovid-19/ts-config
```

pnpm:

```bash
pnpm add --save-dev @fantacovid-19/ts-config
```

---

## Usage

To use the TypeScript configuration provided by `@fantacovid-19/ts-config`, you can extend it in your project's `tsconfig.json` file. Here's an example and supported options:

- `@fantacovid-19/ts-config/base`
- `@fantacovid-19/ts-config/extra-strict`

```json
{
  "extends": "@fantacovid-19/ts-config",
  "compilerOptions": {
    // You can override any options here if needed
  },
  "include": ["src/**/*"]
}
```

### Base

The `base` configuration provides a solid foundation for TypeScript projects, including essential compiler options that ensure type safety and code quality.

you can view the full list of options in the [base configuration file](https://github.com/fantacovid-19/utilities/blob/main/packages/ts-config/src/tsconfig.json).

### Extra Strict

The `extra-strict` configuration builds upon the base configuration by enabling additional strict type-checking options. This configuration is ideal for projects that require a higher level of type safety and want to catch more potential issues during development.

You can view the full list of options in the [extra strict configuration file](https://github.com/fantacovid-19/utilities/blob/main/packages/ts-config/src/extraStrict.json).
