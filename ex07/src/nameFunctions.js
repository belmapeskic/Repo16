// Only change code below this line
firstName=(firstName) => {
    return firstName.toUpperCase();
}
lastName=(lastName) => {
    return lastName.toLowerCase();
}
// Only change code above this line
console.log(firstName("john"));
console.log(lastName("DOE"));

exports.firstName = firstName;
exports.lastName = lastName;