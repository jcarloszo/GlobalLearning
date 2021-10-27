// ----------- Ejercicio 07
/*
 Dado un arreglo de números enteros, encuentre el mayor producto posible dado a partir de números adyacentes
*/

function adjacentElementsProduct(array){
    let arrayProductos = [];
    for(let i = 0; i < array.length-1; i++){
        arrayProductos.push(array[i]*array[i+1]);
    }
    return Math.max(...arrayProductos);
}

console.log(adjacentElementsProduct([9,5,10,2,24,-1]));