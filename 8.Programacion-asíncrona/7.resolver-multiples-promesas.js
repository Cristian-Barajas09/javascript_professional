let p1 = new Promise((resolve, reject) => setTimeout(reject, 100, "hola mundo"))
let p2 = new Promise((resolve, reject) => setTimeout(resolve, 600, "segundo hola mundo"))

function finalizo() {
    console.log("todo finalizo");
}

Promise.all([p1,p2]).then((resultados)=>{
    //resibe cualquier objeto iterable
    console.log(resultados);
    finalizo();
}).cath(err => console.log(err));