/* map */
//utilizara aquello que retorne la funcion para crear un nuevo arreglo
// let numeros = [2, 3, 4, 5, 6, 43];

// let cuadrado = [];

// for(let i=0;i<numeros.length;i++){
//     cuadrado[i] = numeros[i] * numeros[i];
// }
// console.log(cuadrado)


// let cuadrados = numeros.map(function (numero) {
//     return numero * numero
// });

// console.log(cuadrados)

/*
    2 => [4]
    3 => [4,9]
*/

let numeros = ["10", "5", "4", "3"];

console.log(numeros);


numeros = numeros.map(function (numString,index,arreglo) {
    console.log(numString,index,arreglo,this)
    return parseInt(numString);
},[])

console.log(numeros);