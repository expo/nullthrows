import assert from 'node:assert';
import test from 'node:test';

import nullthrows from '../nullthrows';

test(`throws if given null`, () => {
  assert.throws(() => nullthrows(null), TypeError);
});

test(`throws if given undefined`, () => {
  assert.throws(() => nullthrows(undefined), TypeError);
});

test(`returns non-null and non-undefined values`, () => {
  const values = [0, -0, NaN, true, false, '', 'test', [], {}, Symbol()];
  for (const value of values) {
    assert.equal(nullthrows(value), value);
  }
});

test(`throws with the given error message`, () => {
  assert.throws(
    () => nullthrows(null, 'Intentional test error'),
    TypeError,
    'Intentional test error'
  );
});
