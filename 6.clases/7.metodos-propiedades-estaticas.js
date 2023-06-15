/* los metodos estaticos son auqellos a los que podemos
acceder sin instanciar una clase
*/

class Api{
    static ENDPOINT = "localhost:3000";
    static get() { return new this();}

    name = "Hola";
}


class User{
    permission = 0;
    static admin(){
        let user = new this();
        user.permission = 5;
        return user;
    }
}

console.log(User.admin());
