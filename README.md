# eslint-plugin-absolute-imports-checker

ESLint plugin that checks absolute and relative paths with Feature Sliced Design architecture.

Plugin was created with [generator-eslint](https://www.npmjs.com/package/generator-eslint).

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-absolute-imports-checker`:

```sh
npm install eslint-plugin-absolute-imports-checker --save-dev
```

## Usage

Add `absolute-imports-checker` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": ["absolute-imports-checker"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "absolute-imports-checker/rule-name": 2
  }
}
```
