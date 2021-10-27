// ----------Ejercicio 04
/*
Haga una función que reciba un número y retorne un arreglo que tenga el 
tamaño del número recibido. El contenido del arreglo deben ser números 
desde el 0 hasta el número recibido -1 (0 a n-1)
*/

function crearArreglo(numero){
    let array = [];
    for(let i = 0; i < numero; i++){
        array.push(i);
    }
    return array;
}

console.log(crearArreglo(6));