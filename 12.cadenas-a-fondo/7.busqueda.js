let cadena = "hola cristian";

if(cadena.indexOf("cristian") > 0){ //da la posicion
    console.log("encontrado")
}

if(cadena.includes("hola")){ //da true o false, true si lo encontro
    console.log("encontrado")
}
console.log(cadena.lastIndexOf('a')); //es mas lenta y devueleve el ultimo

let link =  "https://www.google.com/"

if(link.startsWith("https")) console.log("si existe")

if(link.endsWith(".com/")) console.log("si existe")