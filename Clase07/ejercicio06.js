//------------ EJERCICIO Nº6 -------------//

/*
 Teniendo en cuenta la misma conferencia anterior, necesitamos saber el nombre y país de el primer desarrollador de cierto lenguaje que se haya inscripto.
*/

const list3 = [
    { firstName: 'Mark', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
    { firstName: 'Victoria', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
    { firstName: 'Emma', country: 'Norway', continent: 'Europe', age: 19, language: 'Python' }
];

function findFirstDeveloper(array, language){
    let developer = array.find(d => d.language === language);
    return developer != undefined ? 
    developer.firstName + " from " + developer.country + " was the first " + developer.language + " developer in the conference"
    : 
    "There are no " + language + " developers in the conference";
}


console.log("Python");
console.log(findFirstDeveloper(list3, "Python"));
console.log("C#");
console.log(findFirstDeveloper(list3, "C#"));