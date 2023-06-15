//si la condicion es verdadera el elemento se guarda y si es falsa se descarta

let numeros = [, 8, 5, 3, 4, 10, 3];

// let nuevoArreglo = numeros.filter(function (numero) {
//     return numero % 2 == 0;
// });

let lenguajes = ["php", "javascript", "python"]


let nuevoArreglo = lenguajes.filter(function (lenguaje) {
    return lenguaje !== "php";
});

console.log(nuevoArreglo);

let nuevoArreglo2 = numeros.filter(function (numero) {
    return numero % 2; //devuelve los inpares
});