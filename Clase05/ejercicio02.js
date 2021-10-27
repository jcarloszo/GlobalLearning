//---------- Ejercicio 02

//Haga una función que solo reciba arreglos con más de 5 elementos y luego elimine los últimos 3

function eliminarUltimosTres(array){
    if(array.length <= 5) { 
        return "Solo se permiten arrays de longitud mayor a 5";
    } else {
        return array.slice(0, array.length-3);
    }
}

console.log(eliminarUltimosTres(["a","b","c"]));
console.log(eliminarUltimosTres(["a","b","c","d","e","f","g"]));