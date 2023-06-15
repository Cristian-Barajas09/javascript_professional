/*
es una funcion que se le pasa como argumento a una operacion asincrona
*/

let request = require('request');

request("https://www.google.com", ()=>{
    console.log("termine la peticion")
});

console.log("yo sucedo despues");//esto se ejecuta primero