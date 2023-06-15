let lenguajes = ["javascript","python","C#"];

// for(let i = 0;i<lenguajes.length; i++){
//     console.log(lenguajes[i]);
// }

lenguajes.forEach(function (elemento,index,arreglo) {
    // console.log(elemento,index,arreglo);
    console.log(this);
},"cristian");