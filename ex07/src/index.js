var person = require('./nameFunctions');

function dotNotation(person) {
    firstNameValue = person.firstName; 
    lastNameValue = person.lastName; 
}

console.log(dotNotation("john", "DOE")); // Change this line
module.exports = dotNotation(person);