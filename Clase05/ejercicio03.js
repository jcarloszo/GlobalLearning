// Ejercicio 03
/*
Teniendo un arreglo numérico, tenemos que sumarle un 
número (por parámetro) a cada elemento de nuestro arreglo
*/

function incrementarArreglo(array, numero){
    return array.map(item => item + numero);
}

console.log(incrementarArreglo([1, 11, 7, 22], 5));

