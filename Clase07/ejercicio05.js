//------------ EJERCICIO Nº5 -------------//

/*
Teniendo en cuenta la misma conferencia anterior, necesitamos saber si van a haber 
programadores de cierto lenguaje para poder preparar contenido específico. 
Por lo tanto, necesitamos una function que nos devuelva “true” o “false” cuando le preguntemos por cierto lenguaje.
*/
const list2 = [
    { firstName: 'Emma', country: 'Netherlands', continent: 'Europe', age: 29, language: 'Ruby' },
    { firstName: 'Piotr', country: 'Poland', continent: 'Europe', age: 128, language: 'Javascript' },
    { firstName: 'Jayden', country: 'Jamaica', continent: 'Americas', age: 42, language: 'JavaScript' }
];

function findProgrammerByLanguage(array, language){
    let programmer = array.find(p => p.language === language);
    return programmer != undefined ? true : false;
}

console.log("Programadores Ruby");
console.log(findProgrammerByLanguage(list2, "Ruby"));
console.log("Programadores Python");
console.log(findProgrammerByLanguage(list2, "Python"));

