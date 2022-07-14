/**
 * Enforces the given value to be neither `null` nor `undefined` and throws a {@link TypeError}
 * otherwise.
 * @param value the value to enforce not to be `null` or `undefined`
 * @param message an optional error message to use in the thrown `TypeError` if the given value is
 * `null` or `undefined`
 * @returns the given value if it is neither `null` nor `undefined`
 * @throws {@link TypeError} if the given value is `null` or `undefined`
 */
export = function nullthrows<T>(value: T | null | undefined, message?: string): NonNullable<T> {
  if (value != null) {
    return value!;
  }
  throw new TypeError(message ?? `Expected value not to be null or undefined but got ${value}`);
}
