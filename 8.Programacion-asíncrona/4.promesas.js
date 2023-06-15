//son una alternativa a la sintaxis de callback


let request = require('request-promise');

let promesa = request("https://www.google.com")

promesa.then(()=> console.log("termine la peticion"));

promesa.catch(err => console.log(err))

console.log("yo sucedo despues");


/*
fullfield: 0 completada, termino con exito
reject: 0 rechazada, no termino con exito
pending: 0 pendiente que es el estado de la promesa cuando la operacion no a terminado
settled: 0 finaliza que termino ya sea con exito o con algun error
*/



/*Ejemplo Callback Hell
    getData((x)=>{
        getMoreData(x,(y)=>{
            getMoreData(y,(z)=>{
                ...
            })
        })
    })
*/