// functions.test.js
const {
    suma,
    crearObjeto,
    obtenerNull,
    obtenerUndefined,
    obtenerDefinido,
    obtenerNumero,
    obtenerCadena,
    obtenerArray,
    obtenerValor,
    obtenerPromesaExito,
    obtenerPromesaError
} = require('./funciones.js');

// a
test('10 + 10 debe ser 20', () => {

     expect(suma(10, 10)).toBe(20);
});

// b
test('Los objetos deben ser iguales', () => {
    expect(crearObjeto()).toEqual({ nombre: "Juan", edad: 30 });
});

// c
test('Debe ser null', () => {
    expect(obtenerNull()).toBeNull();
});

test('Debe ser undefined', () => {
    expect(obtenerUndefined()).toBeUndefined();
});

test('Debe estar definido', () => {
    expect(obtenerDefinido()).toBeDefined();
});

// d
test('Debe ser mayor que 5', () => {
    expect(obtenerNumero()).toBeGreaterThan(5);
});

test('Debe ser menor que 20', () => {
    expect(obtenerNumero()).toBeLessThan(20);
});

test('Debe ser mayor o igual a 10', () => {
    expect(obtenerNumero()).toBeGreaterThanOrEqual(10);
});

// e
test('La cadena debe contener "Hola"', () => {
    expect(obtenerCadena()).toMatch(/Hola/);
});

// f
test('El array debe contener "banana"', () => {
    expect(obtenerArray()).toContain("banana");
});

// g
test('El valor no debe ser 10', () => {
    expect(obtenerValor()).not.toBe(10);
});

// h
test('La promesa debe resolverse con "Éxito"', () => {
    return expect(obtenerPromesaExito()).resolves.toBe("Éxito");
});

test('La promesa debe rechazarse con "Error"', () => {
    return expect(obtenerPromesaError()).rejects.toBe("Error");
});