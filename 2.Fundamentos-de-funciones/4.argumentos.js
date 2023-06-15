//               parametros
function cuadrado(numero=20){
    return numero * numero
}
//      argumento
let resultado = cuadrado();

// console.log(resultado);

/*
cuando un parametro no es llenado recibe el valor de undefined

pero para solucionar esto se le puede poner un valor por defecto
*/

function saludar(apellido,nombre="") {
    console.log(nombre,apellido);
}

/*
los valores por defecto deben ir de ultimo para evitar errores

*/
//la variable arguments son todos los argumentos que le estamos pasando a la funcion
function sumaTodos() {
    let suma = 0;
    for(let i = 0;i< arguments.length; i++) {suma += arguments[i]}
    console.log(suma);
}
sumaTodos(1,2,3,4);

