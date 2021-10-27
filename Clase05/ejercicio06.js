// ----------- Ejercicio 06
/*
Dado un arreglo de números enteros, encuentre la menor suma posible entre ellos
*/

function minSum(array){
    let arraySuma = [];
    while(array.length > 1){
        let primerElemento = array.shift();
        array.forEach(function(item){
            arraySuma.push(primerElemento + item);
        });
    }
    return Math.min(...arraySuma);
}

console.log(minSum([7,4,2,3]));