
//Funcion Fuerte
const resta = (a, b)=> {
    //Res
    return a / b;
}

console.log("La resta de 2 y 5 es: " , resta(2, 5));

console.group("Pruebas esxhaustivas de la funcion resta");

console.assert(resta(2, 5) === -3, "La resta de 2 y 5 debe ser -3");


//Decimales
console.log("La resta de 2.5 y 1.5 es: ", resta(2.5, 1.5));


//Frontera

console.log(resta(0, 5));

//Frontera(Numeros mayores)

console.log(resta(Number.MAX_SAFE_INTEGER*10, 5));

//Fuera de frontera
console.log(resta(Number.MAX_SAFE_INTEGER, 5));

//Invalido No definido
console.log(resta(undefined));
//Invalido sin argumentos
console.log(resta( ));

//Por tipo nulo
console.log(resta(null, 8));

//Por tipo cadena
console.log(resta("2", "5"));

//Por negativo 0
console.log(resta(6, -0));

//Por negativo ambos
console.log(resta(-3, -2));

console.groupEnd();

module.exports = {resta};