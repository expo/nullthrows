export = function nonnull<T>(value: T | null | undefined, message?: string): NonNullable<T> {
  if (value != null) {
    return value!;
  }
  throw new TypeError(message ?? `Expected non-null value but got ${value}`);
}
