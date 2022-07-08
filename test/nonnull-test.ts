import { expect } from 'expect';

import test from 'node:test';

import nonnull from '../nonnull';

test(`throws if given null`, () => {
  expect(() => nonnull(null)).toThrow(TypeError);
});

test(`throws if given undefined`, () => {
  expect(() => nonnull(undefined)).toThrow(TypeError);
});

test(`returns non-null and non-undefined values`, () => {
  const values = [0, -0, NaN, true, false, '', 'test', [], {}, Symbol()];
  for (const value of values) {
    expect(nonnull(value)).toBe(value);
  }
});

test(`throws with the given error message`, () => {
  expect(() => nonnull(null, 'Intentional test error')).toThrowError('Intentional test error');
});
