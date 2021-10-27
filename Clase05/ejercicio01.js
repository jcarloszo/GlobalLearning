//---------- Ejercicio 01

//Haga una función que siempre elimine al primer elemento del arreglo

function eliminarPrimerElemento(array){
    return array.slice(1);
}

console.log(eliminarPrimerElemento([1,2,3,4,5,6]));