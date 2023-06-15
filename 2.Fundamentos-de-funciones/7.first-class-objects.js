/*
ciudadano de primera clase o first class object

en programacion decimos que cuando un tipo de dato puede ser asignado a una variable,  retornado o enviado como argumento, se trata de un first class cities

debe ser posible retornarlo
deee ser posible aginarlo a una variable
debe ser posible enviarlo como argumento




return 2;

let number = 2;

hola(2);

numeros cadenas booleanos arreglos las funciones y los objetos son considerados como objetos de primera clase
*/

function executor(funcion){
    funcion();
}

function decirHola(){
    console.log("hola");
}

// executor(decirHola);

// cuando enviamos una funcion no usamos los parentesis

// function sumaTodos() {
//     let suma = 0;
//     for(let i = 0;i < arguments.length; i++) {suma += arguments[i]}
//     console.log(suma);
// }

// function sumarTodosAlt() {
//     return Array.from(arguments).reduce((acc,arguments)=> arguments + acc,0)
// }

// console.log(sumarTodosAlt(1,2,3,4,));
//esto ya no se conoce como funcion anonima
let func = function () {  }

function build() {
    //esto si es una funcion anonima
    return function (){
        console.log("hola")
    }
}

let f = build();

f();