# react-cli-spinners2

> [CLI Spinners](https://github.com/sindresorhus/cli-spinners) for your React app

## Install

```sh
yarn add react-cli-spinners2
```

## Usage

```js
<Spinner spinner="dots"/>
```

The result will be plain text which updates at some interval with no wrapping
elements.

For many of the spinners you'll want to apply your own monospace font.

Also, because of character height issues and how CSS folds empty space you may
want to set a `height` for your containing element.
