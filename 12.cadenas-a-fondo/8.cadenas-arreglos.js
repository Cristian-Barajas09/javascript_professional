//convertir cadena a arreglo

let texto = "hola mi nombre es cristian"

let palabras = texto.split(" ");

console.log(palabras);

//reunir las palabras en un solo string

console.log(palabras.join("."));

function filtroDeMarcas(str){
    let marcas = ["nike"];
    let palabraResult =str.split(" ").map(
        palabra => {
            return marcas.includes(palabra) ? "XXX" : palabra;
        }
    )
    return palabraResult.join(" ");
}
console.log(filtroDeMarcas("nike"));