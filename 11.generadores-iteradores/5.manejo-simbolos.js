let simbolo = Symbol("mi simbolo");
let simbolo2 = Symbol("mi simbolo");

let obj = {}

obj[simbolo] = function(){
    console.log("mi nombre es un simbolo")
}

obj[simbolo]();