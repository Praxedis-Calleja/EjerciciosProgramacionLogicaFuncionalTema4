const {resta} = require('./resta');
describe('Pruebas exhaustivas de la función resta', () => {
  //
  test('Prueba normal', () => {
    expect(resta(2, 5)).toBe(-3);
  });
//
  test('Prueba de dos números decimales', () => {
    expect(resta(2.5, 1.5)).toBe(1);
  });

  test('Prueba de Frontera', () => {
    expect(resta(0, 5)).toBe(-5);
  });

    test('Prueba de frontera numeros mayores', () => {
    expect(resta(Number.MAX_SAFE_INTEGER, 5)).toBe(Number.MAX_SAFE_INTEGER - 5);
  });

  test('Prueba fuera de frontera', () => {
    expect(resta(Number.MAX_SAFE_INTEGER*10,5)).toBe(Number.MAX_SAFE_INTEGER*10-5);
  });



  test('Prueba con argumentos undefined', () => {
    expect(resta(undefined, undefined)).toBeNaN();
  });

  test('Prueba sin argumentos', () => {
    expect(resta()).toBeNaN();
  });

  test('Prueba con null y un número', () => {
    expect(resta(null, 8)).toBe(-8);
  });

  test('Prueba con cadenas como argumentos', () => {
    expect(resta("2", "5")).toBe(-3);
  });

  test('Prueba de un número y negativo cero', () => {
    expect(resta(6, -0)).toBe(6);
  });

  test('Prueba de dos números negativos', () => {
    expect(resta(-3, -2)).toBe(-1);
  });
}
);