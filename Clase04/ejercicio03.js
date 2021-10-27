//EJERCICIO 3

/*
Crear una función que reciba dos parámetros. Un número y un string (texto). 
Luego debe repetir ese string tantas veces como lo diga el número recibido.
*/
function multiplicarString(num, texto){
    for(let i = 0; i < num; i++){
        console.log(texto);
    }
}

multiplicarString(5, "Hola, Mundo");