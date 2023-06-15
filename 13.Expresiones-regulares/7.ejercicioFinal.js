let texto = "visita https://https://artesmarcialesmixtastachira.com/"


console.log(texto.replace(/(https?:\/\/(\S+\.)?\S+(\.\S+)(\.\S+)?)/,"<a href='$1'>$1</a>"))