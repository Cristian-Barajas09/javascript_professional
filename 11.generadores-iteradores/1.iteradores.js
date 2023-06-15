//es cualquier objeto que implementa el iteretator protocol

let iterador= {
    currentValue: 1,
    next(){
        let resultado = {value:null,done:false}

        if(this.currentValue > 0 && this.currentValue <= 5){
            resultado = {value:this.currentValue,done:false}
            this.currentValue += 1;
        } else {
            resultado = {done:true};
        }
        return resultado;
        // return{
        //     value: null,
        //     done: true// si es falso seguira con la iteracion
        // }
    }
};

let item = iterador.next();

while(!item.done){
    console.log(item.value);
    item = iterador.next();
}

