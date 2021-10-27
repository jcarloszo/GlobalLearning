//////////// EJERCICIO Nº2 /////////////////

/*
Teniendo en cuenta la misma conferencia anterior, necesitamos saber quienes son los desarrolladores con mayor edad.
*/

const list1 = [
    { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
    { firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 38, language: 'Python' },
    { firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 19, language: 'Python' },
    { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
];

// Ejercicio 2 - Alternativa 1
// En esta solucion el arreglo se recorre 2 veces: con reduce y filter
/*
const findTheOldest = array => {
    let {age} = array.reduce((prev, current) => (prev.age < current.age) ? current : prev);
    return array.filter(person => person.age == age);
}
*/

// Ejercicio 2 - Alternativa 2
// En esta solucion el arreglo solo se recorre una vez

const findTheOldest = array => {
    let theOldest = [array.shift()];
    array.forEach(element => {
        if(element.age == theOldest[0].age) theOldest.push(element);
        else if(element.age > theOldest[0].age) theOldest = [element];
    });
    return theOldest;
}
console.log("2- Who are the oldest?");
console.log(findTheOldest(list1));
console.log("------------------");

