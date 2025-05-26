// a) Función que suma dos números
// Esta función será usada en una prueba para verificar igualdad exacta usando toBe
function suma(a, b) {
    return a + b;
}

// b) Función que retorna un objeto con propiedades específicas
// Se usará para comprobar igualdad de objetos con toEqual
function crearObjeto() {
    return { nombre: "Juan", edad: 30 };
}

// c) Funciones que devuelven valores nulos, indefinidos o definidos
// Se utilizarán con matchers: toBeNull, toBeUndefined y toBeDefined
function obtenerNull() {
    return null;
}

function obtenerUndefined() {
    return undefined;
}

function obtenerDefinido() {
    return "Estoy definido";
}

// d) Función que devuelve un número
// Será usada para verificar comparaciones numéricas (mayor que, menor que, igual, etc.)
function obtenerNumero() {
    return 10;
}

// e) Función que retorna una cadena de texto
// Se usará para comprobar coincidencias de texto con expresiones regulares usando toMatch
function obtenerCadena() {
    return "Hola mundo";
}

// f) Función que retorna un array
// Sirve para comprobar si un arreglo contiene un valor específico usando toContain
function obtenerArray() {
    return ["manzana", "banana", "pera"];
}

// g) Función que devuelve un número
// Se usará para comprobar la negación de un valor esperado utilizando .not.toBe
function obtenerValor() {
    return 5;
}

// h) Función que retorna una promesa resuelta
// Usada para pruebas asíncronas con el matcher resolves
function obtenerPromesaExito() {
    return Promise.resolve("Éxito");
}

// h) Función que retorna una promesa rechazada
// Usada para pruebas asíncronas con el matcher rejects
function obtenerPromesaError() {
    return Promise.reject("Error");
}

// Exportación de todas las funciones para poder usarlas en los archivos de prueba
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
