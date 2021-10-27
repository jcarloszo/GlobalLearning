//EJERCICIO 1
/*
Crear una función que reciba un número como parámetro y devuelva 
“par” o “impar” dependiendo del número que tome ese parámetro
*/

function parImpar(num){
    let resultado = num % 2 ? "Es par" : "Es impar";
    return resultado;
}

console.log(parImpar(5));
console.log(parImpar(10));

