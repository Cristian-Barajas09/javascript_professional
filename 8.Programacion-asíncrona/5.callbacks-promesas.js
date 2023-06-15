
let request = require('request-promise');

let promesa = request("https://www.google.com")

promesa.then(()=> console.log("termine la peticion"))
    .catch(err => console.log(err))
    .finally(()=> console.log("finalice"));
console.log("yo sucedo despues");

//then tambien puede albergar el error