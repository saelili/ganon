const { factorial } = require('../lib');

test('factorial of 5 should be 120', () => {
  expect(factorial(5)).toBe(120);
});

test('factorial of 0 should be 1', () => {
  expect(factorial(0)).toBe(1);
});

test('factorial of -4 to equal -24', () => {
  expect(increment(-4)).toBe(-24);
});
