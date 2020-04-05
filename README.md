<a href="https://firelayer.io/">
  <img src="https://user-images.githubusercontent.com/3942799/78354854-884c2780-75a4-11ea-9882-a716e2095e98.png" alt="Firelayer" width="400" />
</a>

> Jumpstart your Firebase Project

<br/>

# Firelayer ESLint Config

[![GitHub Actions](https://github.com/firelayer/eslint-config/workflows/ci/badge.svg?branch=master)](https://github.com/firelayer/eslint-config/actions?query=workflow%3Aci)
[![npm (scoped with tag)](https://flat.badgen.net/npm/v/@firelayer/eslint-config)](https://npmjs.com/package/@firelayer/eslint-config)
[![npm](https://flat.badgen.net/npm/dt/@firelayer/eslint-config)](https://npmjs.com/package/@firelayer/eslint-config)

ESlint config used for Firelayer

## Getting Started

Do you want to add the config to your own projects? There you go:

1. Add this package to your devDependencies

```bash
$ npm i -D @firelayer/eslint-config
# or
$ yarn add -D @firelayer/eslint-config
```

2. Install `eslint` if not already present locally or globally

```bash
$ npm i -D eslint
# or
$ yarn add -D eslint
```

3. Create a `.eslintrc` file

4. Extend our config (you can use just the scope name as ESLint will assume the `eslint-config` suffix):

```json
{
  "extends": [
    "@firelayer"
  ]
}
```

## Full example

A full example `.eslintrc`:

```json
{
  "root": true,
  "extends": [
    "@firelayer"
  ]
}
```

## Vue

If you're using Vue, follow [Getting Started](#getting-started) section by replacing `@firelayer/eslint-config` by `@firelayer/eslint-config-vue`.

And in your `.eslintrc` all you need is :

```json
{
  "extends": [
    "@firelayer/eslint-config-vue"
  ]
}
```

## License

[MIT license](https://github.com/firelayer/eslint-config/blob/master/LICENSE) - Firelayer
