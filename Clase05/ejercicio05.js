// ----------- Ejercicio 05
/*
Hay un arreglo con varios números donde todos son iguales excepto uno. 
Haga una función que lo identifique
*/
function findUniq(array){
    let primerElemento = array.shift();
    let elementosDiferente = array.filter(item => item != primerElemento);
    return elementosDiferente.length == 1 ? elementosDiferente[0] : primerElemento;
}

console.log(findUniq([1,1,1,2,1,1]))
console.log(findUniq([3,1,1,1,1]))