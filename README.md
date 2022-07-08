# nonnull
An idiomatic way to enforce values not to be `null` nor `undefined`, with first-class support for TypeScript. Very lightweight with no dependencies.

## Installation and usage
```sh
npm install @expo/nonnull
```

```js
import process from 'node:process';
import nonnull from '@expo/nonnull';

// nodeEnv is guaranteed to be a string. If the environment variable is
// undefined, nonnull throws a TypeError.
const nodeEnv = nonnull(process.env.NODE_ENV);

// You can optionally provide a custom error message
const nodeEnv2 = nonnull(process.env.NODE_ENV, `NODE_ENV must be defined`);
```

## API

### `function nonnull<T>(value: T | null | undefined, message?: string): NonNullable<T>`

#### Parameters
- `value`: the value to enforce not to be `null` nor `undefined`
- `message`: an optional error message to use in the thrown `TypeError` if the given value is `null` or `undefined`

#### Type parameters
- `T`: the static type of `value`

#### Return value
Returns `value` if it is neither `null` nor `undefined`.

#### Throws
Throws a `TypeError` if `value` is `null` or `undefined`.

## History
This package is a spiritual successor of [`nullthrows`](https://github.com/zertosh/nullthrows). The motivation for a new package was primarily to support using TypeScript with ES modules since the type declarations included with `nullthrows` produce type errors.



