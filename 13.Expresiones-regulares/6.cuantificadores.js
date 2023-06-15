// console.log("http:www.//google.com".match(/https?:\/{2}a{3}/))
//* de 0 a muchos
//{2} numeros de ocurrencias
//{2,4} de dos hasta 4
//{1,} y tantas como aparescan
//? parametro opcional

//codicioso
console.log("<p>hola mundo</p>".match(/<.+?>/))

//? tambien cambia al modo flojo y elimina lo codicioso
