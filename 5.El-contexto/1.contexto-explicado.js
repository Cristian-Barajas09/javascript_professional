/*
cuando decimos contexto nos referimos al valor que tiene la palabra reservada this

cuando estamos en el contexto global this vale windows
*/

// console.log(this);

// function demo() {
//     console.log(this);
// }

// demo();
//el valor de this comienza a cambiar cuando esta en un objeto
// let objeto = {
//     demo(){
//         console.log(this)
//     }
// }

// objeto.demo() // el objeto que ejecuta la funcion

function demo() {
    console.log(this);
}

// let objeto = {
//     func:demo
// }

// objeto.func();

//this se asigna al valor de quien llama la funcion

let objeto = {
    func() {
        console.log(this);
    }
}

let objeto2 = {
    func: null,
    ejecutar(f) {
        this.func = f;
        this.func();
    }
}

objeto2.ejecutar(objeto.func);





