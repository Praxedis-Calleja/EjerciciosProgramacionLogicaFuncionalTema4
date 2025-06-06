const {esClaveBasica, esClaveSegura} = require('./password');

describe('Pruebas para validarPasswordDebil (versión errónea)', () => {
  test('Caso normal: cumple mínimo de longitud', () => {
    expect(esClaveBasica("Praxedis2025")).toBe(true);
  });

  test('Contraseña corta: menos de 8 caracteres', () => {
    expect(esClaveBasica("Pra@25")).toBe(false);
  });

  test('Sin letra mayúscula', () => {
    expect(esClaveBasica("praxedis2025@")).toBe(false);
  });

  test('Sin letra minúscula', () => {
    expect(esClaveBasica("PRAXEDIS2025@")).toBe(false);
  });

  test('Sin número', () => {
    expect(esClaveBasica("Praxedis@@@@")).toBe(false);
  });

  test('Sin carácter especial', () => {
    expect(esClaveBasica("Praxedis2025")).toBe(false);
  });

  test('Con espacios', () => {
    expect(esClaveBasica("Praxedis 2025@")).toBe(false);
  });

  test('Entrada vacía', () => {
    expect(esClaveBasica("")).toBe(false);
  });

  test('Entrada undefined', () => {
    expect(esClaveBasica(undefined)).toBeNaN();
  });

  test('Entrada tipo número (coerción de tipo)', () => {
    expect(esClaveBasica(12345678)).toBeNaN();
  });

  test('Contraseña con palabra significativa', () => {
    expect(esClaveBasica("Praxedis2025!")).toBe(true);
  });
});

describe('Pruebas para validarPasswordOptima (versión robusta)', () => {
  test('Contraseña segura y válida', () => {
    expect(esClaveSegura("Praxedis2025@")).toBe(true);
  });

  test('Menos de 8 caracteres', () => {
    expect(esClaveSegura("Pra@25")).toBe(false);
  });

  test('Sin mayúscula', () => {
    expect(esClaveSegura("praxedis2025@")).toBe(false);
  });

  test('Sin minúscula', () => {
    expect(esClaveSegura("PRAXEDIS2003@")).toBe(false);
  });

  test('Sin número', () => {
    expect(esClaveSegura("Praxedis@@@@")).toBe(false);
  });

  test('Sin carácter especial', () => {
    expect(esClaveSegura("Praxedis2025")).toBe(false);
  });

  test('Con espacios', () => {
    expect(esClaveSegura("Praxedis 2025@")).toBe(false);
  });

  test('Sin palabra significativa', () => {
    expect(esClaveSegura("Praxedis2025!")).toBe(true);
  });

  test('Entrada vacía', () => {
    expect(esClaveSegura("")).toBe(false);
  });

  test('Entrada undefined', () => {
    expect(esClaveSegura(undefined)).toBeNaN();
  });
});
  test('Entrada tipo número (coerción de tipo)', () => {
    expect(esClaveSegura(12345678)).toBeNaN();
  });