//////////// EJERCICIO Nº3 /////////////////
/*
Teniendo en cuenta la misma conferencia anterior, necesitamos crear nombre de 
usuario a cada persona registrada dependiendo del nombre y el año en el que nacieron. 
Este nombre de usuario tiene que agregarse como una nueva propiedad llamada “userName
*/

const list2 = [
    { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby' },
    { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure' }
];

const createUserName = array => {
    return array.map(person => {
        person.userName = `${person.firstName}${person.lastName.charAt(0)}${getYear(person.age)}`.toLowerCase();
        return person;
    });
}

const getYear = age => new Date().getFullYear() - age;

console.log("3- Create usernames");
console.log(createUserName(list2));
console.log("------------------");