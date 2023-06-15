/*
los iterables nos permite definir
el conportamiento de un objeto
*/

function* counter() {
    for (var i = 1; i <= 5; i++) {
        yield i;
    }
}

let generator = counter();

// let numeros = [2,5,10];

//@@iterator

// let contador = {
//     [Symbol.iterator]() {
//         return {
//             currentValue: 1,
//             next() {
//                 let resultado = { value: null, done: false }

//                 if (this.currentValue > 0 && this.currentValue <= 5) {
//                     resultado = { value: this.currentValue, done: false }
//                     this.currentValue += 1;
//                 } else {
//                     resultado = { done: true };
//                 }
//                 return resultado;
//             }
//         }
//     }
// }

// for (numero of contador) { console.log(numero) };

let rango = {
    min: null,
    max:null,
    currentValue: null,
    [Symbol.iterator](){
        return this;
    },
    next(){
        if(this.currentValue == null) this.currentValue = this.min;
        let result = {};
        if (this.currentValue >= this.min && this.currentValue <= this.max) {
            result = {value:this.currentValue,done:false};
            this.currentValue += 1
        }else{
            result = {done:true};
        }
        return result;
    }
}

rango.min = 0;
rango.max = 10;


for(el of rango){console.log(el)}