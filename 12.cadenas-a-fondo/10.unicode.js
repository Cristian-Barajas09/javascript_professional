//1.211.900

//u+0000 u+10ffff

//https://stackoverflow.com/a/48010068
//conversor de unido 🤩
function toCodePoint(char){
    var hex = char.codePointAt(0).toString(16);//convierte a hexadecimal
    return "\\u" + "0000".substring(0, 4 - hex.length) + hex;//añade los 0's faltantes
}
console.log(toCodePoint('a'));
console.log("\u0061")
console.log(toCodePoint("🤩"))
console.log("\u1f929")