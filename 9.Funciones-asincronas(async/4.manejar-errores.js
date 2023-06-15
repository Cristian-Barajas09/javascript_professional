
(async function(){
    try{
        let promesa = await Promise.reject("error");
        let promesa2 = await Promise.reject("error2");
    
    } catch(err){
        console.log(err)
    }
})()


