function primera() {
    return new Promise((resolve, reject) => setTimeout(resolve, 100, "hola mundo"))
}

function segunda(r2) {
    console.log(r2);
    return new Promise((resolve, reject) => setTimeout(resolve, 600, "segundo hola mundo"))

}
//forma de ejecutar una promesa en cadena
primera().then(segunda).then((r)=> console.log(r));
//solo se puede hacer cuando retorne un objeto promise
function finalizo() {
    console.log("todo finalizo");
}

