/* nos permite aplicar una operacion
para reducir un arreglo
*/
let numeros = [1,2,3,4,5];

let suma = numeros.reduce(function(acc,elemento){
    return acc + elemento;
},0);

console.log(suma);

let nombres = ["cristian","jesus"]

let html = nombres.reduce((acc,nombre)=>{
    return acc + "<li>" + nombre +  "</li>"
},"");

console.log(html);