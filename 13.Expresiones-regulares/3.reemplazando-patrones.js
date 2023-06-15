let texto = "1000 numeros disponibles 4000"

// let nuevoTexto = texto.replace(/hola/g,"hola,");

// console.log(nuevoTexto);

// let nuevoTexto = texto.replaceAll(/(\d)(\d{3})/g,"$1,$2");
//{3} digitos

// let nuevoTexto = texto.replaceAll(/(?=(\d{3})+(?!\d))/g,",");

let nuevoTexto = texto.replaceAll(/(\d)(\d{3})/g,(match,g1,g2,offset,cadena)=>{
    console.log(match,g1,g2,offset,cadena)
    return g1 + "," + g2
});



console.log(nuevoTexto);

