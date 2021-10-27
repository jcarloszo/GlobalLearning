//------------ EJERCICIO Nº1 -------------//
/*
Pensemos que tenemos que hacer un juego. Y lo primero que necesitamos es que se puedan crear héroes en el juego.
Haga una función o una clase que nos sirva para crear nuestro objeto “heroe”
Debe tener las siguientes propiedades y valores. (Ver tabla de diapositiva clase 7)

*/

class Hero {
    name
    position
    life
    damage
    experience
    constructor(name){
        this.name = name == undefined ? "heroe" : name;
        this.position = "00";
        this.life = 100;
        this. damage = 5;
        this.experience = 0;
    }
}

let hero = new Hero();
let hero2 = new Hero("Carlos");

console.log(hero);
console.log(hero2);