let rango = {
    min: null,
    max:null,
    currentValue: null,
    [Symbol.iterator](){
        return this.generator();
    },
    generator: function*(){
        for(var i = this.min;i<=this.max;i++){
            yield i;
        }
    }
}

rango.min = 0;
rango.max = 10;


for(el of rango){console.log(el)}