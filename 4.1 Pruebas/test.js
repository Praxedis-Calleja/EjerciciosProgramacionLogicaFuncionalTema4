const suma = require('./suma.js');

test('Suma de 1 + 2 es 3', () => {
  expect(suma(1, 2)).toBe(3);
  
});