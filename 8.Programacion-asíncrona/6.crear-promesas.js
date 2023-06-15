let request = require('request');

const leerPagina=(url)=>{
    return new Promise((res,rej)=>{
        request(url,(error,response)=>{
            if(error) return rej(error);

            res(response);
        })
    })
}

let promesa = leerPagina("https://www.google.com");

promesa.then(data => console.log("finalice"));
promesa.catch(err => console.log(err));
