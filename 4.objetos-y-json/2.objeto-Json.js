//Javascript Object Notatation -> Json
//alamacena cual quier tipo de primer clase
let curso = {
    titulo:"curso profesional de Js",
    formato: "video",
    bloques: ["introduccion","funciones"],
    inscribir:function(){//metodos
        console.log("inscrito")
    }
}
//sintaxis validas para acceder a la propiedad o metodod de un elemento
console.log(curso.titulo);
console.log(curso["formato"]);

curso.titulo = "python";

console.log(curso["titulo"]);


