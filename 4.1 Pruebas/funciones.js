
// a
function suma(a, b) {
    return a + b;
}

// b
function crearObjeto() {
    return { nombre: "Juan", edad: 30 };
}

// c
function obtenerNull() {
    return null;
}
function obtenerUndefined() {
    return undefined;
}
function obtenerDefinido() {
    return "Estoy definido";
}

// d
function obtenerNumero() {
    return 10;
}

// e
function obtenerCadena() {
    return "Hola mundo";
}

// f
function obtenerArray() {
    return ["manzana", "banana", "pera"];
}

// g
function obtenerValor() {
    return 5;
}
// h
function obtenerPromesaExito() {
  return Promise.resolve("Éxito");
}

function obtenerPromesaError() {
    return Promise.reject("Error");
}

module.exports = {
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
};
