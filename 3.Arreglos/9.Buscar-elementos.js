let arreglo = ["javascript","python","C#"]


//indexOf -> === devuelve el indice donde fue  encontrado

// console.log(arreglo.indexOf("C#"));

//si no lo encuentra retorna menos uno

//includes retorna true si lo encuentra

// console.log(arreglo.includes("javascript",1))

//find -> funcion prueba -> elemento encontrado


let respuesta = arreglo.some((elemento,posicion,arreglo)=>{
    console.log(posicion,arreglo)
    return elemento === "python";
})

console.log(respuesta);

//findIndex -> funcion -> posicion

//some -> funcion -> true | false

/*
indexOf -> === -> posicion
includes -> === -> true|false
*/