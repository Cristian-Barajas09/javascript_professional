//sintaxis de una declaracion de funcion
function saludar(){
    console.log("hola cristian");
}


saludar();

//funcion con parametros
function cuadrado(numero){
    return numero * numero;
}
//el return finaliza el codigo de la funcion


let cuadrado_de_dos = cuadrado(2);
console.log(cuadrado_de_dos)

console.log(cuadrado(3))

//expresion de funcion (es aquella que no empieza con la palabra function)
//sino tiene nombre es funcion anonima
let func = function(){}


/*
cuando es una expresion de funcion el scope es de la funcion para bajo

cuando es una declarion el scope es a todo el codigo

*/