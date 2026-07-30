const { add, subtract, divide, power } = require('./math');

test('add dodaje dwie liczby', () => {
  expect(add(2, 3)).toBe(5);
});

test('subtract odejmuje dwie liczby', () => {
  expect(subtract(5, 1)).toBe(4);
});

test('divide dzieli dwie liczby', () => {
  expect(divide(10, 2)).toBe(5);
});

test('divide rzuca blad przy dzieleniu przez zero', () => {
  expect(() => divide(1, 0)).toThrow('Division by zero');
});

test('power mnozy dwie liczby', () => {
  expect(power(3, 3)).toBe(9);
});
